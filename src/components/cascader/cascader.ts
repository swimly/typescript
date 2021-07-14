import Utils from '../../utils/index'
import './cascader.module.css'
import style from './cascader.module.css.json'
interface Options {
  el?: string | HTMLElement
}
class Cascader extends Utils{
  public el: HTMLElement;
  public opt:Options = {
    el: ''
  }
  constructor (option: Options) {
    super(option)
    this.init(option)
  }
  public init (option: Options):void {
    this.opt  = Object.assign(this.opt, option)
    this.el = typeof this.opt.el == 'string' ? document.querySelector(this.opt.el) : this.opt.el as HTMLElement
    this.render()
  }
  public render ():void {
    console.log('cascader')
  }
}

export default class {
  static render(option:Options) {
    return new Cascader(option)
  }
}