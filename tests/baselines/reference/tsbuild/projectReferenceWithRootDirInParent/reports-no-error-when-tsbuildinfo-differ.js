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

//// [/src/src/main/a.ts]
import { b } from './b';
const a = b;


//// [/src/src/main/b.ts]
export const b = 0;


//// [/src/src/main/tsconfig.main.json]
{
  "compilerOptions": {
    "composite": true,
    "outDir": "../../dist/"
  },
  "references": [
    {
      "path": "../other/tsconfig.other.json"
    }
  ]
}

//// [/src/src/other/other.ts]
export const Other = 0;


//// [/src/src/other/tsconfig.other.json]
{
  "compilerOptions": {
    "composite": true,
    "outDir": "../../dist/"
  }
}

//// [/src/tsconfig.base.json]
{
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "rootDir": "./src/",
    "outDir": "./dist/",
    "skipDefaultLibCheck": true
  },
  "exclude": [
    "node_modules"
  ]
}



Output::
/home/src/tslibs/ts/lib/tsc --b /src/src/main/tsconfig.main.json --verbose
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/src/other/tsconfig.other.json
    * src/src/main/tsconfig.main.json

[[90mHH:MM:SS AM[0m] Project 'src/src/other/tsconfig.other.json' is out of date because output file 'src/dist/tsconfig.other.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/src/other/tsconfig.other.json'...

[[90mHH:MM:SS AM[0m] Project 'src/src/main/tsconfig.main.json' is out of date because output file 'src/dist/tsconfig.main.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/src/main/tsconfig.main.json'...

exitCode:: ExitStatus.Success


//// [/src/dist/a.d.ts]
export {};


//// [/src/dist/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b_1 = require("./b");
var a = b_1.b;


//// [/src/dist/b.d.ts]
export declare const b = 0;


//// [/src/dist/b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
exports.b = 0;


//// [/src/dist/other.d.ts]
export declare const Other = 0;


//// [/src/dist/other.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Other = void 0;
exports.Other = 0;


//// [/src/dist/tsconfig.main.tsbuildinfo]
{"fileNames":["../../home/src/tslibs/ts/lib/lib.d.ts","../src/main/b.ts","../src/main/a.ts"],"fileIdsList":[[2]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-13368948254-export const b = 0;\n","signature":"-5842658702-export declare const b = 0;\n"},{"version":"-18592354388-import { b } from './b';\nconst a = b;\n","signature":"-3531856636-export {};\n"}],"root":[2,3],"options":{"composite":true,"outDir":"./"},"referencedMap":[[3,1]],"latestChangedDtsFile":"./a.d.ts","version":"FakeTSVersion"}

//// [/src/dist/tsconfig.main.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../home/src/tslibs/ts/lib/lib.d.ts",
    "../src/main/b.ts",
    "../src/main/a.ts"
  ],
  "fileIdsList": [
    [
      "../src/main/b.ts"
    ]
  ],
  "fileInfos": {
    "../../home/src/tslibs/ts/lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "../src/main/b.ts": {
      "original": {
        "version": "-13368948254-export const b = 0;\n",
        "signature": "-5842658702-export declare const b = 0;\n"
      },
      "version": "-13368948254-export const b = 0;\n",
      "signature": "-5842658702-export declare const b = 0;\n"
    },
    "../src/main/a.ts": {
      "original": {
        "version": "-18592354388-import { b } from './b';\nconst a = b;\n",
        "signature": "-3531856636-export {};\n"
      },
      "version": "-18592354388-import { b } from './b';\nconst a = b;\n",
      "signature": "-3531856636-export {};\n"
    }
  },
  "root": [
    [
      2,
      "../src/main/b.ts"
    ],
    [
      3,
      "../src/main/a.ts"
    ]
  ],
  "options": {
    "composite": true,
    "outDir": "./"
  },
  "referencedMap": {
    "../src/main/a.ts": [
      "../src/main/b.ts"
    ]
  },
  "latestChangedDtsFile": "./a.d.ts",
  "version": "FakeTSVersion",
  "size": 958
}

//// [/src/dist/tsconfig.other.tsbuildinfo]
{"fileNames":["../../home/src/tslibs/ts/lib/lib.d.ts","../src/other/other.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-4254247902-export const Other = 0;\n","signature":"-10003600206-export declare const Other = 0;\n"}],"root":[2],"options":{"composite":true,"outDir":"./"},"latestChangedDtsFile":"./other.d.ts","version":"FakeTSVersion"}

//// [/src/dist/tsconfig.other.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../home/src/tslibs/ts/lib/lib.d.ts",
    "../src/other/other.ts"
  ],
  "fileInfos": {
    "../../home/src/tslibs/ts/lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "../src/other/other.ts": {
      "original": {
        "version": "-4254247902-export const Other = 0;\n",
        "signature": "-10003600206-export declare const Other = 0;\n"
      },
      "version": "-4254247902-export const Other = 0;\n",
      "signature": "-10003600206-export declare const Other = 0;\n"
    }
  },
  "root": [
    [
      2,
      "../src/other/other.ts"
    ]
  ],
  "options": {
    "composite": true,
    "outDir": "./"
  },
  "latestChangedDtsFile": "./other.d.ts",
  "version": "FakeTSVersion",
  "size": 803
}



Change:: no-change-run
Input::


Output::
/home/src/tslibs/ts/lib/tsc --b /src/src/main/tsconfig.main.json --verbose
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/src/other/tsconfig.other.json
    * src/src/main/tsconfig.main.json

[[90mHH:MM:SS AM[0m] Project 'src/src/other/tsconfig.other.json' is up to date because newest input 'src/src/other/other.ts' is older than output 'src/dist/tsconfig.other.tsbuildinfo'

[[90mHH:MM:SS AM[0m] Project 'src/src/main/tsconfig.main.json' is up to date because newest input 'src/src/main/b.ts' is older than output 'src/dist/tsconfig.main.tsbuildinfo'

exitCode:: ExitStatus.Success


