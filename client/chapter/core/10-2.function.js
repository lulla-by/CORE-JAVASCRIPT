/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */

//선언문
function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  
    console.log(arguments)

    let total = 0
    
    
    let arr = Array.from(arguments)       //static method
    //  let arr = Array.prototype.slice.call(arguments)
    // arr.forEach(function(item,index){
    //   console.log(item)
    // })

    return arr.reduce(function(acc,item){
      return acc + item
    })
    // console.log()

    // return total
  // return moneyA + moneyB + moneyC + moneyD;
};
console.log(calculateTotal(100,500,300,150))

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {

};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello () {

};


// 콜백 함수 (표현)식
let callbackFunctionExpression = function(url,resolve,reject){

  if( typeof url ==="string" && url.match(/http.+www/)){
    resolve(url)
  } else {
    reject()
  }

};
callbackFunctionExpression(
  'https://www.naver.com',
  function (url) {
    console.log(`${url}해당 페이지로 이동합니다`)
  },
  function () {
    throw new Error("URL 입력 정보가 올바르지 않습니다")
  }
  )

// 함수 선언문 vs. 함수 (표현)식
//선언문
function aa(){

}

//표현식
const bb = function () {

}

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
// 함수가 선언 됨고 ㅏ동시에 실행되는 것을 말합니다.
// 자바스크립트 함수는 그 자체로 값(literal)
// 함수 값을 즉시 실행(d이름 호출 없이)

//모듈 프로그래밍이 없던 시절
let IIFE;

(function(){
  console.log('바로 실행')
})()


// var함수스코프
//let, const 블록 스코프

const MASTER = (function(){   //parameter
  const KEY = "aljwig@$1"

  //내가 내보내고 싶은 항목들만 내보낼꺼야
  // 모듈로서읳 ㅗ라용
  // 정보 은닉화 incapspulation :외부의 접근을 차단
  //일부 정보만 노출
  return {
    getKey:function(){
      return KEY
    }
  }
})(getNode)   //arguments

function getNode(node) {
 return document.querySelector(node)
}

console.log(MASTER.getKey())
