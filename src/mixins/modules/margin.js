import {margin} from '../index.json'
export default {
  marginSize: (mixin) => {
    let obj = {}
    margin.forEach(m => {
      obj[`[margin*=t${m}]`] = {
        'margin-top': `${m/2}px!important;`
      }
      obj[`[margin*=l${m}]`] = {
        'margin-left': `${m/2}px!important;`
      }
      obj[`[margin*=b${m}]`] = {
        'margin-bottom': `${m/2}px!important;`
      }
      obj[`[margin*=r${m}]`] = {
        'margin-right': `${m/2}px!important;`
      }
      obj[`[margin='${m}']`] = {
        'margin': `${m/2}px!important;`
      }
    })
    return obj
  },
  paddingSize: (mixin) => {
    let obj = {}
    margin.forEach(m => {
      obj[`[padding*=t${m}]`] = {
        'padding-top': `${m/2}px!important;`
      }
      obj[`[padding*=l${m}]`] = {
        'padding-left': `${m/2}px!important;`
      }
      obj[`[padding*=b${m}]`] = {
        'padding-bottom': `${m/2}px!important;`
      }
      obj[`[padding*=r${m}]`] = {
        'padding-right': `${m/2}px!important;`
      }
      obj[`[padding='${m}']`] = {
        'padding': `${m/2}px!important;`
      }
    })
    return obj
  }
}