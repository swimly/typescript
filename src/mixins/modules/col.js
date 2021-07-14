export default {
  colSpan: (mixin) => {
    const col = 24;
    let result = {}
    for (let i = 1; i <= col; i ++) {
      result[`[span='${i}']`] = {
        width: `${100/24 * i}%`
      }
    }
    return result
  }
}