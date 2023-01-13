function insertBefore(node,text){
  if(typeof node ==="string"){node = getNode(node)}
  if(node.nodeType === document.ELEMENT_NODE){

    typeError("insertBefor 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.")
  }

  node.insertAdjacentHTML('beforebegin',text)
}

// insertBefore('h1',template)


function insertFirst(node,text){
  if(typeof node ==="string"){node = getNode(node)}
  if(node.nodeType !== document.ELEMENT_NODE){
    typeError("insertfirst 함수의 첫 번째 인자는 ELEMENT노드여야 합니다")
  }
  node.insertAdjacentHTML('beforebegin',text)
}
// insertLast

function insertLast(node,text){
  if(typeof node ==="string"){node = getNode(node)}
  if(node.nodeType !== document.ELEMENT_NODE){
    refError("insertLast 함수의 첫 번째 인자는 ELEMENT노드여야 합니다")
  }
  node.insertAdjacentHTML('afterbegin',text)
}

// insertAfter

function insertAfter(node,text){
  if(typeof node ==="string"){
    node = getNode(node)
  }
  node.insertAdjacentHTML('afterend',text)
}