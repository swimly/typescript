import rollupconfig from './rollup.config'
import pkg from '../package.json'
import fs from 'fs'

function getComponents (root) {
  let arr = [pkg.name]
  fs.readdirSync(root).map(file => {
    arr.push(file)
  })
  return arr
}

export default async () => {
  const components = await getComponents('./src/components')
  let config = []
  components.forEach(async (name) => {
    const con = await rollupconfig(name, 'prod')
    config.push(con)
  })
  return config
}