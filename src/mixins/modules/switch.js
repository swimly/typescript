import {switchSize, switchType} from '../index.json'
export default {
  switchSize: (mixin) => {
    let obj = {}
    switchSize.forEach(size => {
      const width = Math.floor(size * 0.8)
      const padding = Math.floor(size * 0.075)
      const s = Math.floor(size * 0.35)
      const transform = width - s - padding * 2
      obj[`&[size='${size}']`] = {
        '.v-switch-frame': {
          width: `${width}px`,
          height: `${size/2}px`,
          'border-radius': `${Math.floor(size * 0.25)}px`,
          padding: `${padding}px`,
          '&::after': {
            width: `${s}px`,
            height: `${s}px`,
            'border-radius': `${Math.floor(size * 0.25)}px`
          }
        },
        '.v-switch-core': {
          '&:checked': {
            '& ~ .v-switch-frame': {
              '&::after': {
                transform: `translateX(${transform}px)`
              }
            }
          }
        }
      }
    })
    return obj
  },
  switchType: (mixin) => {
    let obj = {}
    switchType.forEach(color => {
      const value = `v(color-${color})`
      obj[`&[type='${color}']`] = {
        '.v-switch-core': {
          '&:checked': {
            '& ~ .v-switch-frame': {
              'background-color': value
            }
          }
        }
      }
    })
    return obj
  }
}