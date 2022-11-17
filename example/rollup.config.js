import { nodeResolve } from "@rollup/plugin-node-resolve"
import { defineConfig } from "rollup"

export default defineConfig({
  input: "./editor.js",
  output: {
    file: "./editor.bundle.js",
    format: "iife",
  },
  plugins: [
    nodeResolve(),
  ]
});