/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';




/* 다양한 상황에 맞게 처리 --------------------------------------------------- */
// let thisTime = prompt("입력");
// switch (thisTime) {
//   case "아침":
//     console.log('뉴스 기사 글을 읽는다.')
//     break;

//   case "점심":
//     console.log('자주 가는 식당에 가서 식사를 한다.')
//     break;
//   case "저녁":
//     console.log('동네 한바퀴를 조깅한다.')
//     break;
//   case "밤":
//     console.log('친구에게 전화를 걸어 수다를 떤다.')
//     break;
//   case "심야":
//   case "새벽":
//     console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.')
//     break;
//   case null:
//     console.log("왜 입력안해")
// }


// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */
//  if(thisTime=="아침"){
//   console.log('뉴스 기사 글을 읽는다.')
//  }else if(thisTime=="점심"){
//   console.log('자주 가는 식당에 가서 식사를 한다.')
//  }else if(thisTime=="저녁"){
//   console.log('동네 한바퀴를 조깅한다.')
//  }else if(thisTime=="밤"){
//   console.log('친구에게 전화를 걸어 수다를 떤다.')
//  }else if(thisTime=="심야" || thisTime=="새벽"){
//   console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.')
//  }else{
//   console.log("왜 입력안해")
//  }

/* switch vs. if -------------------------------------------------------- */

// let number = 4;
// switch(number) {
//   case 0:
//     console.log("일")
//     break
//   case 1:
//     console.log("월")
//     break
//   case 2:
//     console.log("화")
//     break
//   case 3:
//     console.log("수")
//     break
//   case 4:
//     console.log("목")
//     break
//   case 5:
//     console.log("금")
//     break
//   case 6:
//     console.log("토")
//     break

// }
// 0 = "일"
// 1 = "월"
// 3 = "화"
// 4 = "수"
// 5 = "목"
// 6 = "금"
// 7 = "토"

// 임의의 숫자를 넣어서 무슨 요일인지를 알려주는 함수를 만들어보자

// function getDay(dayValue){
//   switch(dayValue) {
//     case 0: return "일";
//     case 1:return"월";
//     case 2:return"화";
//     case 3:return "수";
//     case 4:return"목";
//     case 5:return"금";
//     case 6:return"토";
//   }
// }
// let result = getDay(Math.round(Math.random() * 6));
// console.log(result)
