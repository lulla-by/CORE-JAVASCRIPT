/* global gsap */

import {
  losey,
  delayP,
  getNode as $,
  renderUserCard,
  changeColor,
  renderSpinner,
  renderEmptyCard,
  attr,
} from "./lib/index.js";

//rendingUserList



//유저카드 생성
//생성된 카드로 렌더링
const userCardContainer =  $(".user-card-inner");
const rendingUserList = async () => {
  renderSpinner(userCardContainer);
  try {
    await delayP(1000);
    $('.loadingSpinner').remove();
    let response = await losey.get("http://localhost:3000/users"
    );
    let userData = response.data;
    console.log(userData);

    //foreach
    userData.forEach((element) => {
      renderUserCard(userCardContainer, element);
    });

    changeColor(".user-card");

    gsap.to(gsap.utils.toArray(".user-card"), {
      x: 0,
      opacity:1,
      rotation: 360,
      duration: 3.5,
      stagger: 0.2,
    });
  } catch (err) {
    console.log(err);
    renderEmptyCard(userCardContainer)
  }

  //for문
  //   for(let i = 0 ; i <= userData.length; i++){
  //   renderUserCard(userCardContainer,userData[i])
  // }
};


// btn.addEventListener("click",()=>{
//   console.log("hit")
// })
rendingUserList();

const handler=(e)=>{
  let deleteButton = e.target.closest('button')
  let article = e.target.closest('article')
  // console.log(article)
  if(!deleteButton || !article) return;

  let id = attr(article,'data-index').slice(5)
  losey.delete(`http://localhost:3000/users/${id}`).then(()=>{
    userCardContainer.innerHTML = "";
    rendingUserList();
  })
console.log(id)
}

userCardContainer.addEventListener('click',handler)



//ajax get user List

// xhrPromise
// .get('https://jsonplaceholder.typicode.com/users/1')
// .then((res)=>{
//   insertLast(document.body,JSON.stringify(res));
// })
// .catch((err)=>{
//   console.log(err);
// })

/* xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (res)=>{
    insertLast('body',JSON.stringify(res))
  },
  (err)=>{
    insertLast('body','데이터 로딩에 실패했습니다.')
  }
)

 */

/* 


 */
