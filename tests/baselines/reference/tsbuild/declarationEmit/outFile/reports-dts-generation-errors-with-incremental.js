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

//// [/home/src/tslibs/ts/lib/lib.esnext.d.ts]
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

//// [/src/project/ky.d.ts]
type KyInstance = {
    extend(options: Record<string,unknown>): KyInstance;
}
declare const ky: KyInstance;
export default ky;


//// [/src/project/src/index.ts]
import ky from 'ky';
export const api = ky.extend({});


//// [/src/project/tsconfig.json]
{
  "compilerOptions": {
    "module": "amd",
    "declaration": true,
    "incremental": true,
    "skipLibCheck": true,
    "skipDefaultLibCheck": true,
    "outFile": "./outFile.js"
  },
  "include": [
    "src"
  ]
}



Output::
/home/src/tslibs/ts/lib/tsc -b /src/project --explainFiles --listEmittedFiles --v
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/project/tsconfig.json' is out of date because output file 'src/project/outFile.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/project/tsconfig.json'...

[96msrc/project/src/index.ts[0m:[93m2[0m:[93m14[0m - [91merror[0m[90m TS4023: [0mExported variable 'api' has or is using name 'KyInstance' from external module "/src/project/ky" but cannot be named.

[7m2[0m export const api = ky.extend({});
[7m [0m [91m             ~~~[0m

TSFILE: /src/project/outFile.js
TSFILE: /src/project/outFile.tsbuildinfo
home/src/tslibs/ts/lib/lib.d.ts
  Default library for target 'es5'
src/project/ky.d.ts
  Imported via 'ky' from file 'src/project/src/index.ts'
src/project/src/index.ts
  Matched by include pattern 'src' in 'src/project/tsconfig.json'

Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped


//// [/src/project/outFile.js]
define("index", ["require", "exports", "ky"], function (require, exports, ky_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.api = void 0;
    exports.api = ky_1.default.extend({});
});


//// [/src/project/outFile.tsbuildinfo]
{"fileNames":["../../home/src/tslibs/ts/lib/lib.d.ts","./ky.d.ts","./src/index.ts"],"fileInfos":["3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","10101889135-type KyInstance = {\n    extend(options: Record<string,unknown>): KyInstance;\n}\ndeclare const ky: KyInstance;\nexport default ky;\n","-383421929-import ky from 'ky';\nexport const api = ky.extend({});\n"],"root":[3],"options":{"declaration":true,"module":2,"outFile":"./outFile.js","skipDefaultLibCheck":true,"skipLibCheck":true},"emitDiagnosticsPerFile":[[3,[{"start":34,"length":3,"messageText":"Exported variable 'api' has or is using name 'KyInstance' from external module \"/src/project/ky\" but cannot be named.","category":1,"code":4023}]]],"version":"FakeTSVersion"}

//// [/src/project/outFile.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../home/src/tslibs/ts/lib/lib.d.ts",
    "./ky.d.ts",
    "./src/index.ts"
  ],
  "fileInfos": {
    "../../home/src/tslibs/ts/lib/lib.d.ts": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "./ky.d.ts": "10101889135-type KyInstance = {\n    extend(options: Record<string,unknown>): KyInstance;\n}\ndeclare const ky: KyInstance;\nexport default ky;\n",
    "./src/index.ts": "-383421929-import ky from 'ky';\nexport const api = ky.extend({});\n"
  },
  "root": [
    [
      3,
      "./src/index.ts"
    ]
  ],
  "options": {
    "declaration": true,
    "module": 2,
    "outFile": "./outFile.js",
    "skipDefaultLibCheck": true,
    "skipLibCheck": true
  },
  "emitDiagnosticsPerFile": [
    [
      "./src/index.ts",
      [
        {
          "start": 34,
          "length": 3,
          "messageText": "Exported variable 'api' has or is using name 'KyInstance' from external module \"/src/project/ky\" but cannot be named.",
          "category": 1,
          "code": 4023
        }
      ]
    ]
  ],
  "version": "FakeTSVersion",
  "size": 1127
}



Change:: no-change-run
Input::


Output::
/home/src/tslibs/ts/lib/tsc -b /src/project --explainFiles --listEmittedFiles --v
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/project/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/project/tsconfig.json' is out of date because buildinfo file 'src/project/outFile.tsbuildinfo' indicates that program needs to report errors.

[[90mHH:MM:SS AM[0m] Building project '/src/project/tsconfig.json'...

[96msrc/project/src/index.ts[0m:[93m2[0m:[93m14[0m - [91merror[0m[90m TS4023: [0mExported variable 'api' has or is using name 'KyInstance' from external module "/src/project/ky" but cannot be named.

[7m2[0m export const api = ky.extend({});
[7m [0m [91m             ~~~[0m

home/src/tslibs/ts/lib/lib.d.ts
  Default library for target 'es5'
src/project/ky.d.ts
  Imported via 'ky' from file 'src/project/src/index.ts'
src/project/src/index.ts
  Matched by include pattern 'src' in 'src/project/tsconfig.json'

Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped


