/* readyState
import { insertLast } from './../dom/insert';
  0: uninitialized 초기화 - 안뜸
  1: loading 로딩 - 안뜸
  2: loaded 로딩이 완료된
  3: interactive 인터렉티브
  4: complete 완료
  */



// xhrData 함수 만들기 method, url

export function xhrData ({
  url = "",
  method="GET",
  body = null,
  onSuccess=null,
  onFail = null,
  headers = {
    'Content-Type': 'application/json',
    'Acces-Control-Allow-Orgin':'*'
  }
}) {

    const xhr = new XMLHttpRequest();
  
  // 비동기 통신 오픈
  xhr.open(method, url);

  //object entres는 static method
  // console.log(Object.entries(headers))

  //헤더를 세팅?
  //entries가 객체의 key랑 value를 가져올 수 있는 기능이 있잖아. headers가 객첸데 이걸 foreach문을 돌려서 하나하나 반복ㅏ면서 key랑 value를 [key,value] 요 형태로 빼며는 갖고올수있단다..
  // Object.entries(headers).forEach(([key,value])=>{
  //   //setRequestHeader()가 header를 request할때 세팅해주는 함수
  //   xhr.setRequestHeader(key,value)
  // })

  
  // Object.entries(headers).forEach(([key, value]) => {
  //   xhr.setRequestHeader(key, value);
  // });

  
  // readyState의 값이 바뀔때마다 일어나는 이벤트
  xhr.addEventListener("readystatechange", () => {
    //객체 구조 분해 할당
    const{status,readyState,response}=xhr;

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log("통신 성공");

        onSuccess(JSON.parse(response));
        console.log();
      }
    } else {
      if (readyState === 4) {
        console.log("통신 실패");
        onFail("없다이놈아")
      }
    }
  });
  
  // 서버에 요청 보내기
  xhr.send(JSON.stringify(body));
}


// xhrData({
//   url: 'https://jsonplaceholder.typicode.com/users/1',
//   onSuccess:(result)=>{
//     console.log(result)
//   },
//   onFail:(result)=>{
//     console.error(result)
//   }
// })



xhrData.get = (url,onSuccess,onFail) =>{
  xhrData({
    url,
    onSuccess,
    onFail
  })
}

xhrData.post = (url,body,onSuccess,onFail) =>{
  xhrData({
    method:'POST',
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.put = (url,body,onSuccess,onFail) =>{
  xhrData({
    method:'PUT',
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.delete = (url,body,onSuccess,onFail) =>{
  xhrData({
    method:'DELETE',
    body,
    url,
    onSuccess,
    onFail
  })
}



















// xhrData('POST','https://jsonplaceholder.typicode.com/users',{
//   "name": "yesol lee",
//   "username": "Bret",
//   "email": "thfl3363@hanmail.net",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// })