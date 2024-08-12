import * as fakes from "../../_namespaces/fakes.js";
import * as Harness from "../../_namespaces/Harness.js";
import * as ts from "../../_namespaces/ts.js";
import * as vfs from "../../_namespaces/vfs.js";
import { jsonToReadableText } from "../helpers.js";
import {
    baselinePrograms,
    CommandLineCallbacks,
    commandLineCallbacks,
    CommandLineProgram,
    generateSourceMapBaselineFiles,
    isReadableIncrementalBuildInfo,
    isReadableIncrementalBundleEmitBuildInfo,
    isReadableIncrementalMultiFileEmitBuildInfo,
    ReadableBuildInfo,
    ReadableIncrementalBuildInfo,
    ReadableIncrementalBuildInfoFileInfo,
    ReadableIncrementalBundleEmitBuildInfo,
    ReadableIncrementalMultiFileEmitBuildInfo,
    sanitizeSysOutput,
    toPathWithSystem,
    tscBaselineName,
} from "./baseline.js";

export type TscCompileSystem = fakes.System & {
    writtenFiles: Set<ts.Path>;
    baseLine(): { file: string; text: string; };
    dtsSignaures?: Map<ts.Path, Map<string, string>>;
    storeSignatureInfo?: boolean;
};

export const noChangeRun: TestTscEdit = {
    caption: "no-change-run",
    edit: ts.noop,
};
export const noChangeOnlyRuns = [noChangeRun];

export interface TestTscCompile {
    scenario: string;
    subScenario: string;
    commandLineArgs: readonly string[];
    fs: () => vfs.FileSystem;
    diffWithInitial?: boolean;
    modifyFs?: (fs: vfs.FileSystem) => void;
    computeDtsSignatures?: boolean;
    environmentVariables?: Record<string, string>;
    baselineSourceMap?: boolean;
    baselineReadFileCalls?: boolean;
    baselinePrograms?: boolean;
    baselineDependencies?: boolean;
    compile?: (sys: TscCompileSystem) => CommandLineCallbacks["getPrograms"];
}

export function makeSystemReadyForBaseline(sys: TscCompileSystem, versionToWrite?: string) {
    if (versionToWrite) {
        fakes.patchHostForBuildInfoWrite(sys, versionToWrite);
    }
    else {
        fakes.patchHostForBuildInfoReadWrite(sys);
    }
    const writtenFiles = sys.writtenFiles = new Set();
    const originalWriteFile = sys.writeFile;
    sys.writeFile = (fileName, content, writeByteOrderMark) => {
        const path = toPathWithSystem(sys, fileName);
        // When buildinfo is same for two projects,
        // it gives error and doesnt write buildinfo but because buildInfo is written for one project,
        // readable baseline will be written two times for those two projects with same contents and is ok
        ts.Debug.assert(!writtenFiles.has(path) || ts.endsWith(path, "baseline.txt"));
        writtenFiles.add(path);
        return originalWriteFile.call(sys, fileName, content, writeByteOrderMark);
    };
}

/**
 * Initialize Fs, execute command line and save baseline
 */
function testTscCompile(input: TestTscCompile) {
    const initialFs = input.fs();
    const inputFs = initialFs.shadow();
    const {
        scenario,
        subScenario,
        diffWithInitial,
        commandLineArgs,
        modifyFs,
        environmentVariables,
    } = input;
    if (modifyFs) modifyFs(inputFs);
    inputFs.makeReadonly();
    const fs = inputFs.shadow();

    // Create system
    const sys = new fakes.System(fs, { executingFilePath: `${fs.meta.get("defaultLibLocation")}/tsc`, env: environmentVariables }) as TscCompileSystem;
    sys.storeSignatureInfo = true;
    sys.write(`${sys.getExecutingFilePath()} ${commandLineArgs.join(" ")}\n`);
    sys.exit = exitCode => sys.exitCode = exitCode;

    let actualReadFileMap: ts.MapLike<number> | undefined;
    let getPrograms: CommandLineCallbacks["getPrograms"] | undefined;
    if (!input.compile) {
        makeSystemReadyForBaseline(sys);
        actualReadFileMap = {};
        const originalReadFile = sys.readFile;
        if (input.baselineReadFileCalls) {
            sys.readFile = path => {
                // Dont record libs
                if (!path.startsWith(ts.getDirectoryPath(sys.getExecutingFilePath()))) {
                    actualReadFileMap![path] = (ts.getProperty(actualReadFileMap!, path) || 0) + 1;
                }
                return originalReadFile.call(sys, path);
            };
        }
        const result = commandLineCallbacks(sys, originalReadFile);
        ts.executeCommandLine(
            sys,
            result.cb,
            input.commandLineArgs,
        );
        sys.readFile = originalReadFile;
        getPrograms = result.getPrograms;
    }
    else {
        getPrograms = input.compile(sys);
    }

    sys.write(`exitCode:: ExitStatus.${ts.ExitStatus[sys.exitCode as ts.ExitStatus]}\n`);

    const { baselineSourceMap, baselineReadFileCalls, baselinePrograms: shouldBaselinePrograms, baselineDependencies } = input;
    const programs = getPrograms();
    if (input.computeDtsSignatures) storeDtsSignatures(sys, programs);
    if (shouldBaselinePrograms) {
        const baseline: string[] = [];
        baselinePrograms(baseline, programs, ts.emptyArray, baselineDependencies);
        sys.write(baseline.join("\n"));
    }
    if (baselineReadFileCalls) {
        sys.write(`readFiles:: ${jsonToReadableText(actualReadFileMap)} `);
    }
    if (baselineSourceMap) generateSourceMapBaselineFiles(sys);
    actualReadFileMap = undefined;
    getPrograms = undefined;

    fs.makeReadonly();
    sys.baseLine = () => {
        const baseFsPatch = diffWithInitial ?
            inputFs.diff(initialFs, { includeChangedFileWithSameContent: true }) :
            inputFs.diff(/*base*/ undefined, { baseIsNotShadowRoot: true });
        const patch = fs.diff(inputFs, { includeChangedFileWithSameContent: true });
        return {
            file: tscBaselineName(scenario, subScenario, commandLineArgs),
            text: `Input::
${baseFsPatch ? vfs.formatPatch(baseFsPatch) : ""}

Output::
${sys.output.map(sanitizeSysOutput).join("")}

${patch ? vfs.formatPatch(patch) : ""}`,
        };
    };
    return sys;
}

function storeDtsSignatures(sys: TscCompileSystem, programs: readonly CommandLineProgram[]) {
    for (const [program, builderProgram] of programs) {
        if (!builderProgram) continue;
        const buildInfoPath = ts.getTsBuildInfoEmitOutputFilePath(program.getCompilerOptions());
        if (!buildInfoPath) continue;
        sys.dtsSignaures ??= new Map();
        const dtsSignatureData = new Map<string, string>();
        sys.dtsSignaures.set(`${toPathWithSystem(sys, buildInfoPath)}.readable.baseline.txt` as ts.Path, dtsSignatureData);
        builderProgram.state.hasCalledUpdateShapeSignature?.forEach(resolvedPath => {
            const file = program.getSourceFileByPath(resolvedPath);
            if (!file || file.isDeclarationFile) return;
            // Compute dts and exported map and store it
            ts.BuilderState.computeDtsSignature(
                program,
                file,
                /*cancellationToken*/ undefined,
                sys,
                signature => dtsSignatureData.set(relativeToBuildInfo(resolvedPath), signature),
            );
        });

        function relativeToBuildInfo(path: string) {
            const currentDirectory = program.getCurrentDirectory();
            const getCanonicalFileName = ts.createGetCanonicalFileName(program.useCaseSensitiveFileNames());
            const buildInfoDirectory = ts.getDirectoryPath(ts.getNormalizedAbsolutePath(buildInfoPath!, currentDirectory));
            return ts.ensurePathIsNonModuleName(ts.getRelativePathFromDirectory(buildInfoDirectory, path, getCanonicalFileName));
        }
    }
}

export function verifyTscBaseline(sys: () => { baseLine: TscCompileSystem["baseLine"]; }) {
    it(`Generates files matching the baseline`, () => {
        const { file, text } = sys().baseLine();
        Harness.Baseline.runBaseline(file, text);
    });
}

interface VerifyTscEditDiscrepanciesInput {
    index: number;
    edits: readonly TestTscEdit[];
    scenario: TestTscCompile["scenario"];
    baselines: string[] | undefined;
    commandLineArgs: TestTscCompile["commandLineArgs"];
    modifyFs: TestTscCompile["modifyFs"];
    baseFs: vfs.FileSystem;
    newSys: TscCompileSystem;
    environmentVariables: TestTscCompile["environmentVariables"];
    compile: TestTscCompile["compile"];
}
function verifyTscEditDiscrepancies({
    index,
    edits,
    scenario,
    commandLineArgs,
    environmentVariables,
    baselines,
    modifyFs,
    baseFs,
    newSys,
    compile,
}: VerifyTscEditDiscrepanciesInput): string[] | undefined {
    const { caption, discrepancyExplanation } = edits[index];
    const sys = testTscCompile({
        scenario,
        subScenario: caption,
        fs: () => baseFs.makeReadonly(),
        commandLineArgs: edits[index].commandLineArgs || commandLineArgs,
        modifyFs: fs => {
            if (modifyFs) modifyFs(fs);
            for (let i = 0; i <= index; i++) {
                edits[i].edit(fs);
            }
        },
        environmentVariables,
        computeDtsSignatures: true,
        compile,
    });
    let headerAdded = false;
    for (const outputFile of sys.writtenFiles.keys()) {
        const cleanBuildText = sys.readFile(outputFile);
        const incrementalBuildText = newSys.readFile(outputFile);
        if (ts.isBuildInfoFile(outputFile)) {
            // Check only presence and absence and not text as we will do that for readable baseline
            if (!sys.fileExists(`${outputFile}.readable.baseline.txt`)) addBaseline(`Readable baseline not present in clean build:: File:: ${outputFile}`);
            if (!newSys.fileExists(`${outputFile}.readable.baseline.txt`)) addBaseline(`Readable baseline not present in incremental build:: File:: ${outputFile}`);
            verifyPresenceAbsence(incrementalBuildText, cleanBuildText, `Incremental and clean tsbuildinfo file presence differs:: File:: ${outputFile}`);
        }
        else if (!ts.fileExtensionIs(outputFile, ".tsbuildinfo.readable.baseline.txt")) {
            verifyTextEqual(incrementalBuildText, cleanBuildText, `File: ${outputFile}`);
        }
        else if (incrementalBuildText !== cleanBuildText) {
            // Verify build info without affectedFilesPendingEmit
            const { buildInfo: incrementalBuildInfo, readableBuildInfo: incrementalReadableBuildInfo } = getBuildInfoForIncrementalCorrectnessCheck(incrementalBuildText);
            const { buildInfo: cleanBuildInfo, readableBuildInfo: cleanReadableBuildInfo } = getBuildInfoForIncrementalCorrectnessCheck(cleanBuildText);
            const dtsSignaures = sys.dtsSignaures?.get(outputFile);
            verifyTextEqual(incrementalBuildInfo, cleanBuildInfo, `TsBuild info text without affectedFilesPendingEmit:: ${outputFile}::`);
            // Verify file info sigantures
            verifyMapLike(
                (incrementalReadableBuildInfo as ReadableIncrementalMultiFileEmitBuildInfo)?.fileInfos,
                (cleanReadableBuildInfo as ReadableIncrementalMultiFileEmitBuildInfo)?.fileInfos,
                (key, incrementalFileInfo, cleanFileInfo) => {
                    const dtsForKey = dtsSignaures?.get(key);
                    if (
                        !incrementalFileInfo ||
                        !cleanFileInfo ||
                        incrementalFileInfo.signature !== cleanFileInfo.signature &&
                            incrementalFileInfo.signature !== cleanFileInfo.version &&
                            (dtsForKey === undefined || incrementalFileInfo.signature !== dtsForKey)
                    ) {
                        return [
                            `Incremental signature is neither dts signature nor file version for File:: ${key}`,
                            `Incremental:: ${jsonToReadableText(incrementalFileInfo)}`,
                            `Clean:: ${jsonToReadableText(cleanFileInfo)}`,
                            `Dts Signature:: ${jsonToReadableText(dtsForKey)}`,
                        ];
                    }
                },
                `FileInfos:: File:: ${outputFile}`,
            );
            if (isReadableIncrementalMultiFileEmitBuildInfo(incrementalReadableBuildInfo)) {
                ts.Debug.assert(!isReadableIncrementalBundleEmitBuildInfo(cleanReadableBuildInfo));
                // Verify that incrementally pending affected file emit are in clean build since clean build can contain more files compared to incremental depending of noEmitOnError option
                incrementalReadableBuildInfo.affectedFilesPendingEmit?.forEach(([actualFileOrArray]) => {
                    const actualFile = ts.isString(actualFileOrArray) ? actualFileOrArray : actualFileOrArray[0];
                    if (
                        !ts.find(
                            (cleanReadableBuildInfo as ReadableIncrementalMultiFileEmitBuildInfo)?.affectedFilesPendingEmit,
                            ([expectedFileOrArray]) => actualFile === (ts.isString(expectedFileOrArray) ? expectedFileOrArray : expectedFileOrArray[0]),
                        )
                    ) {
                        addBaseline(
                            `Incremental build contains ${actualFile} file as pending emit, clean build does not have it: ${outputFile}::`,
                            `Incremental buildInfoText:: ${incrementalBuildText}`,
                            `Clean buildInfoText:: ${cleanBuildText}`,
                        );
                    }
                });
            }
            else {
                ts.Debug.assert(!isReadableIncrementalMultiFileEmitBuildInfo(cleanReadableBuildInfo));
                // Verify that incrementally pending affected file emit are in clean build since clean build can contain more files compared to incremental depending of noEmitOnError option
                if ((incrementalReadableBuildInfo as ReadableIncrementalBundleEmitBuildInfo)?.pendingEmit) {
                    if ((cleanReadableBuildInfo as ReadableIncrementalBundleEmitBuildInfo)?.pendingEmit === undefined) {
                        addBaseline(
                            `Incremental build contains pendingEmit, clean build does not have it: ${outputFile}::`,
                            `Incremental buildInfoText:: ${incrementalBuildText}`,
                            `Clean buildInfoText:: ${cleanBuildText}`,
                        );
                    }
                }
            }
            const readableIncrementalBuildInfo = incrementalReadableBuildInfo as ReadableIncrementalBuildInfo | undefined;
            const readableCleanBuildInfo = cleanReadableBuildInfo as ReadableIncrementalBuildInfo | undefined;
            readableIncrementalBuildInfo?.changeFileSet?.forEach(actualFile => {
                if (
                    !ts.find(
                        readableCleanBuildInfo?.changeFileSet,
                        expectedFile => actualFile === expectedFile,
                    )
                ) {
                    addBaseline(
                        `Incremental build contains ${actualFile} file in changeFileSet, clean build does not have it: ${outputFile}::`,
                        `Incremental buildInfoText:: ${incrementalBuildText}`,
                        `Clean buildInfoText:: ${cleanBuildText}`,
                    );
                }
            });
            readableIncrementalBuildInfo?.semanticDiagnosticsPerFile?.forEach((
                [actualFile, notCachedORDiagnostics],
            ) => {
                const cleanFileDiagnostics = ts.find(
                    readableCleanBuildInfo?.semanticDiagnosticsPerFile,
                    ([expectedFile]) => actualFile === expectedFile,
                );
                // Incremental build should have same diagnostics as clean build
                if (
                    cleanFileDiagnostics &&
                    JSON.stringify(notCachedORDiagnostics) === JSON.stringify(cleanFileDiagnostics[1])
                ) return;
                // If the diagnostics are marked as not cached in incremental build,
                // and clean build doesnt mark it that way because its in its change file set, its ok
                if (
                    !cleanFileDiagnostics &&
                    ts.isString(notCachedORDiagnostics) &&
                    ts.contains(readableCleanBuildInfo?.changeFileSet, actualFile)
                ) return;
                // Otherwise marked as "not Cached" in clean build with errors in incremental build is ok
                if (
                    ts.isString(cleanFileDiagnostics?.[1]) &&
                    !ts.isString(notCachedORDiagnostics)
                ) return;
                addBaseline(
                    `Incremental build contains ${actualFile} file ${!ts.isString(notCachedORDiagnostics) ? "has" : "does not have"} semantic errors, it does not match with clean build: ${outputFile}::`,
                    `Incremental buildInfoText:: ${incrementalBuildText}`,
                    `Clean buildInfoText:: ${cleanBuildText}`,
                );
            });
            readableCleanBuildInfo?.semanticDiagnosticsPerFile?.forEach((
                [expectedFile, cleanFileDiagnostics],
            ) => {
                if (
                    // if there are errors in the file
                    !ts.isString(cleanFileDiagnostics?.[1]) &&
                    // and its not already verified, its issue with the error caching
                    !ts.find(
                        readableIncrementalBuildInfo?.semanticDiagnosticsPerFile,
                        ([actualFile]) => actualFile === expectedFile,
                    )
                ) {
                    addBaseline(
                        `Incremental build does not contain ${expectedFile} file for semantic errors, clean build has semantic errors: ${outputFile}::`,
                        `Incremental buildInfoText:: ${incrementalBuildText}`,
                        `Clean buildInfoText:: ${cleanBuildText}`,
                    );
                }
            });
            readableIncrementalBuildInfo?.emitDiagnosticsPerFile?.forEach(([actualFile]) => {
                if (
                    // Does not have emit diagnostics in clean buildInfo
                    !ts.find(
                        readableCleanBuildInfo!.emitDiagnosticsPerFile,
                        ([expectedFile]) => actualFile === expectedFile,
                    ) &&
                    // Is not marked as affectedFilesPendingEmit in clean buildInfo
                    (!ts.find(
                        (readableCleanBuildInfo as ReadableIncrementalMultiFileEmitBuildInfo).affectedFilesPendingEmit,
                        ([expectedFileOrArray]) => actualFile === (ts.isString(expectedFileOrArray) ? expectedFileOrArray : expectedFileOrArray[0]),
                    )) &&
                    // Program emit is not pending in clean buildInfo
                    !(readableCleanBuildInfo as ReadableIncrementalBundleEmitBuildInfo).pendingEmit
                ) {
                    addBaseline(
                        `Incremental build contains ${actualFile} file has emit errors, clean build does not have errors or does not mark is as pending emit: ${outputFile}::`,
                        `Incremental buildInfoText:: ${incrementalBuildText}`,
                        `Clean buildInfoText:: ${cleanBuildText}`,
                    );
                }
            });
        }
    }
    if (!headerAdded && discrepancyExplanation) addBaseline("*** Supplied discrepancy explanation but didnt find any difference");
    return baselines;

    function verifyTextEqual(incrementalText: string | undefined, cleanText: string | undefined, message: string) {
        if (incrementalText !== cleanText) writeNotEqual(incrementalText, cleanText, message);
    }

    function verifyMapLike<T>(
        incremental: ts.MapLike<T> | undefined,
        clean: ts.MapLike<T> | undefined,
        verifyValue: (key: string, incrementalValue: T | undefined, cleanValue: T | undefined) => string[] | undefined,
        message: string,
    ) {
        verifyPresenceAbsence(incremental, clean, `Incremental and clean do not match:: ${message}`);
        if (!incremental || !clean) return;
        const incrementalMap = new Map(Object.entries(incremental));
        const cleanMap = new Map(Object.entries(clean));
        cleanMap.forEach((cleanValue, key) => {
            const result = verifyValue(key, incrementalMap.get(key), cleanValue);
            if (result) addBaseline(...result);
        });
        incrementalMap.forEach((incremetnalValue, key) => {
            if (cleanMap.has(key)) return;
            // This is value only in incremental Map
            const result = verifyValue(key, incremetnalValue, /*cleanValue*/ undefined);
            if (result) addBaseline(...result);
        });
    }

    function verifyPresenceAbsence<T>(actual: T | undefined, expected: T | undefined, message: string) {
        if (expected === undefined) {
            if (actual === undefined) return;
        }
        else {
            if (actual !== undefined) return;
        }
        writeNotEqual(actual, expected, message);
    }

    function writeNotEqual<T>(actual: T | undefined, expected: T | undefined, message: string) {
        addBaseline(
            message,
            "CleanBuild:",
            ts.isString(expected) ? expected : jsonToReadableText(expected),
            "IncrementalBuild:",
            ts.isString(actual) ? actual : jsonToReadableText(actual),
        );
    }

    function addBaseline(...text: string[]) {
        if (!baselines || !headerAdded) {
            (baselines ||= []).push(`${index}:: ${caption}`, ...(discrepancyExplanation?.() || ["*** Needs explanation"]));
            headerAdded = true;
        }
        baselines.push(...text);
    }
}

function getBuildInfoForIncrementalCorrectnessCheck(text: string | undefined): {
    buildInfo: string | undefined;
    readableBuildInfo?: ReadableBuildInfo;
} {
    if (!text) return { buildInfo: text };
    const readableBuildInfo = JSON.parse(text) as ReadableBuildInfo;
    let sanitizedFileInfos: ts.MapLike<string | Omit<ReadableIncrementalBuildInfoFileInfo<ts.IncrementalMultiFileEmitBuildInfoFileInfo> | ReadableIncrementalBuildInfoFileInfo<ts.BuilderState.FileInfo>, "signature" | "original"> & { signature: undefined; original: undefined; }> | undefined;
    if (isReadableIncrementalBuildInfo(readableBuildInfo)) {
        sanitizedFileInfos = {};
        for (const id in readableBuildInfo.fileInfos) {
            if (ts.hasProperty(readableBuildInfo.fileInfos, id)) {
                const info = readableBuildInfo.fileInfos[id];
                sanitizedFileInfos[id] = ts.isString(info) ? info : { ...info, signature: undefined, original: undefined };
            }
        }
    }
    return {
        buildInfo: jsonToReadableText({
            ...readableBuildInfo,
            ...(isReadableIncrementalBuildInfo(readableBuildInfo) ?
                {
                    fileNames: undefined,
                    fileIdsList: undefined,
                    fileInfos: sanitizedFileInfos,
                    // Ignore noEmit since that shouldnt be reason to emit the tsbuild info and presence of it in the buildinfo file does not matter
                    options: readableBuildInfo.options && {
                        ...readableBuildInfo.options,
                        noEmit: undefined,
                    },
                    affectedFilesPendingEmit: undefined,
                    pendingEmit: undefined,
                    emitDiagnosticsPerFile: undefined,
                    latestChangedDtsFile: readableBuildInfo.latestChangedDtsFile ? "FakeFileName" : undefined,
                    semanticDiagnosticsPerFile: undefined,
                    changeFileSet: undefined,
                } : undefined),
            size: undefined, // Size doesnt need to be equal
        }),
        readableBuildInfo,
    };
}

export interface TestTscEdit {
    edit: (fs: vfs.FileSystem) => void;
    caption: string;
    commandLineArgs?: readonly string[];
    /** An array of lines to be printed in order when a discrepancy is detected */
    discrepancyExplanation?: () => readonly string[];
}

export interface VerifyTscWithEditsInput extends TestTscCompile {
    edits?: readonly TestTscEdit[];
}

/**
 * Verify non watch tsc invokcation after each edit
 */
export function verifyTsc({
    subScenario,
    fs,
    scenario,
    commandLineArgs,
    environmentVariables,
    baselineSourceMap,
    modifyFs,
    baselineReadFileCalls,
    baselinePrograms,
    edits,
    compile,
}: VerifyTscWithEditsInput) {
    describe(`tsc ${commandLineArgs.join(" ")} ${scenario}:: ${subScenario}`, () => {
        let sys: TscCompileSystem;
        let baseFs: vfs.FileSystem;
        let editsSys: TscCompileSystem[] | undefined;
        before(() => {
            baseFs = fs().makeReadonly();
            sys = testTscCompile({
                scenario,
                subScenario,
                fs: () => baseFs,
                commandLineArgs,
                modifyFs,
                baselineSourceMap,
                baselineReadFileCalls,
                baselinePrograms,
                environmentVariables,
                compile,
            });
            edits?.forEach((
                { edit, caption, commandLineArgs: editCommandLineArgs },
                index,
            ) => {
                (editsSys || (editsSys = [])).push(testTscCompile({
                    scenario,
                    subScenario: caption,
                    diffWithInitial: true,
                    fs: () => index === 0 ? sys.vfs : editsSys![index - 1].vfs,
                    commandLineArgs: editCommandLineArgs || commandLineArgs,
                    modifyFs: edit,
                    baselineSourceMap,
                    baselineReadFileCalls,
                    baselinePrograms,
                    environmentVariables,
                    compile,
                }));
            });
        });
        after(() => {
            baseFs = undefined!;
            sys = undefined!;
            editsSys = undefined!;
        });
        verifyTscBaseline(() => ({
            baseLine: () => {
                const { file, text } = sys.baseLine();
                const texts: string[] = [text];
                editsSys?.forEach((sys, index) => {
                    const incrementalScenario = edits![index];
                    texts.push("");
                    texts.push(`Change:: ${incrementalScenario.caption}`);
                    texts.push(sys.baseLine().text);
                });
                return {
                    file,
                    text: `currentDirectory:: ${sys.getCurrentDirectory()} useCaseSensitiveFileNames: ${sys.useCaseSensitiveFileNames}\r\n` +
                        texts.join("\r\n"),
                };
            },
        }));
        if (edits?.length) {
            it("tsc invocation after edit and clean build correctness", () => {
                let baselines: string[] | undefined;
                for (let index = 0; index < edits.length; index++) {
                    baselines = verifyTscEditDiscrepancies({
                        index,
                        edits,
                        scenario,
                        baselines,
                        baseFs,
                        newSys: editsSys![index],
                        commandLineArgs,
                        modifyFs,
                        environmentVariables,
                        compile,
                    });
                }
                Harness.Baseline.runBaseline(
                    tscBaselineName(scenario, subScenario, commandLineArgs, /*isWatch*/ undefined, "-discrepancies"),
                    baselines ? baselines.join("\r\n") : null, // eslint-disable-line no-restricted-syntax
                );
            });
        }
    });
}
