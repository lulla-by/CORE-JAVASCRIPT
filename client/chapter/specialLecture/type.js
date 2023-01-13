// Number
// String
// null
// Boolean
// undefined
// Symbol
// BigInt
// Object

console.log(typeof 'aa' + 2)



let arr = [1,2,3]


const user = {
  name:"tiger",
  age:"32",
  tel:"01092384920",

  hasOwnProperty: function(){
    console.log("매롱")
  }
}

// has(가지고 있나)
// own(너가)
// property(프로퍼티를)

// for..in 객체를 순환


//for..in을 사용하지 않는 이유: 정확한 키값을 얻어내기 힘듬
// 정확한 키값을 얻어내기 위해서는 if(user.hasOwnProperty(key)) 

// =>자바스크립트에서 권장하지 않는 방법, 만약 해당 메서드를 직접 객체 내에 만든다면...?

// user.hasOwnProperty("age") // 매롱 출력 
// => 사용자가 hasOwnProperty를 스스로 정의하면 자바스크립트는 이거에 대한 경고를 명시하지 않음

//for..of는 저거 없어도 키값을 잘 가져옴



// for (let i = 0 ; i<10; i++) {
// console.log(arr[i])
// }

// for(let key in user){

//   if(user.hasOwnProperty(key)){
//     console.log(key)
//   }
// }

// for .. of iterable string,array,arrayLike [iterable 순환가능한]  /객체 Object.entries(user)

// for(let value of Object.keys(user)){
//   console.log(value)
// }


