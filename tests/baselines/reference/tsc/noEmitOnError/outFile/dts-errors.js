currentDirectory:: /user/username/projects/noEmitOnError useCaseSensitiveFileNames: false
Input::
//// [/lib/lib.d.ts]
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

//// [/user/username/projects/noEmitOnError/shared/types/db.ts]
export interface A {
    name: string;
}


//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
export const a = class { private p = 10; };


//// [/user/username/projects/noEmitOnError/src/other.ts]
console.log("hi");
export { }


//// [/user/username/projects/noEmitOnError/tsconfig.json]
{
  "compilerOptions": {
    "outFile": "../dev-build.js",
    "module": "amd",
    "noEmitOnError": true
  }
}



Output::
/lib/tsc 
exitCode:: ExitStatus.Success
Program root files: [
  "/user/username/projects/noEmitOnError/shared/types/db.ts",
  "/user/username/projects/noEmitOnError/src/main.ts",
  "/user/username/projects/noEmitOnError/src/other.ts"
]
Program options: {
  "outFile": "/user/username/projects/dev-build.js",
  "module": 2,
  "noEmitOnError": true,
  "configFilePath": "/user/username/projects/noEmitOnError/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts


//// [/user/username/projects/dev-build.js]
define("shared/types/db", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("src/main", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.a = void 0;
    exports.a = /** @class */ (function () {
        function class_1() {
            this.p = 10;
        }
        return class_1;
    }());
});
define("src/other", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log("hi");
});




Change:: no-change-run
Input::


Output::
/lib/tsc 
exitCode:: ExitStatus.Success
Program root files: [
  "/user/username/projects/noEmitOnError/shared/types/db.ts",
  "/user/username/projects/noEmitOnError/src/main.ts",
  "/user/username/projects/noEmitOnError/src/other.ts"
]
Program options: {
  "outFile": "/user/username/projects/dev-build.js",
  "module": 2,
  "noEmitOnError": true,
  "configFilePath": "/user/username/projects/noEmitOnError/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts


//// [/user/username/projects/dev-build.js] file written with same contents


Change:: Fix error
Input::
//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
export const a = class { p = 10; };




Output::
/lib/tsc 
exitCode:: ExitStatus.Success
Program root files: [
  "/user/username/projects/noEmitOnError/shared/types/db.ts",
  "/user/username/projects/noEmitOnError/src/main.ts",
  "/user/username/projects/noEmitOnError/src/other.ts"
]
Program options: {
  "outFile": "/user/username/projects/dev-build.js",
  "module": 2,
  "noEmitOnError": true,
  "configFilePath": "/user/username/projects/noEmitOnError/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts


//// [/user/username/projects/dev-build.js] file written with same contents


Change:: no-change-run
Input::


Output::
/lib/tsc 
exitCode:: ExitStatus.Success
Program root files: [
  "/user/username/projects/noEmitOnError/shared/types/db.ts",
  "/user/username/projects/noEmitOnError/src/main.ts",
  "/user/username/projects/noEmitOnError/src/other.ts"
]
Program options: {
  "outFile": "/user/username/projects/dev-build.js",
  "module": 2,
  "noEmitOnError": true,
  "configFilePath": "/user/username/projects/noEmitOnError/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts


//// [/user/username/projects/dev-build.js] file written with same contents
