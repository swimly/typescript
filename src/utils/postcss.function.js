const pkg = require('../../package.json')
const isVar = pkg.var
module.exports = {
  v: (string) => {
    const arr = string.split('-')
    const name = arr[0]
    const value = arr[1]
    return isVar ? `var(--${name}-${value}, $${name}-${value})` : `$${name}-${value}`;
  }
}