currentDirectory:: / useCaseSensitiveFileNames: false
Input::
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

//// [/src/project/file1.ts]
export const x: 30 = "hello";

//// [/src/project/file2.ts]
export class D { }

//// [/src/project/tsconfig.json]
{
  "compilerOptions": {
    "outFile": "../outFile.js",
    "module": "amd",
    "noEmitOnError": true
  }
}



Output::
/home/src/tslibs/ts/lib/tsc --p /src/project -i
[96msrc/project/file1.ts[0m:[93m1[0m:[93m14[0m - [91merror[0m[90m TS2322: [0mType '"hello"' is not assignable to type '30'.

[7m1[0m export const x: 30 = "hello";
[7m [0m [91m             ~[0m


Found 1 error in src/project/file1.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/src/project/file1.ts",
  "/src/project/file2.ts"
]
Program options: {
  "outFile": "/src/outFile.js",
  "module": 2,
  "noEmitOnError": true,
  "project": "/src/project",
  "incremental": true,
  "configFilePath": "/src/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/src/project/file1.ts
/src/project/file2.ts

Semantic diagnostics in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts
/src/project/file1.ts
/src/project/file2.ts

No shapes updated in the builder::


//// [/src/outFile.tsbuildinfo]
{"fileNames":["../home/src/tslibs/ts/lib/lib.d.ts","./project/file1.ts","./project/file2.ts"],"fileInfos":["3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","-10927263693-export const x: 30 = \"hello\";","-7804761415-export class D { }"],"root":[2,3],"options":{"module":2,"noEmitOnError":true,"outFile":"./outFile.js"},"semanticDiagnosticsPerFile":[[2,[{"start":13,"length":1,"code":2322,"category":1,"messageText":"Type '\"hello\"' is not assignable to type '30'."}]]],"pendingEmit":false,"version":"FakeTSVersion"}

//// [/src/outFile.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../home/src/tslibs/ts/lib/lib.d.ts",
    "./project/file1.ts",
    "./project/file2.ts"
  ],
  "fileInfos": {
    "../home/src/tslibs/ts/lib/lib.d.ts": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "./project/file1.ts": "-10927263693-export const x: 30 = \"hello\";",
    "./project/file2.ts": "-7804761415-export class D { }"
  },
  "root": [
    [
      2,
      "./project/file1.ts"
    ],
    [
      3,
      "./project/file2.ts"
    ]
  ],
  "options": {
    "module": 2,
    "noEmitOnError": true,
    "outFile": "./outFile.js"
  },
  "semanticDiagnosticsPerFile": [
    [
      "./project/file1.ts",
      [
        {
          "start": 13,
          "length": 1,
          "code": 2322,
          "category": 1,
          "messageText": "Type '\"hello\"' is not assignable to type '30'."
        }
      ]
    ]
  ],
  "pendingEmit": [
    "Js",
    false
  ],
  "version": "FakeTSVersion",
  "size": 908
}



Change:: delete file without error
Input::
//// [/src/project/file2.ts] unlink


Output::
/home/src/tslibs/ts/lib/tsc --p /src/project -i
[96msrc/project/file1.ts[0m:[93m1[0m:[93m14[0m - [91merror[0m[90m TS2322: [0mType '"hello"' is not assignable to type '30'.

[7m1[0m export const x: 30 = "hello";
[7m [0m [91m             ~[0m


Found 1 error in src/project/file1.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/src/project/file1.ts"
]
Program options: {
  "outFile": "/src/outFile.js",
  "module": 2,
  "noEmitOnError": true,
  "project": "/src/project",
  "incremental": true,
  "configFilePath": "/src/project/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/src/project/file1.ts

Semantic diagnostics in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts
/src/project/file1.ts

No shapes updated in the builder::


//// [/src/outFile.tsbuildinfo]
{"fileNames":["../home/src/tslibs/ts/lib/lib.d.ts","./project/file1.ts"],"fileInfos":["3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","-10927263693-export const x: 30 = \"hello\";"],"root":[2],"options":{"module":2,"noEmitOnError":true,"outFile":"./outFile.js"},"semanticDiagnosticsPerFile":[[2,[{"start":13,"length":1,"code":2322,"category":1,"messageText":"Type '\"hello\"' is not assignable to type '30'."}]]],"pendingEmit":false,"version":"FakeTSVersion"}

//// [/src/outFile.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../home/src/tslibs/ts/lib/lib.d.ts",
    "./project/file1.ts"
  ],
  "fileInfos": {
    "../home/src/tslibs/ts/lib/lib.d.ts": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "./project/file1.ts": "-10927263693-export const x: 30 = \"hello\";"
  },
  "root": [
    [
      2,
      "./project/file1.ts"
    ]
  ],
  "options": {
    "module": 2,
    "noEmitOnError": true,
    "outFile": "./outFile.js"
  },
  "semanticDiagnosticsPerFile": [
    [
      "./project/file1.ts",
      [
        {
          "start": 13,
          "length": 1,
          "code": 2322,
          "category": 1,
          "messageText": "Type '\"hello\"' is not assignable to type '30'."
        }
      ]
    ]
  ],
  "pendingEmit": [
    "Js",
    false
  ],
  "version": "FakeTSVersion",
  "size": 852
}

