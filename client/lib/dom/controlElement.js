import { typeError } from "../error/typeError.js";
import { isElement } from "../utils/typeOf.js";



//JSDoc: 바로밑에있는 함수를 설명하는거
/**
 * @function isElement checkElement
 * @param {HTMLElement} node
 * @return {disabled} set disable
 */
export function disableElement(node) {
  if(!isElement(node)){
    typeError("disableElement 함수인자 돔요소 어쩌구")
  }
  node.disabled = true;
}


export function enableElement(node) {
  if(!isElement(node)){
    typeError("enableElement 함수인자 돔요소 어쩌구")
  }
  node.disabled = false;
}



export function visibleElement(node) {
  if(!isElement(node)){
    typeError("visibleElement 함수인자 돔요소 어쩌구")
  }
  node.hidden = false;
}
export function invisibleElement(node) {
  if(!isElement(node)){
    typeError("invisibleElement 함수인자 돔요소 어쩌구")
  }
  node.hidden = true;
}