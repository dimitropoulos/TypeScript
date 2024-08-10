import { CompilerOptions } from "../../_namespaces/ts.js";
import { dedent } from "../../_namespaces/Utils.js";
import { FileSystem } from "../../_namespaces/vfs.js";
import { jsonToReadableText } from "../helpers.js";
import { loadProjectFromFiles } from "./vfs.js";
import {
    getTypeScriptLibTestLocation,
    libFile,
} from "./virtualFileSystemWithWatch.js";

export function getFsForDeclarationEmitWithErrors(options: CompilerOptions, incremental: true | undefined) {
    return loadProjectFromFiles({
        "/src/project/tsconfig.json": jsonToReadableText({
            compilerOptions: {
                module: "NodeNext",
                moduleResolution: "NodeNext",
                ...options,
                incremental,
                skipLibCheck: true,
                skipDefaultLibCheck: true,
            },
        }),
        "/src/project/index.ts": dedent`
            import ky from 'ky';
            export const api = ky.extend({});
        `,
        "/src/project/package.json": jsonToReadableText({
            type: "module",
        }),
        "/src/project/node_modules/ky/distribution/index.d.ts": dedent`
            type KyInstance = {
                extend(options: Record<string,unknown>): KyInstance;
            }
            declare const ky: KyInstance;
            export default ky;
        `,
        "/src/project/node_modules/ky/package.json": jsonToReadableText({
            name: "ky",
            type: "module",
            main: "./distribution/index.js",
        }),
        [getTypeScriptLibTestLocation("esnext.full")]: libFile.content,
    });
}

export function getFsForDeclarationEmitWithErrorsWithOutFile(options: CompilerOptions, incremental: true | undefined) {
    return loadProjectFromFiles({
        "/src/project/tsconfig.json": jsonToReadableText({
            compilerOptions: {
                module: "amd",
                ...options,
                incremental,
                skipLibCheck: true,
                skipDefaultLibCheck: true,
                outFile: "./outFile.js",
            },
            include: ["src"],
        }),
        "/src/project/src/index.ts": dedent`
            import ky from 'ky';
            export const api = ky.extend({});
        `,
        "/src/project/ky.d.ts": dedent`
            type KyInstance = {
                extend(options: Record<string,unknown>): KyInstance;
            }
            declare const ky: KyInstance;
            export default ky;
        `,
        [getTypeScriptLibTestLocation("esnext")]: libFile.content,
    });
}

export function forEachDeclarationEmitWithErrorsScenario(
    action: (
        scenarioName: (scenario: string) => string,
        fs: () => FileSystem,
    ) => void,
    withComposite: boolean,
) {
    for (const outFile of [false, true]) {
        for (const incremental of [undefined, true] as const) {
            action(
                scenario => `${outFile ? "outFile" : "multiFile"}/${scenario}${incremental ? " with incremental" : ""}`,
                () =>
                    (outFile ? getFsForDeclarationEmitWithErrorsWithOutFile :
                        getFsForDeclarationEmitWithErrors)(
                            withComposite && incremental ?
                                { composite: true } :
                                { declaration: true },
                            incremental,
                        ),
            );
        }
    }
}
