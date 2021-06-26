import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import {terser} from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
let postcssConfig = require('./postcss.config')
import pug from 'rollup-plugin-pug'
import pkg from './package.json'
// import preImport from 'postcss-prepend-imports'
// import cssnano from 'cssnano'
import progress from 'rollup-plugin-progress'
import image from '@rollup/plugin-image'
import filesize from 'rollup-plugin-filesize'

const env = process.env.ENV
const isDev = env === 'development'
// if (!isDev) {
//   postcssConfig.plugins.push(cssnano())
// }

// postcssConfig.plugins.forEach((plugin, i) => {
//   if (!plugin) return false;
//   if (plugin.postcssPlugin === 'postcss-prepend-imports') {
//     postcssConfig.plugins[i] = preImport({
//       path: `./src/themes/${pkg.theme}`,
//       files: ['variable.css']
//     })
//   }
// })

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
    progress(),
    image(),
    filesize(),
    postcss({
      extract: true,
      plugins: postcssConfig().plugins
    }),
    !isDev && terser()
  ],
  external: [
    'vue'
  ]
}