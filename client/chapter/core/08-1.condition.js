/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// let a = prompt("숫자 입력하세요")
// a > 0 ?(alert("1")):(a<0?alert("-1"):(a==0?alert("0"):alert("숫자를 입력하세요")))


// if(a > 0){
// alert("1")
// }else if(a < 0){
//   alert("-1")
// }else if(a == 0){
// alert("0")
// }else{
//   alert("숫자를입력하세요")
// }

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie ="yes";

// 영화 볼거니?
let goingToWatchMovie ="no";





// if 문(statement)
if(didWatchMovie.includes('yes')){
  console.log("재밌드라")
}else if(goingToWatchMovie == "yes"){
  console.log("같이보러가자")
}else{
  console.log("난별로")
}


// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식