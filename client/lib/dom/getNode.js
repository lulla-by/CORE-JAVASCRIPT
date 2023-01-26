
import { isString } from '../utils/typeOf.js'
import { typeError } from '../error/typeError.js'

export function getNode(node){
  if(!isString(node)){
    typeError('getNode 함수의 인자는 문자 타입 이여야 합니다.');
  }

  // if(!isString(node)) typeError('에러가 발생했습니다.');
  //querySelector가 getElementBy어쩌구 보다 더 다양한 선택자를 사용할 수 있음.
  return document.querySelector(node)
}


export function getNodes(node){
  if(!isString(node)){
    typeError('getNode 함수의 인자는 문자 타입 이여야 합니다.');
  }
  
  return document.querySelectorAll(node)
}




