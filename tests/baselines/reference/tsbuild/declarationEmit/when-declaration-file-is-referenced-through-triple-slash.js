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

//// [/src/solution/src/common/nominal.ts]
/// <reference path="./types.d.ts" preserve="true" />
export declare type Nominal<T, Name extends string> = MyNominal<T, Name>;

//// [/src/solution/src/common/tsconfig.json]
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "composite": true
  },
  "include": [
    "./nominal.ts"
  ]
}

//// [/src/solution/src/common/types.d.ts]
declare type MyNominal<T, Name extends string> = T & {
    specialKey: Name;
};

//// [/src/solution/src/subProject/index.ts]
import { Nominal } from '../common/nominal';
export type MyNominal = Nominal<string, 'MyNominal'>;

//// [/src/solution/src/subProject/tsconfig.json]
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "composite": true
  },
  "references": [
    {
      "path": "../common"
    }
  ],
  "include": [
    "./index.ts"
  ]
}

//// [/src/solution/src/subProject2/index.ts]
import { MyNominal } from '../subProject/index';
const variable = {
    key: 'value' as MyNominal,
};
export function getVar(): keyof typeof variable {
    return 'key';
}

//// [/src/solution/src/subProject2/tsconfig.json]
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "composite": true
  },
  "references": [
    {
      "path": "../subProject"
    }
  ],
  "include": [
    "./index.ts"
  ]
}

//// [/src/solution/src/tsconfig.json]
{
  "compilerOptions": {
    "composite": true
  },
  "references": [
    {
      "path": "./subProject"
    },
    {
      "path": "./subProject2"
    }
  ],
  "include": []
}

//// [/src/solution/tsconfig.base.json]
{
  "compilerOptions": {
    "rootDir": "./",
    "outDir": "lib"
  }
}

//// [/src/solution/tsconfig.json]
{
  "compilerOptions": {
    "composite": true
  },
  "references": [
    {
      "path": "./src"
    }
  ],
  "include": []
}



Output::
/home/src/tslibs/ts/lib/tsc --b /src/solution/tsconfig.json --verbose
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/solution/src/common/tsconfig.json
    * src/solution/src/subProject/tsconfig.json
    * src/solution/src/subProject2/tsconfig.json
    * src/solution/src/tsconfig.json
    * src/solution/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/solution/src/common/tsconfig.json' is out of date because output file 'src/solution/lib/src/common/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/solution/src/common/tsconfig.json'...

[[90mHH:MM:SS AM[0m] Project 'src/solution/src/subProject/tsconfig.json' is out of date because output file 'src/solution/lib/src/subProject/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/solution/src/subProject/tsconfig.json'...

[[90mHH:MM:SS AM[0m] Project 'src/solution/src/subProject2/tsconfig.json' is out of date because output file 'src/solution/lib/src/subProject2/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/solution/src/subProject2/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/solution/lib/src/common/nominal.d.ts]
/// <reference path="../../../src/common/types.d.ts" preserve="true" />
export declare type Nominal<T, Name extends string> = MyNominal<T, Name>;


//// [/src/solution/lib/src/common/nominal.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./types.d.ts" preserve="true" />


//// [/src/solution/lib/src/common/tsconfig.tsbuildinfo]
{"fileNames":["../../../../../home/src/tslibs/ts/lib/lib.d.ts","../../../src/common/types.d.ts","../../../src/common/nominal.ts"],"fileIdsList":[[2]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"23815050294-declare type MyNominal<T, Name extends string> = T & {\n    specialKey: Name;\n};","affectsGlobalScope":true},{"version":"-8103970050-/// <reference path=\"./types.d.ts\" preserve=\"true\" />\nexport declare type Nominal<T, Name extends string> = MyNominal<T, Name>;","signature":"-29966695877-/// <reference path=\"../../../src/common/types.d.ts\" preserve=\"true\" />\nexport declare type Nominal<T, Name extends string> = MyNominal<T, Name>;\n"}],"root":[3],"options":{"composite":true,"outDir":"../..","rootDir":"../../.."},"referencedMap":[[3,1]],"latestChangedDtsFile":"./nominal.d.ts","version":"FakeTSVersion"}

//// [/src/solution/lib/src/common/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../../../home/src/tslibs/ts/lib/lib.d.ts",
    "../../../src/common/types.d.ts",
    "../../../src/common/nominal.ts"
  ],
  "fileIdsList": [
    [
      "../../../src/common/types.d.ts"
    ]
  ],
  "fileInfos": {
    "../../../../../home/src/tslibs/ts/lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "../../../src/common/types.d.ts": {
      "original": {
        "version": "23815050294-declare type MyNominal<T, Name extends string> = T & {\n    specialKey: Name;\n};",
        "affectsGlobalScope": true
      },
      "version": "23815050294-declare type MyNominal<T, Name extends string> = T & {\n    specialKey: Name;\n};",
      "signature": "23815050294-declare type MyNominal<T, Name extends string> = T & {\n    specialKey: Name;\n};",
      "affectsGlobalScope": true
    },
    "../../../src/common/nominal.ts": {
      "original": {
        "version": "-8103970050-/// <reference path=\"./types.d.ts\" preserve=\"true\" />\nexport declare type Nominal<T, Name extends string> = MyNominal<T, Name>;",
        "signature": "-29966695877-/// <reference path=\"../../../src/common/types.d.ts\" preserve=\"true\" />\nexport declare type Nominal<T, Name extends string> = MyNominal<T, Name>;\n"
      },
      "version": "-8103970050-/// <reference path=\"./types.d.ts\" preserve=\"true\" />\nexport declare type Nominal<T, Name extends string> = MyNominal<T, Name>;",
      "signature": "-29966695877-/// <reference path=\"../../../src/common/types.d.ts\" preserve=\"true\" />\nexport declare type Nominal<T, Name extends string> = MyNominal<T, Name>;\n"
    }
  },
  "root": [
    [
      3,
      "../../../src/common/nominal.ts"
    ]
  ],
  "options": {
    "composite": true,
    "outDir": "../..",
    "rootDir": "../../.."
  },
  "referencedMap": {
    "../../../src/common/nominal.ts": [
      "../../../src/common/types.d.ts"
    ]
  },
  "latestChangedDtsFile": "./nominal.d.ts",
  "version": "FakeTSVersion",
  "size": 1284
}

//// [/src/solution/lib/src/subProject/index.d.ts]
import { Nominal } from '../common/nominal';
export type MyNominal = Nominal<string, 'MyNominal'>;


//// [/src/solution/lib/src/subProject/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [/src/solution/lib/src/subProject/tsconfig.tsbuildinfo]
{"fileNames":["../../../../../home/src/tslibs/ts/lib/lib.d.ts","../../../src/common/types.d.ts","../common/nominal.d.ts","../../../src/subproject/index.ts"],"fileIdsList":[[2],[3]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"23815050294-declare type MyNominal<T, Name extends string> = T & {\n    specialKey: Name;\n};","affectsGlobalScope":true},"-29966695877-/// <reference path=\"../../../src/common/types.d.ts\" preserve=\"true\" />\nexport declare type Nominal<T, Name extends string> = MyNominal<T, Name>;\n",{"version":"-25117049605-import { Nominal } from '../common/nominal';\nexport type MyNominal = Nominal<string, 'MyNominal'>;","signature":"-25703752603-import { Nominal } from '../common/nominal';\nexport type MyNominal = Nominal<string, 'MyNominal'>;\n"}],"root":[4],"options":{"composite":true,"outDir":"../..","rootDir":"../../.."},"referencedMap":[[3,1],[4,2]],"latestChangedDtsFile":"./index.d.ts","version":"FakeTSVersion"}

//// [/src/solution/lib/src/subProject/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../../../home/src/tslibs/ts/lib/lib.d.ts",
    "../../../src/common/types.d.ts",
    "../common/nominal.d.ts",
    "../../../src/subproject/index.ts"
  ],
  "fileIdsList": [
    [
      "../../../src/common/types.d.ts"
    ],
    [
      "../common/nominal.d.ts"
    ]
  ],
  "fileInfos": {
    "../../../../../home/src/tslibs/ts/lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "../../../src/common/types.d.ts": {
      "original": {
        "version": "23815050294-declare type MyNominal<T, Name extends string> = T & {\n    specialKey: Name;\n};",
        "affectsGlobalScope": true
      },
      "version": "23815050294-declare type MyNominal<T, Name extends string> = T & {\n    specialKey: Name;\n};",
      "signature": "23815050294-declare type MyNominal<T, Name extends string> = T & {\n    specialKey: Name;\n};",
      "affectsGlobalScope": true
    },
    "../common/nominal.d.ts": {
      "version": "-29966695877-/// <reference path=\"../../../src/common/types.d.ts\" preserve=\"true\" />\nexport declare type Nominal<T, Name extends string> = MyNominal<T, Name>;\n",
      "signature": "-29966695877-/// <reference path=\"../../../src/common/types.d.ts\" preserve=\"true\" />\nexport declare type Nominal<T, Name extends string> = MyNominal<T, Name>;\n"
    },
    "../../../src/subproject/index.ts": {
      "original": {
        "version": "-25117049605-import { Nominal } from '../common/nominal';\nexport type MyNominal = Nominal<string, 'MyNominal'>;",
        "signature": "-25703752603-import { Nominal } from '../common/nominal';\nexport type MyNominal = Nominal<string, 'MyNominal'>;\n"
      },
      "version": "-25117049605-import { Nominal } from '../common/nominal';\nexport type MyNominal = Nominal<string, 'MyNominal'>;",
      "signature": "-25703752603-import { Nominal } from '../common/nominal';\nexport type MyNominal = Nominal<string, 'MyNominal'>;\n"
    }
  },
  "root": [
    [
      4,
      "../../../src/subproject/index.ts"
    ]
  ],
  "options": {
    "composite": true,
    "outDir": "../..",
    "rootDir": "../../.."
  },
  "referencedMap": {
    "../common/nominal.d.ts": [
      "../../../src/common/types.d.ts"
    ],
    "../../../src/subproject/index.ts": [
      "../common/nominal.d.ts"
    ]
  },
  "latestChangedDtsFile": "./index.d.ts",
  "version": "FakeTSVersion",
  "size": 1404
}

//// [/src/solution/lib/src/subProject2/index.d.ts]
import { MyNominal } from '../subProject/index';
declare const variable: {
    key: MyNominal;
};
export declare function getVar(): keyof typeof variable;
export {};


//// [/src/solution/lib/src/subProject2/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVar = getVar;
var variable = {
    key: 'value',
};
function getVar() {
    return 'key';
}


//// [/src/solution/lib/src/subProject2/tsconfig.tsbuildinfo]
{"fileNames":["../../../../../home/src/tslibs/ts/lib/lib.d.ts","../../../src/common/types.d.ts","../common/nominal.d.ts","../subproject/index.d.ts","../../../src/subproject2/index.ts"],"fileIdsList":[[2],[3],[4]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"23815050294-declare type MyNominal<T, Name extends string> = T & {\n    specialKey: Name;\n};","affectsGlobalScope":true},"-29966695877-/// <reference path=\"../../../src/common/types.d.ts\" preserve=\"true\" />\nexport declare type Nominal<T, Name extends string> = MyNominal<T, Name>;\n","-25703752603-import { Nominal } from '../common/nominal';\nexport type MyNominal = Nominal<string, 'MyNominal'>;\n",{"version":"2747033208-import { MyNominal } from '../subProject/index';\nconst variable = {\n    key: 'value' as MyNominal,\n};\nexport function getVar(): keyof typeof variable {\n    return 'key';\n}","signature":"-29417180885-import { MyNominal } from '../subProject/index';\ndeclare const variable: {\n    key: MyNominal;\n};\nexport declare function getVar(): keyof typeof variable;\nexport {};\n"}],"root":[5],"options":{"composite":true,"outDir":"../..","rootDir":"../../.."},"referencedMap":[[3,1],[4,2],[5,3]],"latestChangedDtsFile":"./index.d.ts","version":"FakeTSVersion"}

//// [/src/solution/lib/src/subProject2/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../../../home/src/tslibs/ts/lib/lib.d.ts",
    "../../../src/common/types.d.ts",
    "../common/nominal.d.ts",
    "../subproject/index.d.ts",
    "../../../src/subproject2/index.ts"
  ],
  "fileIdsList": [
    [
      "../../../src/common/types.d.ts"
    ],
    [
      "../common/nominal.d.ts"
    ],
    [
      "../subproject/index.d.ts"
    ]
  ],
  "fileInfos": {
    "../../../../../home/src/tslibs/ts/lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "../../../src/common/types.d.ts": {
      "original": {
        "version": "23815050294-declare type MyNominal<T, Name extends string> = T & {\n    specialKey: Name;\n};",
        "affectsGlobalScope": true
      },
      "version": "23815050294-declare type MyNominal<T, Name extends string> = T & {\n    specialKey: Name;\n};",
      "signature": "23815050294-declare type MyNominal<T, Name extends string> = T & {\n    specialKey: Name;\n};",
      "affectsGlobalScope": true
    },
    "../common/nominal.d.ts": {
      "version": "-29966695877-/// <reference path=\"../../../src/common/types.d.ts\" preserve=\"true\" />\nexport declare type Nominal<T, Name extends string> = MyNominal<T, Name>;\n",
      "signature": "-29966695877-/// <reference path=\"../../../src/common/types.d.ts\" preserve=\"true\" />\nexport declare type Nominal<T, Name extends string> = MyNominal<T, Name>;\n"
    },
    "../subproject/index.d.ts": {
      "version": "-25703752603-import { Nominal } from '../common/nominal';\nexport type MyNominal = Nominal<string, 'MyNominal'>;\n",
      "signature": "-25703752603-import { Nominal } from '../common/nominal';\nexport type MyNominal = Nominal<string, 'MyNominal'>;\n"
    },
    "../../../src/subproject2/index.ts": {
      "original": {
        "version": "2747033208-import { MyNominal } from '../subProject/index';\nconst variable = {\n    key: 'value' as MyNominal,\n};\nexport function getVar(): keyof typeof variable {\n    return 'key';\n}",
        "signature": "-29417180885-import { MyNominal } from '../subProject/index';\ndeclare const variable: {\n    key: MyNominal;\n};\nexport declare function getVar(): keyof typeof variable;\nexport {};\n"
      },
      "version": "2747033208-import { MyNominal } from '../subProject/index';\nconst variable = {\n    key: 'value' as MyNominal,\n};\nexport function getVar(): keyof typeof variable {\n    return 'key';\n}",
      "signature": "-29417180885-import { MyNominal } from '../subProject/index';\ndeclare const variable: {\n    key: MyNominal;\n};\nexport declare function getVar(): keyof typeof variable;\nexport {};\n"
    }
  },
  "root": [
    [
      5,
      "../../../src/subproject2/index.ts"
    ]
  ],
  "options": {
    "composite": true,
    "outDir": "../..",
    "rootDir": "../../.."
  },
  "referencedMap": {
    "../common/nominal.d.ts": [
      "../../../src/common/types.d.ts"
    ],
    "../subproject/index.d.ts": [
      "../common/nominal.d.ts"
    ],
    "../../../src/subproject2/index.ts": [
      "../subproject/index.d.ts"
    ]
  },
  "latestChangedDtsFile": "./index.d.ts",
  "version": "FakeTSVersion",
  "size": 1706
}

