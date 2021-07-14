import {form} from '../index.json'
export default {
  formSize: (mixin) => {
    let obj = {}
    let fontsize = 16
    form.size.forEach(size => {
      obj[`&[size='${size}']`] = {
        '.v-form-item': {
          'min-height': `${size/2}px`,
          'padding': `${(size/2 - fontsize)/2}px 0`,
          '&[range=vertical]': {
            '.v-form-prefix': {
              'padding-bottom': `${size * 0.07}px`
            }
          }
        },
        '&[range=vertical]': {
          '.v-form-prefix': {
            'padding-bottom': `${size * 0.07}px`
          }
        }
      }
    })
    return obj
  }
}