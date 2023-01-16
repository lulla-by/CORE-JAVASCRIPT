
import { addClass, clearContents, copy, getInputValue, getNode, getRandom, insertLast , isNumericString, removeClass, showAlert} from './lib/index.js';


import { jujeobData } from "./data/data.js";


console.log(isNumericString('123adf'))

const submit = getNode('#submit')
const resultArea = getNode('.result')
console.log(submit)



function clickSubmitHandler(e){
e.preventDefault();
let name = getInputValue('#nameField')
let list = jujeobData(name)
let pick = list[getRandom(list.length-1)]

if(!name){
  console.log('이름을 입력해주세여');
  showAlert(".alert-error",'잘못된 정보입니다','2000')

  //GSAP  
  //         target    duration  from      to
  gsap.fromTo(resultArea, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20})

  // addClass(resultArea,'shake');
  // setTimeout(()=>{
  //   removeClass(resultArea,'shake');
  // },1000)
return
}

if(isNumericString(name)){
  console.log('제대로된 이름을 입력해주세요');
  showAlert(".alert-error",'정확한 이름을 입력해 주세요','2000')
  return
}


clearContents('.result')
insertLast(resultArea,pick)
}

function clickCopyHandler() {
  let text = resultArea.textContent
  copy(text).then(()=>{
    showAlert(".alert-success",'클립보드 복사 완',2000)
  }) //약속(promise)
}

submit.addEventListener('click',clickSubmitHandler)
resultArea.addEventListener('click',clickCopyHandler)