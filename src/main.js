const elForm = document.querySelector(".js-form");
const elInput = elForm.querySelector(".js-input");
const elItem = document.querySelector(".js-item");
let arr = [];
const handleRenderSecond = (val) => {
  if (arr.length == 6) elInput.readOnly = true;
  let elIntervalNumber = document.createElement("strong");
  elIntervalNumber.className =
    "p-2 pl-[14px] pr-[14px] bg-blue-400 text-blue-800 rounded-full animation js-number";
  let int = setInterval(() => {
    if (val > 1) val--;
    else {
      arr.pop();
      clearInterval(int);
      elInput.readOnly = false;
      elIntervalNumber.remove();
    }
    elIntervalNumber.textContent = val;
  }, 1000);
  elIntervalNumber.textContent = val;
  elItem.append(elIntervalNumber);
};
elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let inputValue = elInput.value.trim();
  if (inputValue.length && Number(inputValue)) {
    arr.push(inputValue);
    handleRenderSecond(inputValue);
  }
  elForm.reset();
});
