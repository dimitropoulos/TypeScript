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

//// [/src/project/a.ts]
import {A} from "./c"
let a = A.ONE


//// [/src/project/b.d.ts]
export const enum A {
    ONE = 1
}


//// [/src/project/c.ts]
import {A} from "./b"
let b = A.ONE
export {A}


//// [/src/project/worker.d.ts]
export const enum AWorker {
    ONE = 1
}




Output::
/home/src/tslibs/ts/lib/tsc -i /src/project/a.ts --tsbuildinfofile /src/project/a.tsbuildinfo
exitCode:: ExitStatus.Success


//// [/src/project/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 1 /* A.ONE */;


//// [/src/project/a.tsbuildinfo]
{"fileNames":["../../home/src/tslibs/ts/lib/lib.d.ts","./b.d.ts","./c.ts","./a.ts"],"fileIdsList":[[3],[2]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-7434209142-export const enum A {\n    ONE = 1\n}\n","-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n","-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n"],"root":[4],"options":{"tsBuildInfoFile":"./a.tsbuildinfo"},"referencedMap":[[4,1],[3,2]],"version":"FakeTSVersion"}

//// [/src/project/a.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../home/src/tslibs/ts/lib/lib.d.ts",
    "./b.d.ts",
    "./c.ts",
    "./a.ts"
  ],
  "fileIdsList": [
    [
      "./c.ts"
    ],
    [
      "./b.d.ts"
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
    "./b.d.ts": {
      "version": "-7434209142-export const enum A {\n    ONE = 1\n}\n",
      "signature": "-7434209142-export const enum A {\n    ONE = 1\n}\n"
    },
    "./c.ts": {
      "version": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
      "signature": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n"
    },
    "./a.ts": {
      "version": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n",
      "signature": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n"
    }
  },
  "root": [
    [
      4,
      "./a.ts"
    ]
  ],
  "options": {
    "tsBuildInfoFile": "./a.tsbuildinfo"
  },
  "referencedMap": {
    "./a.ts": [
      "./c.ts"
    ],
    "./c.ts": [
      "./b.d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 892
}

//// [/src/project/c.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b = 1 /* A.ONE */;




Change:: change enum value
Input::
//// [/src/project/b.d.ts]
export const enum A {
    ONE = 2
}




Output::
/home/src/tslibs/ts/lib/tsc -i /src/project/a.ts --tsbuildinfofile /src/project/a.tsbuildinfo
exitCode:: ExitStatus.Success


//// [/src/project/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 2 /* A.ONE */;


//// [/src/project/a.tsbuildinfo]
{"fileNames":["../../home/src/tslibs/ts/lib/lib.d.ts","./b.d.ts","./c.ts","./a.ts"],"fileIdsList":[[3],[2]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-7434173205-export const enum A {\n    ONE = 2\n}\n",{"version":"-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n","signature":"3259150197-import { A } from \"./b\";\nexport { A };\n"},{"version":"-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n","signature":"-3531856636-export {};\n"}],"root":[4],"options":{"tsBuildInfoFile":"./a.tsbuildinfo"},"referencedMap":[[4,1],[3,2]],"version":"FakeTSVersion"}

//// [/src/project/a.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../home/src/tslibs/ts/lib/lib.d.ts",
    "./b.d.ts",
    "./c.ts",
    "./a.ts"
  ],
  "fileIdsList": [
    [
      "./c.ts"
    ],
    [
      "./b.d.ts"
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
    "./b.d.ts": {
      "version": "-7434173205-export const enum A {\n    ONE = 2\n}\n",
      "signature": "-7434173205-export const enum A {\n    ONE = 2\n}\n"
    },
    "./c.ts": {
      "original": {
        "version": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
        "signature": "3259150197-import { A } from \"./b\";\nexport { A };\n"
      },
      "version": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
      "signature": "3259150197-import { A } from \"./b\";\nexport { A };\n"
    },
    "./a.ts": {
      "original": {
        "version": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n",
        "signature": "-3531856636-export {};\n"
      },
      "version": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n",
      "signature": "-3531856636-export {};\n"
    }
  },
  "root": [
    [
      4,
      "./a.ts"
    ]
  ],
  "options": {
    "tsBuildInfoFile": "./a.tsbuildinfo"
  },
  "referencedMap": {
    "./a.ts": [
      "./c.ts"
    ],
    "./c.ts": [
      "./b.d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1024
}

//// [/src/project/c.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b = 2 /* A.ONE */;




Change:: change enum value again
Input::
//// [/src/project/b.d.ts]
export const enum A {
    ONE = 3
}




Output::
/home/src/tslibs/ts/lib/tsc -i /src/project/a.ts --tsbuildinfofile /src/project/a.tsbuildinfo
exitCode:: ExitStatus.Success


//// [/src/project/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 3 /* A.ONE */;


//// [/src/project/a.tsbuildinfo]
{"fileNames":["../../home/src/tslibs/ts/lib/lib.d.ts","./b.d.ts","./c.ts","./a.ts"],"fileIdsList":[[3],[2]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-7434137268-export const enum A {\n    ONE = 3\n}\n",{"version":"-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n","signature":"3259150197-import { A } from \"./b\";\nexport { A };\n"},"-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n"],"root":[4],"options":{"tsBuildInfoFile":"./a.tsbuildinfo"},"referencedMap":[[4,1],[3,2]],"version":"FakeTSVersion"}

//// [/src/project/a.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../home/src/tslibs/ts/lib/lib.d.ts",
    "./b.d.ts",
    "./c.ts",
    "./a.ts"
  ],
  "fileIdsList": [
    [
      "./c.ts"
    ],
    [
      "./b.d.ts"
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
    "./b.d.ts": {
      "version": "-7434137268-export const enum A {\n    ONE = 3\n}\n",
      "signature": "-7434137268-export const enum A {\n    ONE = 3\n}\n"
    },
    "./c.ts": {
      "original": {
        "version": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
        "signature": "3259150197-import { A } from \"./b\";\nexport { A };\n"
      },
      "version": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
      "signature": "3259150197-import { A } from \"./b\";\nexport { A };\n"
    },
    "./a.ts": {
      "version": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n",
      "signature": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n"
    }
  },
  "root": [
    [
      4,
      "./a.ts"
    ]
  ],
  "options": {
    "tsBuildInfoFile": "./a.tsbuildinfo"
  },
  "referencedMap": {
    "./a.ts": [
      "./c.ts"
    ],
    "./c.ts": [
      "./b.d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 973
}

//// [/src/project/c.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b = 3 /* A.ONE */;




Change:: something else changes in b.d.ts
Input::
//// [/src/project/b.d.ts]
export const enum A {
    ONE = 3
}
export const randomThing = 10;



Output::
/home/src/tslibs/ts/lib/tsc -i /src/project/a.ts --tsbuildinfofile /src/project/a.tsbuildinfo
exitCode:: ExitStatus.Success


//// [/src/project/a.js] file written with same contents
//// [/src/project/a.tsbuildinfo]
{"fileNames":["../../home/src/tslibs/ts/lib/lib.d.ts","./b.d.ts","./c.ts","./a.ts"],"fileIdsList":[[3],[2]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-1392741047-export const enum A {\n    ONE = 3\n}\nexport const randomThing = 10;",{"version":"-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n","signature":"3259150197-import { A } from \"./b\";\nexport { A };\n"},"-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n"],"root":[4],"options":{"tsBuildInfoFile":"./a.tsbuildinfo"},"referencedMap":[[4,1],[3,2]],"version":"FakeTSVersion"}

//// [/src/project/a.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../home/src/tslibs/ts/lib/lib.d.ts",
    "./b.d.ts",
    "./c.ts",
    "./a.ts"
  ],
  "fileIdsList": [
    [
      "./c.ts"
    ],
    [
      "./b.d.ts"
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
    "./b.d.ts": {
      "version": "-1392741047-export const enum A {\n    ONE = 3\n}\nexport const randomThing = 10;",
      "signature": "-1392741047-export const enum A {\n    ONE = 3\n}\nexport const randomThing = 10;"
    },
    "./c.ts": {
      "original": {
        "version": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
        "signature": "3259150197-import { A } from \"./b\";\nexport { A };\n"
      },
      "version": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
      "signature": "3259150197-import { A } from \"./b\";\nexport { A };\n"
    },
    "./a.ts": {
      "version": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n",
      "signature": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n"
    }
  },
  "root": [
    [
      4,
      "./a.ts"
    ]
  ],
  "options": {
    "tsBuildInfoFile": "./a.tsbuildinfo"
  },
  "referencedMap": {
    "./a.ts": [
      "./c.ts"
    ],
    "./c.ts": [
      "./b.d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1003
}

//// [/src/project/c.js] file written with same contents


Change:: something else changes in b.d.ts again
Input::
//// [/src/project/b.d.ts]
export const enum A {
    ONE = 3
}
export const randomThing = 10;export const randomThing2 = 10;



Output::
/home/src/tslibs/ts/lib/tsc -i /src/project/a.ts --tsbuildinfofile /src/project/a.tsbuildinfo
exitCode:: ExitStatus.Success


//// [/src/project/a.js] file written with same contents
//// [/src/project/a.tsbuildinfo]
{"fileNames":["../../home/src/tslibs/ts/lib/lib.d.ts","./b.d.ts","./c.ts","./a.ts"],"fileIdsList":[[3],[2]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-11013141160-export const enum A {\n    ONE = 3\n}\nexport const randomThing = 10;export const randomThing2 = 10;",{"version":"-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n","signature":"3259150197-import { A } from \"./b\";\nexport { A };\n"},"-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n"],"root":[4],"options":{"tsBuildInfoFile":"./a.tsbuildinfo"},"referencedMap":[[4,1],[3,2]],"version":"FakeTSVersion"}

//// [/src/project/a.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../home/src/tslibs/ts/lib/lib.d.ts",
    "./b.d.ts",
    "./c.ts",
    "./a.ts"
  ],
  "fileIdsList": [
    [
      "./c.ts"
    ],
    [
      "./b.d.ts"
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
    "./b.d.ts": {
      "version": "-11013141160-export const enum A {\n    ONE = 3\n}\nexport const randomThing = 10;export const randomThing2 = 10;",
      "signature": "-11013141160-export const enum A {\n    ONE = 3\n}\nexport const randomThing = 10;export const randomThing2 = 10;"
    },
    "./c.ts": {
      "original": {
        "version": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
        "signature": "3259150197-import { A } from \"./b\";\nexport { A };\n"
      },
      "version": "-3548623266-import {A} from \"./b\"\nlet b = A.ONE\nexport {A}\n",
      "signature": "3259150197-import { A } from \"./b\";\nexport { A };\n"
    },
    "./a.ts": {
      "version": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n",
      "signature": "-5009241479-import {A} from \"./c\"\nlet a = A.ONE\n"
    }
  },
  "root": [
    [
      4,
      "./a.ts"
    ]
  ],
  "options": {
    "tsBuildInfoFile": "./a.tsbuildinfo"
  },
  "referencedMap": {
    "./a.ts": [
      "./c.ts"
    ],
    "./c.ts": [
      "./b.d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1035
}

//// [/src/project/c.js] file written with same contents
