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

//// [/node_modules/solid-js/jsx-runtime.d.ts]
export namespace JSX {
    type IntrinsicElements = { div: {}; };
}


//// [/node_modules/solid-js/package.json]
{
  "name": "solid-js",
  "type": "module"
}

//// [/src/main.ts]
export default 42;

//// [/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "module": "Node16",
    "jsx": "react-jsx",
    "jsxImportSource": "solid-js"
  }
}



Output::
/home/src/tslibs/ts/lib/tsc 
exitCode:: ExitStatus.Success


//// [/src/main.d.ts]
declare const _default: 42;
export default _default;


//// [/src/main.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = 42;


//// [/tsconfig.tsbuildinfo]
{"fileNames":["./home/src/tslibs/ts/lib/lib.d.ts","./node_modules/solid-js/jsx-runtime.d.ts","./src/main.ts"],"fileIdsList":[[2]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-3511680495-export namespace JSX {\n    type IntrinsicElements = { div: {}; };\n}\n","impliedFormat":99},{"version":"-1874019635-export default 42;","signature":"-5660511115-declare const _default: 42;\nexport default _default;\n","impliedFormat":1}],"root":[1,3],"options":{"composite":true,"jsx":4,"jsxImportSource":"solid-js","module":100},"referencedMap":[[3,1]],"latestChangedDtsFile":"./src/main.d.ts","version":"FakeTSVersion"}

//// [/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "./home/src/tslibs/ts/lib/lib.d.ts",
    "./node_modules/solid-js/jsx-runtime.d.ts",
    "./src/main.ts"
  ],
  "fileIdsList": [
    [
      "./node_modules/solid-js/jsx-runtime.d.ts"
    ]
  ],
  "fileInfos": {
    "./home/src/tslibs/ts/lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "./node_modules/solid-js/jsx-runtime.d.ts": {
      "original": {
        "version": "-3511680495-export namespace JSX {\n    type IntrinsicElements = { div: {}; };\n}\n",
        "impliedFormat": 99
      },
      "version": "-3511680495-export namespace JSX {\n    type IntrinsicElements = { div: {}; };\n}\n",
      "signature": "-3511680495-export namespace JSX {\n    type IntrinsicElements = { div: {}; };\n}\n",
      "impliedFormat": "esnext"
    },
    "./src/main.ts": {
      "original": {
        "version": "-1874019635-export default 42;",
        "signature": "-5660511115-declare const _default: 42;\nexport default _default;\n",
        "impliedFormat": 1
      },
      "version": "-1874019635-export default 42;",
      "signature": "-5660511115-declare const _default: 42;\nexport default _default;\n",
      "impliedFormat": "commonjs"
    }
  },
  "root": [
    [
      1,
      "./home/src/tslibs/ts/lib/lib.d.ts"
    ],
    [
      3,
      "./src/main.ts"
    ]
  ],
  "options": {
    "composite": true,
    "jsx": 4,
    "jsxImportSource": "solid-js",
    "module": 100
  },
  "referencedMap": {
    "./src/main.ts": [
      "./node_modules/solid-js/jsx-runtime.d.ts"
    ]
  },
  "latestChangedDtsFile": "./src/main.d.ts",
  "version": "FakeTSVersion",
  "size": 1086
}

