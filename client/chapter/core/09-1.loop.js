/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */


// let i = 0;
// while (i < 3){
//   console.log("*")
//   i++
// }


const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

// let i = 0
// while(i < frontEndDev.length){
// console.log(frontEndDev[i])
// i++
// }


// while 문 (역순환 : 역방향)

// let i = frontEndDev.length -1
// while(i >= 0){
// console.log(frontEndDev[i])
// i--
// }

// let i = frontEndDev.length -1
// while(i >= 0){
// console.log(frontEndDev[i])
// i--
// }
let z1 =performance.now();

let copyArray = [...frontEndDev]
while(copyArray.length){
  console.log(copyArray.pop())
}

let z2 =performance.now();

// 성능 검사, z2 - z1으로 걸리는 시간 계산
console.log(z2-z1)

// 프론트엔드 데브의 길이만큼 순회를 하면서 pop()에서 하나씩 사라짐. 단점 : 기존배열을 없앰, 반대로는 shift가 있음(앞에서부터 뽑아냄)

// 성능 진단 : 순환 vs. 역순환