import {fettleSize, fettleType} from '../index.json'
export default {
  fettleSize: (mixin) => {
    let obj = {}
    fettleSize.forEach(size => {
      obj[`&[size='${size}']`] = {
        'width': `${size/2}px`,
        'height': `${size/2}px`,
        'font-size': `${size/2}px`
      }
    })
    return obj
  },
  fettleType: (mixin, color) => {
    let obj = {}
    fettleType.forEach(color => {
      const value = `v(color-${color})`;
      obj[`&[type='${color}']`] = {
        '.v-fettle-item': {
          '&:last-child': {
            color: value
          }
        },
        '@mixin-content': {}
      }
    })
    return obj
  }
}