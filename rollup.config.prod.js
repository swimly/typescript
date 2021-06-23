import config from './rollup.config'
import pkg from './package.json'
import postcss from 'rollup-plugin-postcss'
const postcssConfig = require('./postcss.config')
import fs from 'fs'

function getComponents (root) {
  let arr = []
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
    con.input = `./src/components/${name}/${name}.ts`
    con.output = [{
      file: `src/components/${name}/dist/${name}.min.js`,
      format: 'umd',
      name
    }]
    console.log(pkg.extra, 'name')
    if (pkg.extra.indexOf(name) >= 0) {
      con.plugins = [...config.plugins, [
        postcss({
          extract: false,
          plugins: postcssConfig.plugins
        })
      ]]
      console.log(con.plugins)
    }
    configs.push(con)
  })
  return configs
}