import pkg from '../../package.json'
const isVar = pkg.var
export default {
  v: (string) => {
    const arr = string.split('-')
    const name = arr[0]
    const value = arr[1]
    return isVar ? `var(--${name}-${value}, $${name}-${value})` : `$${name}-${value}`;
  }
}