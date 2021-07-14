import {rateType} from '../index.json'
export default {
  rateType: (mixin) => {
    let obj = {}
    rateType.forEach(color => {
      obj[`&[type='${color}']`] = {
        'color': `v(color-${color})`
      }
    })
    return obj
  }
}