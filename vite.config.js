/// <reference types="vitest" />
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import { getEnvar } from "./src/misc/environment.js";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

const conf = {};
const BUILD_TARGET = getEnvar("BUILD_TARGET", true, "production");
const MODE = getEnvar("MODE", true, "production");

if (/dev/.test(BUILD_TARGET)) {
  conf.plugins = [react(), svgr()];
}

if (!/dev/.test(MODE)) {
  conf.build = {
    outDir: "dist",
  };
}

// https:vitejs.dev/config/
export default defineConfig({
  ...conf,
  build: {
    outDir: "build",
    target: "esnext",
    sourcemap: true,
    emptyOutDir: true,
    copyPublicDir: false,
    lib: {
      entry: {
        comboboxes: "./src/comboboxes/index.js",
      },
      name: "afadmin_utils",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "fuse.js"],
      output: {
        globals: {
          react: "React",
          ["react-dom"]: "ReactDOM",
        },
      },
    },
    ...conf.build,
  },
  test: {
    // ...
    include: [
      ...configDefaults.include,
      "tests.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
    ],
  },
});
