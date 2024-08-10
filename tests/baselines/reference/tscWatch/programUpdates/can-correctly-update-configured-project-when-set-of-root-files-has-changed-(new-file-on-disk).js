currentDirectory:: /user/username/workspace/projects/project useCaseSensitiveFileNames: false
Input::
//// [/user/username/workspace/projects/project/f1.ts]
let x = 1

//// [/user/username/workspace/projects/project/tsconfig.json]
{}

//// [/home/src/tslibs/ts/lib/lib.d.ts]
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
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };


/home/src/tslibs/ts/lib/tsc.js -w
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/workspace/projects/project/f1.js]
var x = 1;



PolledWatches::
/user/username/workspace/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/workspace/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/workspace/projects/project/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/home/src/tslibs/ts/lib/lib.d.ts: *new*
  {}
/user/username/workspace/projects/project/f1.ts: *new*
  {}
/user/username/workspace/projects/project/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/workspace/projects/project: *new*
  {}

Program root files: [
  "/user/username/workspace/projects/project/f1.ts"
]
Program options: {
  "watch": true,
  "configFilePath": "/user/username/workspace/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/user/username/workspace/projects/project/f1.ts

Semantic diagnostics in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts
/user/username/workspace/projects/project/f1.ts

Shape signatures in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts (used version)
/user/username/workspace/projects/project/f1.ts (used version)

exitCode:: ExitStatus.undefined

Change:: Write f2

Input::
//// [/user/username/workspace/projects/project/f2.ts]
let y = 1


Timeout callback:: count: 1
1: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
1: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/workspace/projects/project/f1.js] file written with same contents
//// [/user/username/workspace/projects/project/f2.js]
var y = 1;



PolledWatches::
/user/username/workspace/node_modules/@types:
  {"pollingInterval":500}
/user/username/workspace/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/workspace/projects/project/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/home/src/tslibs/ts/lib/lib.d.ts:
  {}
/user/username/workspace/projects/project/f1.ts:
  {}
/user/username/workspace/projects/project/f2.ts: *new*
  {}
/user/username/workspace/projects/project/tsconfig.json:
  {}

FsWatchesRecursive::
/user/username/workspace/projects/project:
  {}


Program root files: [
  "/user/username/workspace/projects/project/f1.ts",
  "/user/username/workspace/projects/project/f2.ts"
]
Program options: {
  "watch": true,
  "configFilePath": "/user/username/workspace/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/user/username/workspace/projects/project/f1.ts
/user/username/workspace/projects/project/f2.ts

Semantic diagnostics in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts
/user/username/workspace/projects/project/f1.ts
/user/username/workspace/projects/project/f2.ts

Shape signatures in builder refreshed for::
/user/username/workspace/projects/project/f2.ts (computed .d.ts)
/user/username/workspace/projects/project/f1.ts (computed .d.ts)

exitCode:: ExitStatus.undefined
