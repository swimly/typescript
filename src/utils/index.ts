export default class Utils {
  public elements: NodeList;
  public dev: boolean = true;
  constructor (e:any) {
    if (typeof e === 'string') {
      this.elements = document.querySelectorAll(`${e}`)
    }
  }
  public parseHtmlToDom (html: string): HTMLElement {
    const dom = document.createElement('div')
    dom.innerHTML = html
    return dom.childNodes[0] as HTMLElement
  }
  public offset(curEle: HTMLElement) {
    let totalLeft = null, totalTop = null, par = curEle.offsetParent as HTMLElement;
    totalLeft += curEle.offsetLeft;
    totalTop += curEle.offsetTop
    while (par) {
      if (navigator.userAgent.indexOf("MSIE 8.0") === -1) {
        //累加父级参照物的边框
        totalLeft += par.clientLeft;
        totalTop += par.clientTop
      }
      totalLeft += par.offsetLeft;
      totalTop += par.offsetTop;
      par = par.offsetParent as HTMLElement;
    }
    return {
      left: totalLeft,
      top: totalTop
    }
  }
}