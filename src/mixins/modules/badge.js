import {badgeType} from '../index.json'
export default {
  badgeType: (mixin) => {
    let obj = {}
    badgeType.forEach(color => {
      obj[`&[type='${color}']`] = {
        '&::after': {
          'background-color': `v(color-${color})`
        }
      }
    })
    return obj
  }
}