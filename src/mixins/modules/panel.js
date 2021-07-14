import {panelPadding} from '../index.json'
export default {
  panelSize: (mixin) => {
    let obj = {}
    panelPadding.forEach(size => {
      obj[`&[padding='${size}']`] = {
        padding: `${size/2}px`
      }
      obj[`&[padding*='t${size}']`] = {
        'padding-top': `${size/2}px`
      }
      obj[`&[padding*='l${size}']`] = {
        'padding-left': `${size/2}px`
      }
      obj[`&[padding*='b${size}']`] = {
        'padding-bottom': `${size/2}px`
      }
      obj[`&[padding*='r${size}']`] = {
        'padding-right': `${size/2}px`
      }
    })
    return obj
  }
}