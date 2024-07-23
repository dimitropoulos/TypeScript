import {
    clearMap,
    closeFileWatcherOf,
    CompilerOptions,
    createModuleResolutionCache,
    createTypeReferenceDirectiveResolutionCache,
    Debug,
    directorySeparator,
    endsWith,
    fileExtensionIs,
    FileWatcher,
    FileWatcherEventKind,
    firstDefinedIterator,
    forEach,
    forEachKey,
    GetCanonicalFileName,
    getDirectoryPath,
    getNormalizedAbsolutePath,
    getOptionsForLibraryResolution,
    getPathComponents,
    getPathFromPathComponents,
    identity,
    ignoredPaths,
    isDiskPathRoot,
    isEmittedFileOfProgram,
    isNodeModulesDirectory,
    isRootedDiskPath,
    memoize,
    noopFileWatcher,
    normalizePath,
    PackageJsonInfoCacheEntry,
    parseNodeModuleFromPath,
    Path,
    PathPathComponents,
    removeSuffix,
    ResolutionCache,
    ResolutionWithResolvedFileName,
    ResolvedModuleWithFailedLookupLocations,
    ResolvedProjectReference,
    ResolvedTypeReferenceDirectiveWithFailedLookupLocations,
    returnTrue,
    RootDirInfo,
    some,
    startsWith,
    tryAddToSet,
    TypeReferenceDirectiveResolutionCache,
    WatchDirectoryFlags,
} from "./_namespaces/ts.js";

/**
 * This is the cache of module/typedirectives resolution that can be retained across program
 *
 * @internal
 */
export type SharedResolutionCache = ReturnType<typeof createSharedResolutionCache>;

/** @internal */
export interface SharedWatchedResolutionInfo {
    isInvalidated?: boolean;
    caches: Set<ResolutionCache>;
    watchedFailed?: number;
    watchedAffected?: number;
    rootWatcher?: SharedDirectoryWatchesOfFailedLookup;
    rootDirInfo?: RootDirInfo;
    dirWatchers?: Map<Path, number>;
    nonRecursiveDirWatchers?: Map<Path, number>;
    packageDirWatchers?: Map<Path, Map<Path, number>>;
}

/** @internal */
export type ResolutionWithFailedLookupLocations =
    | ResolvedModuleWithFailedLookupLocations
    | (
        & ResolvedTypeReferenceDirectiveWithFailedLookupLocations
        // Just so we can use this directly. These any ways are optional properties
        & Pick<ResolvedModuleWithFailedLookupLocations, "alternateResult" | "globalCacheResolution">
    );

/** @internal */
export interface SharedResolutionCacheHost {
    getCurrentDirectory(): string;
    toPath(fileName: string): Path;
    getCanonicalFileName: GetCanonicalFileName;
    preferNonRecursiveWatch: boolean | undefined;
    onInvalidatedResolution(): void;
    fileIsOpen(filePath: Path): boolean;
}

/** @internal */
export interface SharedFileWatcherOfAffectingLocation {
    /** watcher for the lookup */
    watcher: FileWatcher;
    resolutions?: Map<ResolutionCache, number>;
    files?: Map<ResolutionCache, number>;
    symlinks: Set<string> | undefined;
}

/** @internal */
export interface SharedDirectoryWatchesOfFailedLookup {
    /** watcher for the lookup */
    watcher: FileWatcher;
    /** ref count keeping this watch alive */
    refCount: Map<ResolutionCache, number>;
}

/** @internal */
export interface SharedDirPathToWatcherOfPackageDirWatcher {
    watcher: SharedDirectoryWatchesOfFailedLookup;
    refCount: Map<ResolutionCache, number>;
}
/** @internal */
export interface SharedPackageDirWatcher {
    dirPathToWatcher: Map<Path, SharedDirPathToWatcherOfPackageDirWatcher>;
    isSymlink: boolean;
}

/** @internal */
export interface SharedTypeRootWatch {
    watcher: FileWatcher;
    refCount: Set<ResolutionCache>;
}

/** @internal */
export interface DirectoryOfFailedLookupWatch {
    dir: string;
    dirPath: Path;
    nonRecursive?: boolean;
    packageDir?: string;
    packageDirPath?: Path;
}

/** @internal */
export function removeIgnoredPath(path: Path): Path | undefined {
    // Consider whole staging folder as if node_modules changed.
    if (endsWith(path, "/node_modules/.staging")) {
        return removeSuffix(path, "/.staging") as Path;
    }

    return some(ignoredPaths, searchPath => path.includes(searchPath)) ?
        undefined :
        path;
}

/** @internal */
export function perceivedOsRootLengthForWatching(pathComponents: Readonly<PathPathComponents>, length: number) {
    // Ignore "/", "c:/"
    if (length <= 1) return 1;
    let indexAfterOsRoot = 1;
    let isDosStyle = pathComponents[0].search(/[a-zA-Z]:/) === 0;
    if (
        pathComponents[0] !== directorySeparator &&
        !isDosStyle && // Non dos style paths
        pathComponents[1].search(/[a-zA-Z]\$$/) === 0 // Dos style nextPart
    ) {
        // ignore "//vda1cs4850/c$/folderAtRoot"
        if (length === 2) return 2;
        indexAfterOsRoot = 2;
        isDosStyle = true;
    }

    if (
        isDosStyle &&
        !pathComponents[indexAfterOsRoot].match(/^users$/i)
    ) {
        // Paths like c:/notUsers
        return indexAfterOsRoot;
    }

    if (pathComponents[indexAfterOsRoot].match(/^workspaces$/i)) {
        // Paths like: /workspaces as codespaces hoist the repos in /workspaces so we have to exempt these from "2" level from root rule
        return indexAfterOsRoot + 1;
    }

    // Paths like: c:/users/username or /home/username
    return indexAfterOsRoot + 2;
}

/**
 * Filter out paths like
 * "/", "/user", "/user/username", "/user/username/folderAtRoot",
 * "c:/", "c:/users", "c:/users/username", "c:/users/username/folderAtRoot", "c:/folderAtRoot"
 * @param dirPath
 *
 * @internal
 */
export function canWatchDirectoryOrFile(pathComponents: Readonly<PathPathComponents>, length?: number) {
    if (length === undefined) length = pathComponents.length;
    // Ignore "/", "c:/"
    // ignore "/user", "c:/users" or "c:/folderAtRoot"
    if (length <= 2) return false;
    const perceivedOsRootLength = perceivedOsRootLengthForWatching(pathComponents, length);
    return length > perceivedOsRootLength + 1;
}

/** @internal */
export function isInDirectoryPath(dirComponents: Readonly<PathPathComponents>, fileOrDirComponents: Readonly<PathPathComponents>) {
    if (fileOrDirComponents.length < fileOrDirComponents.length) return false;
    for (let i = 0; i < dirComponents.length; i++) {
        if (fileOrDirComponents[i] !== dirComponents[i]) return false;
    }
    return true;
}

/** @internal */
export function canWatchAtTypes(atTypes: Path) {
    // Otherwise can watch directory only if we can watch the parent directory of node_modules/@types
    return canWatchAffectedPackageJsonOrNodeModulesOfAtTypes(getDirectoryPath(atTypes));
}

function canWatchAffectedPackageJsonOrNodeModulesOfAtTypes(fileOrDirPath: Path) {
    return canWatchDirectoryOrFile(getPathComponents(fileOrDirPath));
}

/** @internal */
export function canWatchAffectingLocation(filePath: Path) {
    return canWatchAffectedPackageJsonOrNodeModulesOfAtTypes(filePath);
}

/** @internal */
export function getDirectoryToWatchFailedLookupLocation(
    failedLookupLocation: string,
    failedLookupLocationPath: Path,
    rootDir: string,
    rootPath: Path,
    rootPathComponents: Readonly<PathPathComponents>,
    getCurrentDirectory: () => string | undefined,
    preferNonRecursiveWatch: boolean | undefined,
): DirectoryOfFailedLookupWatch | undefined {
    const failedLookupPathComponents: Readonly<PathPathComponents> = getPathComponents(failedLookupLocationPath);
    // Ensure failed look up is normalized path
    failedLookupLocation = isRootedDiskPath(failedLookupLocation) ? normalizePath(failedLookupLocation) : getNormalizedAbsolutePath(failedLookupLocation, getCurrentDirectory());
    const failedLookupComponents: readonly string[] = getPathComponents(failedLookupLocation);
    const perceivedOsRootLength = perceivedOsRootLengthForWatching(failedLookupPathComponents, failedLookupPathComponents.length);
    if (failedLookupPathComponents.length <= perceivedOsRootLength + 1) return undefined;
    // If directory path contains node module, get the most parent node_modules directory for watching
    const nodeModulesIndex = failedLookupPathComponents.indexOf("node_modules" as Path);
    if (nodeModulesIndex !== -1 && nodeModulesIndex + 1 <= perceivedOsRootLength + 1) return undefined; // node_modules not at position where it can be watched
    const lastNodeModulesIndex = failedLookupPathComponents.lastIndexOf("node_modules" as Path);
    if (isInDirectoryPath(rootPathComponents, failedLookupPathComponents)) {
        if (failedLookupPathComponents.length > rootPathComponents.length + 1) {
            // Instead of watching root, watch directory in root to avoid watching excluded directories not needed for module resolution
            return getDirectoryOfFailedLookupWatch(
                failedLookupComponents,
                failedLookupPathComponents,
                Math.max(rootPathComponents.length + 1, perceivedOsRootLength + 1),
                lastNodeModulesIndex,
            );
        }
        else {
            // Always watch root directory non recursively
            return {
                dir: rootDir,
                dirPath: rootPath,
                nonRecursive: true,
            };
        }
    }

    return getDirectoryToWatchFromFailedLookupLocationDirectory(
        failedLookupComponents,
        failedLookupPathComponents,
        failedLookupPathComponents.length - 1,
        perceivedOsRootLength,
        nodeModulesIndex,
        rootPathComponents,
        lastNodeModulesIndex,
        preferNonRecursiveWatch,
    );
}

/** @internal */
export function getDirectoryToWatchFromFailedLookupLocationDirectory(
    dirComponents: readonly string[],
    dirPathComponents: Readonly<PathPathComponents>,
    dirPathComponentsLength: number,
    perceivedOsRootLength: number,
    nodeModulesIndex: number,
    rootPathComponents: Readonly<PathPathComponents>,
    lastNodeModulesIndex: number,
    preferNonRecursiveWatch: boolean | undefined,
): DirectoryOfFailedLookupWatch | undefined {
    // If directory path contains node module, get the most parent node_modules directory for watching
    if (nodeModulesIndex !== -1) {
        // If the directory is node_modules use it to watch, always watch it recursively
        return getDirectoryOfFailedLookupWatch(
            dirComponents,
            dirPathComponents,
            nodeModulesIndex + 1,
            lastNodeModulesIndex,
        );
    }

    // Use some ancestor of the root directory
    let nonRecursive = true;
    let length = dirPathComponentsLength;
    if (!preferNonRecursiveWatch) {
        for (let i = 0; i < dirPathComponentsLength; i++) {
            if (dirPathComponents[i] !== rootPathComponents[i]) {
                nonRecursive = false;
                length = Math.max(i + 1, perceivedOsRootLength + 1);
                break;
            }
        }
    }
    return getDirectoryOfFailedLookupWatch(
        dirComponents,
        dirPathComponents,
        length,
        lastNodeModulesIndex,
        nonRecursive,
    );
}

function getDirectoryOfFailedLookupWatch(
    dirComponents: readonly string[],
    dirPathComponents: Readonly<PathPathComponents>,
    length: number,
    lastNodeModulesIndex: number,
    nonRecursive?: boolean,
): DirectoryOfFailedLookupWatch {
    let packageDirLength;
    if (lastNodeModulesIndex !== -1 && lastNodeModulesIndex + 1 >= length && lastNodeModulesIndex + 2 < dirPathComponents.length) {
        if (!startsWith(dirPathComponents[lastNodeModulesIndex + 1], "@")) {
            packageDirLength = lastNodeModulesIndex + 2;
        }
        else if (lastNodeModulesIndex + 3 < dirPathComponents.length) {
            packageDirLength = lastNodeModulesIndex + 3;
        }
    }
    return {
        dir: getPathFromPathComponents(dirComponents, length),
        dirPath: getPathFromPathComponents(dirPathComponents, length),
        nonRecursive,
        packageDir: packageDirLength !== undefined ? getPathFromPathComponents(dirComponents, packageDirLength) : undefined,
        packageDirPath: packageDirLength !== undefined ? getPathFromPathComponents(dirPathComponents, packageDirLength) : undefined,
    };
}

/** @internal */
export type GetResolutionWithResolvedFileName<T extends ResolutionWithFailedLookupLocations = ResolutionWithFailedLookupLocations, R extends ResolutionWithResolvedFileName = ResolutionWithResolvedFileName> = (resolution: T) => R | undefined;

function getModuleOrTypeRefResolved(resolution: ResolutionWithFailedLookupLocations) {
    return (resolution as ResolvedModuleWithFailedLookupLocations).resolvedModule ??
        (resolution as ResolvedTypeReferenceDirectiveWithFailedLookupLocations).resolvedTypeReferenceDirective;
}

/** @internal */
export function createSharedResolutionCache(
    sharedCacheHost: SharedResolutionCacheHost,
) {
    const resolutionsWithFailedLookups = new Set<ResolutionWithFailedLookupLocations>();
    const resolutionsWithOnlyAffectingLocations = new Set<ResolutionWithFailedLookupLocations>();
    const resolvedFileToResolution = new Map<Path, Set<ResolutionWithFailedLookupLocations>>();
    const watchedResolutionInfoMap = new Map<ResolutionWithFailedLookupLocations, SharedWatchedResolutionInfo>();
    const typeRootsWatches = new Map<string, SharedTypeRootWatch>();
    const resolutionCaches = new Set<ResolutionCache>();

    let affectingPathChecksForFile: Set<string> | undefined;
    let affectingPathChecks: Set<string> | undefined;
    let failedLookupChecks: Set<Path> | undefined;
    let startsWithPathChecks: Set<Path> | undefined;
    let isInDirectoryChecks: Set<Path> | undefined;

    let potentiallyUnreferencedDirWatchers: Set<Path> | undefined;
    // let considerNonWatchedResolutionAsInvalidated = false;

    const getCurrentDirectory = memoize(() => sharedCacheHost.getCurrentDirectory());

    const moduleResolutionCache = createModuleResolutionCache(
        getCurrentDirectory(),
        sharedCacheHost.getCanonicalFileName,
        /*options*/ undefined,
        /*packageJsonInfoCache*/ undefined,
        /*optionsToRedirectsKey*/ undefined,
        getValidResolution,
    );

    const typeReferenceDirectiveResolutionCache: TypeReferenceDirectiveResolutionCache = createTypeReferenceDirectiveResolutionCache(
        getCurrentDirectory(),
        sharedCacheHost.getCanonicalFileName,
        /*options*/ undefined,
        moduleResolutionCache.getPackageJsonInfoCache(),
        moduleResolutionCache.optionsToRedirectsKey,
        getValidResolution,
    );

    const libraryResolutionCache = createModuleResolutionCache(
        getCurrentDirectory(),
        sharedCacheHost.getCanonicalFileName,
        getOptionsForLibraryResolution(/*options*/ undefined),
        moduleResolutionCache.getPackageJsonInfoCache(),
        /*optionsToRedirectsKey*/ undefined,
        getValidResolution,
    );

    const directoryWatchesOfFailedLookups = new Map<Path, SharedDirectoryWatchesOfFailedLookup>();
    const nonRecursiveDirectoryWatchesOfFailedLookups = new Map<Path, SharedDirectoryWatchesOfFailedLookup>();
    const fileWatchesOfAffectingLocations = new Map<string, SharedFileWatcherOfAffectingLocation>();

    const isSymlinkCache = new Map<Path, boolean>();
    const packageDirWatchers = new Map<Path, SharedPackageDirWatcher>(); // Watching packageDir if symlink otherwise watching dirPath
    const dirPathToSymlinkPackageRefCount = new Map<Path, number>(); // Refcount for dirPath watches when watching symlinked packageDir

    return {
        moduleResolutionCache,
        typeReferenceDirectiveResolutionCache,
        libraryResolutionCache,
        resolvedFileToResolution,
        resolutionsWithFailedLookups,
        resolutionsWithOnlyAffectingLocations,
        watchedResolutionInfoMap,
        directoryWatchesOfFailedLookups,
        nonRecursiveDirectoryWatchesOfFailedLookups,
        fileWatchesOfAffectingLocations,
        packageDirWatchers,
        dirPathToSymlinkPackageRefCount,
        watchResolution,
        releaseResolution,
        createFileWatcherOfAffectingLocation,
        releaseFileWatcherOfAffectingLocation,
        closeFileWatcherOfAffectingLocation,
        createTypeRootsWatch,
        invalidateResolutionsOfFailedLookupLocations,
        invalidateResolutionOfFile,
        startCachingPerDirectoryResolution,
        finishCachingPerDirectoryResolution,
        compactCaches,
        clear,
        clearForCache,
    };

    function clearForCache(cache: ResolutionCache) {
        Debug.assert(resolutionCaches.has(cache));
        if (resolutionCaches.size === 1) return clear();
        // Iterate and cleanup for this cache::
        watchedResolutionInfoMap.forEach((watchedResolutionInfo, resolution) => {
            if (watchedResolutionInfo.caches.has(cache)) releaseResolution(resolution, cache);
        });
        fileWatchesOfAffectingLocations.forEach((watcher, location) => {
            if (watcher.files?.has(cache)) {
                releaseFileWatcherOfAffectingLocation(location, cache);
                closeFileWatcherOfAffectingLocation(location);
            }
        });
        resolutionCaches.delete(cache);
        // TODO:: sheetal compact actual caches
    }

    function clear() {
        potentiallyUnreferencedDirWatchers = undefined;
        clearMap(directoryWatchesOfFailedLookups, closeFileWatcherOf);
        clearMap(nonRecursiveDirectoryWatchesOfFailedLookups, closeFileWatcherOf);
        clearMap(fileWatchesOfAffectingLocations, closeFileWatcherOf);
        clearMap(typeRootsWatches, closeFileWatcherOf);
        resolutionCaches.clear();
        isSymlinkCache.clear();
        packageDirWatchers.clear();
        dirPathToSymlinkPackageRefCount.clear();
        resolvedFileToResolution.clear();
        resolutionsWithFailedLookups.clear();
        resolutionsWithOnlyAffectingLocations.clear();
        watchedResolutionInfoMap.clear();
        failedLookupChecks = undefined;
        startsWithPathChecks = undefined;
        isInDirectoryChecks = undefined;
        affectingPathChecks = undefined;
        affectingPathChecksForFile = undefined;
        moduleResolutionCache.clear();
        typeReferenceDirectiveResolutionCache.clear();
        libraryResolutionCache.clear();
    }

    function startCachingPerDirectoryResolution(options: CompilerOptions) {
        moduleResolutionCache.isReadonly = undefined;
        typeReferenceDirectiveResolutionCache.isReadonly = undefined;
        libraryResolutionCache.isReadonly = undefined;
        moduleResolutionCache.getPackageJsonInfoCache().isReadonly = undefined;
        isSymlinkCache.clear();
        moduleResolutionCache.update(options);
        typeReferenceDirectiveResolutionCache.update(options);
    }

    function finishCachingPerDirectoryResolution(skipCacheCompact?: boolean) {
        // These are only dir watchers that were potentially removed because
        // packageDir symlink status changed while watching resolutions
        potentiallyUnreferencedDirWatchers?.forEach(path =>
            closeDirectoryWatchesOfFailedLookup(
                directoryWatchesOfFailedLookups.get(path)!,
                path,
                /*nonRecursive*/ undefined,
            )
        );
        potentiallyUnreferencedDirWatchers = undefined;
        if (!skipCacheCompact) compactCaches();
        moduleResolutionCache.isReadonly = true;
        typeReferenceDirectiveResolutionCache.isReadonly = true;
        libraryResolutionCache.isReadonly = true;
        moduleResolutionCache.getPackageJsonInfoCache().isReadonly = true;
        isSymlinkCache.clear();
    }

    function compactCaches() {
        // const availableOptions = new Set<CompilerOptions>();
        // if (newProgram) {
        //     availableOptions.add(newProgram.getCompilerOptions());
        //     newProgram.forEachResolvedProjectReference(ref => {
        //         availableOptions.add(ref.commandLine.options);
        //     });
        // }
        // moduleResolutionCache.compact(availableOptions, /*skipOptionsToRedirectsKeyCleanup*/ true);
        // typeReferenceDirectiveResolutionCache.compact(availableOptions);
        // libraryResolutionCache.compact();
    }

    // function gcModuleOrTypeRefCache(
    //     setOfResolutions: Set<ResolutionWithFailedLookupLocations>,
    //     cache: ModuleOrTypeReferenceResolutionCache<ResolutionWithFailedLookupLocations>,
    // ) {
    //     let needsGc = false;
    //     setOfResolutions.forEach(resolution => needsGc = releaseResolution(resolution) || needsGc);
    //     if (needsGc) {
    //         considerNonWatchedResolutionAsInvalidated = true;
    //         // Iterate through maps to remove things that have 0 refCount
    //         cache.directoryToModuleNameMap.forEach((resolutions, dir, redirectsCacheKey, directoryToModuleNameMap) => {
    //             resolutions.forEach((resolution, name, mode, key) => {
    //                 if (watchedResolutionInfoMap.has(resolution)) return;
    //                 resolutions.delete(name, mode);
    //                 if (!isExternalModuleNameRelative(name)) {
    //                     const moduleNameToDirectoryMap = !redirectsCacheKey ?
    //                         cache.moduleNameToDirectoryMap.getOwnMap() :
    //                         cache.moduleNameToDirectoryMap.redirectsKeyToMap.get(redirectsCacheKey);
    //                     const directoryMap = moduleNameToDirectoryMap?.get(key);
    //                     directoryMap?.deleteByPath(dir);
    //                     if (!directoryMap?.directoryPathMap.size) moduleNameToDirectoryMap!.delete(key);
    //                 }
    //             });
    //             if (!resolutions.size()) directoryToModuleNameMap.delete(dir);
    //         });
    //         considerNonWatchedResolutionAsInvalidated = false;
    //     }
    // }

    function closeDirectoryWatchesOfFailedLookup(
        watcher: SharedDirectoryWatchesOfFailedLookup,
        path: Path,
        nonRecursive: boolean | undefined,
    ) {
        if (!watcher.refCount.size) {
            if (!nonRecursive) directoryWatchesOfFailedLookups.delete(path);
            else nonRecursiveDirectoryWatchesOfFailedLookups.delete(path);
            watcher.watcher.close();
        }
    }

    function closeFileWatcherOfAffectingLocation(path: string) {
        const watcher = fileWatchesOfAffectingLocations.get(path)!;
        if (!watcher.files?.size && !watcher.resolutions?.size && !watcher.symlinks?.size) {
            fileWatchesOfAffectingLocations.delete(path);
            watcher.watcher.close();
        }
    }

    function getValidResolution<T extends ResolutionWithFailedLookupLocations>(resolution: T | undefined) {
        return isInvalidatedResolution(resolution) ? undefined : resolution;
    }

    function isInvalidatedResolution(resolution: ResolutionWithFailedLookupLocations | undefined) {
        return !resolution ||
            // (considerNonWatchedResolutionAsInvalidated && !watchedResolutionInfoMap.has(resolution)) ||
            watchedResolutionInfoMap.get(resolution)?.isInvalidated;
    }

    function isNodeModulesAtTypesDirectory(dirPath: Path) {
        return endsWith(dirPath, "/node_modules/@types");
    }

    function watchResolution<T extends ResolutionWithFailedLookupLocations, R extends ResolutionWithResolvedFileName>(
        resolution: T,
        cache: ResolutionCache,
        getResolutionWithResolvedFileName: GetResolutionWithResolvedFileName<T, R>,
        redirectedReference: ResolvedProjectReference | undefined,
    ) {
        resolutionCaches.add(cache);
        let watchedResolutionInfo = watchedResolutionInfoMap.get(resolution);
        if (!watchedResolutionInfo) {
            watchedResolutionInfoMap.set(resolution, watchedResolutionInfo = { caches: new Set() });
            const resolved = getResolutionWithResolvedFileName(resolution);
            if (resolved && resolved.resolvedFileName) {
                const key = cache.resolutionHost.toPath(resolved.resolvedFileName);
                let resolutions = resolvedFileToResolution.get(key);
                if (!resolutions) resolvedFileToResolution.set(key, resolutions = new Set());
                resolutions.add(resolution);
            }
        }
        watchFailedLookupLocationOfResolution(resolution, redirectedReference, watchedResolutionInfo, cache);
        watchAffectingLocationsOfResolution(resolution, watchedResolutionInfo, cache);
        watchedResolutionInfo.caches.add(cache);
    }

    function watchFailedLookupLocation(
        failedLookupLocation: string,
        resolution: ResolutionWithFailedLookupLocations,
        redirectedReference: ResolvedProjectReference | undefined,
        watchedResolutionInfo: SharedWatchedResolutionInfo,
        cache: ResolutionCache,
    ) {
        watchedResolutionInfo.rootDirInfo ??= cache.getRootDirInfoForResolution(redirectedReference, resolution);
        const failedLookupLocationPath = sharedCacheHost.toPath(failedLookupLocation);
        const toWatch = getDirectoryToWatchFailedLookupLocation(
            failedLookupLocation,
            failedLookupLocationPath,
            watchedResolutionInfo.rootDirInfo.rootDir,
            watchedResolutionInfo.rootDirInfo.rootPath,
            watchedResolutionInfo.rootDirInfo.rootPathComponents,
            getCurrentDirectory,
            sharedCacheHost.preferNonRecursiveWatch,
        );
        if (!toWatch) return;
        const { dir, dirPath, nonRecursive, packageDir, packageDirPath } = toWatch;
        if (dirPath === watchedResolutionInfo.rootDirInfo.rootPath) {
            Debug.assert(nonRecursive);
            Debug.assert(!packageDir);
            if (!watchedResolutionInfo.rootWatcher) {
                watchedResolutionInfo.rootWatcher = createOrAddRefToDirectoryWatchOfFailedLookups(
                    dir,
                    dirPath,
                    nonRecursive,
                    cache,
                    watchedResolutionInfo.caches,
                );
            }
            return;
        }

        if (!packageDirPath || !cache.resolutionHost.realpath) {
            createOrAddRefToDirectoryWatchOfFailedLookups(
                dir,
                dirPath,
                nonRecursive,
                cache,
                watchedResolutionInfo.caches,
            );
            addRefCountToMap(
                !nonRecursive ?
                    watchedResolutionInfo.dirWatchers ??= new Map() :
                    watchedResolutionInfo.nonRecursiveDirWatchers ??= new Map(),
                dirPath,
            );
        }
        else {
            createDirectoryWatcherForPackageDir(
                dir,
                dirPath,
                packageDir!,
                packageDirPath,
                nonRecursive,
                watchedResolutionInfo,
                cache,
            );
            watchedResolutionInfo.packageDirWatchers ??= new Map();
            let dirPathMap = watchedResolutionInfo.packageDirWatchers.get(packageDirPath);
            if (!dirPathMap) watchedResolutionInfo.packageDirWatchers.set(packageDirPath, dirPathMap = new Map());
            addRefCountToMap(dirPathMap, dirPath);
        }
    }

    function watchFailedLookupLocationOfResolution(
        resolution: ResolutionWithFailedLookupLocations,
        redirectedReference: ResolvedProjectReference | undefined,
        watchedResolutionInfo: SharedWatchedResolutionInfo,
        cache: ResolutionCache,
    ) {
        // If this is not existing cache, make sure we are adding ref for existing watchers
        if (!watchedResolutionInfo.caches.has(cache)) {
            watchedResolutionInfo.dirWatchers?.forEach(
                (refCount, path) => addRefCountToMap(directoryWatchesOfFailedLookups.get(path)!.refCount, cache, refCount),
            );
            watchedResolutionInfo.nonRecursiveDirWatchers?.forEach(
                (refCount, path) => addRefCountToMap(nonRecursiveDirectoryWatchesOfFailedLookups.get(path)!.refCount, cache, refCount),
            );
            watchedResolutionInfo.packageDirWatchers?.forEach(
                (dirPathMap, packageDirPath) =>
                    dirPathMap.forEach(
                        (refCount, dirPath) =>
                            addSharedDirPathToWatcherOfPackageDirWatcherRefCount(
                                packageDirWatchers.get(packageDirPath)!.dirPathToWatcher.get(dirPath)!,
                                cache,
                                refCount,
                            ),
                    ),
            );
            if (watchedResolutionInfo.rootWatcher) addRefCountToMap(watchedResolutionInfo.rootWatcher.refCount, cache);
        }

        // There have to be failed lookup locations if there is alternateResult so storing failedLookupLocation length is good enough,
        // alternateResult doesnt change later only failed lookup locations get added on
        if (watchedResolutionInfo.watchedFailed === resolution.failedLookupLocations?.length) return;

        if (!watchedResolutionInfo.watchedFailed) {
            resolutionsWithFailedLookups.add(resolution);
            if (watchedResolutionInfo.watchedAffected) resolutionsWithOnlyAffectingLocations.delete(resolution);
        }
        forEach(
            resolution.failedLookupLocations,
            failedLookupLocation =>
                watchFailedLookupLocation(
                    failedLookupLocation,
                    resolution,
                    redirectedReference,
                    watchedResolutionInfo,
                    cache,
                ),
            watchedResolutionInfo.watchedFailed,
        );
        if (!watchedResolutionInfo.watchedFailed && resolution.alternateResult) {
            watchFailedLookupLocation(
                resolution.alternateResult,
                resolution,
                redirectedReference,
                watchedResolutionInfo,
                cache,
            );
        }
        watchedResolutionInfo.watchedFailed = resolution.failedLookupLocations?.length;
    }

    function watchAffectingLocationsOfResolution(
        resolution: ResolutionWithFailedLookupLocations,
        watchedResolutionInfo: SharedWatchedResolutionInfo,
        cache: ResolutionCache,
    ) {
        if (resolution.affectingLocations?.length === watchedResolutionInfo.watchedAffected) {
            if (resolution.affectingLocations && watchedResolutionInfo.watchedAffected) {
                for (let i = 0; i < watchedResolutionInfo.watchedAffected; i++) {
                    addRefCountToMap(
                        fileWatchesOfAffectingLocations.get(resolution.affectingLocations[i])!.resolutions!,
                        cache,
                    );
                }
            }
            return;
        }

        if (!watchedResolutionInfo.watchedAffected && !watchedResolutionInfo.watchedFailed) resolutionsWithOnlyAffectingLocations.add(resolution);
        // Watch package json
        forEach(
            resolution.affectingLocations,
            affectingLocation =>
                createFileWatcherOfAffectingLocation(
                    affectingLocation,
                    /*forResolution*/ true,
                    cache,
                    watchedResolutionInfo.caches,
                ),
            watchedResolutionInfo.watchedAffected,
        );
        watchedResolutionInfo.watchedAffected = resolution.affectingLocations?.length;
    }

    function createFileWatcherOfAffectingLocation(
        affectingLocation: string,
        forResolution: boolean,
        cache: ResolutionCache,
        existingCaches?: SharedWatchedResolutionInfo["caches"],
    ) {
        resolutionCaches.add(cache);
        let fileWatcher = fileWatchesOfAffectingLocations.get(affectingLocation);
        if (fileWatcher) {
            if (forResolution) addRefCountToMap(fileWatcher.resolutions ??= new Map(), cache);
            else addRefCountToMap(fileWatcher.files = new Map(), cache);
            addDirWatcherRefCountIfNotCache(forResolution ? fileWatcher.resolutions! : fileWatcher.files!, existingCaches, cache);
        }
        else {
            let locationToWatch = affectingLocation;
            let isSymlink = false;
            let symlinkWatcher: SharedFileWatcherOfAffectingLocation | undefined;
            if (cache.resolutionHost.realpath) {
                locationToWatch = cache.resolutionHost.realpath(affectingLocation);
                if (affectingLocation !== locationToWatch) {
                    isSymlink = true;
                    symlinkWatcher = fileWatchesOfAffectingLocations.get(locationToWatch);
                }
            }

            const resolutions = forResolution ? new Map([[cache, 1]]) : undefined;
            const files = forResolution ? undefined : new Map([[cache, 1]]);
            if (!isSymlink || !symlinkWatcher) {
                const watcher: SharedFileWatcherOfAffectingLocation = {
                    watcher: canWatchAffectingLocation(sharedCacheHost.toPath(locationToWatch)) ?
                        cache.resolutionHost.watchAffectingFileLocation(locationToWatch, (fileName, eventKind) => {
                            const seenCaches = new Set<ResolutionCache>();
                            addOrDeleteFileOnFileWatcherAffectingLocation(
                                locationToWatch,
                                fileName,
                                sharedCacheHost.toPath(locationToWatch),
                                eventKind,
                                new Set(),
                            );
                            invalidateAffectingFileWatcher(locationToWatch, moduleResolutionCache.getPackageJsonInfoCache().getInternalMap());
                            seenCaches.forEach(cache => cache.resolutionHost.scheduleInvalidateResolutionsOfFailedLookupLocations());
                        }) : noopFileWatcher,
                    resolutions: isSymlink ? undefined : resolutions,
                    files: isSymlink ? undefined : files,
                    symlinks: undefined,
                };
                fileWatchesOfAffectingLocations.set(locationToWatch, watcher);
                if (isSymlink) symlinkWatcher = watcher;
                else fileWatcher = watcher;
            }
            if (isSymlink) {
                Debug.assert(!!symlinkWatcher);
                fileWatcher = {
                    watcher: {
                        close: () => {
                            const symlinkWatcher = fileWatchesOfAffectingLocations.get(locationToWatch);
                            // Close symlink watcher if no ref
                            if (symlinkWatcher?.symlinks?.delete(affectingLocation) && !symlinkWatcher.symlinks.size && !symlinkWatcher.resolutions?.size && !symlinkWatcher.files?.size) {
                                fileWatchesOfAffectingLocations.delete(locationToWatch);
                                symlinkWatcher.watcher.close();
                            }
                        },
                    },
                    resolutions,
                    files,
                    symlinks: undefined,
                };
                fileWatchesOfAffectingLocations.set(affectingLocation, fileWatcher);
                (symlinkWatcher.symlinks ??= new Set()).add(affectingLocation);
            }
        }
        Debug.assertIsDefined(fileWatcher);
        addDirWatcherRefCountIfNotCache(forResolution ? fileWatcher.resolutions! : fileWatcher.files!, existingCaches, cache);
    }

    function releaseFileWatcherOfAffectingLocation(
        location: string,
        cache: ResolutionCache,
    ) {
        const watcher = fileWatchesOfAffectingLocations.get(location)!;
        releaseRefCountFromMap(watcher.files!, cache);
    }

    function cachedDirectoryHostAddOrDeleteFile(
        refCount: Map<ResolutionCache, number> | undefined,
        seenCaches: Set<ResolutionCache>,
        fileName: string,
        filePath: Path,
        eventKind: FileWatcherEventKind,
    ) {
        refCount?.forEach(
            (_refCount, cache) => {
                if (!tryAddToSet(seenCaches, cache)) {
                    cache.resolutionHost.getCachedDirectoryStructureHost()?.addOrDeleteFile(
                        fileName,
                        filePath,
                        eventKind,
                    );
                }
            },
        );
    }

    function addOrDeleteFileOnFileWatcherAffectingLocation(
        locationToWatch: string,
        fileName: string,
        filePath: Path,
        eventKind: FileWatcherEventKind,
        seenCaches: Set<ResolutionCache>,
    ) {
        const fileWatcher = fileWatchesOfAffectingLocations.get(locationToWatch)!;
        cachedDirectoryHostAddOrDeleteFile(fileWatcher.resolutions, seenCaches, fileName, filePath, eventKind);
        cachedDirectoryHostAddOrDeleteFile(fileWatcher.files, seenCaches, fileName, filePath, eventKind);
        fileWatcher.symlinks?.forEach(location =>
            addOrDeleteFileOnFileWatcherAffectingLocation(
                location,
                fileName,
                filePath,
                eventKind,
                seenCaches,
            )
        );
    }

    function invalidateAffectingFileWatcher(path: string, packageJsonMap: Map<Path, PackageJsonInfoCacheEntry> | undefined) {
        const watcher = fileWatchesOfAffectingLocations.get(path);
        if (watcher?.resolutions) (affectingPathChecks ??= new Set()).add(path);
        if (watcher?.files) (affectingPathChecksForFile ??= new Set()).add(path);
        watcher?.symlinks?.forEach(path => invalidateAffectingFileWatcher(path, packageJsonMap));
        packageJsonMap?.delete(sharedCacheHost.toPath(path));
    }

    function createDirectoryWatcherForPackageDir(
        dir: string,
        dirPath: Path,
        packageDir: string,
        packageDirPath: Path,
        nonRecursive: boolean | undefined,
        watchedResolutionInfo: SharedWatchedResolutionInfo,
        cache: ResolutionCache,
    ) {
        Debug.assert(!nonRecursive);
        // Check if this is symlink:
        let isSymlink = isSymlinkCache.get(packageDirPath);
        let packageDirWatcher = packageDirWatchers.get(packageDirPath);
        if (isSymlink === undefined) {
            const realPath = cache.resolutionHost.realpath!(packageDir);
            isSymlink = realPath !== packageDir && sharedCacheHost.toPath(realPath) !== packageDirPath;
            isSymlinkCache.set(packageDirPath, isSymlink);
            if (!packageDirWatcher) {
                packageDirWatchers.set(
                    packageDirPath,
                    packageDirWatcher = {
                        dirPathToWatcher: new Map(),
                        isSymlink,
                    },
                );
            }
            else if (packageDirWatcher.isSymlink !== isSymlink) {
                // Handle the change
                packageDirWatcher.dirPathToWatcher.forEach(watcher => {
                    removeDirectoryWatcher(
                        packageDirWatcher!.isSymlink ? packageDirPath : dirPath,
                        nonRecursive,
                        firstDefinedIterator(watcher.refCount.keys(), identity)!,
                        /*refCount*/ undefined,
                        /*delayed*/ true,
                        watcher.refCount,
                    );
                    watcher.watcher = createDirPathToWatcher(
                        firstDefinedIterator(watcher.refCount.keys(), identity)!,
                        watcher.refCount,
                    );
                });
                packageDirWatcher.isSymlink = isSymlink;
            }
        }
        else {
            Debug.assertIsDefined(packageDirWatcher);
            Debug.assert(isSymlink === packageDirWatcher.isSymlink);
        }
        let sharedWatcherForDirPath = packageDirWatcher.dirPathToWatcher.get(dirPath);
        if (sharedWatcherForDirPath) {
            addSharedDirPathToWatcherOfPackageDirWatcherRefCount(sharedWatcherForDirPath, cache);
            watchedResolutionInfo.caches.forEach(existing =>
                cache !== existing ?
                    addSharedDirPathToWatcherOfPackageDirWatcherRefCount(sharedWatcherForDirPath!, existing) :
                    undefined
            );
        }
        else {
            packageDirWatcher.dirPathToWatcher.set(
                dirPath,
                sharedWatcherForDirPath = {
                    watcher: createDirPathToWatcher(cache, watchedResolutionInfo.caches),
                    refCount: new Map([[cache, 1]]),
                },
            );
            if (isSymlink) addRefCountToMap(dirPathToSymlinkPackageRefCount, dirPath);
            addDirWatcherRefCountIfNotCache(sharedWatcherForDirPath.refCount, watchedResolutionInfo.caches, cache);
        }

        function createDirPathToWatcher(cache: ResolutionCache, existingCaches: SharedWatchedResolutionInfo["caches"] | SharedDirPathToWatcherOfPackageDirWatcher["refCount"]) {
            return isSymlink ?
                createOrAddRefToDirectoryWatchOfFailedLookups(packageDir, packageDirPath, nonRecursive, cache, existingCaches) :
                createOrAddRefToDirectoryWatchOfFailedLookups(dir, dirPath, nonRecursive, cache, existingCaches);
        }
    }

    function addSharedDirPathToWatcherOfPackageDirWatcherRefCount(
        sharedDirWatcher: SharedDirPathToWatcherOfPackageDirWatcher,
        cache: ResolutionCache,
        refCount?: number,
    ) {
        // Add watch count to actual dir watcher for this cache
        if (!sharedDirWatcher.refCount.has(cache)) addRefCountToMap(sharedDirWatcher.watcher.refCount, cache);
        // Add count to reference to this watcher from cache
        addRefCountToMap(sharedDirWatcher.refCount, cache, refCount);
    }

    function addRefCountToMap<K>(
        map: Map<K, number>,
        key: K,
        refCount?: number,
    ) {
        map.set(key, (map.get(key) ?? 0) + (refCount ?? 1));
    }

    function addDirWatcherRefCountIfNotCache(
        watcherRefCount: Map<ResolutionCache, number>,
        existingCaches: SharedWatchedResolutionInfo["caches"] | SharedDirPathToWatcherOfPackageDirWatcher["refCount"] | undefined,
        cache: ResolutionCache,
    ) {
        existingCaches?.forEach((_, existing) =>
            cache !== existing ?
                addRefCountToMap(watcherRefCount, existing) :
                undefined
        );
    }

    function createOrAddRefToDirectoryWatchOfFailedLookups(
        dir: string,
        dirPath: Path,
        nonRecursive: boolean | undefined,
        cache: ResolutionCache,
        existingCaches: SharedWatchedResolutionInfo["caches"] | SharedDirPathToWatcherOfPackageDirWatcher["refCount"],
    ) {
        const dirWatchesMap = !nonRecursive ? directoryWatchesOfFailedLookups : nonRecursiveDirectoryWatchesOfFailedLookups;
        let dirWatcher = dirWatchesMap.get(dirPath);
        if (dirWatcher) {
            addRefCountToMap(dirWatcher.refCount, cache);
        }
        else {
            dirWatchesMap.set(
                dirPath,
                dirWatcher = {
                    watcher: cache.resolutionHost.watchDirectoryOfFailedLookupLocation(
                        dir,
                        fileOrDirectory => onDirectoryWatcher(dirPath, nonRecursive, fileOrDirectory, sharedCacheHost.toPath(fileOrDirectory)),
                        nonRecursive ? WatchDirectoryFlags.None : WatchDirectoryFlags.Recursive,
                    ),
                    refCount: new Map([[cache, 1]]),
                },
            );
        }
        addDirWatcherRefCountIfNotCache(dirWatcher.refCount, existingCaches, cache);
        return dirWatcher;
    }

    function releaseRefCountFromMap<K>(
        map: Map<K, number>,
        key: K,
        refCount?: number,
    ) {
        const newCount = map.get(key)! - (refCount ?? 1);
        if (newCount !== 0) map.set(key, newCount);
        else map.delete(key);
    }

    function releaseDirWatcherRefCountIfNotCache(
        dirWatcher: SharedDirectoryWatchesOfFailedLookup | SharedDirPathToWatcherOfPackageDirWatcher,
        existingCaches: SharedWatchedResolutionInfo["caches"] | SharedDirPathToWatcherOfPackageDirWatcher["refCount"],
        cache: ResolutionCache,
        refCount?: number,
    ) {
        existingCaches.forEach((_, existing) =>
            cache !== existing ?
                releaseRefCountFromMap(dirWatcher.refCount, existing, refCount) :
                undefined
        );
    }

    function releaseSharedDirPathToWatcherOfPackageDirWatcherRefCount(
        packageDirPath: Path,
        dirPath: Path,
        cache: ResolutionCache,
        refCount?: number,
    ) {
        const packageDirWatcher = packageDirWatchers.get(packageDirPath)!;
        const sharedDirWatcher = packageDirWatcher.dirPathToWatcher.get(dirPath)!;
        // Remove count to reference to this watcher from cache
        releaseRefCountFromMap(sharedDirWatcher.refCount, cache, refCount);
        // Remove watch count to actual dir watcher for this cache
        if (!sharedDirWatcher.refCount.has(cache)) {
            // Remove cache from actual dir watcher
            removeDirectoryWatcher(packageDirWatcher.isSymlink ? packageDirPath : dirPath, /*nonRecursive*/ undefined, cache);
            // Nothing referencing this dirPath, remove it
            if (sharedDirWatcher.refCount.size === 0) {
                packageDirWatcher.dirPathToWatcher.delete(dirPath);
                if (packageDirWatcher.isSymlink) releaseRefCountFromMap(dirPathToSymlinkPackageRefCount, dirPath);
                // Nothing referencing in this packageDir Watcher, remove it
                if (packageDirWatcher.dirPathToWatcher.size === 0) {
                    packageDirWatchers.delete(packageDirPath);
                }
            }
        }
    }

    function releaseResolution(
        resolution: ResolutionWithFailedLookupLocations,
        cache: ResolutionCache,
    ) {
        const watchedResolutionInfo = watchedResolutionInfoMap.get(resolution)!;
        watchedResolutionInfo.caches.delete(cache);
        watchedResolutionInfo.dirWatchers?.forEach(
            (refCount, path) => removeDirectoryWatcher(path, /*nonRecursive*/ false, cache, refCount),
        );
        watchedResolutionInfo.nonRecursiveDirWatchers?.forEach(
            (refCount, path) => removeDirectoryWatcher(path, /*nonRecursive*/ true, cache, refCount),
        );
        watchedResolutionInfo.packageDirWatchers?.forEach(
            (dirPathMap, packageDirPath) =>
                dirPathMap.forEach(
                    (refCount, dirPath) =>
                        releaseSharedDirPathToWatcherOfPackageDirWatcherRefCount(
                            packageDirPath,
                            dirPath,
                            cache,
                            refCount,
                        ),
                ),
        );
        if (watchedResolutionInfo.rootWatcher) releaseRefCountFromMap(watchedResolutionInfo.rootWatcher.refCount, cache);
        if (watchedResolutionInfo.caches.size) return false;
        const resolved = getModuleOrTypeRefResolved(resolution);
        if (resolved && resolved.resolvedFileName) {
            const key = cache.resolutionHost.toPath(resolved.resolvedFileName);
            const resolutions = resolvedFileToResolution.get(key);
            if (resolutions?.delete(resolution) && !resolutions.size) resolvedFileToResolution.delete(key);
        }
        watchedResolutionInfoMap.delete(resolution);
        resolutionsWithFailedLookups.delete(resolution);
        resolutionsWithOnlyAffectingLocations.delete(resolution);
        if (resolution.affectingLocations) {
            for (const affectingLocation of resolution.affectingLocations) {
                const watcher = fileWatchesOfAffectingLocations.get(affectingLocation)!;
                releaseRefCountFromMap(watcher.resolutions!, cache);
                closeFileWatcherOfAffectingLocation(affectingLocation);
            }
        }
        return true;
    }

    function removeDirectoryWatcher(
        dirPath: Path,
        nonRecursive: boolean | undefined,
        cache: ResolutionCache,
        refCount?: number,
        delayed?: boolean,
        existingCaches?: SharedDirPathToWatcherOfPackageDirWatcher["refCount"],
    ) {
        const dirWatcher = !nonRecursive ?
            directoryWatchesOfFailedLookups.get(dirPath)! :
            nonRecursiveDirectoryWatchesOfFailedLookups.get(dirPath)!;
        releaseRefCountFromMap(dirWatcher.refCount, cache, refCount);
        if (existingCaches) releaseDirWatcherRefCountIfNotCache(dirWatcher, existingCaches, cache, refCount);
        if (dirWatcher.refCount.size) return;
        if (!delayed) closeDirectoryWatchesOfFailedLookup(dirWatcher, dirPath, nonRecursive);
        else (potentiallyUnreferencedDirWatchers ??= new Set()).add(dirPath);
    }

    function onDirectoryWatcher(
        dirPath: Path,
        nonRecursive: boolean | undefined,
        fileOrDirectory: string,
        fileOrDirectoryPath: Path,
    ) {
        const refCountCache = (
            !nonRecursive ?
                directoryWatchesOfFailedLookups :
                nonRecursiveDirectoryWatchesOfFailedLookups
        ).get(dirPath)!.refCount;
        refCountCache.forEach(
            (_refCount, cache) =>
                cache.resolutionHost.getCachedDirectoryStructureHost()?.addOrDeleteFileOrDirectory(
                    fileOrDirectory,
                    fileOrDirectoryPath,
                ),
        );
        scheduleInvalidateResolutionOfFailedLookupLocation(fileOrDirectoryPath, dirPath === fileOrDirectoryPath, refCountCache);
    }

    function invalidateResolutions(resolutions: Set<ResolutionWithFailedLookupLocations> | Map<string, ResolutionWithFailedLookupLocations> | undefined, canInvalidate: (resolution: ResolutionWithFailedLookupLocations) => boolean | undefined) {
        if (!resolutions) return false;
        let invalidated = false;
        resolutions.forEach(resolution => {
            const watchedResolutionInfo = watchedResolutionInfoMap.get(resolution)!;
            if (watchedResolutionInfo.isInvalidated || !canInvalidate(resolution)) return;
            watchedResolutionInfo.isInvalidated = invalidated = true;
            for (const cache of watchedResolutionInfo.caches) {
                cache.invalidateResolution(resolution);
            }
        });
        return invalidated;
    }

    function invalidateResolutionOfFile(filePath: Path) {
        return invalidateResolutions(resolvedFileToResolution.get(filePath), returnTrue);
    }

    function scheduleInvalidateResolutionOfFailedLookupLocation(
        fileOrDirectoryPath: Path,
        isCreatingWatchedDirectory: boolean,
        refCountCache: Map<ResolutionCache, number>,
    ) {
        if (isCreatingWatchedDirectory) {
            // Watching directory is created
            // Invalidate any resolution has failed lookup in this directory
            (isInDirectoryChecks ||= new Set()).add(fileOrDirectoryPath);
        }
        else {
            // If something to do with folder/file starting with "." in node_modules folder, skip it
            const updatedPath = removeIgnoredPath(fileOrDirectoryPath);
            if (!updatedPath) return false;
            fileOrDirectoryPath = updatedPath;

            // prevent saving an open file from over-eagerly triggering invalidation
            if (sharedCacheHost.fileIsOpen(fileOrDirectoryPath)) {
                return false;
            }

            // Some file or directory in the watching directory is created
            // Return early if it does not have any of the watching extension or not the custom failed lookup path
            const dirOfFileOrDirectory = getDirectoryPath(fileOrDirectoryPath);
            if (
                isNodeModulesAtTypesDirectory(fileOrDirectoryPath) || isNodeModulesDirectory(fileOrDirectoryPath) ||
                isNodeModulesAtTypesDirectory(dirOfFileOrDirectory) || isNodeModulesDirectory(dirOfFileOrDirectory)
            ) {
                // Invalidate any resolution from this directory
                (failedLookupChecks ||= new Set()).add(fileOrDirectoryPath);
                (startsWithPathChecks ||= new Set()).add(fileOrDirectoryPath);
            }
            else {
                // Ignore emits from the program if all caches ignore it
                if (
                    !forEachKey(
                        refCountCache,
                        cache =>
                            !isEmittedFileOfProgram(
                                cache.resolutionHost.getCurrentProgram(),
                                fileOrDirectoryPath,
                            ),
                    )
                ) return false;

                // Ignore .map files
                if (fileExtensionIs(fileOrDirectoryPath, ".map")) {
                    return false;
                }
                // Resolution need to be invalidated if failed lookup location is same as the file or directory getting created
                (failedLookupChecks ||= new Set()).add(fileOrDirectoryPath);

                // If the invalidated file is from a node_modules package, invalidate everything else
                // in the package since we might not get notifications for other files in the package.
                // This hardens our logic against unreliable file watchers.
                const packagePath = parseNodeModuleFromPath(fileOrDirectoryPath, /*isFolder*/ true);
                if (packagePath) (startsWithPathChecks ||= new Set()).add(packagePath as Path);
            }
        }
        refCountCache.forEach(
            (_refCount, cache) => cache.resolutionHost.scheduleInvalidateResolutionsOfFailedLookupLocations(),
        );
    }

    function invalidatePackageJsonMap() {
        const packageJsonMap = moduleResolutionCache.getPackageJsonInfoCache().getInternalMap();
        if (packageJsonMap && (failedLookupChecks || startsWithPathChecks || isInDirectoryChecks)) {
            packageJsonMap.forEach((_value, path) => isInvalidatedFailedLookup(path) ? packageJsonMap.delete(path) : undefined);
        }
    }

    function invalidateResolutionsOfFailedLookupLocations() {
        if (!failedLookupChecks && !startsWithPathChecks && !isInDirectoryChecks && !affectingPathChecks) {
            return false;
        }

        let invalidated = invalidateResolutions(resolutionsWithFailedLookups, canInvalidateFailedLookupResolution);
        invalidatePackageJsonMap();
        failedLookupChecks = undefined;
        startsWithPathChecks = undefined;
        isInDirectoryChecks = undefined;
        invalidated = invalidateResolutions(resolutionsWithOnlyAffectingLocations, canInvalidatedFailedLookupResolutionWithAffectingLocation) || invalidated;
        affectingPathChecks = undefined;
        return invalidated;
    }

    function canInvalidateFailedLookupResolution(resolution: ResolutionWithFailedLookupLocations) {
        if (canInvalidatedFailedLookupResolutionWithAffectingLocation(resolution)) return true;
        if (!failedLookupChecks && !startsWithPathChecks && !isInDirectoryChecks) return false;
        return resolution.failedLookupLocations?.some(location => isInvalidatedFailedLookup(sharedCacheHost.toPath(location))) ||
            (!!resolution.alternateResult && isInvalidatedFailedLookup(sharedCacheHost.toPath(resolution.alternateResult)));
    }

    function isInvalidatedFailedLookup(locationPath: Path) {
        return failedLookupChecks?.has(locationPath) ||
            firstDefinedIterator(startsWithPathChecks?.keys() || [], fileOrDirectoryPath => startsWith(locationPath, fileOrDirectoryPath) ? true : undefined) ||
            firstDefinedIterator(isInDirectoryChecks?.keys() || [], dirPath =>
                locationPath.length > dirPath.length &&
                    startsWith(locationPath, dirPath) && (isDiskPathRoot(dirPath) || locationPath[dirPath.length] === directorySeparator) ? true : undefined);
    }

    function canInvalidatedFailedLookupResolutionWithAffectingLocation(resolution: ResolutionWithFailedLookupLocations) {
        return !!affectingPathChecks && resolution.affectingLocations?.some(location => affectingPathChecks!.has(location));
    }

    function createTypeRootsWatch(typeRoot: string, cache: ResolutionCache): FileWatcher {
        resolutionCaches.add(cache);
        let watcher = typeRootsWatches.get(typeRoot);
        if (watcher) {
            watcher.refCount.add(cache);
        }
        else {
            typeRootsWatches.set(
                typeRoot,
                watcher = {
                    // Create new watch and recursive info
                    watcher: canWatchAtTypes(sharedCacheHost.toPath(typeRoot)) ?
                        cache.resolutionHost.watchTypeRootsDirectory(typeRoot, fileOrDirectory => {
                            const fileOrDirectoryPath = sharedCacheHost.toPath(fileOrDirectory);
                            typeRootsWatches.get(typeRoot)?.refCount.forEach(cache => {
                                cache.resolutionHost.getCachedDirectoryStructureHost()?.addOrDeleteFileOrDirectory(
                                    fileOrDirectory,
                                    fileOrDirectoryPath,
                                );
                                cache.invalidateTypeRoot();

                                // Since directory watchers invoked are flaky, the failed lookup location events might not be triggered
                                // So handle to failed lookup locations here as well to ensure we are invalidating resolutions
                                const fileOrDirectoryPathComponents = getPathComponents(fileOrDirectoryPath);
                                directoryWatchesOfFailedLookups.forEach((_watcher, dirPath) => {
                                    if (isInDirectoryPath(getPathComponents(dirPath), fileOrDirectoryPathComponents)) {
                                        onDirectoryWatcher(dirPath, /*nonRecursive*/ false, fileOrDirectory, fileOrDirectoryPath);
                                    }
                                });
                                nonRecursiveDirectoryWatchesOfFailedLookups.forEach((_watcher, dirPath) => {
                                    const dirPathComponents = getPathComponents(dirPath);
                                    if (
                                        isInDirectoryPath(dirPathComponents, fileOrDirectoryPathComponents) &&
                                        (dirPathComponents.length === fileOrDirectoryPathComponents.length || dirPathComponents.length + 1 === fileOrDirectoryPathComponents.length)
                                    ) {
                                        onDirectoryWatcher(dirPath, /*nonRecursive*/ true, fileOrDirectory, fileOrDirectoryPath);
                                    }
                                });
                            });
                        }, WatchDirectoryFlags.Recursive) :
                        noopFileWatcher,
                    refCount: new Set([cache]),
                },
            );
        }
        return {
            close: () => {
                const existing = typeRootsWatches.get(typeRoot);
                if (existing?.refCount.delete(cache) && !existing.refCount.size) {
                    typeRootsWatches.delete(typeRoot);
                    existing.watcher.close();
                }
            },
        };
    }
}
