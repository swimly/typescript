import {inputSize} from '../index.json'
export default {
  inputSize: (mixin) => {
    let obj = {}
    inputSize.forEach(size => {
      obj[`&[size='${size}']`] = {
        'font-size': `${size/2}px`,
        height: `${size * 1.325}px`,
        '.v-input-content': {
          padding: `0 ${size/2}px`
        },
        '.v-input-prefix': {
          '&:not(:empty)': {
            'padding-left': `${size/2}px`
          }
        },
        '.v-input-suffix': {
          '&:not(:empty)': {
            'padding-right': `${size/2}px`
          }
        },
        '.v-input-clear': {
          'margin-right': `${size/2}px`,
          width: `${Math.floor(size * 0.75)}px`,
          height: `${Math.floor(size * 0.75)}px`
        },
        '.v-input-count': {
          'margin-right': `${size/2}px`
        },
        '&[conner="2"]': {
          'border-radius': `${size * 0.75}px`
        },
        '@mixin-content': {}
      }
    })
    return obj
  },
  inputMode: (mixin, name) => {
    const type = {
      success: `v(color-success)`,
      warning: `v(color-warning)`,
      error: `v(color-danger)`
    }
    return {
      [`&[mode='${name}']`]: {
        '&::before': {
          'border-color': type[name],
          opacity: '0.3'
        },
        '&::after': {
          'background-color': type[name],
          display: 'block',
          opacity: '0.1'
        },
        '.v-input-core': {
          color: type[name],
          opacity: '0.8'
        },
        '@mixin-content': {}
      }
    }
  },
  inputType: (mixin, color) => {
    const value = `v(color-${color})`;
    return {
      [`&[type='${color}']`]: {
        color: value,
        '.v-input-core': {
          'caret-color': value
        }
      }
    }
  }
}