import {radioSize, radioType} from '../index.json'
export default {
  radioSize: function (mixin) {
    let obj = {}
    radioSize.forEach(size => {
      const value = `${size/2}px`
      obj[`&-group[size='${size}']`] = {
        '.v-radio': {
          '&-frame': {
            width: value,
            height: value
          },
          '&-label': {
            'line-height': value
          }
        },
        '&[range=vertical]': {
          '.v-radio': {
            padding: `${Math.floor(size * 0.3)} 0`
          }
        },
        ['&[shape=button],&[shape=tag]']: {
          '.v-radio': {
            '&-label': {
              height: `${Math.round(size * 0.75)}px`,
              padding: `0 ${Math.round(size * 0.3)}px`
            }
          }
        },
        ['&[shape=card]']: {
          '.v-radio': {
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
  radioType: (mixin) => {
    let obj = {}
    radioType.forEach(color => {
      const value = `v(color-${color})`
      obj[`&-group[type='${color}']`] = {
        '.v-radio-core': {
          '&:checked': {
            '& ~ .v-radio-frame': {
              'background-color': value,
              'border-color': value
            }
          }
        },
        '&[shape=tag]': {
          '.v-radio': {
            '&-core': {
              '&:checked': {
                '& ~ .v-radio-label': {
                  'border-color': value,
                  'color': value
                }
              }
            }
          }
        },
        '&[shape=button],&[shape=tab]': {
          '.v-radio': {
            '&-core': {
              '&:checked': {
                '& ~ .v-radio-label': {
                  'background-color': value
                }
              }
            }
          }
        },
        '&[shape=card]': {
          '.v-radio': {
            '&::before': {
              'background-color': value
            },
            '&-core': {
              '&:checked': {
                '& ~ .v-radio-label': {
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