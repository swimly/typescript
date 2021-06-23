import Utils from '../../utils/index'
import './toast.css'
type Options = {
  el?: string | HTMLElement
}
class Button extends Utils{
  public el: HTMLElement;
  public opt:Options = {
    el: ''
  }
  constructor (option: Options) {
    super()
    this.init(option)
  }
  public init (option: Options):void {
    this.opt  = Object.assign(this.opt, option)
    this.el = typeof this.opt.el == 'string' ? document.querySelector(this.opt.el) : this.opt.el as HTMLElement
    // 渲染tab的头部
    this.render()
  }
  public render ():void {
    console.log('button')
  }
}

export default class {
  static render(option:Options) {
    return new Button(option)
  }
}