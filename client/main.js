// import { getNode } from './lib/dom/getNode.js'
// import { css } from './lib/dom/css.js'

import {
  removeClass,
  addClass,
  refError,
  getNode,
  css,
  typeError
} from "./lib/utils/index.js"

//1. input밸류값 가져오기

//2.이벤트 핸들러 연결하기

//2.이벤트 기본동작 차단하기
// 4.두 수의 합을 더해주기
// 5. 화면에 출력하기





//내가 만든거

// const firstValue = getNode('#firstNumber')
// const secondValue = getNode('#secondNumber')
// const done = getNode('#done')
// const result  = getNode('.result')

// function handler(e){
// e.preventDefault()
// let total = Number(firstValue.value) + Number(secondValue.value)
// return  result.innerHTML = total
// }

// done.addEventListener("click",handler)


//범샘

const firstInput = getNode("#firstNumber")
const secondInput = getNode("#secondNumber")
const done = getNode('#done')
const result  = getNode('.result')


function getInputValue(node){
 if(typeof node === "string") node = getNode(node);
 if(node.tagName !== "INPUT") rerError("어쩌구 저쩌구");
 return node.value
}

const clearContent = (node) => {
  if(typeof node === "string") node = getNode(node);
  node.textContent = ""
}

const sum = (valueA,valueB) => valueA + valueB

function handler(e){
e.preventDefault();
let firstValue = +getInputValue(firstInput);
let secondValue = +getInputValue(secondInput);
let total = sum(firstValue,secondValue)

clearContent(result)
insertLast(result,total)
}




function inputHandler(){
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue,secondValue)
  
  clearContent(result)
  insertLast(result,total)
}


done.addEventListener('click',handler)
firstInput.addEventListener('change',inputHandler)
secondInput.addEventListener('change',inputHandler)