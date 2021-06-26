import Utils from './src/utils'
import Toast from './src/components/toast/toast'
import Button from './src/components/button/button'

export default class {
  constructor (option) {
    return new Utils(option)
  }
  public static Toast = Toast
  public static Button = Button
}