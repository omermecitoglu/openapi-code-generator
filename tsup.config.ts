import InlineImportPlugin from "esbuild-plugin-inline-import";
import { defineConfig } from "tsup";

export default defineConfig({
  outDir: "dist",
  entry: ["src/index.ts"],
  format: ["esm"],
  splitting: false,
  clean: true,
  external: ["handlebars"],
  esbuildPlugins: [
    InlineImportPlugin({ filter: /\.hbs$/ }),
  ],
});
