import { dedent } from "../../_namespaces/Utils.js";
import { FileSystem } from "../../_namespaces/vfs.js";
import { jsonToReadableText } from "../helpers.js";
import { FsContents } from "./contents.js";
import { TestTscEdit } from "./tsc.js";
import { TscWatchCompileChange } from "./tscWatch.js";
import {
    appendText,
    loadProjectFromFiles,
} from "./vfs.js";
import {
    createServerHost,
    createWatchedSystem,
    libFile,
    TestServerHost,
} from "./virtualFileSystemWithWatch.js";

function getRandomFileContent() {
    return "export const x = 10;";
}

function getFsContentsForPackageJsonScope(): FsContents {
    return {
        "/src/projects/project/src/tsconfig.json": jsonToReadableText({
            compilerOptions: {
                target: "es2016",
                composite: true,
                module: "node16",
                outDir: "../out",
                traceResolution: true,
            },
            files: [
                "main.ts",
                "fileA.ts",
                "fileB.mts",
                "randomFile.ts",
                "a/randomFile.ts",
                "b/ba/randomFile.ts",
                "b/randomFile.ts",
                "c/ca/randomFile.ts",
                "c/ca/caa/randomFile.ts",
                "c/ca/caa/caaa/randomFile.ts",
                "c/cb/randomFile.ts",
                "d/da/daa/daaa/x/y/z/randomFile.ts",
                "d/da/daa/daaa/randomFile.ts",
                "d/da/daa/randomFile.ts",
                "d/da/randomFile.ts",
                "e/ea/randomFile.ts",
                "e/ea/eaa/randomFile.ts",
                "e/ea/eaa/eaaa/randomFile.ts",
                "e/ea/eaa/eaaa/x/y/z/randomFile.ts",
                "f/fa/faa/x/y/z/randomFile.ts",
                "f/fa/faa/faaa/randomFile.ts",
            ],
        }),
        "/src/projects/project/src/main.ts": getRandomFileContent(),
        "/src/projects/project/src/fileA.ts": dedent`
            import { foo } from "./fileB.mjs";
            foo();
        `,
        "/src/projects/project/src/fileB.mts": `export function foo() {}`,
        "/src/projects/project/src/randomFile.ts": getRandomFileContent(),
        "/src/projects/project/src/a/randomFile.ts": getRandomFileContent(),
        "/src/projects/project/src/b/ba/randomFile.ts": getRandomFileContent(),
        "/src/projects/project/src/b/randomFile.ts": getRandomFileContent(),
        "/src/projects/project/src/c/ca/randomFile.ts": getRandomFileContent(),
        "/src/projects/project/src/c/ca/caa/randomFile.ts": getRandomFileContent(),
        "/src/projects/project/src/c/ca/caa/caaa/randomFile.ts": getRandomFileContent(),
        "/src/projects/project/src/c/cb/randomFile.ts": getRandomFileContent(),
        "/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts": getRandomFileContent(),
        "/src/projects/project/src/d/da/daa/daaa/randomFile.ts": getRandomFileContent(),
        "/src/projects/project/src/d/da/daa/randomFile.ts": getRandomFileContent(),
        "/src/projects/project/src/d/da/randomFile.ts": getRandomFileContent(),
        "/src/projects/project/src/e/ea/randomFile.ts": getRandomFileContent(),
        "/src/projects/project/src/e/ea/eaa/randomFile.ts": getRandomFileContent(),
        "/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts": getRandomFileContent(),
        "/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts": getRandomFileContent(),
        "/src/projects/project/src/f/fa/faa/faaa/randomFile.ts": getRandomFileContent(),
        "/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts": getRandomFileContent(),
        "/src/projects/project/package.json": jsonToReadableText({ name: "app", version: "1.0.0" }),
    };
}

export function forEachTscPackageJsonScopeScenario(
    action: (
        scenario: string,
        fs: () => FileSystem,
        edits: () => readonly TestTscEdit[],
        project: string,
    ) => void,
) {
    action(
        "project with package json scope",
        () =>
            loadProjectFromFiles({
                ...getFsContentsForPackageJsonScope(),
                "/lib/lib.es2016.full.d.ts": libFile.content,
            }, { cwd: "/src/projects/project" }),
        () => [
            {
                caption: "random edit",
                edit: fs => appendText(fs, "/src/projects/project/src/randomFile.ts", `export const y = 10;`),
            },
            {
                caption: "Modify package json file to add type module",
                edit: fs => fs.writeFileSync(`/src/projects/project/package.json`, JSON.stringify({ name: "app", version: "1.0.0", type: "module" })),
            },
            {
                caption: "Modify package.json file to remove type module",
                edit: fs => fs.writeFileSync(`/src/projects/project/package.json`, JSON.stringify({ name: "app", version: "1.0.0" })),
            },
            {
                caption: "Delete package.json",
                edit: fs => fs.unlinkSync(`/src/projects/project/package.json`),
            },
            {
                caption: "Add package json file with type module",
                edit: fs => fs.writeFileSync(`/src/projects/project/package.json`, JSON.stringify({ name: "app", version: "1.0.0", type: "module" })),
            },
            {
                caption: "Delete package.json and random edit",
                edit: fs => fs.unlinkSync(`/src/projects/project/package.json`),
            },
        ],
        "/src/projects/project/src/tsconfig.json",
    );
}

export function forEachPackageJsonScopeScenario(
    forTsserver: boolean,
    action: (
        scenario: string,
        sys: () => TestServerHost,
        edits: () => readonly TscWatchCompileChange[],
        project: string,
        mainFile: string,
    ) => void,
) {
    action(
        "project with package json scope",
        () =>
            (!forTsserver ? createWatchedSystem : createServerHost)({
                ...getFsContentsForPackageJsonScope(),
                [libFile.path]: libFile.content,
                "/a/lib/lib.es2016.full.d.ts": libFile.content,
            }, { currentDirectory: "/src/projects/project" }),
        () => [
            {
                caption: "random edit",
                edit: sys => sys.appendFile("/src/projects/project/src/randomFile.ts", `export const y = 10;`),
                timeouts: sys => {
                    sys.runQueuedTimeoutCallbacks(); // Failed lookups
                    sys.runQueuedTimeoutCallbacks(); // actual update
                },
            },
            {
                caption: "Modify package json file to add type module",
                edit: sys => sys.writeFile(`/src/projects/project/package.json`, jsonToReadableText({ name: "app", version: "1.0.0", type: "module" })),
                timeouts: sys => {
                    sys.runQueuedTimeoutCallbacks(); // Failed lookups
                    sys.runQueuedTimeoutCallbacks(); // actual update
                },
            },
            {
                caption: "Modify package.json file to remove type module",
                edit: sys => sys.writeFile(`/src/projects/project/package.json`, jsonToReadableText({ name: "app", version: "1.0.0" })),
                timeouts: sys => {
                    sys.runQueuedTimeoutCallbacks(); // Failed lookups
                    sys.runQueuedTimeoutCallbacks(); // actual update
                },
            },
            {
                caption: "Delete package.json",
                edit: sys => sys.deleteFile(`/src/projects/project/package.json`),
                timeouts: sys => {
                    sys.runQueuedTimeoutCallbacks(); // Failed lookups
                    sys.runQueuedTimeoutCallbacks(); // actual update
                },
            },
            {
                caption: "Add package json file with type module",
                edit: sys => sys.writeFile(`/src/projects/project/package.json`, jsonToReadableText({ name: "app", version: "1.0.0", type: "module" })),
                timeouts: sys => {
                    sys.runQueuedTimeoutCallbacks(); // Failed lookups
                    sys.runQueuedTimeoutCallbacks(); // actual update
                },
            },
            {
                caption: "Delete package.json",
                edit: sys => sys.deleteFile(`/src/projects/project/package.json`),
                timeouts: sys => {
                    sys.runQueuedTimeoutCallbacks(); // Failed lookups
                    sys.runQueuedTimeoutCallbacks(); // actual update
                },
            },
        ],
        "/src/projects/project/src/tsconfig.json",
        "/src/projects/project/src/main.ts",
    );
}
