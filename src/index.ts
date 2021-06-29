// import '@babel/polyfill'
import Utils from './utils'
import Toast from './components/toast/toast'
import Button from './components/button/button'

export default class {
  constructor (option) {
    return new Utils(option)
  }
  public static Toast = Toast
  public static Button = Button
}