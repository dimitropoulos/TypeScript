currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/home/src/projects/project/a.ts]
const a = class { private p = 10; };

//// [/home/src/projects/project/tsconfig.json]
{
  "compilerOptions": {}
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

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because output file 'home/src/projects/project/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

exitCode:: ExitStatus.Success
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
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

Shape signatures in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts (used version)
/home/src/projects/project/a.ts (used version)


//// [/home/src/projects/project/tsconfig.tsbuildinfo]
{"root":["./a.ts"],"version":"FakeTSVersion"}

//// [/home/src/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "root": [
    "./a.ts"
  ],
  "version": "FakeTSVersion",
  "size": 45
}



Change:: no-change-run
Input::


Output::
/home/src/tslibs/ts/lib/tsc --b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because output file 'home/src/projects/project/a.js' does not exist

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

exitCode:: ExitStatus.Success
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
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

Shape signatures in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts (used version)
/home/src/projects/project/a.ts (used version)


//// [/home/src/projects/project/tsconfig.tsbuildinfo] file written with same contents
//// [/home/src/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt] file written with same contents


Change:: Fix error
Input::
//// [/home/src/projects/project/a.ts]
const a = "hello";



Output::
/home/src/tslibs/ts/lib/tsc --b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because output 'home/src/projects/project/tsconfig.tsbuildinfo' is older than input 'home/src/projects/project/a.ts'

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

exitCode:: ExitStatus.Success
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
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

Shape signatures in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts (used version)
/home/src/projects/project/a.ts (used version)


//// [/home/src/projects/project/tsconfig.tsbuildinfo] file written with same contents
//// [/home/src/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt] file written with same contents


Change:: no-change-run
Input::


Output::
/home/src/tslibs/ts/lib/tsc --b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because output file 'home/src/projects/project/a.js' does not exist

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

exitCode:: ExitStatus.Success
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
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

Shape signatures in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts (used version)
/home/src/projects/project/a.ts (used version)


//// [/home/src/projects/project/tsconfig.tsbuildinfo] file written with same contents
//// [/home/src/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt] file written with same contents


Change:: Emit after fixing error
Input::


Output::
/home/src/tslibs/ts/lib/tsc --b --v /home/src/projects/project
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because output file 'home/src/projects/project/a.js' does not exist

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

exitCode:: ExitStatus.Success
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
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

Shape signatures in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts (used version)
/home/src/projects/project/a.ts (used version)


//// [/home/src/projects/project/a.js]
var a = "hello";


//// [/home/src/projects/project/tsconfig.tsbuildinfo] file written with same contents
//// [/home/src/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt] file written with same contents


Change:: no-change-run
Input::


Output::
/home/src/tslibs/ts/lib/tsc --b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is up to date because newest input 'home/src/projects/project/a.ts' is older than output 'home/src/projects/project/a.js'

exitCode:: ExitStatus.Success




Change:: Introduce error
Input::
//// [/home/src/projects/project/a.ts]
const a = class { private p = 10; };



Output::
/home/src/tslibs/ts/lib/tsc --b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because output 'home/src/projects/project/tsconfig.tsbuildinfo' is older than input 'home/src/projects/project/a.ts'

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

exitCode:: ExitStatus.Success
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
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

Shape signatures in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts (used version)
/home/src/projects/project/a.ts (used version)


//// [/home/src/projects/project/tsconfig.tsbuildinfo] file written with same contents
//// [/home/src/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt] file written with same contents


Change:: Emit when error
Input::


Output::
/home/src/tslibs/ts/lib/tsc --b --v /home/src/projects/project
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because output 'home/src/projects/project/a.js' is older than input 'home/src/projects/project/a.ts'

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

exitCode:: ExitStatus.Success
Program root files: [
  "/home/src/projects/project/a.ts"
]
Program options: {
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

Shape signatures in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts (used version)
/home/src/projects/project/a.ts (used version)


//// [/home/src/projects/project/a.js]
var a = /** @class */ (function () {
    function class_1() {
        this.p = 10;
    }
    return class_1;
}());


//// [/home/src/projects/project/tsconfig.tsbuildinfo] file written with same contents
//// [/home/src/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt] file written with same contents


Change:: no-change-run
Input::


Output::
/home/src/tslibs/ts/lib/tsc --b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is up to date because newest input 'home/src/projects/project/a.ts' is older than output 'home/src/projects/project/a.js'

exitCode:: ExitStatus.Success


