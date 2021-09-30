import { Directive } from 'vue'

export const elDraggableDialog: Directive = {
  mounted(el, _, vnode) {
    const dragDom = document.querySelector('.el-dialog') as HTMLElement
    const dialogHeaderEl = document.querySelector('.el-dialog__header') as HTMLElement
    
    dragDom.style.position += ';top:0px'
    dialogHeaderEl.style.cssText += ';cursor:move'
    dialogHeaderEl.onmousedown = (e: any) => {
      const disX = e.clientX - dialogHeaderEl.offsetLeft
      const disY = e.clientY - dialogHeaderEl.offsetTop
      document.onmousemove = (e) => {
        let left = e.clientX - disX
        let top = e.clientY - disY
        // Move current element
        dragDom.style.cssText += `;left:${left}px;top:${top}px;`
      }

      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
