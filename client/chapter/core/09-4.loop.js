/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2022,
  hasOwnProperty:function(){
    return "헤헤"
  }
};

let key = "valueOf"

// console.log(key in javaScript)    //true


// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?


// hasOwnProperty
// 객체 자신의(own) 속성인지(property) 확인(has)하는 방법, but 커스텀이 가넝함...ㅋ 그래서 그대로 쓴느건 위험(뻘건줄이 뜨는 이유).. 프로퍼티에 접속해서 써야함
// console.log(javaScript.hasOwnProperty(key))    
Object.prototype.nickName = 'tiger'

// - "hasOwnProperty 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은? ex 위의 nickName이 추가된것처럼..
console.log(Object.prototype.hasOwnProperty.call(javaScript,key))


// Object.prototype = {}
for(key in javaScript){
  if({}.hasOwnProperty.call(javaScript,key)){
    console.log(key)
  }
}
//그냥 for (let key in~)까지 하면 조상에 있는거 까지 가져오니까 if 로 한번더 확인하는거라고 생각

const user = {
  name:"tiger",
  age:32
}
function hello(){
  console.log(this)
}

// hello()

//hello라는 함수를 call이 대신 실행
// hello.call(user)


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?


let tens = [10,100,1000,10000]
for(let value in tens){
  console.log("냅다 for in", tens[value])
}

for(let value in tens){
if({}.hasOwnProperty.call(tens,value)){
  console.log("hasOwnProperty 사용", tens[value])
}
}

//배열에서는 for of를 사용