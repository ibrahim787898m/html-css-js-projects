console.log("hello world");
var mainPassword = "ibrahim12345";
var inputPassword = document.querySelector("#input");
var submit = document.querySelector("#submit");

submit.addEventListener("click", function () {
  if (mainPassword == inputPassword.value) {
    window.open("inputToObject.html", "_self");
  } else {
    window.open("void(0)", "_self");
  }
});
