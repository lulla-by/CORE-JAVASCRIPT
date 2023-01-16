import { typeError } from './../error/typeError.js';

export function getRandom(n){
  if(!n) typeError("어쩌구 저쩌구")
  if(typeof n !=="number") typeError("또 뭘 어쩌구")
  return Math.round(Math.random() * n)
}