import styles from "rollup-plugin-styles"
import typescript from "rollup-plugin-typescript2"

import pkg from "./package.json"

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [styles(), typescript({ objectHashIgnoreUnknownHack: true })],
  external: ["react", "react-dom"],
}
