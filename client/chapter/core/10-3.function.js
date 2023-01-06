/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */
let arr = [1,2,3,4]
function sum(...args) {
  console.log(args)
}

// sum(1,2,3,4)
// rest parameter

const calculateTotal = (...args) => {

  let total = 0;
  args.forEach(item=>{
      total += item
  })

  // args.reduce((acc,item)=>acc + item)
  // console.log()

  return ;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a,b,c,d) => a+b+c+d;

// 화살표 함수와 this
function normaFunction(){
  console.log("일반함수 : ", this)
}

function arrowFunction(){
  console.log("일반함수 : ", this)
}
//this 자체를 참조 나를 호출한 대상을 참조?
normaFunction()
//this 자체를 바인딩하지 않음, 내 위의 부모를 찾아서 넣어준 것
arrowFunction()

//객체의 메서드로 함ㅅ를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾습니다
// 메서드 안에서의 함수는 this를 찾기 위해서는 arrowFucntion이 오히려 좋다.

const user = {
  name:"tiger",
  age: 32,
  address:"서울시",
  grades:[80,90,100],
  totalGrades: () =>{
    function foo(){
      console.log("foo : ", this);
    }
    const bar = () =>{
      console.log("bar : ",this)
    }
    foo.call(user) //user
    bar() // user object
  },
  nomalGrades:function(){
    console.log(this)
  }
}

console.log(user.totalGrades())
// user.normalGrades()


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
let result  = 1;
for(let i = 0; i < powerCount; i++){
  result *= numeric
}
return result
};
//2의 53승을 반복문으로 
console.log(pow(2,53))

//reducer버전
//acc의 초기값은 0이기 때문에 초기값을 1로 설정
let poweExpression = (numeric, powerCount) => Array(powerCount).fill(null).reduce(acc=>acc *= numeric,1)


// repeat(text: string, repeatCount: number): string;
//특정문자를 반복시켜주는...
// repeat("문자열","반복횟수")
let repeat=(text, repeatCount)=>{
 let result = '';
 if(!repeatCount){
  throw new Error("반복횟수를 지정하세요")
 }
 for(let i = 0; i<repeatCount;i++){
  result += text;
 }
 return result
}; 

let repeatExpression = (text,repeatCount) => Array(repeatCount).fill("").reduce(acc=>acc+=text,"")



