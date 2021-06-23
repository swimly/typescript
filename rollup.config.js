import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import {terser} from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
const postcssConfig = require('./postcss.config')
import pug from 'rollup-plugin-pug'
import pkg from './package.json'

const env = process.env.ENV
console.log(env)

export default {
  input: './index.ts',
  output: [{
    file: `dist/${pkg.name}.js`,
    format: 'umd',
    name: pkg.name
  }],
  plugins: [
    json(),
    resolve(),
    typescript(),
    pug(),
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