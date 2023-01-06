/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */
// String() or 빈문자열("") 더하기
// number
const YEAR = 2022

console.log(YEAR)
console.log(typeof YEAR)
console.log(typeof(String(YEAR)))

// undefined, null
console.log(undefined)
console.log(typeof(String(undefined)))

let days = null;

console.log(days)
console.log(String(String(days)))

// boolean
let isKind = true;
console.log("일반:", isKind)
console.log("String()으로 문자형변환:", typeof(String(isKind)))
console.log("빈문자열로 문자형변환:", typeof(isKind +""))

/* 데이터 → 숫자 ----------------------------------------------------------- */
// Number() or *1 or /1 or +붙이기
// undeinfed
console.log(Number(undefined))  //NaN


// null
console.log(Number(null))       // 0

// boolean
let cutie = false;

console.log("Number()로 숫자형 변환", Number(cutie))    //0
console.log("* 1로 숫자형 변환:", Number(cutie * 1))    //0
console.log("/ 1로 숫자형 변환:", Number(cutie / 1))    //0
console.log("+붙여서 숫자형 변환:", Number(+cutie))    //0

// string
let num = "234"
console.log(num *1)
// numeric string
let width = "320.231px"
console.log(parseInt(width,10))
console.log(parseFloat(width,10))

/* 데이터 → 불리언 ---------------------------------------------------------- */
// Bollean() or 앞에 !!붙이기
console.log(Boolean(null))  //false
console.log(!!null)  //false
console.log(Boolean(123))   //true
console.log(!!123)   //true

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 