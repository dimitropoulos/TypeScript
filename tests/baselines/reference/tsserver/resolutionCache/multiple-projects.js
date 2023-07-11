currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Before request
//// [/home/src/project/tsconfig.a.json]
{
  "compilerOptions": {
    "composite": true,
    "traceResolution": true
  },
  "files": [
    "aMain.ts",
    "aFileWithImports.ts",
    "aRandomFileForImport.ts",
    "aRandomFileForImport2.ts"
  ]
}

//// [/home/src/project/aMain.ts]
export const x = 10;

//// [/home/src/project/aFileWithImports.ts]
import type { ImportInterface0 } from "pkg0";
export { x } from "./aRandomFileForImport";
export { x as x2 } from "./aRandomFileForImport2";
export const y = 10;


//// [/home/src/project/aRandomFileForImport.ts]
export const x = 10;

//// [/home/src/project/aRandomFileForImport2.ts]
export const x = 10;

//// [/home/src/project/node_modules/pkg0/index.d.ts]
export interface ImportInterface0 {}

//// [/home/src/project/tsconfig.b.json]
{
  "compilerOptions": {
    "composite": true,
    "traceResolution": true
  },
  "files": [
    "bMain.ts",
    "bFileWithImports.ts",
    "bRandomFileForImport.ts",
    "bRandomFileForImport2.ts"
  ],
  "references": [
    {
      "path": "./tsconfig.a.json"
    }
  ]
}

//// [/home/src/project/bMain.ts]
export const x = 10;

//// [/home/src/project/bFileWithImports.ts]
export { y } from "./aFileWithImports";
export { x } from "./bRandomFileForImport";
import type { ImportInterface0 } from "pkg0";


//// [/home/src/project/bRandomFileForImport.ts]
export const x = 10;

//// [/home/src/project/bRandomFileForImport2.ts]
export const x = 10;

//// [/home/src/project/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "traceResolution": true,
    "module": "amd"
  },
  "files": [
    "cMain.ts",
    "cFileWithImports.ts",
    "cRandomFileForImport.ts",
    "cRandomFileForImport2.ts"
  ],
  "references": [
    {
      "path": "./tsconfig.a.json"
    },
    {
      "path": "./tsconfig.b.json"
    }
  ]
}

//// [/home/src/project/cMain.ts]
export const x = 10;

//// [/home/src/project/cFileWithImports.ts]
import { y } from "./bFileWithImports";
import type { ImportInterface0 } from "pkg0";


//// [/home/src/project/cRandomFileForImport.ts]
export const x = 10;

//// [/home/src/project/cRandomFileForImport2.ts]
export const x = 10;

//// [/home/src/project/pkg0.d.ts]
export interface ImportInterface0 {}

//// [/a/lib/lib.d.ts]
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

//// [/home/src/project/aMain.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/home/src/project/aMain.d.ts]
export declare const x = 10;


//// [/home/src/project/aRandomFileForImport.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/home/src/project/aRandomFileForImport.d.ts]
export declare const x = 10;


//// [/home/src/project/aRandomFileForImport2.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/home/src/project/aRandomFileForImport2.d.ts]
export declare const x = 10;


//// [/home/src/project/aFileWithImports.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.y = exports.x2 = exports.x = void 0;
var aRandomFileForImport_1 = require("./aRandomFileForImport");
Object.defineProperty(exports, "x", { enumerable: true, get: function () { return aRandomFileForImport_1.x; } });
var aRandomFileForImport2_1 = require("./aRandomFileForImport2");
Object.defineProperty(exports, "x2", { enumerable: true, get: function () { return aRandomFileForImport2_1.x; } });
exports.y = 10;


//// [/home/src/project/aFileWithImports.d.ts]
export { x } from "./aRandomFileForImport";
export { x as x2 } from "./aRandomFileForImport2";
export declare const y = 10;


//// [/home/src/project/tsconfig.a.tsbuildinfo]
{"fileNames":["../../../a/lib/lib.d.ts","./amain.ts","./node_modules/pkg0/index.d.ts","./arandomfileforimport.ts","./arandomfileforimport2.ts","./afilewithimports.ts"],"fileIdsList":[[3,4,5]],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},"769951468-export interface ImportInterface0 {}",{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"25172849050-import type { ImportInterface0 } from \"pkg0\";\nexport { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport const y = 10;\n","signature":"-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n"}],"root":[2,[4,6]],"options":{"composite":true},"referencedMap":[[6,1]],"latestChangedDtsFile":"./aFileWithImports.d.ts","version":"FakeTSVersion"}

//// [/home/src/project/tsconfig.a.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../a/lib/lib.d.ts",
    "./amain.ts",
    "./node_modules/pkg0/index.d.ts",
    "./arandomfileforimport.ts",
    "./arandomfileforimport2.ts",
    "./afilewithimports.ts"
  ],
  "fileIdsList": [
    [
      "./node_modules/pkg0/index.d.ts",
      "./arandomfileforimport.ts",
      "./arandomfileforimport2.ts"
    ]
  ],
  "fileInfos": {
    "../../../a/lib/lib.d.ts": {
      "original": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "affectsGlobalScope": true
    },
    "./amain.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./node_modules/pkg0/index.d.ts": {
      "version": "769951468-export interface ImportInterface0 {}",
      "signature": "769951468-export interface ImportInterface0 {}"
    },
    "./arandomfileforimport.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./arandomfileforimport2.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./afilewithimports.ts": {
      "original": {
        "version": "25172849050-import type { ImportInterface0 } from \"pkg0\";\nexport { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport const y = 10;\n",
        "signature": "-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n"
      },
      "version": "25172849050-import type { ImportInterface0 } from \"pkg0\";\nexport { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport const y = 10;\n",
      "signature": "-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n"
    }
  },
  "root": [
    [
      2,
      "./amain.ts"
    ],
    [
      [
        4,
        6
      ],
      [
        "./arandomfileforimport.ts",
        "./arandomfileforimport2.ts",
        "./afilewithimports.ts"
      ]
    ]
  ],
  "options": {
    "composite": true
  },
  "referencedMap": {
    "./afilewithimports.ts": [
      "./node_modules/pkg0/index.d.ts",
      "./arandomfileforimport.ts",
      "./arandomfileforimport2.ts"
    ]
  },
  "latestChangedDtsFile": "./aFileWithImports.d.ts",
  "version": "FakeTSVersion",
  "size": 1472
}

//// [/home/src/project/bMain.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/home/src/project/bMain.d.ts]
export declare const x = 10;


//// [/home/src/project/bRandomFileForImport.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/home/src/project/bRandomFileForImport.d.ts]
export declare const x = 10;


//// [/home/src/project/bFileWithImports.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = exports.y = void 0;
var aFileWithImports_1 = require("./aFileWithImports");
Object.defineProperty(exports, "y", { enumerable: true, get: function () { return aFileWithImports_1.y; } });
var bRandomFileForImport_1 = require("./bRandomFileForImport");
Object.defineProperty(exports, "x", { enumerable: true, get: function () { return bRandomFileForImport_1.x; } });


//// [/home/src/project/bFileWithImports.d.ts]
export { y } from "./aFileWithImports";
export { x } from "./bRandomFileForImport";


//// [/home/src/project/bRandomFileForImport2.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/home/src/project/bRandomFileForImport2.d.ts]
export declare const x = 10;


//// [/home/src/project/tsconfig.b.tsbuildinfo]
{"fileNames":["../../../a/lib/lib.d.ts","./bmain.ts","./arandomfileforimport.d.ts","./arandomfileforimport2.d.ts","./afilewithimports.d.ts","./brandomfileforimport.ts","./node_modules/pkg0/index.d.ts","./bfilewithimports.ts","./brandomfileforimport2.ts"],"fileIdsList":[[3,4],[5,6,7]],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},"-6821242887-export declare const x = 10;\n","-6821242887-export declare const x = 10;\n","-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n",{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},"769951468-export interface ImportInterface0 {}",{"version":"-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n","signature":"-7362913554-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"}],"root":[2,6,8,9],"options":{"composite":true},"referencedMap":[[5,1],[8,2]],"latestChangedDtsFile":"./bRandomFileForImport2.d.ts","version":"FakeTSVersion"}

//// [/home/src/project/tsconfig.b.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../a/lib/lib.d.ts",
    "./bmain.ts",
    "./arandomfileforimport.d.ts",
    "./arandomfileforimport2.d.ts",
    "./afilewithimports.d.ts",
    "./brandomfileforimport.ts",
    "./node_modules/pkg0/index.d.ts",
    "./bfilewithimports.ts",
    "./brandomfileforimport2.ts"
  ],
  "fileIdsList": [
    [
      "./arandomfileforimport.d.ts",
      "./arandomfileforimport2.d.ts"
    ],
    [
      "./afilewithimports.d.ts",
      "./brandomfileforimport.ts",
      "./node_modules/pkg0/index.d.ts"
    ]
  ],
  "fileInfos": {
    "../../../a/lib/lib.d.ts": {
      "original": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "affectsGlobalScope": true
    },
    "./bmain.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./arandomfileforimport.d.ts": {
      "version": "-6821242887-export declare const x = 10;\n",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./arandomfileforimport2.d.ts": {
      "version": "-6821242887-export declare const x = 10;\n",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./afilewithimports.d.ts": {
      "version": "-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n",
      "signature": "-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n"
    },
    "./brandomfileforimport.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./node_modules/pkg0/index.d.ts": {
      "version": "769951468-export interface ImportInterface0 {}",
      "signature": "769951468-export interface ImportInterface0 {}"
    },
    "./bfilewithimports.ts": {
      "original": {
        "version": "-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-7362913554-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\n"
      },
      "version": "-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
      "signature": "-7362913554-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\n"
    },
    "./brandomfileforimport2.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n"
    }
  },
  "root": [
    [
      2,
      "./bmain.ts"
    ],
    [
      6,
      "./brandomfileforimport.ts"
    ],
    [
      8,
      "./bfilewithimports.ts"
    ],
    [
      9,
      "./brandomfileforimport2.ts"
    ]
  ],
  "options": {
    "composite": true
  },
  "referencedMap": {
    "./afilewithimports.d.ts": [
      "./arandomfileforimport.d.ts",
      "./arandomfileforimport2.d.ts"
    ],
    "./bfilewithimports.ts": [
      "./afilewithimports.d.ts",
      "./brandomfileforimport.ts",
      "./node_modules/pkg0/index.d.ts"
    ]
  },
  "latestChangedDtsFile": "./bRandomFileForImport2.d.ts",
  "version": "FakeTSVersion",
  "size": 1739
}

//// [/home/src/project/cMain.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
});


//// [/home/src/project/cMain.d.ts]
export declare const x = 10;


//// [/home/src/project/cFileWithImports.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});


//// [/home/src/project/cFileWithImports.d.ts]
export {};


//// [/home/src/project/cRandomFileForImport.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
});


//// [/home/src/project/cRandomFileForImport.d.ts]
export declare const x = 10;


//// [/home/src/project/cRandomFileForImport2.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;
});


//// [/home/src/project/cRandomFileForImport2.d.ts]
export declare const x = 10;


//// [/home/src/project/tsconfig.tsbuildinfo]
{"fileNames":["../../../a/lib/lib.d.ts","./cmain.ts","./arandomfileforimport.d.ts","./arandomfileforimport2.d.ts","./afilewithimports.d.ts","./brandomfileforimport.d.ts","./bfilewithimports.d.ts","./pkg0.d.ts","./cfilewithimports.ts","./crandomfileforimport.ts","./crandomfileforimport2.ts"],"fileIdsList":[[3,4],[5,6],[7,8]],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},"-6821242887-export declare const x = 10;\n","-6821242887-export declare const x = 10;\n","-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n","-6821242887-export declare const x = 10;\n","-7362913554-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\n","769951468-export interface ImportInterface0 {}",{"version":"-1053334089-import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"}],"root":[2,[9,11]],"options":{"composite":true,"module":2},"referencedMap":[[5,1],[7,2],[9,3]],"latestChangedDtsFile":"./cRandomFileForImport2.d.ts","version":"FakeTSVersion"}

//// [/home/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../../a/lib/lib.d.ts",
    "./cmain.ts",
    "./arandomfileforimport.d.ts",
    "./arandomfileforimport2.d.ts",
    "./afilewithimports.d.ts",
    "./brandomfileforimport.d.ts",
    "./bfilewithimports.d.ts",
    "./pkg0.d.ts",
    "./cfilewithimports.ts",
    "./crandomfileforimport.ts",
    "./crandomfileforimport2.ts"
  ],
  "fileIdsList": [
    [
      "./arandomfileforimport.d.ts",
      "./arandomfileforimport2.d.ts"
    ],
    [
      "./afilewithimports.d.ts",
      "./brandomfileforimport.d.ts"
    ],
    [
      "./bfilewithimports.d.ts",
      "./pkg0.d.ts"
    ]
  ],
  "fileInfos": {
    "../../../a/lib/lib.d.ts": {
      "original": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
      "affectsGlobalScope": true
    },
    "./cmain.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./arandomfileforimport.d.ts": {
      "version": "-6821242887-export declare const x = 10;\n",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./arandomfileforimport2.d.ts": {
      "version": "-6821242887-export declare const x = 10;\n",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./afilewithimports.d.ts": {
      "version": "-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n",
      "signature": "-19407286966-export { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport declare const y = 10;\n"
    },
    "./brandomfileforimport.d.ts": {
      "version": "-6821242887-export declare const x = 10;\n",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./bfilewithimports.d.ts": {
      "version": "-7362913554-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\n",
      "signature": "-7362913554-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\n"
    },
    "./pkg0.d.ts": {
      "version": "769951468-export interface ImportInterface0 {}",
      "signature": "769951468-export interface ImportInterface0 {}"
    },
    "./cfilewithimports.ts": {
      "original": {
        "version": "-1053334089-import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "version": "-1053334089-import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
      "signature": "-3531856636-export {};\n"
    },
    "./crandomfileforimport.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n"
    },
    "./crandomfileforimport2.ts": {
      "original": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "version": "-10726455937-export const x = 10;",
      "signature": "-6821242887-export declare const x = 10;\n"
    }
  },
  "root": [
    [
      2,
      "./cmain.ts"
    ],
    [
      [
        9,
        11
      ],
      [
        "./cfilewithimports.ts",
        "./crandomfileforimport.ts",
        "./crandomfileforimport2.ts"
      ]
    ]
  ],
  "options": {
    "composite": true,
    "module": 2
  },
  "referencedMap": {
    "./afilewithimports.d.ts": [
      "./arandomfileforimport.d.ts",
      "./arandomfileforimport2.d.ts"
    ],
    "./bfilewithimports.d.ts": [
      "./afilewithimports.d.ts",
      "./brandomfileforimport.d.ts"
    ],
    "./cfilewithimports.ts": [
      "./bfilewithimports.d.ts",
      "./pkg0.d.ts"
    ]
  },
  "latestChangedDtsFile": "./cRandomFileForImport2.d.ts",
  "version": "FakeTSVersion",
  "size": 1822
}


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/home/src/project/bMain.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/project/bMain.ts ProjectRootPath: undefined:: Result: /home/src/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /home/src/project/tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/project/tsconfig.json 2000 undefined Project: /home/src/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/project/tsconfig.json",
        "reason": "Creating possible configured project for /home/src/project/bMain.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /home/src/project/tsconfig.json : {
 "rootNames": [
  "/home/src/project/cMain.ts",
  "/home/src/project/cFileWithImports.ts",
  "/home/src/project/cRandomFileForImport.ts",
  "/home/src/project/cRandomFileForImport2.ts"
 ],
 "options": {
  "composite": true,
  "traceResolution": true,
  "module": 2,
  "configFilePath": "/home/src/project/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/home/src/project/tsconfig.a.json",
   "originalPath": "./tsconfig.a.json"
  },
  {
   "path": "/home/src/project/tsconfig.b.json",
   "originalPath": "./tsconfig.b.json"
  }
 ]
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/project/cMain.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/project/cFileWithImports.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/project/cRandomFileForImport.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/project/cRandomFileForImport2.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Config: /home/src/project/tsconfig.a.json : {
 "rootNames": [
  "/home/src/project/aMain.ts",
  "/home/src/project/aFileWithImports.ts",
  "/home/src/project/aRandomFileForImport.ts",
  "/home/src/project/aRandomFileForImport2.ts"
 ],
 "options": {
  "composite": true,
  "traceResolution": true,
  "configFilePath": "/home/src/project/tsconfig.a.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/project/tsconfig.a.json 2000 undefined Project: /home/src/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] Config: /home/src/project/tsconfig.b.json : {
 "rootNames": [
  "/home/src/project/bMain.ts",
  "/home/src/project/bFileWithImports.ts",
  "/home/src/project/bRandomFileForImport.ts",
  "/home/src/project/bRandomFileForImport2.ts"
 ],
 "options": {
  "composite": true,
  "traceResolution": true,
  "configFilePath": "/home/src/project/tsconfig.b.json"
 },
 "projectReferences": [
  {
   "path": "/home/src/project/tsconfig.a.json",
   "originalPath": "./tsconfig.a.json"
  }
 ]
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/project/tsconfig.b.json 2000 undefined Project: /home/src/project/tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] ======== Resolving module './bFileWithImports' from '/home/src/project/cFileWithImports.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Classic'.
Info seq  [hh:mm:ss:mss] File '/home/src/project/bFileWithImports.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './bFileWithImports' was successfully resolved to '/home/src/project/bFileWithImports.ts'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module 'pkg0' from '/home/src/project/cFileWithImports.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Classic'.
Info seq  [hh:mm:ss:mss] File '/home/src/project/pkg0.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/pkg0.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/pkg0.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name 'pkg0' was successfully resolved to '/home/src/project/pkg0.d.ts'. ========
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/project 0 undefined Project: /home/src/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/project 0 undefined Project: /home/src/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/project/bFileWithImports.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] ======== Resolving module './aFileWithImports' from '/home/src/project/bFileWithImports.ts'. ========
Info seq  [hh:mm:ss:mss] Using compiler options of project reference redirect '/home/src/project/tsconfig.b.json'.
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/home/src/project/aFileWithImports', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/project/aFileWithImports.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './aFileWithImports' was successfully resolved to '/home/src/project/aFileWithImports.ts'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module './bRandomFileForImport' from '/home/src/project/bFileWithImports.ts'. ========
Info seq  [hh:mm:ss:mss] Using compiler options of project reference redirect '/home/src/project/tsconfig.b.json'.
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/home/src/project/bRandomFileForImport', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/project/bRandomFileForImport.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './bRandomFileForImport' was successfully resolved to '/home/src/project/bRandomFileForImport.ts'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module 'pkg0' from '/home/src/project/bFileWithImports.ts'. ========
Info seq  [hh:mm:ss:mss] Using compiler options of project reference redirect '/home/src/project/tsconfig.b.json'.
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/project/node_modules/pkg0/index.d.ts', result '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Module name 'pkg0' was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'. ========
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/project/node_modules 1 undefined Project: /home/src/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/project/node_modules 1 undefined Project: /home/src/project/tsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/project/aFileWithImports.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] ======== Resolving module 'pkg0' from '/home/src/project/aFileWithImports.ts'. ========
Info seq  [hh:mm:ss:mss] Using compiler options of project reference redirect '/home/src/project/tsconfig.a.json'.
Info seq  [hh:mm:ss:mss] Resolution for module 'pkg0' was found in cache from location '/home/src/project'.
Info seq  [hh:mm:ss:mss] ======== Module name 'pkg0' was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module './aRandomFileForImport' from '/home/src/project/aFileWithImports.ts'. ========
Info seq  [hh:mm:ss:mss] Using compiler options of project reference redirect '/home/src/project/tsconfig.a.json'.
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/home/src/project/aRandomFileForImport', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/project/aRandomFileForImport.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './aRandomFileForImport' was successfully resolved to '/home/src/project/aRandomFileForImport.ts'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module './aRandomFileForImport2' from '/home/src/project/aFileWithImports.ts'. ========
Info seq  [hh:mm:ss:mss] Using compiler options of project reference redirect '/home/src/project/tsconfig.a.json'.
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/home/src/project/aRandomFileForImport2', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/project/aRandomFileForImport2.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './aRandomFileForImport2' was successfully resolved to '/home/src/project/aRandomFileForImport2.ts'. ========
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/project/aRandomFileForImport.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/project/aRandomFileForImport2.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/project/bRandomFileForImport.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/project/pkg0.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/project/node_modules/@types 1 undefined Project: /home/src/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/project/node_modules/@types 1 undefined Project: /home/src/project/tsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/project/tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (12)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/project/cMain.ts Text-1 "export const x = 10;"
	/home/src/project/node_modules/pkg0/index.d.ts Text-1 "export interface ImportInterface0 {}"
	/home/src/project/aRandomFileForImport.ts Text-1 "export const x = 10;"
	/home/src/project/aRandomFileForImport2.ts Text-1 "export const x = 10;"
	/home/src/project/aFileWithImports.ts Text-1 "import type { ImportInterface0 } from \"pkg0\";\nexport { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport const y = 10;\n"
	/home/src/project/bRandomFileForImport.ts Text-1 "export const x = 10;"
	/home/src/project/bFileWithImports.ts Text-1 "export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n"
	/home/src/project/pkg0.d.ts Text-1 "export interface ImportInterface0 {}"
	/home/src/project/cFileWithImports.ts Text-1 "import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n"
	/home/src/project/cRandomFileForImport.ts Text-1 "export const x = 10;"
	/home/src/project/cRandomFileForImport2.ts Text-1 "export const x = 10;"


	../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	cMain.ts
	  Part of 'files' list in tsconfig.json
	node_modules/pkg0/index.d.ts
	  Imported via "pkg0" from file 'aFileWithImports.ts'
	  Imported via "pkg0" from file 'bFileWithImports.ts'
	aRandomFileForImport.ts
	  Imported via "./aRandomFileForImport" from file 'aFileWithImports.ts'
	aRandomFileForImport2.ts
	  Imported via "./aRandomFileForImport2" from file 'aFileWithImports.ts'
	aFileWithImports.ts
	  Imported via "./aFileWithImports" from file 'bFileWithImports.ts'
	bRandomFileForImport.ts
	  Imported via "./bRandomFileForImport" from file 'bFileWithImports.ts'
	bFileWithImports.ts
	  Imported via "./bFileWithImports" from file 'cFileWithImports.ts'
	pkg0.d.ts
	  Imported via "pkg0" from file 'cFileWithImports.ts'
	cFileWithImports.ts
	  Part of 'files' list in tsconfig.json
	cRandomFileForImport.ts
	  Part of 'files' list in tsconfig.json
	cRandomFileForImport2.ts
	  Part of 'files' list in tsconfig.json

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/project/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "0c3492cbad1409f244564b693d983fbd82d3ce765132a2947dde97300d0dfd60",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 9,
            "tsSize": 498,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 3,
            "dtsSize": 406,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {
            "composite": true,
            "traceResolution": true,
            "module": "amd"
          },
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": true,
          "include": false,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "tsconfig.json",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/project/bMain.ts",
        "configFile": "/home/src/project/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Creating configuration project /home/src/project/tsconfig.b.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/project/tsconfig.b.json",
        "reason": "Creating project referenced in solution /home/src/project/tsconfig.json to find possible configured project for /home/src/project/bMain.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /home/src/project/bRandomFileForImport2.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/project/tsconfig.b.json
Info seq  [hh:mm:ss:mss] ======== Resolving module './aFileWithImports' from '/home/src/project/bFileWithImports.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/home/src/project/aFileWithImports', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/project/aFileWithImports.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './aFileWithImports' was successfully resolved to '/home/src/project/aFileWithImports.ts'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module './bRandomFileForImport' from '/home/src/project/bFileWithImports.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/home/src/project/bRandomFileForImport', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/project/bRandomFileForImport.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './bRandomFileForImport' was successfully resolved to '/home/src/project/bRandomFileForImport.ts'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module 'pkg0' from '/home/src/project/bFileWithImports.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/project/node_modules/pkg0/index.d.ts', result '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Module name 'pkg0' was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'. ========
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/project/node_modules 1 undefined Project: /home/src/project/tsconfig.b.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/project/node_modules 1 undefined Project: /home/src/project/tsconfig.b.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] ======== Resolving module 'pkg0' from '/home/src/project/aFileWithImports.ts'. ========
Info seq  [hh:mm:ss:mss] Using compiler options of project reference redirect '/home/src/project/tsconfig.a.json'.
Info seq  [hh:mm:ss:mss] Resolution for module 'pkg0' was found in cache from location '/home/src/project'.
Info seq  [hh:mm:ss:mss] ======== Module name 'pkg0' was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module './aRandomFileForImport' from '/home/src/project/aFileWithImports.ts'. ========
Info seq  [hh:mm:ss:mss] Using compiler options of project reference redirect '/home/src/project/tsconfig.a.json'.
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/home/src/project/aRandomFileForImport', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/project/aRandomFileForImport.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './aRandomFileForImport' was successfully resolved to '/home/src/project/aRandomFileForImport.ts'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module './aRandomFileForImport2' from '/home/src/project/aFileWithImports.ts'. ========
Info seq  [hh:mm:ss:mss] Using compiler options of project reference redirect '/home/src/project/tsconfig.a.json'.
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/home/src/project/aRandomFileForImport2', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/project/aRandomFileForImport2.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './aRandomFileForImport2' was successfully resolved to '/home/src/project/aRandomFileForImport2.ts'. ========
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/project/node_modules/@types 1 undefined Project: /home/src/project/tsconfig.b.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/project/node_modules/@types 1 undefined Project: /home/src/project/tsconfig.b.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/project/tsconfig.b.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.b.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/project/bMain.ts SVC-1-0 "export const x = 10;"
	/home/src/project/node_modules/pkg0/index.d.ts Text-1 "export interface ImportInterface0 {}"
	/home/src/project/aRandomFileForImport.ts Text-1 "export const x = 10;"
	/home/src/project/aRandomFileForImport2.ts Text-1 "export const x = 10;"
	/home/src/project/aFileWithImports.ts Text-1 "import type { ImportInterface0 } from \"pkg0\";\nexport { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport const y = 10;\n"
	/home/src/project/bRandomFileForImport.ts Text-1 "export const x = 10;"
	/home/src/project/bFileWithImports.ts Text-1 "export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n"
	/home/src/project/bRandomFileForImport2.ts Text-1 "export const x = 10;"


	../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	bMain.ts
	  Part of 'files' list in tsconfig.json
	node_modules/pkg0/index.d.ts
	  Imported via "pkg0" from file 'aFileWithImports.ts'
	  Imported via "pkg0" from file 'bFileWithImports.ts'
	aRandomFileForImport.ts
	  Imported via "./aRandomFileForImport" from file 'aFileWithImports.ts'
	aRandomFileForImport2.ts
	  Imported via "./aRandomFileForImport2" from file 'aFileWithImports.ts'
	aFileWithImports.ts
	  Imported via "./aFileWithImports" from file 'bFileWithImports.ts'
	bRandomFileForImport.ts
	  Imported via "./bRandomFileForImport" from file 'bFileWithImports.ts'
	  Part of 'files' list in tsconfig.json
	bFileWithImports.ts
	  Part of 'files' list in tsconfig.json
	bRandomFileForImport2.ts
	  Part of 'files' list in tsconfig.json

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/project/tsconfig.b.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "76384dc320dd98bd87459ec509649fe3aa1cb45ec7bf156ed8ebc9785fbfd8ae",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 7,
            "tsSize": 392,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 2,
            "dtsSize": 370,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {
            "composite": true,
            "traceResolution": true
          },
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": true,
          "include": false,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "other",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/project/bMain.ts",
        "configFile": "/home/src/project/tsconfig.b.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/project/tsconfig.b.json ProjectRootPath: undefined:: Result: undefined
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (12)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.b.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/project/bMain.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/project/tsconfig.b.json
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 1,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      }
    }
After request

PolledWatches::
/home/src/project/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}
/home/src/project: *new*
  {}
/home/src/project/aFileWithImports.ts: *new*
  {}
/home/src/project/aRandomFileForImport.ts: *new*
  {}
/home/src/project/aRandomFileForImport2.ts: *new*
  {}
/home/src/project/bFileWithImports.ts: *new*
  {}
/home/src/project/bRandomFileForImport.ts: *new*
  {}
/home/src/project/bRandomFileForImport2.ts: *new*
  {}
/home/src/project/cFileWithImports.ts: *new*
  {}
/home/src/project/cMain.ts: *new*
  {}
/home/src/project/cRandomFileForImport.ts: *new*
  {}
/home/src/project/cRandomFileForImport2.ts: *new*
  {}
/home/src/project/pkg0.d.ts: *new*
  {}
/home/src/project/tsconfig.a.json: *new*
  {}
/home/src/project/tsconfig.b.json: *new*
  {}
/home/src/project/tsconfig.json: *new*
  {}

FsWatchesRecursive::
/home/src/project/node_modules: *new*
  {}

Projects::
/home/src/project/tsconfig.b.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/project/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a/lib/lib.d.ts *new*
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/aFileWithImports.ts *new*
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/aRandomFileForImport.ts *new*
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/aRandomFileForImport2.ts *new*
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bFileWithImports.ts *new*
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bMain.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /home/src/project/tsconfig.b.json *default*
/home/src/project/bRandomFileForImport.ts *new*
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bRandomFileForImport2.ts *new*
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.b.json
/home/src/project/cFileWithImports.ts *new*
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cMain.ts *new*
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cRandomFileForImport.ts *new*
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cRandomFileForImport2.ts *new*
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/node_modules/pkg0/index.d.ts *new*
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/pkg0.d.ts *new*
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json

modify bRandomFileForImport by adding import
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/project/bRandomFileForImport.ts 1:: WatchInfo: /home/src/project/bRandomFileForImport.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/project/tsconfig.b.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/project/bRandomFileForImport.ts 1:: WatchInfo: /home/src/project/bRandomFileForImport.ts 500 undefined WatchType: Closed Script info
Before running Timeout callback:: count: 3
1: /home/src/project/tsconfig.json
2: /home/src/project/tsconfig.b.json
3: *ensureProjectForOpenFiles*
//// [/home/src/project/bRandomFileForImport.ts]
export type { ImportInterface0 } from "pkg0";
export const x = 10;


Timeout callback:: count: 3
1: /home/src/project/tsconfig.json *new*
2: /home/src/project/tsconfig.b.json *new*
3: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/project/tsconfig.b.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1
    dirty: true *changed*
/home/src/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1
    dirty: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/aFileWithImports.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/aRandomFileForImport.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/aRandomFileForImport2.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bFileWithImports.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bMain.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /home/src/project/tsconfig.b.json *default*
/home/src/project/bRandomFileForImport.ts *changed*
    version: Text-1
    pendingReloadFromDisk: true *changed*
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bRandomFileForImport2.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.b.json
/home/src/project/cFileWithImports.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cMain.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cRandomFileForImport.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cRandomFileForImport2.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/node_modules/pkg0/index.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/pkg0.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json

Info seq  [hh:mm:ss:mss] Running: /home/src/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Reusing resolution of module './bFileWithImports' from '/home/src/project/cFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/bFileWithImports.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'pkg0' from '/home/src/project/cFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/pkg0.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './aFileWithImports' from '/home/src/project/bFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/aFileWithImports.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './bRandomFileForImport' from '/home/src/project/bFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/bRandomFileForImport.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'pkg0' from '/home/src/project/bFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'pkg0' from '/home/src/project/aFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './aRandomFileForImport' from '/home/src/project/aFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/aRandomFileForImport.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './aRandomFileForImport2' from '/home/src/project/aFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/aRandomFileForImport2.ts'.
Info seq  [hh:mm:ss:mss] ======== Resolving module 'pkg0' from '/home/src/project/bRandomFileForImport.ts'. ========
Info seq  [hh:mm:ss:mss] Using compiler options of project reference redirect '/home/src/project/tsconfig.b.json'.
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/project/node_modules/pkg0/index.d.ts', result '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Module name 'pkg0' was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'. ========
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/project/tsconfig.json projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (12)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/project/cMain.ts Text-1 "export const x = 10;"
	/home/src/project/node_modules/pkg0/index.d.ts Text-1 "export interface ImportInterface0 {}"
	/home/src/project/aRandomFileForImport.ts Text-1 "export const x = 10;"
	/home/src/project/aRandomFileForImport2.ts Text-1 "export const x = 10;"
	/home/src/project/aFileWithImports.ts Text-1 "import type { ImportInterface0 } from \"pkg0\";\nexport { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport const y = 10;\n"
	/home/src/project/bRandomFileForImport.ts Text-2 "export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
	/home/src/project/bFileWithImports.ts Text-1 "export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n"
	/home/src/project/pkg0.d.ts Text-1 "export interface ImportInterface0 {}"
	/home/src/project/cFileWithImports.ts Text-1 "import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n"
	/home/src/project/cRandomFileForImport.ts Text-1 "export const x = 10;"
	/home/src/project/cRandomFileForImport2.ts Text-1 "export const x = 10;"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: /home/src/project/tsconfig.b.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/project/tsconfig.b.json
Info seq  [hh:mm:ss:mss] Reusing resolution of module './aFileWithImports' from '/home/src/project/bFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/aFileWithImports.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './bRandomFileForImport' from '/home/src/project/bFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/bRandomFileForImport.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'pkg0' from '/home/src/project/bFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'pkg0' from '/home/src/project/aFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './aRandomFileForImport' from '/home/src/project/aFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/aRandomFileForImport.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './aRandomFileForImport2' from '/home/src/project/aFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/aRandomFileForImport2.ts'.
Info seq  [hh:mm:ss:mss] ======== Resolving module 'pkg0' from '/home/src/project/bRandomFileForImport.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/project/node_modules/pkg0/index.d.ts', result '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Module name 'pkg0' was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'. ========
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/project/tsconfig.b.json projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.b.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/project/bMain.ts SVC-1-0 "export const x = 10;"
	/home/src/project/node_modules/pkg0/index.d.ts Text-1 "export interface ImportInterface0 {}"
	/home/src/project/aRandomFileForImport.ts Text-1 "export const x = 10;"
	/home/src/project/aRandomFileForImport2.ts Text-1 "export const x = 10;"
	/home/src/project/aFileWithImports.ts Text-1 "import type { ImportInterface0 } from \"pkg0\";\nexport { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport const y = 10;\n"
	/home/src/project/bRandomFileForImport.ts Text-2 "export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
	/home/src/project/bFileWithImports.ts Text-1 "export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n"
	/home/src/project/bRandomFileForImport2.ts Text-1 "export const x = 10;"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (12)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.b.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/project/bMain.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/project/tsconfig.b.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (12)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.b.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/project/bMain.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/project/tsconfig.b.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/project/bMain.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/project/bMain.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

Projects::
/home/src/project/tsconfig.b.json (Configured) *changed*
    projectStateVersion: 2
    projectProgramVersion: 2 *changed*
    dirty: false *changed*
/home/src/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 2
    projectProgramVersion: 2 *changed*
    dirty: false *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/aFileWithImports.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/aRandomFileForImport.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/aRandomFileForImport2.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bFileWithImports.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bMain.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /home/src/project/tsconfig.b.json *default*
/home/src/project/bRandomFileForImport.ts *changed*
    version: Text-2 *changed*
    pendingReloadFromDisk: false *changed*
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bRandomFileForImport2.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.b.json
/home/src/project/cFileWithImports.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cMain.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cRandomFileForImport.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cRandomFileForImport2.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/node_modules/pkg0/index.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/pkg0.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/home/src/project/cMain.ts"
      },
      "seq": 2,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /home/src/project/cMain.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/project/cMain.ts ProjectRootPath: undefined:: Result: /home/src/project/tsconfig.json
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/project/tsconfig.json ProjectRootPath: undefined:: Result: undefined
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (12)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.b.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/project/bMain.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/project/tsconfig.b.json
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/project/cMain.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/project/tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 2,
      "success": true
    }
After request

PolledWatches::
/home/src/project/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts:
  {}
/home/src/project:
  {}
/home/src/project/aFileWithImports.ts:
  {}
/home/src/project/aRandomFileForImport.ts:
  {}
/home/src/project/aRandomFileForImport2.ts:
  {}
/home/src/project/bFileWithImports.ts:
  {}
/home/src/project/bRandomFileForImport.ts:
  {}
/home/src/project/bRandomFileForImport2.ts:
  {}
/home/src/project/cFileWithImports.ts:
  {}
/home/src/project/cRandomFileForImport.ts:
  {}
/home/src/project/cRandomFileForImport2.ts:
  {}
/home/src/project/pkg0.d.ts:
  {}
/home/src/project/tsconfig.a.json:
  {}
/home/src/project/tsconfig.b.json:
  {}
/home/src/project/tsconfig.json:
  {}

FsWatches *deleted*::
/home/src/project/cMain.ts:
  {}

FsWatchesRecursive::
/home/src/project/node_modules:
  {}

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/aFileWithImports.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/aRandomFileForImport.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/aRandomFileForImport2.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bFileWithImports.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bMain.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /home/src/project/tsconfig.b.json *default*
/home/src/project/bRandomFileForImport.ts
    version: Text-2
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bRandomFileForImport2.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.b.json
/home/src/project/cFileWithImports.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cMain.ts (Open) *changed*
    open: true *changed*
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json *default*
/home/src/project/cRandomFileForImport.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cRandomFileForImport2.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/node_modules/pkg0/index.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/pkg0.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json

Info seq  [hh:mm:ss:mss] modify cRandomFileForImport by adding import
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/project/cRandomFileForImport.ts 1:: WatchInfo: /home/src/project/cRandomFileForImport.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/project/cRandomFileForImport.ts 1:: WatchInfo: /home/src/project/cRandomFileForImport.ts 500 undefined WatchType: Closed Script info
Before running Timeout callback:: count: 2
4: /home/src/project/tsconfig.json
5: *ensureProjectForOpenFiles*
//// [/home/src/project/cRandomFileForImport.ts]
export type { ImportInterface0 } from "pkg0";
export const x = 10;


Timeout callback:: count: 2
4: /home/src/project/tsconfig.json *new*
5: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/project/tsconfig.b.json (Configured)
    projectStateVersion: 2
    projectProgramVersion: 2
/home/src/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 3 *changed*
    projectProgramVersion: 2
    dirty: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/aFileWithImports.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/aRandomFileForImport.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/aRandomFileForImport2.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bFileWithImports.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bMain.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /home/src/project/tsconfig.b.json *default*
/home/src/project/bRandomFileForImport.ts
    version: Text-2
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bRandomFileForImport2.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.b.json
/home/src/project/cFileWithImports.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cMain.ts (Open)
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json *default*
/home/src/project/cRandomFileForImport.ts *changed*
    version: Text-1
    pendingReloadFromDisk: true *changed*
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cRandomFileForImport2.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/node_modules/pkg0/index.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/pkg0.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json

Info seq  [hh:mm:ss:mss] Running: /home/src/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Reusing resolution of module './bFileWithImports' from '/home/src/project/cFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/bFileWithImports.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'pkg0' from '/home/src/project/cFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/pkg0.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './aFileWithImports' from '/home/src/project/bFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/aFileWithImports.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './bRandomFileForImport' from '/home/src/project/bFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/bRandomFileForImport.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'pkg0' from '/home/src/project/bFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'pkg0' from '/home/src/project/aFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './aRandomFileForImport' from '/home/src/project/aFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/aRandomFileForImport.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './aRandomFileForImport2' from '/home/src/project/aFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/aRandomFileForImport2.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'pkg0' from '/home/src/project/bRandomFileForImport.ts' of old program, it was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Resolving module 'pkg0' from '/home/src/project/cRandomFileForImport.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Classic'.
Info seq  [hh:mm:ss:mss] File '/home/src/project/pkg0.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/pkg0.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/pkg0.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name 'pkg0' was successfully resolved to '/home/src/project/pkg0.d.ts'. ========
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/project/tsconfig.json projectStateVersion: 3 projectProgramVersion: 2 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (12)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/project/cMain.ts Text-1 "export const x = 10;"
	/home/src/project/node_modules/pkg0/index.d.ts Text-1 "export interface ImportInterface0 {}"
	/home/src/project/aRandomFileForImport.ts Text-1 "export const x = 10;"
	/home/src/project/aRandomFileForImport2.ts Text-1 "export const x = 10;"
	/home/src/project/aFileWithImports.ts Text-1 "import type { ImportInterface0 } from \"pkg0\";\nexport { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport const y = 10;\n"
	/home/src/project/bRandomFileForImport.ts Text-2 "export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
	/home/src/project/bFileWithImports.ts Text-1 "export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n"
	/home/src/project/pkg0.d.ts Text-1 "export interface ImportInterface0 {}"
	/home/src/project/cFileWithImports.ts Text-1 "import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n"
	/home/src/project/cRandomFileForImport.ts Text-2 "export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
	/home/src/project/cRandomFileForImport2.ts Text-1 "export const x = 10;"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (12)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.b.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/project/bMain.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/project/tsconfig.b.json
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/project/cMain.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/project/tsconfig.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (12)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.b.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/project/bMain.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/project/tsconfig.b.json
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/project/cMain.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/project/tsconfig.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/project/bMain.ts,/home/src/project/cMain.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/project/bMain.ts",
          "/home/src/project/cMain.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

Projects::
/home/src/project/tsconfig.b.json (Configured)
    projectStateVersion: 2
    projectProgramVersion: 2
/home/src/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 3
    projectProgramVersion: 3 *changed*
    dirty: false *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/aFileWithImports.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/aRandomFileForImport.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/aRandomFileForImport2.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bFileWithImports.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bMain.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /home/src/project/tsconfig.b.json *default*
/home/src/project/bRandomFileForImport.ts
    version: Text-2
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bRandomFileForImport2.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.b.json
/home/src/project/cFileWithImports.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cMain.ts (Open)
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json *default*
/home/src/project/cRandomFileForImport.ts *changed*
    version: Text-2 *changed*
    pendingReloadFromDisk: false *changed*
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cRandomFileForImport2.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/node_modules/pkg0/index.d.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/pkg0.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json

Before request

Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/home/src/project/aMain.ts"
      },
      "seq": 3,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/project/aMain.ts ProjectRootPath: undefined:: Result: /home/src/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /home/src/project/tsconfig.a.json
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/home/src/project/tsconfig.a.json",
        "reason": "Creating project referenced in solution /home/src/project/tsconfig.json to find possible configured project for /home/src/project/aMain.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/project/tsconfig.a.json
Info seq  [hh:mm:ss:mss] ======== Resolving module 'pkg0' from '/home/src/project/aFileWithImports.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/package.json' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/project/node_modules/pkg0/index.d.ts', result '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Module name 'pkg0' was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'. ========
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/project/node_modules 1 undefined Project: /home/src/project/tsconfig.a.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/project/node_modules 1 undefined Project: /home/src/project/tsconfig.a.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] ======== Resolving module './aRandomFileForImport' from '/home/src/project/aFileWithImports.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/home/src/project/aRandomFileForImport', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/project/aRandomFileForImport.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './aRandomFileForImport' was successfully resolved to '/home/src/project/aRandomFileForImport.ts'. ========
Info seq  [hh:mm:ss:mss] ======== Resolving module './aRandomFileForImport2' from '/home/src/project/aFileWithImports.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module as file / folder, candidate module location '/home/src/project/aRandomFileForImport2', target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/project/aRandomFileForImport2.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] ======== Module name './aRandomFileForImport2' was successfully resolved to '/home/src/project/aRandomFileForImport2.ts'. ========
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /home/src/project/node_modules/@types 1 undefined Project: /home/src/project/tsconfig.a.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/project/node_modules/@types 1 undefined Project: /home/src/project/tsconfig.a.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/project/tsconfig.a.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.a.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (6)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/project/aMain.ts SVC-1-0 "export const x = 10;"
	/home/src/project/node_modules/pkg0/index.d.ts Text-1 "export interface ImportInterface0 {}"
	/home/src/project/aRandomFileForImport.ts Text-1 "export const x = 10;"
	/home/src/project/aRandomFileForImport2.ts Text-1 "export const x = 10;"
	/home/src/project/aFileWithImports.ts Text-1 "import type { ImportInterface0 } from \"pkg0\";\nexport { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport const y = 10;\n"


	../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	aMain.ts
	  Part of 'files' list in tsconfig.json
	node_modules/pkg0/index.d.ts
	  Imported via "pkg0" from file 'aFileWithImports.ts'
	aRandomFileForImport.ts
	  Imported via "./aRandomFileForImport" from file 'aFileWithImports.ts'
	  Part of 'files' list in tsconfig.json
	aRandomFileForImport2.ts
	  Imported via "./aRandomFileForImport2" from file 'aFileWithImports.ts'
	  Part of 'files' list in tsconfig.json
	aFileWithImports.ts
	  Part of 'files' list in tsconfig.json

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/home/src/project/tsconfig.a.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "84980b10f50af9ffe92e6aceb91a03d80c52dfa49e63946483e1d103261f2cde",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 4,
            "tsSize": 222,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 2,
            "dtsSize": 370,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {
            "composite": true,
            "traceResolution": true
          },
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": true,
          "include": false,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "other",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/home/src/project/aMain.ts",
        "configFile": "/home/src/project/tsconfig.a.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /home/src/project/tsconfig.a.json ProjectRootPath: undefined:: Result: undefined
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (12)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.b.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.a.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (6)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/project/bMain.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/project/tsconfig.b.json
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/project/cMain.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/project/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/project/aMain.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/project/tsconfig.a.json
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 3,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      }
    }
After request

Projects::
/home/src/project/tsconfig.a.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/home/src/project/tsconfig.b.json (Configured)
    projectStateVersion: 2
    projectProgramVersion: 2
/home/src/project/tsconfig.json (Configured)
    projectStateVersion: 3
    projectProgramVersion: 3

ScriptInfos::
/a/lib/lib.d.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
        /home/src/project/tsconfig.a.json *new*
/home/src/project/aFileWithImports.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
        /home/src/project/tsconfig.a.json *new*
/home/src/project/aMain.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /home/src/project/tsconfig.a.json *default*
/home/src/project/aRandomFileForImport.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
        /home/src/project/tsconfig.a.json *new*
/home/src/project/aRandomFileForImport2.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
        /home/src/project/tsconfig.a.json *new*
/home/src/project/bFileWithImports.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bMain.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /home/src/project/tsconfig.b.json *default*
/home/src/project/bRandomFileForImport.ts
    version: Text-2
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bRandomFileForImport2.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.b.json
/home/src/project/cFileWithImports.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cMain.ts (Open)
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json *default*
/home/src/project/cRandomFileForImport.ts
    version: Text-2
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cRandomFileForImport2.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/node_modules/pkg0/index.d.ts *changed*
    version: Text-1
    containingProjects: 3 *changed*
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
        /home/src/project/tsconfig.a.json *new*
/home/src/project/pkg0.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json

Info seq  [hh:mm:ss:mss] modify aRandomFileForImport by adding import
Info seq  [hh:mm:ss:mss] FileWatcher:: Triggered with /home/src/project/aRandomFileForImport.ts 1:: WatchInfo: /home/src/project/aRandomFileForImport.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/project/tsconfig.b.json
Info seq  [hh:mm:ss:mss] Scheduled: /home/src/project/tsconfig.a.json
Info seq  [hh:mm:ss:mss] Scheduled: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Elapsed:: *ms FileWatcher:: Triggered with /home/src/project/aRandomFileForImport.ts 1:: WatchInfo: /home/src/project/aRandomFileForImport.ts 500 undefined WatchType: Closed Script info
Before running Timeout callback:: count: 4
6: /home/src/project/tsconfig.json
7: /home/src/project/tsconfig.b.json
8: /home/src/project/tsconfig.a.json
9: *ensureProjectForOpenFiles*
//// [/home/src/project/aRandomFileForImport.ts]
export type { ImportInterface0 } from "pkg0";
export const x = 10;


Timeout callback:: count: 4
6: /home/src/project/tsconfig.json *new*
7: /home/src/project/tsconfig.b.json *new*
8: /home/src/project/tsconfig.a.json *new*
9: *ensureProjectForOpenFiles* *new*

Projects::
/home/src/project/tsconfig.a.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1
    dirty: true *changed*
/home/src/project/tsconfig.b.json (Configured) *changed*
    projectStateVersion: 3 *changed*
    projectProgramVersion: 2
    dirty: true *changed*
/home/src/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 4 *changed*
    projectProgramVersion: 3
    dirty: true *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 3
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
        /home/src/project/tsconfig.a.json
/home/src/project/aFileWithImports.ts
    version: Text-1
    containingProjects: 3
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
        /home/src/project/tsconfig.a.json
/home/src/project/aMain.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /home/src/project/tsconfig.a.json *default*
/home/src/project/aRandomFileForImport.ts *changed*
    version: Text-1
    pendingReloadFromDisk: true *changed*
    containingProjects: 3
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
        /home/src/project/tsconfig.a.json
/home/src/project/aRandomFileForImport2.ts
    version: Text-1
    containingProjects: 3
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
        /home/src/project/tsconfig.a.json
/home/src/project/bFileWithImports.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bMain.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /home/src/project/tsconfig.b.json *default*
/home/src/project/bRandomFileForImport.ts
    version: Text-2
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bRandomFileForImport2.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.b.json
/home/src/project/cFileWithImports.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cMain.ts (Open)
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json *default*
/home/src/project/cRandomFileForImport.ts
    version: Text-2
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cRandomFileForImport2.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/node_modules/pkg0/index.d.ts
    version: Text-1
    containingProjects: 3
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
        /home/src/project/tsconfig.a.json
/home/src/project/pkg0.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json

Info seq  [hh:mm:ss:mss] Running: /home/src/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/project/tsconfig.json
Info seq  [hh:mm:ss:mss] Reusing resolution of module './bFileWithImports' from '/home/src/project/cFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/bFileWithImports.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'pkg0' from '/home/src/project/cFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/pkg0.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './aFileWithImports' from '/home/src/project/bFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/aFileWithImports.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './bRandomFileForImport' from '/home/src/project/bFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/bRandomFileForImport.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'pkg0' from '/home/src/project/bFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'pkg0' from '/home/src/project/aFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './aRandomFileForImport' from '/home/src/project/aFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/aRandomFileForImport.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './aRandomFileForImport2' from '/home/src/project/aFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/aRandomFileForImport2.ts'.
Info seq  [hh:mm:ss:mss] ======== Resolving module 'pkg0' from '/home/src/project/aRandomFileForImport.ts'. ========
Info seq  [hh:mm:ss:mss] Using compiler options of project reference redirect '/home/src/project/tsconfig.a.json'.
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/project/node_modules/pkg0/index.d.ts', result '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Module name 'pkg0' was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'. ========
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'pkg0' from '/home/src/project/bRandomFileForImport.ts' of old program, it was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'pkg0' from '/home/src/project/cRandomFileForImport.ts' of old program, it was successfully resolved to '/home/src/project/pkg0.d.ts'.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/project/tsconfig.json projectStateVersion: 4 projectProgramVersion: 3 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (12)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/project/cMain.ts Text-1 "export const x = 10;"
	/home/src/project/node_modules/pkg0/index.d.ts Text-1 "export interface ImportInterface0 {}"
	/home/src/project/aRandomFileForImport.ts Text-2 "export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
	/home/src/project/aRandomFileForImport2.ts Text-1 "export const x = 10;"
	/home/src/project/aFileWithImports.ts Text-1 "import type { ImportInterface0 } from \"pkg0\";\nexport { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport const y = 10;\n"
	/home/src/project/bRandomFileForImport.ts Text-2 "export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
	/home/src/project/bFileWithImports.ts Text-1 "export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n"
	/home/src/project/pkg0.d.ts Text-1 "export interface ImportInterface0 {}"
	/home/src/project/cFileWithImports.ts Text-1 "import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n"
	/home/src/project/cRandomFileForImport.ts Text-2 "export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
	/home/src/project/cRandomFileForImport2.ts Text-1 "export const x = 10;"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: /home/src/project/tsconfig.b.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/project/tsconfig.b.json
Info seq  [hh:mm:ss:mss] Reusing resolution of module './aFileWithImports' from '/home/src/project/bFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/aFileWithImports.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './bRandomFileForImport' from '/home/src/project/bFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/bRandomFileForImport.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'pkg0' from '/home/src/project/bFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'pkg0' from '/home/src/project/aFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './aRandomFileForImport' from '/home/src/project/aFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/aRandomFileForImport.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './aRandomFileForImport2' from '/home/src/project/aFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/aRandomFileForImport2.ts'.
Info seq  [hh:mm:ss:mss] ======== Resolving module 'pkg0' from '/home/src/project/aRandomFileForImport.ts'. ========
Info seq  [hh:mm:ss:mss] Using compiler options of project reference redirect '/home/src/project/tsconfig.a.json'.
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/project/node_modules/pkg0/index.d.ts', result '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Module name 'pkg0' was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'. ========
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'pkg0' from '/home/src/project/bRandomFileForImport.ts' of old program, it was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/project/tsconfig.b.json projectStateVersion: 3 projectProgramVersion: 2 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.b.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/project/bMain.ts SVC-1-0 "export const x = 10;"
	/home/src/project/node_modules/pkg0/index.d.ts Text-1 "export interface ImportInterface0 {}"
	/home/src/project/aRandomFileForImport.ts Text-2 "export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
	/home/src/project/aRandomFileForImport2.ts Text-1 "export const x = 10;"
	/home/src/project/aFileWithImports.ts Text-1 "import type { ImportInterface0 } from \"pkg0\";\nexport { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport const y = 10;\n"
	/home/src/project/bRandomFileForImport.ts Text-2 "export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
	/home/src/project/bFileWithImports.ts Text-1 "export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n"
	/home/src/project/bRandomFileForImport2.ts Text-1 "export const x = 10;"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: /home/src/project/tsconfig.a.json
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /home/src/project/tsconfig.a.json
Info seq  [hh:mm:ss:mss] Reusing resolution of module 'pkg0' from '/home/src/project/aFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './aRandomFileForImport' from '/home/src/project/aFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/aRandomFileForImport.ts'.
Info seq  [hh:mm:ss:mss] Reusing resolution of module './aRandomFileForImport2' from '/home/src/project/aFileWithImports.ts' of old program, it was successfully resolved to '/home/src/project/aRandomFileForImport2.ts'.
Info seq  [hh:mm:ss:mss] ======== Resolving module 'pkg0' from '/home/src/project/aRandomFileForImport.ts'. ========
Info seq  [hh:mm:ss:mss] Module resolution kind is not specified, using 'Node10'.
Info seq  [hh:mm:ss:mss] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/package.json' does not exist according to earlier cached lookups.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0.d.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.ts' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.tsx' does not exist.
Info seq  [hh:mm:ss:mss] File '/home/src/project/node_modules/pkg0/index.d.ts' exists - use it as a name resolution result.
Info seq  [hh:mm:ss:mss] Resolving real path for '/home/src/project/node_modules/pkg0/index.d.ts', result '/home/src/project/node_modules/pkg0/index.d.ts'.
Info seq  [hh:mm:ss:mss] ======== Module name 'pkg0' was successfully resolved to '/home/src/project/node_modules/pkg0/index.d.ts'. ========
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /home/src/project/tsconfig.a.json projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.a.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (6)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/home/src/project/aMain.ts SVC-1-0 "export const x = 10;"
	/home/src/project/node_modules/pkg0/index.d.ts Text-1 "export interface ImportInterface0 {}"
	/home/src/project/aRandomFileForImport.ts Text-2 "export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
	/home/src/project/aRandomFileForImport2.ts Text-1 "export const x = 10;"
	/home/src/project/aFileWithImports.ts Text-1 "import type { ImportInterface0 } from \"pkg0\";\nexport { x } from \"./aRandomFileForImport\";\nexport { x as x2 } from \"./aRandomFileForImport2\";\nexport const y = 10;\n"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Running: *ensureProjectForOpenFiles*
Info seq  [hh:mm:ss:mss] Before ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (12)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.b.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.a.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (6)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/project/bMain.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/project/tsconfig.b.json
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/project/cMain.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/project/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/project/aMain.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/project/tsconfig.a.json
Info seq  [hh:mm:ss:mss] After ensureProjectForOpenFiles:
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (12)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.b.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (9)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/home/src/project/tsconfig.a.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (6)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/project/bMain.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/project/tsconfig.b.json
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/project/cMain.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/project/tsconfig.json
Info seq  [hh:mm:ss:mss] 	FileName: /home/src/project/aMain.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /home/src/project/tsconfig.a.json
Info seq  [hh:mm:ss:mss] got projects updated in background /home/src/project/bMain.ts,/home/src/project/cMain.ts,/home/src/project/aMain.ts
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectsUpdatedInBackground",
      "body": {
        "openFiles": [
          "/home/src/project/bMain.ts",
          "/home/src/project/cMain.ts",
          "/home/src/project/aMain.ts"
        ]
      }
    }
After running Timeout callback:: count: 0

Projects::
/home/src/project/tsconfig.a.json (Configured) *changed*
    projectStateVersion: 2
    projectProgramVersion: 2 *changed*
    dirty: false *changed*
/home/src/project/tsconfig.b.json (Configured) *changed*
    projectStateVersion: 3
    projectProgramVersion: 3 *changed*
    dirty: false *changed*
/home/src/project/tsconfig.json (Configured) *changed*
    projectStateVersion: 4
    projectProgramVersion: 4 *changed*
    dirty: false *changed*

ScriptInfos::
/a/lib/lib.d.ts
    version: Text-1
    containingProjects: 3
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
        /home/src/project/tsconfig.a.json
/home/src/project/aFileWithImports.ts
    version: Text-1
    containingProjects: 3
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
        /home/src/project/tsconfig.a.json
/home/src/project/aMain.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /home/src/project/tsconfig.a.json *default*
/home/src/project/aRandomFileForImport.ts *changed*
    version: Text-2 *changed*
    pendingReloadFromDisk: false *changed*
    containingProjects: 3
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
        /home/src/project/tsconfig.a.json
/home/src/project/aRandomFileForImport2.ts
    version: Text-1
    containingProjects: 3
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
        /home/src/project/tsconfig.a.json
/home/src/project/bFileWithImports.ts
    version: Text-1
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bMain.ts (Open)
    version: SVC-1-0
    containingProjects: 1
        /home/src/project/tsconfig.b.json *default*
/home/src/project/bRandomFileForImport.ts
    version: Text-2
    containingProjects: 2
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
/home/src/project/bRandomFileForImport2.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.b.json
/home/src/project/cFileWithImports.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cMain.ts (Open)
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json *default*
/home/src/project/cRandomFileForImport.ts
    version: Text-2
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/cRandomFileForImport2.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
/home/src/project/node_modules/pkg0/index.d.ts
    version: Text-1
    containingProjects: 3
        /home/src/project/tsconfig.json
        /home/src/project/tsconfig.b.json
        /home/src/project/tsconfig.a.json
/home/src/project/pkg0.d.ts
    version: Text-1
    containingProjects: 1
        /home/src/project/tsconfig.json
