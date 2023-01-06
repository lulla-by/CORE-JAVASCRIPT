/* ---------------------------------------------------------------------- */
/* Copy object by reference                                               */
/* ---------------------------------------------------------------------- */


// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao'
};

let text = message;

text = "얼씨구 ㅋ"
// 복사에 의한 결과값
// console.log(text)    //"얼씨구 ㅋ"
// console.log(message)  //'문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.'

let conversationTool = messenger;
// conversationTool.name = "slack"
//참조에 의한 결과값
// console.log(conversationTool.name)
// console.log(messenger.name)

// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);


// 객체 복사
// 1. for ~ in 문을 사용한 복사
const cloneObject = {}

for(const key in messenger){
  cloneObject[key] = messenger[key]
}
cloneObject.name = "slack"
// console.log("messenger.name : ", messenger.name)
// console.log("cloneObject.name : ",cloneObject.name)



// 2. Object.assign()을 사용한 복사

const copyObject = Object.assign({},messenger)
copyObject.name = "twitter"

// console.log("copyObject.name : ",copyObject.name)
// console.log("messenger.name : ",messenger.name)



// 3. 전개 연산자(...)를 사용한 복사

const spreadObject = {...messenger}

spreadObject.name = "line"

console.log("spreadObject.name : ",spreadObject.name)
console.log("messenger.name : ",messenger.name)


// 4. 객체를 복사해주는 유틸 함수 
const copyObject2 = (object) => {Object.assign({},object)
}

// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};
// let combinedCssMap = Object.assign({},cssMapA,cssMapB)
let combinedCssMap = {...cssMapA, ...cssMapB};


// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140
  },
};

//얕복
let copyedContainerStyles = {...containerStyles};
// copyedContainerStyles['max-width'].md = 999;
// console.log(containerStyles['max-width'].md)
// console.log(copyedContainerStyles['max-width'].md)


// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}


// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
