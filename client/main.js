import { deleteStorage, getNode, loadStorage, saveStorage } from "./lib/index.js";

const textField = getNode("#textField");
const deleteButton = getNode('input[value="삭제"]');
const submitButton = getNode('input[value="전송"]');
console.log(deleteButton)
console.log(submitButton)

loadStorage("area").then((res) => {
  textField.value = res;
});

function inputHandler() {
  // console.log(textField.value)
  saveStorage("area", textField.value);
}
textField.addEventListener("input", inputHandler);
// submitButton.addEventListener("click", inputHandler);

const deleteHandler = (key) =>{
  console.log(key)
  deleteStorage(key)
}

deleteButton.addEventListener('click',deleteHandler('area'))