currentDirectory:: /src/projects/project useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Before request
//// [/src/projects/project/src/tsconfig.json]
{
  "compilerOptions": {
    "target": "es2016",
    "composite": true,
    "module": "node16",
    "outDir": "../out",
    "traceResolution": true
  },
  "files": [
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
    "f/fa/faa/faaa/randomFile.ts"
  ]
}

//// [/src/projects/project/src/main.ts]
export const x = 10;

//// [/src/projects/project/src/fileA.ts]
import { foo } from "./fileB.mjs";
foo();


//// [/src/projects/project/src/fileB.mts]
export function foo() {}

//// [/src/projects/project/src/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/a/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/b/ba/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/b/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/c/ca/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/c/ca/caa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/c/ca/caa/caaa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/c/cb/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/d/da/daa/daaa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/d/da/daa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/d/da/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/e/ea/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/e/ea/eaa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/f/fa/faa/faaa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts]
export const x = 10;

//// [/src/projects/project/package.json]
{
  "name": "app",
  "version": "1.0.0"
}

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/a/lib/lib.es2016.full.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/src/projects/project/src/main.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /src/projects/project/src/main.ts ProjectRootPath: undefined:: Result: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/tsconfig.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/src/projects/project/src/tsconfig.json",
        "reason": "Creating possible configured project for /src/projects/project/src/main.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /src/projects/project/src/tsconfig.json : {
 "rootNames": [
  "/src/projects/project/src/main.ts",
  "/src/projects/project/src/fileA.ts",
  "/src/projects/project/src/fileB.mts",
  "/src/projects/project/src/randomFile.ts",
  "/src/projects/project/src/a/randomFile.ts",
  "/src/projects/project/src/b/ba/randomFile.ts",
  "/src/projects/project/src/b/randomFile.ts",
  "/src/projects/project/src/c/ca/randomFile.ts",
  "/src/projects/project/src/c/ca/caa/randomFile.ts",
  "/src/projects/project/src/c/ca/caa/caaa/randomFile.ts",
  "/src/projects/project/src/c/cb/randomFile.ts",
  "/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts",
  "/src/projects/project/src/d/da/daa/daaa/randomFile.ts",
  "/src/projects/project/src/d/da/daa/randomFile.ts",
  "/src/projects/project/src/d/da/randomFile.ts",
  "/src/projects/project/src/e/ea/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts",
  "/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts",
  "/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts",
  "/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"
 ],
 "options": {
  "target": 3,
  "composite": true,
  "module": 100,
  "outDir": "/src/projects/project/out",
  "traceResolution": true,
  "configFilePath": "/src/projects/project/src/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/fileA.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/fileB.mts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/randomFile.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/a/randomFile.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/b/ba/randomFile.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/b/randomFile.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/ca/randomFile.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/ca/caa/randomFile.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/ca/caa/caaa/randomFile.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/cb/randomFile.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/daaa/randomFile.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/randomFile.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/randomFile.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/randomFile.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/randomFile.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/faaa/randomFile.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/src/projects/project/package.json'.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] ======== Resolving module './fileB.mjs' from '/src/projects/project/src/fileA.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in CJS mode with conditions 'require', 'types', 'node'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/src/projects/project/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] File name '/src/projects/project/src/fileB.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/fileB.mts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './fileB.mjs' was successfully resolved to '/src/projects/project/src/fileB.mts'. ========
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/a/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/ba/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/cb/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist.
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.es2016.full.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/a/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/b/ba/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/b/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/ca/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/ca/caa/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/ca/caa/caaa/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/cb/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/daaa/x/y/z/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/daaa/x/y/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/daaa/x/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/daaa/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/eaaa/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/eaaa/x/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/x/y/z/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/x/y/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/x/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/faaa/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /src/projects/project/src/node_modules/@types 1 undefined Project: /src/projects/project/src/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /src/projects/project/src/node_modules/@types 1 undefined Project: /src/projects/project/src/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /src/projects/project/node_modules/@types 1 undefined Project: /src/projects/project/src/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /src/projects/project/node_modules/@types 1 undefined Project: /src/projects/project/src/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /src/projects/project/src/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/src/projects/project/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (22)
	/a/lib/lib.es2016.full.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/src/projects/project/src/main.ts SVC-1-0 "export const x = 10;"
	/src/projects/project/src/fileB.mts Text-1 "export function foo() {}"
	/src/projects/project/src/fileA.ts Text-1 "import { foo } from \"./fileB.mjs\";\nfoo();\n"
	/src/projects/project/src/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/a/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/b/ba/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/b/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/caa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/caa/caaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/cb/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/daaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/f/fa/faa/faaa/randomFile.ts Text-1 "export const x = 10;"


	../../../../a/lib/lib.es2016.full.d.ts
	  Default library for target 'es2016'
	main.ts
	  Part of 'files' list in tsconfig.json
	  File is CommonJS module because '../package.json' does not have field "type"
	fileB.mts
	  Imported via "./fileB.mjs" from file 'fileA.ts'
	  Part of 'files' list in tsconfig.json
	fileA.ts
	  Part of 'files' list in tsconfig.json
	  File is CommonJS module because '../package.json' does not have field "type"
	randomFile.ts
	  Part of 'files' list in tsconfig.json
	  File is CommonJS module because '../package.json' does not have field "type"
	a/randomFile.ts
	  Part of 'files' list in tsconfig.json
	  File is CommonJS module because '../package.json' does not have field "type"
	b/ba/randomFile.ts
	  Part of 'files' list in tsconfig.json
	  File is CommonJS module because '../package.json' does not have field "type"
	b/randomFile.ts
	  Part of 'files' list in tsconfig.json
	  File is CommonJS module because '../package.json' does not have field "type"
	c/ca/randomFile.ts
	  Part of 'files' list in tsconfig.json
	  File is CommonJS module because '../package.json' does not have field "type"
	c/ca/caa/randomFile.ts
	  Part of 'files' list in tsconfig.json
	  File is CommonJS module because '../package.json' does not have field "type"
	c/ca/caa/caaa/randomFile.ts
	  Part of 'files' list in tsconfig.json
	  File is CommonJS module because '../package.json' does not have field "type"
	c/cb/randomFile.ts
	  Part of 'files' list in tsconfig.json
	  File is CommonJS module because '../package.json' does not have field "type"
	d/da/daa/daaa/x/y/z/randomFile.ts
	  Part of 'files' list in tsconfig.json
	  File is CommonJS module because '../package.json' does not have field "type"
	d/da/daa/daaa/randomFile.ts
	  Part of 'files' list in tsconfig.json
	  File is CommonJS module because '../package.json' does not have field "type"
	d/da/daa/randomFile.ts
	  Part of 'files' list in tsconfig.json
	  File is CommonJS module because '../package.json' does not have field "type"
	d/da/randomFile.ts
	  Part of 'files' list in tsconfig.json
	  File is CommonJS module because '../package.json' does not have field "type"
	e/ea/randomFile.ts
	  Part of 'files' list in tsconfig.json
	  File is CommonJS module because '../package.json' does not have field "type"
	e/ea/eaa/randomFile.ts
	  Part of 'files' list in tsconfig.json
	  File is CommonJS module because '../package.json' does not have field "type"
	e/ea/eaa/eaaa/randomFile.ts
	  Part of 'files' list in tsconfig.json
	  File is CommonJS module because '../package.json' does not have field "type"
	e/ea/eaa/eaaa/x/y/z/randomFile.ts
	  Part of 'files' list in tsconfig.json
	  File is CommonJS module because '../package.json' does not have field "type"
	f/fa/faa/x/y/z/randomFile.ts
	  Part of 'files' list in tsconfig.json
	  File is CommonJS module because '../package.json' does not have field "type"
	f/fa/faa/faaa/randomFile.ts
	  Part of 'files' list in tsconfig.json
	  File is CommonJS module because '../package.json' does not have field "type"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /src/projects/project/package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/src/projects/project/src/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "b997a2f9dcfd446fea146477e5e342bc842ac0c1bddf0a5d5de18d5eb80046f4",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 21,
            "tsSize": 446,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 1,
            "dtsSize": 334,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {
            "target": "es2016",
            "composite": true,
            "module": "node16",
            "outDir": "",
            "traceResolution": true
          },
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": true,
          "include": false,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "tsconfig.json",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/src/projects/project/src/main.ts",
        "configFile": "/src/projects/project/src/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /src/projects/project/src/tsconfig.json ProjectRootPath: undefined:: Result: undefined
Info seq  [hh:mm:ss:mss] Project '/src/projects/project/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (22)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /src/projects/project/src/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 1,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      }
    }
After request

PolledWatches::
/src/projects/project/node_modules/@types: *new*
  {"pollingInterval":500}
/src/projects/project/src/a/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/b/ba/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/b/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/caa/caaa/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/caa/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/c/cb/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/c/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/y/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/d/da/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/d/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/e/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/faaa/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/y/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/y/z/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/f/package.json: *new*
  {"pollingInterval":2000}
/src/projects/project/src/node_modules/@types: *new*
  {"pollingInterval":500}
/src/projects/project/src/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/a/lib/lib.es2016.full.d.ts: *new*
  {}
/src/projects/project/package.json: *new*
  {}
/src/projects/project/src/a/randomFile.ts: *new*
  {}
/src/projects/project/src/b/ba/randomFile.ts: *new*
  {}
/src/projects/project/src/b/randomFile.ts: *new*
  {}
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts: *new*
  {}
/src/projects/project/src/c/ca/caa/randomFile.ts: *new*
  {}
/src/projects/project/src/c/ca/randomFile.ts: *new*
  {}
/src/projects/project/src/c/cb/randomFile.ts: *new*
  {}
/src/projects/project/src/d/da/daa/daaa/randomFile.ts: *new*
  {}
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts: *new*
  {}
/src/projects/project/src/d/da/daa/randomFile.ts: *new*
  {}
/src/projects/project/src/d/da/randomFile.ts: *new*
  {}
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts: *new*
  {}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts: *new*
  {}
/src/projects/project/src/e/ea/eaa/randomFile.ts: *new*
  {}
/src/projects/project/src/e/ea/randomFile.ts: *new*
  {}
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts: *new*
  {}
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts: *new*
  {}
/src/projects/project/src/fileA.ts: *new*
  {}
/src/projects/project/src/fileB.mts: *new*
  {}
/src/projects/project/src/randomFile.ts: *new*
  {}
/src/projects/project/src/tsconfig.json: *new*
  {}

Projects::
/src/projects/project/src/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/lib/lib.es2016.full.d.ts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/a/randomFile.ts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/b/ba/randomFile.ts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/b/randomFile.ts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/c/ca/caa/randomFile.ts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/c/ca/randomFile.ts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/c/cb/randomFile.ts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/d/da/daa/daaa/randomFile.ts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/d/da/daa/randomFile.ts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/d/da/randomFile.ts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/e/ea/eaa/randomFile.ts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/e/ea/randomFile.ts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/fileA.ts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/fileB.mts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/main.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /src/projects/project/src/tsconfig.json *default*
/src/projects/project/src/randomFile.ts *new*
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json

random edit
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /src/projects/project/src/randomFile.ts 1:: WatchInfo: /src/projects/project/src/randomFile.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Scheduled: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/src/randomFile.ts 1:: WatchInfo: /src/projects/project/src/randomFile.ts 500 undefined WatchType: Closed Script info
Before running Timeout callback:: count: 2
1: /src/projects/project/src/tsconfig.json
2: *ensureProjectForOpenFiles*
//// [/src/projects/project/src/randomFile.ts]
export const x = 10;export const y = 10;


Timeout callback:: count: 2
1: /src/projects/project/src/tsconfig.json *new*
2: *ensureProjectForOpenFiles* *new*

Projects::
/src/projects/project/src/tsconfig.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1
    dirty: true *changed*

ScriptInfos::
/a/lib/lib.es2016.full.d.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/a/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/b/ba/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/b/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/c/ca/caa/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/c/ca/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/c/cb/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/d/da/daa/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/d/da/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/e/ea/eaa/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/e/ea/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/fileA.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/fileB.mts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /src/projects/project/src/tsconfig.json *default*
/src/projects/project/src/randomFile.ts *changed*
    version: Text-1
    pendingReloadFromDisk: true *changed*
    containingProjects: 1
        /src/projects/project/src/tsconfig.json

Info seq  [hh:mm:ss:mss] Running: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /src/projects/project/src/tsconfig.json projectStateVersion: 2 projectProgramVersion: 1 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/src/projects/project/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (22)
	/a/lib/lib.es2016.full.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/src/projects/project/src/main.ts SVC-1-0 "export const x = 10;"
	/src/projects/project/src/fileB.mts Text-1 "export function foo() {}"
	/src/projects/project/src/fileA.ts Text-1 "import { foo } from \"./fileB.mjs\";\nfoo();\n"
	/src/projects/project/src/randomFile.ts Text-2 "export const x = 10;export const y = 10;"
	/src/projects/project/src/a/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/b/ba/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/b/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/caa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/caa/caaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/cb/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/daaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/f/fa/faa/faaa/randomFile.ts Text-1 "export const x = 10;"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/src/projects/project/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (22)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /src/projects/project/src/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/src/projects/project/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (22)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /src/projects/project/src/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /src/projects/project/src/main.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/src/projects/project/src/main.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

Projects::
/src/projects/project/src/tsconfig.json (Configured) *changed*
    projectStateVersion: 2
    projectProgramVersion: 1
    dirty: false *changed*

ScriptInfos::
/a/lib/lib.es2016.full.d.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/a/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/b/ba/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/b/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/c/ca/caa/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/c/ca/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/c/cb/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/d/da/daa/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/d/da/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/e/ea/eaa/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/e/ea/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/fileA.ts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/fileB.mts
    version: Text-1
    containingProjects: 1
        /src/projects/project/src/tsconfig.json
/src/projects/project/src/main.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /src/projects/project/src/tsconfig.json *default*
/src/projects/project/src/randomFile.ts *changed*
    version: Text-2 *changed*
    pendingReloadFromDisk: false *changed*
    containingProjects: 1
        /src/projects/project/src/tsconfig.json

Before running Timeout callback:: count: 0

After running Timeout callback:: count: 0

Modify package json file to add type module
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /src/projects/project/package.json 1:: WatchInfo: /src/projects/project/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Scheduled: /src/projects/project/src/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/package.json 1:: WatchInfo: /src/projects/project/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /src/projects/project/package.json 1:: WatchInfo: /src/projects/project/package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/package.json 1:: WatchInfo: /src/projects/project/package.json 250 undefined WatchType: package.json file
Before running Timeout callback:: count: 1
3: /src/projects/project/src/tsconfig.jsonFailedLookupInvalidation
//// [/src/projects/project/package.json]
{
  "name": "app",
  "version": "1.0.0",
  "type": "module"
}


Timeout callback:: count: 1
3: /src/projects/project/src/tsconfig.jsonFailedLookupInvalidation *new*

Info seq  [hh:mm:ss:mss] Running: /src/projects/project/src/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2

Timeout callback:: count: 2
4: /src/projects/project/src/tsconfig.json *new*
5: *ensureProjectForOpenFiles* *new*

Projects::
/src/projects/project/src/tsconfig.json (Configured) *changed*
    projectStateVersion: 3 *changed*
    projectProgramVersion: 1
    dirty: true *changed*

Before running Timeout callback:: count: 2
4: /src/projects/project/src/tsconfig.json
5: *ensureProjectForOpenFiles*

Info seq  [hh:mm:ss:mss] Running: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/src/projects/project/package.json'.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] ======== Resolving module './fileB.mjs' from '/src/projects/project/src/fileA.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/src/projects/project/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] File name '/src/projects/project/src/fileB.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/fileB.mts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './fileB.mjs' was successfully resolved to '/src/projects/project/src/fileB.mts'. ========
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /src/projects/project/src/tsconfig.json projectStateVersion: 3 projectProgramVersion: 1 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/src/projects/project/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (22)
	/a/lib/lib.es2016.full.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/src/projects/project/src/main.ts SVC-1-0 "export const x = 10;"
	/src/projects/project/src/fileB.mts Text-1 "export function foo() {}"
	/src/projects/project/src/fileA.ts Text-1 "import { foo } from \"./fileB.mjs\";\nfoo();\n"
	/src/projects/project/src/randomFile.ts Text-2 "export const x = 10;export const y = 10;"
	/src/projects/project/src/a/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/b/ba/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/b/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/caa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/caa/caaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/cb/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/daaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/f/fa/faa/faaa/randomFile.ts Text-1 "export const x = 10;"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/src/projects/project/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (22)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /src/projects/project/src/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/src/projects/project/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (22)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /src/projects/project/src/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /src/projects/project/src/main.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/src/projects/project/src/main.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

Projects::
/src/projects/project/src/tsconfig.json (Configured) *changed*
    projectStateVersion: 3
    projectProgramVersion: 2 *changed*
    dirty: false *changed*

Modify package.json file to remove type module
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /src/projects/project/package.json 1:: WatchInfo: /src/projects/project/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Scheduled: /src/projects/project/src/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/package.json 1:: WatchInfo: /src/projects/project/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /src/projects/project/package.json 1:: WatchInfo: /src/projects/project/package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/package.json 1:: WatchInfo: /src/projects/project/package.json 250 undefined WatchType: package.json file
Before running Timeout callback:: count: 1
6: /src/projects/project/src/tsconfig.jsonFailedLookupInvalidation
//// [/src/projects/project/package.json]
{
  "name": "app",
  "version": "1.0.0"
}


Timeout callback:: count: 1
6: /src/projects/project/src/tsconfig.jsonFailedLookupInvalidation *new*

Info seq  [hh:mm:ss:mss] Running: /src/projects/project/src/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2

Timeout callback:: count: 2
7: /src/projects/project/src/tsconfig.json *new*
8: *ensureProjectForOpenFiles* *new*

Projects::
/src/projects/project/src/tsconfig.json (Configured) *changed*
    projectStateVersion: 4 *changed*
    projectProgramVersion: 2
    dirty: true *changed*

Before running Timeout callback:: count: 2
7: /src/projects/project/src/tsconfig.json
8: *ensureProjectForOpenFiles*

Info seq  [hh:mm:ss:mss] Running: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/src/projects/project/package.json'.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] ======== Resolving module './fileB.mjs' from '/src/projects/project/src/fileA.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in CJS mode with conditions 'require', 'types', 'node'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/src/projects/project/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] File name '/src/projects/project/src/fileB.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/fileB.mts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './fileB.mjs' was successfully resolved to '/src/projects/project/src/fileB.mts'. ========
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /src/projects/project/src/tsconfig.json projectStateVersion: 4 projectProgramVersion: 2 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/src/projects/project/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (22)
	/a/lib/lib.es2016.full.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/src/projects/project/src/main.ts SVC-1-0 "export const x = 10;"
	/src/projects/project/src/fileB.mts Text-1 "export function foo() {}"
	/src/projects/project/src/fileA.ts Text-1 "import { foo } from \"./fileB.mjs\";\nfoo();\n"
	/src/projects/project/src/randomFile.ts Text-2 "export const x = 10;export const y = 10;"
	/src/projects/project/src/a/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/b/ba/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/b/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/caa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/caa/caaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/cb/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/daaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/f/fa/faa/faaa/randomFile.ts Text-1 "export const x = 10;"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/src/projects/project/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (22)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /src/projects/project/src/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/src/projects/project/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (22)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /src/projects/project/src/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /src/projects/project/src/main.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/src/projects/project/src/main.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

Projects::
/src/projects/project/src/tsconfig.json (Configured) *changed*
    projectStateVersion: 4
    projectProgramVersion: 3 *changed*
    dirty: false *changed*

Delete package.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /src/projects/project/package.json 2:: WatchInfo: /src/projects/project/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Scheduled: /src/projects/project/src/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/package.json 2:: WatchInfo: /src/projects/project/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /src/projects/project/package.json 2:: WatchInfo: /src/projects/project/package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /src/projects/project/package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/package.json 2:: WatchInfo: /src/projects/project/package.json 250 undefined WatchType: package.json file
Before running Timeout callback:: count: 1
9: /src/projects/project/src/tsconfig.jsonFailedLookupInvalidation
//// [/src/projects/project/package.json] deleted

Timeout callback:: count: 1
9: /src/projects/project/src/tsconfig.jsonFailedLookupInvalidation *new*

Info seq  [hh:mm:ss:mss] Running: /src/projects/project/src/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2

Timeout callback:: count: 2
10: /src/projects/project/src/tsconfig.json *new*
11: *ensureProjectForOpenFiles* *new*

Projects::
/src/projects/project/src/tsconfig.json (Configured) *changed*
    projectStateVersion: 5 *changed*
    projectProgramVersion: 3
    dirty: true *changed*

Before running Timeout callback:: count: 2
10: /src/projects/project/src/tsconfig.json
11: *ensureProjectForOpenFiles*

Info seq  [hh:mm:ss:mss] Running: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './fileB.mjs' from '/src/projects/project/src/fileA.ts' of old program, it was successfully resolved to '/src/projects/project/src/fileB.mts'.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /src/projects/project/src/tsconfig.json projectStateVersion: 5 projectProgramVersion: 3 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/src/projects/project/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (22)
	/a/lib/lib.es2016.full.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/src/projects/project/src/main.ts SVC-1-0 "export const x = 10;"
	/src/projects/project/src/fileB.mts Text-1 "export function foo() {}"
	/src/projects/project/src/fileA.ts Text-1 "import { foo } from \"./fileB.mjs\";\nfoo();\n"
	/src/projects/project/src/randomFile.ts Text-2 "export const x = 10;export const y = 10;"
	/src/projects/project/src/a/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/b/ba/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/b/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/caa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/caa/caaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/cb/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/daaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/f/fa/faa/faaa/randomFile.ts Text-1 "export const x = 10;"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/src/projects/project/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (22)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /src/projects/project/src/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/src/projects/project/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (22)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /src/projects/project/src/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /src/projects/project/src/main.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/src/projects/project/src/main.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

Projects::
/src/projects/project/src/tsconfig.json (Configured) *changed*
    projectStateVersion: 5
    projectProgramVersion: 4 *changed*
    dirty: false *changed*

Add package json file with type module
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /src/projects/project/package.json 0:: WatchInfo: /src/projects/project/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Scheduled: /src/projects/project/src/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/package.json 0:: WatchInfo: /src/projects/project/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Before running Timeout callback:: count: 1
12: /src/projects/project/src/tsconfig.jsonFailedLookupInvalidation
//// [/src/projects/project/package.json]
{
  "name": "app",
  "version": "1.0.0",
  "type": "module"
}


Timeout callback:: count: 1
12: /src/projects/project/src/tsconfig.jsonFailedLookupInvalidation *new*

Info seq  [hh:mm:ss:mss] Running: /src/projects/project/src/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2

Timeout callback:: count: 2
13: /src/projects/project/src/tsconfig.json *new*
14: *ensureProjectForOpenFiles* *new*

Projects::
/src/projects/project/src/tsconfig.json (Configured) *changed*
    projectStateVersion: 6 *changed*
    projectProgramVersion: 4
    dirty: true *changed*

Before running Timeout callback:: count: 2
13: /src/projects/project/src/tsconfig.json
14: *ensureProjectForOpenFiles*

Info seq  [hh:mm:ss:mss] Running: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Found 'package.json' at '/src/projects/project/package.json'.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] ======== Resolving module './fileB.mjs' from '/src/projects/project/src/fileA.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/src/projects/project/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] File name '/src/projects/project/src/fileB.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/fileB.mts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './fileB.mjs' was successfully resolved to '/src/projects/project/src/fileB.mts'. ========
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' exists according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /src/projects/project/src/tsconfig.json projectStateVersion: 6 projectProgramVersion: 4 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/src/projects/project/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (22)
	/a/lib/lib.es2016.full.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/src/projects/project/src/main.ts SVC-1-0 "export const x = 10;"
	/src/projects/project/src/fileB.mts Text-1 "export function foo() {}"
	/src/projects/project/src/fileA.ts Text-1 "import { foo } from \"./fileB.mjs\";\nfoo();\n"
	/src/projects/project/src/randomFile.ts Text-2 "export const x = 10;export const y = 10;"
	/src/projects/project/src/a/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/b/ba/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/b/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/caa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/caa/caaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/cb/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/daaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/f/fa/faa/faaa/randomFile.ts Text-1 "export const x = 10;"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/src/projects/project/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (22)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /src/projects/project/src/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/src/projects/project/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (22)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /src/projects/project/src/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /src/projects/project/src/main.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/src/projects/project/src/main.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

Projects::
/src/projects/project/src/tsconfig.json (Configured) *changed*
    projectStateVersion: 6
    projectProgramVersion: 5 *changed*
    dirty: false *changed*

Delete package.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /src/projects/project/package.json 2:: WatchInfo: /src/projects/project/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Scheduled: /src/projects/project/src/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/package.json 2:: WatchInfo: /src/projects/project/package.json 2000 undefined Project: /src/projects/project/src/tsconfig.json WatchType: File location affecting resolution
Before running Timeout callback:: count: 1
15: /src/projects/project/src/tsconfig.jsonFailedLookupInvalidation
//// [/src/projects/project/package.json] deleted

Timeout callback:: count: 1
15: /src/projects/project/src/tsconfig.jsonFailedLookupInvalidation *new*

Info seq  [hh:mm:ss:mss] Running: /src/projects/project/src/tsconfig.jsonFailedLookupInvalidation
Info seq  [hh:mm:ss:mss] Scheduled: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2

Timeout callback:: count: 2
16: /src/projects/project/src/tsconfig.json *new*
17: *ensureProjectForOpenFiles* *new*

Projects::
/src/projects/project/src/tsconfig.json (Configured) *changed*
    projectStateVersion: 7 *changed*
    projectProgramVersion: 5
    dirty: true *changed*

Before running Timeout callback:: count: 2
16: /src/projects/project/src/tsconfig.json
17: *ensureProjectForOpenFiles*

Info seq  [hh:mm:ss:mss] Running: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] ======== Resolving module './fileB.mjs' from '/src/projects/project/src/fileA.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node16'.
Info seq  [hh:mm:ss:mss] Resolving in CJS mode with conditions 'require', 'types', 'node'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/src/projects/project/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
Info seq  [hh:mm:ss:mss] File name '/src/projects/project/src/fileB.mjs' has a '.mjs' extension - stripping it.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/fileB.mts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './fileB.mjs' was successfully resolved to '/src/projects/project/src/fileB.mts'. ========
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/ba/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/b/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/caa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/ca/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/cb/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/c/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/daa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/da/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/d/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/eaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/ea/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/e/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/faa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/fa/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/f/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/projects/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/src/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/a/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /src/projects/project/src/tsconfig.json projectStateVersion: 7 projectProgramVersion: 5 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/src/projects/project/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (22)
	/a/lib/lib.es2016.full.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/src/projects/project/src/main.ts SVC-1-0 "export const x = 10;"
	/src/projects/project/src/fileB.mts Text-1 "export function foo() {}"
	/src/projects/project/src/fileA.ts Text-1 "import { foo } from \"./fileB.mjs\";\nfoo();\n"
	/src/projects/project/src/randomFile.ts Text-2 "export const x = 10;export const y = 10;"
	/src/projects/project/src/a/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/b/ba/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/b/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/caa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/ca/caa/caaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/c/cb/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/daaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/daa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/d/da/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts Text-1 "export const x = 10;"
	/src/projects/project/src/f/fa/faa/faaa/randomFile.ts Text-1 "export const x = 10;"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/src/projects/project/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (22)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /src/projects/project/src/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/src/projects/project/src/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (22)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /src/projects/project/src/main.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /src/projects/project/src/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /src/projects/project/src/main.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/src/projects/project/src/main.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

Projects::
/src/projects/project/src/tsconfig.json (Configured) *changed*
    projectStateVersion: 7
    projectProgramVersion: 6 *changed*
    dirty: false *changed*
