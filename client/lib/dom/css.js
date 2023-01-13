//class 제어
function addClass(node,className){
  console.log(node)
  if(typeof node === "string"){node = getNode(node)}
  console.log(node)
  if(typeof className !== "string"){
    throw new SyntaxError("에러 어쩌구저쩌구")
  }
  node.classList.add(className)
}


function removeClass(node,className){
  console.log(node)
  if(typeof node === "string"){node = getNode(node)}
  console.log(node)
  if(!className){
    node.className = ""
    return;
  }
  if(typeof className !== "string"){
    throw new SyntaxError("에러 어쩌구저쩌구")
  }
  node.classList.remove(className)
}


function toggleClass(node,className){
  console.log(node)
  if(typeof node === "string"){node = getNode(node)}
  console.log(node)
  if(typeof className !== "string"){
    typeError("toggleClass함수의 두 번째 인자는 문자 타입이어야 합니다.")
  }
  node.classList.toggle(className)
}




//css의 스타일을 제어
function getCss(node,prop){
  if(typeof node === "string"){node = getNode(node)}
  if(!(prop in document.body.style)){
    syntaxError("getCss함수의 두 번째 인자인 prop은 유효한 css속성이 아닙니다")
  }
  return getComputedStyle(node)[prop]
}

function setCss(node,prop,value){
  if(typeof node === "string"){node = getNode(node)}
  if(!(prop in document.body.style)){
    syntaxError("setCss함수의 두 번째 인자인 prop은 유효한 css속성이 아닙니다")
  }
  if(!value){
    syntaxError("secCss함수의 세번째 인자는 필수값 입니다.")
  }

  node.style[prop] = value
}

const css = (node,prop,value) => !value ? getCss(node,prop) : setCss(node,prop,value)