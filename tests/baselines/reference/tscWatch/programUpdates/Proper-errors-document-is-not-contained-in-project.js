currentDirectory:: /user/username/workspace/projects/project useCaseSensitiveFileNames: false
Input::
//// [/user/username/workspace/projects/project/app.ts]


//// [/user/username/workspace/projects/project/tsconfig.json]
{

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

[96mtsconfig.json[0m:[93m1[0m:[93m2[0m - [91merror[0m[90m TS1005: [0m'}' expected.

[7m1[0m {
[7m [0m [91m [0m

  [96mtsconfig.json[0m:[93m1[0m:[93m1[0m
    [7m1[0m {
    [7m [0m [96m~[0m
    The parser expected to find a '}' to match the '{' token here.

[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.



//// [/user/username/workspace/projects/project/app.js]



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
/user/username/workspace/projects/project/app.ts: *new*
  {}
/user/username/workspace/projects/project/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/workspace/projects/project: *new*
  {}

Program root files: [
  "/user/username/workspace/projects/project/app.ts"
]
Program options: {
  "watch": true,
  "configFilePath": "/user/username/workspace/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/user/username/workspace/projects/project/app.ts

Semantic diagnostics in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts
/user/username/workspace/projects/project/app.ts

Shape signatures in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts (used version)
/user/username/workspace/projects/project/app.ts (used version)

exitCode:: ExitStatus.undefined
