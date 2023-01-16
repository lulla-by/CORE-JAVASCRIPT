


import { 
  diceAnimation, 
  disableElement, 
  enableElement, 
  getNode, 
  getNodes,
  invisibleElement,
  visibleElement,
  insertLast,
  insertAfter,
  attr,
  clearContents
} from "./lib/index.js";

// [ 주사위 굴리기 ]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸함수 만들기
// 3. handlerRollingDice 함수 만들고 토글로 애니메이션 제어하기
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기

const [rollingDiceButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');
// const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');
// const recordButton = getNode('.buttonGroup > button:nth-child(2')

let stopAnimation;
let isRolling = false;


let count = 0
let total = 0

function renderRecordListItem() {

  let data = +attr('#cube','data-dice');
  let template = /* html */`
    <tr>
      <td>${++count}</td>
      <td>${data}</td>
      <td>${total += data}</td>
    </tr>
  `
  insertLast(".recordListWrapper tbody",template);
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight
}
















//IIFE

const handleRollingDice = (() => {
    
  let isRolling = false;
  let stopAnimation;
  
  return () => {

    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation, 300)
      disableElement(recordButton);
      disableElement(resetButton);
      
    } else {
      clearInterval(stopAnimation);
      enableElement(recordButton);
      enableElement(resetButton);
    }

    isRolling = !isRolling;
  } 

})()


const handleRecord = () =>{
  visibleElement(recordListWrapper)
  renderRecordListItem()
}

const handelReset=()=>{
  count=0;
  total=0;
  invisibleElement(recordListWrapper);
  clearContents('.recordListWrapper tbody');
}
rollingDiceButton.addEventListener('click', handleRollingDice)
recordButton.addEventListener('click',handleRecord)
resetButton.addEventListener('click',handelReset)