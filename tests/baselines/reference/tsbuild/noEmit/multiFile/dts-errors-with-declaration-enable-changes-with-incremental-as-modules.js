currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/home/src/projects/project/a.ts]
export const a = class { private p = 10; };

//// [/home/src/projects/project/b.ts]
export const b = 10;

//// [/home/src/projects/project/tsconfig.json]
{
  "compilerOptions": {
    "incremental": true
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
/home/src/tslibs/ts/lib/tsc -b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because output file 'home/src/projects/project/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

exitCode:: ExitStatus.Success
Program root files: [
  "/home/src/projects/project/a.ts",
  "/home/src/projects/project/b.ts"
]
Program options: {
  "incremental": true,
  "noEmit": true,
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

Semantic diagnostics in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

Shape signatures in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts (used version)
/home/src/projects/project/a.ts (used version)
/home/src/projects/project/b.ts (used version)


//// [/home/src/projects/project/tsconfig.tsbuildinfo]
{"fileNames":["../../tslibs/ts/lib/lib.d.ts","./a.ts","./b.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-9502176711-export const a = class { private p = 10; };","-13368947479-export const b = 10;"],"root":[2,3],"affectedFilesPendingEmit":[2,3],"version":"FakeTSVersion"}

//// [/home/src/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../tslibs/ts/lib/lib.d.ts",
    "./a.ts",
    "./b.ts"
  ],
  "fileInfos": {
    "../../tslibs/ts/lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "./a.ts": {
      "version": "-9502176711-export const a = class { private p = 10; };",
      "signature": "-9502176711-export const a = class { private p = 10; };"
    },
    "./b.ts": {
      "version": "-13368947479-export const b = 10;",
      "signature": "-13368947479-export const b = 10;"
    }
  },
  "root": [
    [
      2,
      "./a.ts"
    ],
    [
      3,
      "./b.ts"
    ]
  ],
  "affectedFilesPendingEmit": [
    [
      "./a.ts",
      "Js"
    ],
    [
      "./b.ts",
      "Js"
    ]
  ],
  "version": "FakeTSVersion",
  "size": 723
}



Change:: no-change-run
Input::


Output::
/home/src/tslibs/ts/lib/tsc -b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is up to date because newest input 'home/src/projects/project/b.ts' is older than output 'home/src/projects/project/tsconfig.tsbuildinfo'

exitCode:: ExitStatus.Success




Change:: With declaration enabled noEmit - Should report errors
Input::


Output::
/home/src/tslibs/ts/lib/tsc -b --v /home/src/projects/project --noEmit --declaration
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because buildinfo file 'home/src/projects/project/tsconfig.tsbuildinfo' indicates there is change in compilerOptions

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m14[0m - [91merror[0m[90m TS4094: [0mProperty 'p' of exported anonymous class type may not be private or protected.

[7m1[0m export const a = class { private p = 10; };
[7m [0m [91m             ~[0m

  [96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m14[0m
    [7m1[0m export const a = class { private p = 10; };
    [7m [0m [96m             ~[0m
    Add a type annotation to the variable a.


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/home/src/projects/project/a.ts",
  "/home/src/projects/project/b.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "noEmit": true,
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::


//// [/home/src/projects/project/tsconfig.tsbuildinfo]
{"fileNames":["../../tslibs/ts/lib/lib.d.ts","./a.ts","./b.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-9502176711-export const a = class { private p = 10; };","-13368947479-export const b = 10;"],"root":[2,3],"options":{"declaration":true},"emitDiagnosticsPerFile":[[2,[{"start":13,"length":1,"messageText":"Property 'p' of exported anonymous class type may not be private or protected.","category":1,"code":4094,"relatedInformation":[{"start":13,"length":1,"messageText":"Add a type annotation to the variable a.","category":1,"code":9027}]}]]],"affectedFilesPendingEmit":[[2,17],[3,17]],"version":"FakeTSVersion"}

//// [/home/src/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../tslibs/ts/lib/lib.d.ts",
    "./a.ts",
    "./b.ts"
  ],
  "fileInfos": {
    "../../tslibs/ts/lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "./a.ts": {
      "version": "-9502176711-export const a = class { private p = 10; };",
      "signature": "-9502176711-export const a = class { private p = 10; };"
    },
    "./b.ts": {
      "version": "-13368947479-export const b = 10;",
      "signature": "-13368947479-export const b = 10;"
    }
  },
  "root": [
    [
      2,
      "./a.ts"
    ],
    [
      3,
      "./b.ts"
    ]
  ],
  "options": {
    "declaration": true
  },
  "emitDiagnosticsPerFile": [
    [
      "./a.ts",
      [
        {
          "start": 13,
          "length": 1,
          "messageText": "Property 'p' of exported anonymous class type may not be private or protected.",
          "category": 1,
          "code": 4094,
          "relatedInformation": [
            {
              "start": 13,
              "length": 1,
              "messageText": "Add a type annotation to the variable a.",
              "category": 1,
              "code": 9027
            }
          ]
        }
      ]
    ]
  ],
  "affectedFilesPendingEmit": [
    [
      [
        "./a.ts",
        17
      ],
      "Js | DtsEmit"
    ],
    [
      [
        "./b.ts",
        17
      ],
      "Js | DtsEmit"
    ]
  ],
  "version": "FakeTSVersion",
  "size": 1070
}



Change:: With declaration and declarationMap noEmit - Should report errors
Input::


Output::
/home/src/tslibs/ts/lib/tsc -b --v /home/src/projects/project --noEmit --declaration --declarationMap
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because buildinfo file 'home/src/projects/project/tsconfig.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

exitCode:: ExitStatus.Success
Program root files: [
  "/home/src/projects/project/a.ts",
  "/home/src/projects/project/b.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "declarationMap": true,
  "noEmit": true,
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::


//// [/home/src/projects/project/tsconfig.tsbuildinfo]
{"fileNames":["../../tslibs/ts/lib/lib.d.ts","./a.ts","./b.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-9502176711-export const a = class { private p = 10; };","-13368947479-export const b = 10;"],"root":[2,3],"options":{"declaration":true,"declarationMap":true},"affectedFilesPendingEmit":[[2,49],[3,49]],"version":"FakeTSVersion"}

//// [/home/src/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../tslibs/ts/lib/lib.d.ts",
    "./a.ts",
    "./b.ts"
  ],
  "fileInfos": {
    "../../tslibs/ts/lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "./a.ts": {
      "version": "-9502176711-export const a = class { private p = 10; };",
      "signature": "-9502176711-export const a = class { private p = 10; };"
    },
    "./b.ts": {
      "version": "-13368947479-export const b = 10;",
      "signature": "-13368947479-export const b = 10;"
    }
  },
  "root": [
    [
      2,
      "./a.ts"
    ],
    [
      3,
      "./b.ts"
    ]
  ],
  "options": {
    "declaration": true,
    "declarationMap": true
  },
  "affectedFilesPendingEmit": [
    [
      [
        "./a.ts",
        49
      ],
      "Js | DtsEmit | DtsMap"
    ],
    [
      [
        "./b.ts",
        49
      ],
      "Js | DtsEmit | DtsMap"
    ]
  ],
  "version": "FakeTSVersion",
  "size": 786
}



Change:: no-change-run
Input::


Output::
/home/src/tslibs/ts/lib/tsc -b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is up to date because newest input 'home/src/projects/project/b.ts' is older than output 'home/src/projects/project/tsconfig.tsbuildinfo'

exitCode:: ExitStatus.Success




Change:: Dts Emit with error
Input::


Output::
/home/src/tslibs/ts/lib/tsc -b --v /home/src/projects/project --declaration
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because buildinfo file 'home/src/projects/project/tsconfig.tsbuildinfo' indicates that some of the changes were not emitted

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

[96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m14[0m - [91merror[0m[90m TS4094: [0mProperty 'p' of exported anonymous class type may not be private or protected.

[7m1[0m export const a = class { private p = 10; };
[7m [0m [91m             ~[0m

  [96mhome/src/projects/project/a.ts[0m:[93m1[0m:[93m14[0m
    [7m1[0m export const a = class { private p = 10; };
    [7m [0m [96m             ~[0m
    Add a type annotation to the variable a.


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/home/src/projects/project/a.ts",
  "/home/src/projects/project/b.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::


//// [/home/src/projects/project/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = /** @class */ (function () {
    function class_1() {
        this.p = 10;
    }
    return class_1;
}());


//// [/home/src/projects/project/b.d.ts]
export declare const b = 10;


//// [/home/src/projects/project/b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
exports.b = 10;


//// [/home/src/projects/project/tsconfig.tsbuildinfo]
{"fileNames":["../../tslibs/ts/lib/lib.d.ts","./a.ts","./b.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-9502176711-export const a = class { private p = 10; };",{"version":"-13368947479-export const b = 10;","signature":"-3829150557-export declare const b = 10;\n"}],"root":[2,3],"options":{"declaration":true},"emitDiagnosticsPerFile":[[2,[{"start":13,"length":1,"messageText":"Property 'p' of exported anonymous class type may not be private or protected.","category":1,"code":4094,"relatedInformation":[{"start":13,"length":1,"messageText":"Add a type annotation to the variable a.","category":1,"code":9027}]}]]],"version":"FakeTSVersion"}

//// [/home/src/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../tslibs/ts/lib/lib.d.ts",
    "./a.ts",
    "./b.ts"
  ],
  "fileInfos": {
    "../../tslibs/ts/lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "./a.ts": {
      "version": "-9502176711-export const a = class { private p = 10; };",
      "signature": "-9502176711-export const a = class { private p = 10; };"
    },
    "./b.ts": {
      "original": {
        "version": "-13368947479-export const b = 10;",
        "signature": "-3829150557-export declare const b = 10;\n"
      },
      "version": "-13368947479-export const b = 10;",
      "signature": "-3829150557-export declare const b = 10;\n"
    }
  },
  "root": [
    [
      2,
      "./a.ts"
    ],
    [
      3,
      "./b.ts"
    ]
  ],
  "options": {
    "declaration": true
  },
  "emitDiagnosticsPerFile": [
    [
      "./a.ts",
      [
        {
          "start": 13,
          "length": 1,
          "messageText": "Property 'p' of exported anonymous class type may not be private or protected.",
          "category": 1,
          "code": 4094,
          "relatedInformation": [
            {
              "start": 13,
              "length": 1,
              "messageText": "Add a type annotation to the variable a.",
              "category": 1,
              "code": 9027
            }
          ]
        }
      ]
    ]
  ],
  "version": "FakeTSVersion",
  "size": 1096
}



Change:: Fix the error
Input::
//// [/home/src/projects/project/a.ts]
export const a = class { public p = 10; };



Output::
/home/src/tslibs/ts/lib/tsc -b --v /home/src/projects/project --noEmit
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because output 'home/src/projects/project/tsconfig.tsbuildinfo' is older than input 'home/src/projects/project/a.ts'

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

exitCode:: ExitStatus.Success
Program root files: [
  "/home/src/projects/project/a.ts",
  "/home/src/projects/project/b.ts"
]
Program options: {
  "incremental": true,
  "noEmit": true,
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

Semantic diagnostics in builder refreshed for::
/home/src/projects/project/a.ts

Shape signatures in builder refreshed for::
/home/src/projects/project/a.ts (computed .d.ts)


//// [/home/src/projects/project/tsconfig.tsbuildinfo]
{"fileNames":["../../tslibs/ts/lib/lib.d.ts","./a.ts","./b.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-9483521475-export const a = class { public p = 10; };","signature":"4346604020-export declare const a: {\n    new (): {\n        p: number;\n    };\n};\n"},{"version":"-13368947479-export const b = 10;","signature":"-3829150557-export declare const b = 10;\n"}],"root":[2,3],"affectedFilesPendingEmit":[2],"version":"FakeTSVersion"}

//// [/home/src/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../tslibs/ts/lib/lib.d.ts",
    "./a.ts",
    "./b.ts"
  ],
  "fileInfos": {
    "../../tslibs/ts/lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "./a.ts": {
      "original": {
        "version": "-9483521475-export const a = class { public p = 10; };",
        "signature": "4346604020-export declare const a: {\n    new (): {\n        p: number;\n    };\n};\n"
      },
      "version": "-9483521475-export const a = class { public p = 10; };",
      "signature": "4346604020-export declare const a: {\n    new (): {\n        p: number;\n    };\n};\n"
    },
    "./b.ts": {
      "original": {
        "version": "-13368947479-export const b = 10;",
        "signature": "-3829150557-export declare const b = 10;\n"
      },
      "version": "-13368947479-export const b = 10;",
      "signature": "-3829150557-export declare const b = 10;\n"
    }
  },
  "root": [
    [
      2,
      "./a.ts"
    ],
    [
      3,
      "./b.ts"
    ]
  ],
  "affectedFilesPendingEmit": [
    [
      "./a.ts",
      "Js"
    ]
  ],
  "version": "FakeTSVersion",
  "size": 901
}



Change:: With declaration enabled noEmit
Input::


Output::
/home/src/tslibs/ts/lib/tsc -b --v /home/src/projects/project --noEmit --declaration
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is out of date because buildinfo file 'home/src/projects/project/tsconfig.tsbuildinfo' indicates there is change in compilerOptions

[[90mHH:MM:SS AM[0m] Building project '/home/src/projects/project/tsconfig.json'...

exitCode:: ExitStatus.Success
Program root files: [
  "/home/src/projects/project/a.ts",
  "/home/src/projects/project/b.ts"
]
Program options: {
  "incremental": true,
  "declaration": true,
  "noEmit": true,
  "tscBuild": true,
  "configFilePath": "/home/src/projects/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/home/src/projects/project/a.ts
/home/src/projects/project/b.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::


//// [/home/src/projects/project/tsconfig.tsbuildinfo]
{"fileNames":["../../tslibs/ts/lib/lib.d.ts","./a.ts","./b.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-9483521475-export const a = class { public p = 10; };","signature":"4346604020-export declare const a: {\n    new (): {\n        p: number;\n    };\n};\n"},{"version":"-13368947479-export const b = 10;","signature":"-3829150557-export declare const b = 10;\n"}],"root":[2,3],"options":{"declaration":true},"affectedFilesPendingEmit":[[2,17],[3,16]],"version":"FakeTSVersion"}

//// [/home/src/projects/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../tslibs/ts/lib/lib.d.ts",
    "./a.ts",
    "./b.ts"
  ],
  "fileInfos": {
    "../../tslibs/ts/lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "./a.ts": {
      "original": {
        "version": "-9483521475-export const a = class { public p = 10; };",
        "signature": "4346604020-export declare const a: {\n    new (): {\n        p: number;\n    };\n};\n"
      },
      "version": "-9483521475-export const a = class { public p = 10; };",
      "signature": "4346604020-export declare const a: {\n    new (): {\n        p: number;\n    };\n};\n"
    },
    "./b.ts": {
      "original": {
        "version": "-13368947479-export const b = 10;",
        "signature": "-3829150557-export declare const b = 10;\n"
      },
      "version": "-13368947479-export const b = 10;",
      "signature": "-3829150557-export declare const b = 10;\n"
    }
  },
  "root": [
    [
      2,
      "./a.ts"
    ],
    [
      3,
      "./b.ts"
    ]
  ],
  "options": {
    "declaration": true
  },
  "affectedFilesPendingEmit": [
    [
      [
        "./a.ts",
        17
      ],
      "Js | DtsEmit"
    ],
    [
      [
        "./b.ts",
        16
      ],
      "DtsEmit"
    ]
  ],
  "version": "FakeTSVersion",
  "size": 944
}



Change:: With declaration and declarationMap noEmit
Input::


Output::
/home/src/tslibs/ts/lib/tsc -b --v /home/src/projects/project --noEmit --declaration --declarationMap
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * home/src/projects/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'home/src/projects/project/tsconfig.json' is up to date because newest input 'home/src/projects/project/a.ts' is older than output 'home/src/projects/project/tsconfig.tsbuildinfo'

exitCode:: ExitStatus.Success


