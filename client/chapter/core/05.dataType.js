/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */


/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null)
// 2. 값이 할당되지 않은 상태
console.log(typeof undefined)
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let msg1 = "hello"
let msg2 = 'hello'
let nickName = "tiger"
let msg3 = `${msg2} ${nickName} 반가워`

console.log(msg3)
// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 325.2

console.log(number)
// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
console.log(typeof(21322n + 10n))
// 6. 참(true, yes) 또는 거짓(false, no)
// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
// 8. 고유한 식별자(unique identifier)
console.log(typeof(Symbol('uid')))

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object

const user = {
  name : "losey",
  age: 27
}

console.log(typeof user)

// Array
let list = ["losey","27"]
console.log("list 길이:", list.length)
// function
function sum(a,b) {
 return a + b
}


const fishFuc = {
  name:"tiger",
  age:27,
  fish: function(){
    return "뻐끔"
  }
}
console.log(sum(3,5))
console.log(fishFuc.fish())
// this


