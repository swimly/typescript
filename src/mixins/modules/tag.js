import {tag} from '../index.json'
export default {
  tagSize: function (mixin) {
    let obj = {}
    tag.size.forEach(size => {
      obj[`&[size='${size}']`] = {
        height: `${size/2}px`,
        padding: `0 ${Math.floor(size * 0.175)}px`,
        '&[conner="2"]': {
          'border-radius': `${size/2}px`
        },
        '&[shape=rect],&[shape=circle],&[shape=mi],&[shape=leaf]': {
          padding: '0px',
          width: `${size/2}px`
        },
        '&[shape=circle]': {
          'border-radius': `${size/2}px`
        },
        '&[shape=leaf]': {
          'border-radius': `${size/4}px 0 ${size/4}px 0`
        },
        '&[shape=mi]': {
          'border-radius': `${Math.floor(size/4)}px`
        }
      }
    })
    return obj
  },
  tagType: function (mixin) {
    let obj = {}
    tag.type.forEach(name => {
      const color = `v(color-${name})`
      obj[`&[type=${name}]`] = {
        color: `v(text-white)`,
        '&::before': {
          'background-color': color
        },
        '&::after': {
          'border-color': color
        },
        '&[outline="1"]': {
          color: color,
          '&::before': {
            display: 'none'
          }
        },
        '&[plain="1"]': {
          color: color,
          '&::before': {
            opacity: '0.2'
          },
          '&::after': {
            display: 'none'
          }
        }
      }
    })
    return obj
  }
}