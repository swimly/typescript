import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import {terser} from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
let postcssConfig = require('./postcss.config')
import pug from 'rollup-plugin-pug'
import pkg from '../package.json'
import progress from 'rollup-plugin-progress'
import image from '@rollup/plugin-image'
import filesize from 'rollup-plugin-filesize'
import babel from 'rollup-plugin-babel'
import fs from 'fs'

export default (name, env) => {
  const isDev = env === 'dev'
  const root = name === pkg.name ? './src/' : './src/components/'
  const input = name === pkg.name ? `${root}index.ts` : `${root}${name}/${name}.ts`
  const outputroot = name === pkg.name ? './' : `./src/components/${name}/`
  let isModule = false
  if (name !== pkg.name) {
    fs.readdirSync(`${root}${name}`).map(file => {
      if (file.indexOf('module') >= 0) {
        isModule = true
      }
    })
  }
  const postcssPlugins = postcssConfig(isModule, isDev).plugins
  const formats = ['umd']
  let output = []
  const ext = isDev ? '' : '.min'
  formats.forEach(fmt => {
    const dir = name === pkg.name ? isDev ? `dist/${name}${ext}.js` : `dist/${fmt}/${name}${ext}.js` : `dist/${fmt}/${name}${ext}.js`
    output.push({
      file: `${outputroot}${dir}`,
      format: fmt,
      name: name
    })
  })
  return {
    input,
    output,
    plugins: [
      json(),
      resolve(),
      commonjs(),
      typescript({
        exclude:['node_modules/**']
      }),
      pug(),
      image(),
      postcss({
        extract: !isModule,
        plugins: postcssPlugins
      }),
      babel({
        exclude: [/\/core-js\//],
        runtimeHelpers: true,
        extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue', '.ts'],
        presets: [
          ["@babel/env", {
            modules: false,
            useBuiltIns: 'usage',
            corejs: 2,
            forceAllTransforms: true
          }]
        ],
        plugins: [
          "babel-plugin-transform-object-assign",
          "@babel/plugin-proposal-object-rest-spread"
        ]
      }),
      !isDev && filesize(),
      !isDev && progress(),
      !isDev && terser()
    ],
    watch: {
      chokidar: {
        useFsEvents: false
      }
    },
    external: [
    ]
  }
}