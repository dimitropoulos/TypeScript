currentDirectory:: /user/username/workspace/projects/project useCaseSensitiveFileNames: false
Input::
//// [/user/username/workspace/projects/project/commonFile1.ts]
let x = 1

//// [/user/username/workspace/projects/project/commonFile2.ts]
let y = 1

//// [/user/username/workspace/projects/project/tsconfig.json]
{
                    "compilerOptions": {},
                    "files": ["/user/username/workspace/projects/project/commonFile1.ts", "/user/username/workspace/projects/project/commonFile2.ts"]
                }

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


/home/src/tslibs/ts/lib/tsc.js -w --explainFiles
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

../../../../../home/src/tslibs/ts/lib/lib.d.ts
  Default library for target 'es5'
commonFile1.ts
  Part of 'files' list in tsconfig.json
commonFile2.ts
  Part of 'files' list in tsconfig.json
[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/workspace/projects/project/commonFile1.js]
var x = 1;


//// [/user/username/workspace/projects/project/commonFile2.js]
var y = 1;



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
/user/username/workspace/projects/project/commonFile1.ts: *new*
  {}
/user/username/workspace/projects/project/commonFile2.ts: *new*
  {}
/user/username/workspace/projects/project/tsconfig.json: *new*
  {}

Program root files: [
  "/user/username/workspace/projects/project/commonFile1.ts",
  "/user/username/workspace/projects/project/commonFile2.ts"
]
Program options: {
  "watch": true,
  "explainFiles": true,
  "configFilePath": "/user/username/workspace/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/user/username/workspace/projects/project/commonFile1.ts
/user/username/workspace/projects/project/commonFile2.ts

Semantic diagnostics in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts
/user/username/workspace/projects/project/commonFile1.ts
/user/username/workspace/projects/project/commonFile2.ts

Shape signatures in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts (used version)
/user/username/workspace/projects/project/commonfile1.ts (used version)
/user/username/workspace/projects/project/commonfile2.ts (used version)

exitCode:: ExitStatus.undefined

Change:: change file to ensure signatures are updated

Input::
//// [/user/username/workspace/projects/project/commonFile2.ts]
let y = 1;let xy = 10;


Timeout callback:: count: 1
1: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
1: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

../../../../../home/src/tslibs/ts/lib/lib.d.ts
  Default library for target 'es5'
commonFile1.ts
  Part of 'files' list in tsconfig.json
commonFile2.ts
  Part of 'files' list in tsconfig.json
[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/workspace/projects/project/commonFile1.js] file written with same contents
//// [/user/username/workspace/projects/project/commonFile2.js]
var y = 1;
var xy = 10;




Program root files: [
  "/user/username/workspace/projects/project/commonFile1.ts",
  "/user/username/workspace/projects/project/commonFile2.ts"
]
Program options: {
  "watch": true,
  "explainFiles": true,
  "configFilePath": "/user/username/workspace/projects/project/tsconfig.json"
}
Program structureReused: Completely
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/user/username/workspace/projects/project/commonFile1.ts
/user/username/workspace/projects/project/commonFile2.ts

Semantic diagnostics in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts
/user/username/workspace/projects/project/commonFile1.ts
/user/username/workspace/projects/project/commonFile2.ts

Shape signatures in builder refreshed for::
/user/username/workspace/projects/project/commonfile2.ts (computed .d.ts)
/user/username/workspace/projects/project/commonfile1.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: Change config

Input::
//// [/user/username/workspace/projects/project/tsconfig.json]
{
                        "compilerOptions": {},
                        "files": ["/user/username/workspace/projects/project/commonFile1.ts"]
                    }


Timeout callback:: count: 1
2: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
2: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

../../../../../home/src/tslibs/ts/lib/lib.d.ts
  Default library for target 'es5'
commonFile1.ts
  Part of 'files' list in tsconfig.json
[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/user/username/workspace/projects/project/commonFile1.js] file written with same contents

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
/user/username/workspace/projects/project/commonFile1.ts:
  {}
/user/username/workspace/projects/project/tsconfig.json:
  {}

FsWatches *deleted*::
/user/username/workspace/projects/project/commonFile2.ts:
  {}


Program root files: [
  "/user/username/workspace/projects/project/commonFile1.ts"
]
Program options: {
  "watch": true,
  "explainFiles": true,
  "configFilePath": "/user/username/workspace/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/user/username/workspace/projects/project/commonFile1.ts

Semantic diagnostics in builder refreshed for::
/user/username/workspace/projects/project/commonFile1.ts

Shape signatures in builder refreshed for::
/user/username/workspace/projects/project/commonfile1.ts (computed .d.ts)

exitCode:: ExitStatus.undefined
