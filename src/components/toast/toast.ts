import Utils from '../../utils/index'
import './toast.css'
import tpl from './pug/index.pug'
interface Options {
  message?: string,
  icon?: string
}
class Toast extends Utils{
  public el: HTMLElement;
  public opt:Options = {
    message: '',
    icon: ''
  }
  constructor (option: Options) {
    super(option)
    this.init(option)
  }
  public init (option: Options):void {
    this.opt  = Object.assign(this.opt, option)
    this.render()
  }
  public render ():void {
    this.el = document.body.appendChild(this.parseHtmlToDom(tpl({
      ...this.opt
    })))
  }
}

export default class {
  static render(option:Options) {
    return new Toast(option)
  }
}