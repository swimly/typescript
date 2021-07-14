import {checkboxSize, checkboxType} from '../index.json'
export default {
  checkboxSize: function (mixin) {
    let obj = {}
    checkboxSize.forEach(size => {
      const value = `${size/2}px`
      obj[`&-group[size='${size}']`] = {
        '.v-checkbox': {
          '&-frame': {
            width: value,
            height: value
          },
          '&-label': {
            'line-height': value
          }
        },
        '&[range=vertical]': {
          '.v-checkbox': {
            padding: `${Math.floor(size * 0.3)} 0`
          }
        },
        ['&[shape=button],&[shape=tag]']: {
          '.v-checkbox': {
            '&-label': {
              height: `${Math.round(size * 0.75)}px`,
              padding: `0 ${Math.round(size * 0.3)}px`
            }
          }
        },
        ['&[shape=card]']: {
          '.v-checkbox': {
            'margin-bottom': `${Math.floor(size * 0.4)}px`,
            '&-label': {
              padding: `${Math.floor(size * 0.25)}px ${Math.floor(size * 0.4)}px`
            }
          }
        }
      }
    })
    return obj
  },
  checkboxType: (mixin) => {
    let obj = {}
    checkboxType.forEach(color => {
      const value = `v(color-${color})`
      obj[`&-group[type='${color}']`] = {
        '.v-checkbox-core': {
          '&:checked': {
            '& ~ .v-checkbox-frame': {
              'background-color': value,
              'border-color': value
            }
          }
        },
        '&[shape=tag]': {
          '.v-checkbox': {
            '&-core': {
              '&:checked': {
                '& ~ .v-checkbox-label': {
                  'border-color': value,
                  'color': value
                }
              }
            }
          }
        },
        '&[shape=button]': {
          '.v-checkbox': {
            '&-core': {
              '&:checked': {
                '& ~ .v-checkbox-label': {
                  'background-color': value
                }
              }
            }
          }
        },
        '&[shape=card]': {
          '.v-checkbox': {
            '&::before': {
              'background-color': value
            },
            '&-core': {
              '&:checked': {
                '& ~ .v-checkbox-label': {
                  'color': value
                }
              }
            }
          }
        }
      }
    })
    
    return obj
  }
}