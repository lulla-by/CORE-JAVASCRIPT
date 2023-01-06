/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */


/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
    position: "fixed",
    zIndex: 10000,
    top: "50%",
    left: "50%",
    width: "60vw",
    max_width: "800px",
    height: "40vh",
    "min-height": "280px",
    transform: "translate(-50%, -50%)",
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한


// authentication = 인증
// authorization = 권한
let authUser= null;


authUser = {
  uid : "user-y",
  name:"freeStyleY",
  email:"mababyiloveyouso@.hanmail.net",
  isSignIn:true,
  permission:"paid",      //free || paid
}




// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log(authUser.uid)
// console.log(authUser.name)
// console.log(authUser.email)
// console.log(authUser.isSignIn)
// console.log(authUser.permission)
// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log(authUser["uid"])
// console.log(authUser["name"])
// console.log(authUser["email"])
// console.log(authUser["isSignIn"])
// console.log(authUser["permission"])

// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

function createUser(computedProp = "phone"){
  return {
    name :"unknown",
    company:"unknown@company.io",
    [computedProp]:"010-1234-5678"
  }
}

const user = createUser("tired")

// 프로퍼티 포함 여부 확인
for(let key in authUser) {
  if({}.hasOwnProperty.call(authUser,key)){
    // console.log(key)
  }
}

// 프로퍼티 나열
// let keyArray = Object.keys(authUser);
// let valueArray = Object.value(authUser);

// console.log(valueArray)
// function getPropertiesList(object){
//   let result = [];
//   for(let key in object){
//     result.push(key)
//   }
//   return result
// }

// let result = getPropertiesList(authUser)

// 프로퍼티 제거 or 삭제 


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const stuent = {
  name,
  email,
  authorization,
  isLogin
}

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {
  
  // return Object.keys(object).length === 0 ? true : false
  return Object.keys(object).length === 0;

}


isEmptyObject(authUser)


const empty = {}

console.log(isEmptyObject(empty))

let salaries = {
  John:100,
  Ann : 160,
  Pete: 430
}

// 월급의 총 합을 구하세요
let total = 0
// for(let keyValue of Object.entries(salaries) ){
//   let key = keyValue[0];
//   let value = keyValue[1];

//   total += value;
// }
// 구조 분해 할당 distructuring assignments
for(let [key, value] of Object.entries(salaries) ){

  total += value;
}

console.log(total)


let color = ["#ff0000", "#2b00ff","#00ff2f"]

// const color_red = color[0]
// const color_blue = color[1]
// const color_grren = color[2]

// console.log(color_red)
// console.log(color_blue)
// console.log(color_grren)

const [,,green] = color

console.log(green)
// console.log(blue)
// console.log(green)



// 객체구조 분해할당

const {John,Ann,Pete,} = salaries;

 console.log(Ann)


 //배열 구조분해할당...