const elForm = document.querySelector(".js-form");
const elInput = elForm.querySelector(".js-input");
const elItem = document.querySelector(".js-item");
const elTemplate = document.querySelector(".js-template ").content;

let arr = [];

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let inputValue = elInput.value.trim();
  let copyClone = elTemplate.cloneNode(true);
  let elNumber = copyClone.querySelector(".js-number");

  if (inputValue != "" && inputValue > 0) {
    elNumber.textContent = inputValue;
    elItem.appendChild(copyClone);
    arr.push(inputValue);
  } else {
    console.log("input son kriting");
  }

  if (arr.length == 6) {
    elInput.disabled = true;
    jsBtn.disabled = true;
    console.log("input disebled");
  } else {
    elInput.disabled = false;
    jsBtn.disabled = false;
  }

  let id = setInterval(() => {
    inputValue--;
    if (inputValue == -1) {
      clearInterval(id);
      elNumber.remove();
    } else {
      elNumber.textContent = inputValue;
    }
  }, 1000);

  elForm.reset();
});
