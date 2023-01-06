/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

// let age = prompt("몇살인가요")
// if(age >= 14 && age <=90){
//   console.log("포함입니다")
// }else{
//  console.log("해당되지 않습니다")
// }
















let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB)

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB)
// 부정 연산자
let reverseValue = !value;
console.log(!value)

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && " " && [] && {thisIsFalsy:false};
console.log(Boolean(" "), Boolean([]), Boolean({}))
console.log(whichFalsy)
// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};
console.log(whichTruthy)

let userName = prompt("이름을 입력하세요");

if(userName?.toUpperCase() == "ADMIN"){
  let Pw = prompt("비밀번호를 입력하세요")
  if(Pw?.toUpperCase()=="THEMASTER"){
    alert("환영합니다")
  }else if(Pw == null || Pw == "" ){
alert("취소되었습니다")
  }else{
    alert("인증에 실패했습니다")
  }
}else if(userName == ""|| userName == null) {
  console.log("취소되었습니다.")
} else{
  alert("인증되지 않은 사용자입니다.")
}