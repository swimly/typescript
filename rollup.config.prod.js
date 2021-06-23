import config from './rollup.config'
import pkg from './package.json'
import postcss from 'rollup-plugin-postcss'
const postcssConfig = require('./postcss.config')
import fs from 'fs'

function getComponents (root) {
  let arr = [pkg.name]
  fs.readdirSync(root).map(file => {
    arr.push(file)
  })
  return arr
}

export default () => {
  const components = getComponents('./src/components')
  let configs = []
  components.forEach(name => {
    let con = {}
    for (const key in config) {
      con[key] = config[key]
    }
    const isMain = name === pkg.name
    con.input = isMain ? `./index.ts` : `./src/components/${name}/${name}.ts`
    con.output = [{
      file: isMain ? `dist/${name}.min.js` : `src/components/${name}/dist/${name}.min.js`,
      format: 'umd',
      name
    }]
    let p = []
    con.plugins.forEach((plugin, i) => {
      if (plugin.name === 'postcss' && pkg.extra.indexOf(name) >= 0) {
        p[i] = postcss({
          extract: false,
          plugins: postcssConfig.plugins
        })
      } else {
        p[i] = plugin
      }
    })
    con.plugins = p
    configs.push(con)
  })
  return configs
}