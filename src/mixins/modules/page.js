import {pagePadding} from '../index.json'
export default {
  pageSize: (mixin) => {
    let obj = {}
    pagePadding.forEach(v => {
      obj[`&[padding='${v}']`] = {
        padding: `${v/2}px`
      }
    })
    return obj
  }
}