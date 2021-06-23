import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import {terser} from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
const postcssConfig = require('./postcss.config')
import pkg from './package.json'


export default {
  input: './index.ts',
  output: [{
    file: `dist/${pkg.name}.min.js`,
    format: 'umd',
    name: pkg.name
  }],
  plugins: [
    json(),
    resolve(),
    typescript(),
    postcss({
      extract: true,
      plugins: postcssConfig.plugins
    }),
    terser()
  ],
  external: [
    'vue'
  ]
}