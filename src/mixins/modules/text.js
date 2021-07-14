import {textSize, textType} from '../index.json'
export default {
  textSize: (mixin) => {
    let obj = {}
    textSize.forEach((size) => {
      obj[`&[size='${size}']`] = {
        'font-size': `${size/2}px`
      }
    })
    return obj
  },
  textType: (mixin) => {
    let obj = {}
    textType.forEach((item) => {
      const color = `v(${item.value}-${item.name})`
      obj[`&[type=${item.name}]`] = {
        color: color
      }
    })
    return obj
  }
}