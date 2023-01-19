import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";




const first = getNode('.first')


function delay (callback,timeout=1000){
setTimeout( callback,timeout);
}

// delay(()=>{
//   first.style.top = "-100px";
//   delay(()=>{
//     first.style.transform = 'rotate(360deg)'
//     delay(()=>{
//       first.style.top = '0px'
//     })
//   })
// })


const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: "성공",
  errorMessage: "알 수 없는 오류가 발생했습니다.",
};



export const delayP = (options = {}) => {

  // const {shouldReject,data,errorMessage,timeout} = options
  // let config2 = Object.assign({},defaultOptions)
  
  let config = {...defaultOptions};

  if(isNumber(options)){
    config.timeout = options;
  }
  //객체 합성 mixin
  //스프레드로 뒤에있는 놈이 덮어쓰기함
  if(isObject(options)){
    config = {...config, ...options}
  }

  const {shouldReject, data, errorMessage,timeout} = config;




  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  });
};


// delayP(3000).then((res)=>{
//   console.log(res) //진짜성공
// })

// delayP({
//   errorMessage: '잘가',
//   shouldReject: false,
//   data: '안녕',
//   timeout: 1500,
// }).then((res)=>{
//   console.log(res);
// })
// delayP()
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)})



// async : 일반함수를 promise를 반호나하늖 ㅏㅁ수로 만든다
// await :1. promise가 반환하는 result를 가져오기.
//       2. 코드 실행 흐름 제어

// function delayA() {
//   return new Promise((resolve,reject)=>{
//     resolve("완료")
//   })
// }

async function delayA() {
  return '완료'
}

let result = await delayA()

async function 라면끓이기() {
  await delayP(1500)
  console.log("물넣기")
  await delayP(1500)
  console.log("면넣기")
  await delayP(1500)
  console.log("스프")
}

// 라면끓이기()