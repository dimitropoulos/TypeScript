currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/home/src/projects/project/a.ts]
const a = "hello

//// [/home/src/projects/project/tsconfig.json]
{
  "compilerOptions": {
    "outFile": "../outFile.js"
  }
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



Output::
/home/src/tslibs/ts/lib/tsc --b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because output file 'home/src/projects/outFile.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m17[0m - [91merror[0m[90m TS1002: [0mUnterminated string literal.

[7m1[0m const a = "hello
[7m [0m [91m                [0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "noEmit": true,
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/home/src/projects/project/a.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::


//// [/home/src/projects/outFile.tsbuildinfo]
{"root":["./project/a.ts"],"errors":true,"version":"FakeTSVersion"}

//// [/home/src/projects/outFile.tsbuildinfo.readable.baseline.txt]
{
  "root": [
    "./project/a.ts"
  ],
  "errors": true,
  "version": "FakeTSVersion",
  "size": 67
}



Change:: no-change-run
Input::


Output::
/home/src/tslibs/ts/lib/tsc --b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because buildinfo file 'home/src/projects/outFile.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m17[0m - [91merror[0m[90m TS1002: [0mUnterminated string literal.

[7m1[0m const a = "hello
[7m [0m [91m                [0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "noEmit": true,
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/home/src/projects/project/a.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::


//// [/home/src/projects/outFile.tsbuildinfo] file written with same contents
//// [/home/src/projects/outFile.tsbuildinfo.readable.baseline.txt] file written with same contents


Change:: Fix error
Input::
//// [/home/src/projects/project/a.ts]
const a = "hello";



Output::
/home/src/tslibs/ts/lib/tsc --b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because buildinfo file 'home/src/projects/outFile.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

exitCode:: ExitStatus.Success
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "noEmit": true,
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/home/src/projects/project/a.ts

Semantic diagnostics in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts
/home/src/projects/project/a.ts

No shapes updated in the builder::


//// [/home/src/projects/outFile.tsbuildinfo]
{"root":["./project/a.ts"],"version":"FakeTSVersion"}

//// [/home/src/projects/outFile.tsbuildinfo.readable.baseline.txt]
{
  "root": [
    "./project/a.ts"
  ],
  "version": "FakeTSVersion",
  "size": 53
}



Change:: no-change-run
Input::


Output::
/home/src/tslibs/ts/lib/tsc --b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because output file 'home/src/projects/outFile.js' does not exist

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

exitCode:: ExitStatus.Success
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "noEmit": true,
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/home/src/projects/project/a.ts

Semantic diagnostics in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts
/home/src/projects/project/a.ts

No shapes updated in the builder::


//// [/home/src/projects/outFile.tsbuildinfo] file written with same contents
//// [/home/src/projects/outFile.tsbuildinfo.readable.baseline.txt] file written with same contents


Change:: Emit after fixing error
Input::


Output::
/home/src/tslibs/ts/lib/tsc --b --v /home/src/projects/project
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because output file 'home/src/projects/outFile.js' does not exist

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

exitCode:: ExitStatus.Success
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/home/src/projects/project/a.ts

Semantic diagnostics in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts
/home/src/projects/project/a.ts

No shapes updated in the builder::


//// [/home/src/projects/outFile.js]
var a = "hello";


//// [/home/src/projects/outFile.tsbuildinfo] file written with same contents
//// [/home/src/projects/outFile.tsbuildinfo.readable.baseline.txt] file written with same contents


Change:: no-change-run
Input::


Output::
/home/src/tslibs/ts/lib/tsc --b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is up to date because newest input 'home/src/projects/project/a.ts' is older than output 'home/src/projects/outFile.js'

exitCode:: ExitStatus.Success




Change:: Introduce error
Input::
//// [/home/src/projects/project/a.ts]
const a = "hello



Output::
/home/src/tslibs/ts/lib/tsc --b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because output 'home/src/projects/outFile.tsbuildinfo' is older than input 'home/src/projects/project/a.ts'

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m17[0m - [91merror[0m[90m TS1002: [0mUnterminated string literal.

[7m1[0m const a = "hello
[7m [0m [91m                [0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "noEmit": true,
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/home/src/projects/project/a.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::


//// [/home/src/projects/outFile.tsbuildinfo]
{"root":["./project/a.ts"],"errors":true,"version":"FakeTSVersion"}

//// [/home/src/projects/outFile.tsbuildinfo.readable.baseline.txt]
{
  "root": [
    "./project/a.ts"
  ],
  "errors": true,
  "version": "FakeTSVersion",
  "size": 67
}



Change:: Emit when error
Input::


Output::
/home/src/tslibs/ts/lib/tsc --b --v /home/src/projects/project
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because buildinfo file 'home/src/projects/outFile.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m17[0m - [91merror[0m[90m TS1002: [0mUnterminated string literal.

[7m1[0m const a = "hello
[7m [0m [91m                [0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/home/src/projects/project/a.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::


//// [/home/src/projects/outFile.js]
var a = "hello;


//// [/home/src/projects/outFile.tsbuildinfo] file written with same contents
//// [/home/src/projects/outFile.tsbuildinfo.readable.baseline.txt] file written with same contents


Change:: no-change-run
Input::


Output::
/home/src/tslibs/ts/lib/tsc --b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because buildinfo file 'home/src/projects/outFile.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m17[0m - [91merror[0m[90m TS1002: [0mUnterminated string literal.

[7m1[0m const a = "hello
[7m [0m [91m                [0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
  "outFile": "/home/src/projects/outFile.js",
  "noEmit": true,
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/home/src/projects/project/a.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::


//// [/home/src/projects/outFile.tsbuildinfo] file written with same contents
//// [/home/src/projects/outFile.tsbuildinfo.readable.baseline.txt] file written with same contents
