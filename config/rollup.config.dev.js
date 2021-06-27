import rollupconfig from './rollup.config'
import pkg from '../package.json'

export default async () => {
  const components = [pkg.name]
  let config = []
  components.forEach(async (name) => {
    const con = await rollupconfig(name, 'dev')
    config.push(con)
  })
  return config
}