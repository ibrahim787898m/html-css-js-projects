let btnAdd = document.querySelector("#add");
let btnSubstract = document.querySelector("#substract");
let input = document.querySelector("input");

btnAdd.addEventListener("click", () => {
  input.value = parseInt(input.value) + 1;
});

btnSubstract.addEventListener("click", () => {
  input.value = parseInt(input.value) - 1;
});

window.addEventListener("keydown", function (event) {
  if (event.code == "ArrowUp") {
    btnAdd.click();
  }
});

window.addEventListener("keydown", function (event) {
  if (event.code == "ArrowDown") {
    btnSubstract.click();
  }
});
