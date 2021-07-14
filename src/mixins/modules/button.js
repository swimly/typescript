import {buttonSize, buttonType} from '../index.json'
export default {
  buttonSize: function (mixin) {
    let obj = {}
    buttonSize.forEach(size => {
      let fs = Math.round(size/2)
      fs = fs > 36 ? 18 : fs/2
      obj[`&[size='${size}']`] = {
        height: `${size/2}px`,
        'font-size': `${fs}px`,
        '@mixin-content': {},
        '&[conner="2"]': {
          'border-radius': `${size/2}px`
        },
        '&[inline="1"]': {
          padding: `0 ${Math.floor(size * 0.25)}px`
        },
        '.button-icon': {
          '&:not(:empty)': {
            'margin-right': `${Math.floor(size * 0.05)}px`
          }
        }
      }
    })
    return obj
  },
  buttonType: function (mixin) {
    let obj = {}
    buttonType.forEach(type => {
      obj[`&[type=${type}]`] = {
        color: `v(text-white)`,
        '&::after': {
          'background-color': `v(color-${type})`
        },
        '&::before': {
          'border-color': `v(color-${type})`
        },
        '&[outline="1"]': {
          color: `v(color-${type})`,
          '&::after': {
            display: 'none'
          }
        },
        '&[light="1"]': {
          color: `v(color-${type})`,
          '&::after': {
            'background-color': 'v(background-white)'
          }
        }
      }
    })
    return obj
  }
}