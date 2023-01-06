/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10,100,1000,10000]

console.log(typeof arr)
console.log(Array.isArray(arr))



/* 요소 순환 -------------------------------------------------------------- */

// forEach

const user = {}

arr.forEach(function(item,index) {
  this[index] = item
},user)


const span = document.querySelectorAll("span")
span.forEach((item)=>{
  item.addEventListener("click",(e)=>{
    console.log(e.target.style.background = "orange")
  })
})

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift

arr.reverse()
console.log(arr)
arr.splice(1,0,9,18)
console.log(arr)
// sort
arr.sort((a,b)=>{
return a-b
})
console.log(arr)

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map

let todo = ["코어자스","딥다이브","혼공자"]

let list = todo.map((todoList)=>{
  return `<li>${todoList}</li>`
})

console.log(list)


/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 -------------------------------------------------------------- */
const minams = [
  {id:1,name:"은우"},
  {id:2,name:"재현"},
  {id:3,name:"없네..."},

]

// find
const find = minams.find((item,index)=>{
  return item.id < 5
})

console.log(find)
// findIndex

const findIndex = minams.findIndex((item)=>{
  return item.id === 5
})
console.log(findIndex)
/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

  let someUsers = users.filter(item => item.id < 3).map((item)=>item.name)
  console.log(someUsers)

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

// reduce
const freinds = [
  {
    name:"아스트로 멤바 은우",
    age:27,
    job:"minam"
  },
  {
    name:"엔시티 멤바 재현",
    age:27,
    job:"minam"
  },{
    name:"극한직업 출연하신 공명",
    age:30,
    job:"minam"
  },
]

let age = freinds.reduce((acc,cur,index)=>{
return /* acc +=  */ acc+ (index+1)+"번째 남편 " + cur.name +", "
},0)

console.log(age)
// reduceRight



/* string ←→ array 변환 ------------------------------------------------- */

// split
// join