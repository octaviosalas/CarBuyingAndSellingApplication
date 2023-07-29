// import resolve from "@rollup/plugin-node-resolve";
import dts from "rollup-plugin-dts";
import commonjs from "@rollup/plugin-commonjs";
import * as path from "path";
import pkg from "./package.json";

export default [
  {
    input: "index.js",
    external:[], // you may quash 'unresolved' warning by adding here
    output: [
      { file: pkg.exports.require, format: "cjs" },
      { file: pkg.exports.import, format: "es" },
    ],
    plugins: [
      commonjs(),
    ],
  },
  {
    input: "./index.d.ts",
    output: [
      { file: pkg.types, format: "es" }, 
    ],
    plugins: [dts()],
  },
];