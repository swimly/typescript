export default class Utils {
  public elements: NodeList;
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
}