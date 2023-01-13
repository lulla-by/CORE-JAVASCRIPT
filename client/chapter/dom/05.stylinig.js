/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode('.first')

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// console.log(first.className = 'hola')

// first.classList.add("hola")
// first.classList.remove("hola")
// first.classList.toggle("hola")
// console.log(first.classList.contains("hola"))



// addClass('.first','hello')
// removeClass('.first','hello')

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.backgroundColor= "red"
first.style.transform = "rotate(360deg)"





/* 계산된 스타일 읽기 ------------------------------------------------------- */

let size = getComputedStyle(first);
// console.log(size)

//자바스크립트에서는 객체의 key나,value 값을 변수로 받기 위해서는 . 사용x
//[ ] 각괄호 표기법

 




//정확한 css속성인지? 어떻게 체크?
// console.log(getCss('.first','font-size'))
// setCss('.first','color','white')
console.log(css('.first','color'))
css('.first','color','white')
css('.first','font-size','100px')

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

setTimeout(() => {
  console.log()
}, 1000);