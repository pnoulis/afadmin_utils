/// <reference types="vitest" />
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https:vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), svgr()],
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
  },
  test: {
    // ...
    include: [
      ...configDefaults.include,
      "tests.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
    ],
  },
});
