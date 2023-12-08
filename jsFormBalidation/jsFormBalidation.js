var login = document.querySelector(".login");
var userNameHeading = document.querySelector(".userNameHeading");
var userName = document.querySelector(".userName");
var userNameRequirAlert = document.querySelector(".userNameRequirAlert");
var emailHeading = document.querySelector(".emailHeading");
var email = document.querySelector(".email");
var emailRequirAlert = document.querySelector(".emailRequirAlert");
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var passwordHeading = document.querySelector(".passwordHeading");
var password = document.querySelector(".password");
var passwordRequirAlert = document.querySelector(".passwordRequirAlert");
var confirmPasswordHeading = document.querySelector(".confirmPasswordHeading");
var confirmPassword = document.querySelector(".confirmPassword");
var confirmPasswordRequirAlert = document.querySelector(
  ".confirmPasswordRequirAlert"
);

login.addEventListener("click", function () {
  if (userName.value.length < 6) {
    userName.style.border = "2px solid red";
    userNameHeading.style.color = "red";
    userNameRequirAlert.innerHTML = "Minimum 6 character require!";
    userNameRequirAlert.style.color = "red";
    userNameRequirAlert.style.fontSize = "13px";
  } else if (userName.value.length >= 6) {
    userName.style = "";
    userNameHeading.style.color = "";
    userNameRequirAlert.innerHTML = "";
  }
});

login.addEventListener("click", function () {
  if (email.value.length < 8 && userName.value.length >= 6) {
    email.style.border = "2px solid red";
    emailHeading.style.color = "red";
    emailRequirAlert.innerHTML = "Valid eamil require!";
    emailRequirAlert.style.color = "red";
    emailRequirAlert.style.fontSize = "13px";
  } else if (
    email.value.match(pattern) &&
    email.value.length >= 8 &&
    userName.value.length >= 6
  ) {
    email.style = "";
    emailHeading.style.color = "";
    emailRequirAlert.innerHTML = "";
  } else if (userName.value.length < 6) {
    email.style.border = "";
    emailHeading.style.color = "";
    emailRequirAlert.innerHTML = "";
    emailRequirAlert.style.color = "";
    emailRequirAlert.style.fontSize = "";
  }
});

login.addEventListener("click", function () {
  if (
    password.value.length < 6 &&
    email.value.match(pattern) &&
    email.value.length >= 8 &&
    userName.value.length >= 6
  ) {
    password.style.border = "2px solid red";
    passwordHeading.style.color = "red";
    passwordRequirAlert.innerHTML = "Password must be 6 character!";
    passwordRequirAlert.style.color = "red";
    passwordRequirAlert.style.fontSize = "13px";
  } else {
    password.style = "";
    passwordHeading.style.color = "";
    passwordRequirAlert.innerHTML = "";
  }
});

login.addEventListener("click", function () {
  if (
    password.value != confirmPassword.value &&
    password.value.length >= 6 &&
    email.value.match(pattern) &&
    email.value.length >= 8 &&
    userName.value.length >= 6
  ) {
    confirmPassword.style.border = "2px solid red";
    confirmPasswordHeading.style.color = "red";
    confirmPasswordRequirAlert.innerHTML =
      "Password does not match! Valid confirm password requir.";
    confirmPasswordRequirAlert.style.color = "red";
    confirmPasswordRequirAlert.style.fontSize = "13px";
  } else if (
    confirmPassword.value == password.value &&
    password.value.length >= 6 &&
    email.value.match(pattern) &&
    email.value.length >= 8 &&
    userName.value.length >= 6
  ) {
    confirmPassword.style.border = "";
    confirmPasswordHeading.style.color = "";
    confirmPasswordRequirAlert.innerHTML = "Congratulation! Login Successful";
    confirmPasswordRequirAlert.style.color = "green";
    confirmPasswordRequirAlert.style.fontSize = "13px";
  } else if (
    password.value.length < 6 &&
    email.value.match(pattern) &&
    email.value.length >= 8 &&
    userName.value.length >= 6
  ) {
    confirmPassword.style.border = "";
    confirmPasswordHeading.style.color = "";
    confirmPasswordRequirAlert.innerHTML = "";
    confirmPasswordRequirAlert.style.color = "";
    confirmPasswordRequirAlert.style.fontSize = "";
  }
});

window.addEventListener("keydown", function (event) {
  if (event.code == "Enter") {
    login.click();
  }
});

window.addEventListener("keydown", function (event) {
  if (userName.value.length < 6 && event.code == "ArrowDown") {
    userName.select();
  } else if (
    userName.value.length >= 6 &&
    email.value.length < 8 &&
    event.code == "ArrowDown"
  ) {
    email.select();
  } else if (
    userName.value.length >= 6 &&
    email.value.length >= 8 &&
    password.value.length < 6 &&
    email.value.match(pattern) &&
    event.code == "ArrowDown"
  ) {
    password.select();
  } else if (
    userName.value.length >= 6 &&
    email.value.length >= 8 &&
    email.value.match(pattern) &&
    password.value.length >= 6 &&
    event.code == "ArrowDown"
  ) {
    confirmPassword.select();
  }
});

window.addEventListener("keydown", function (event) {
  if (
    confirmPassword.value.length == 0 &&
    password.value.length >= 6 &&
    email.value.length >= 8 &&
    email.value.match(pattern) &&
    userName.value.length >= 6 &&
    event.code == "ArrowUp"
  ) {
    password.select();
  } else if (
    confirmPassword.value.length == 0 &&
    password.value.length == 0 &&
    email.value.length >= 8 &&
    email.value.match(pattern) &&
    userName.value.length >= 6 &&
    event.code == "ArrowUp"
  ) {
    email.select();
  } else if (
    confirmPassword.value.length == 0 &&
    password.value.length == 6 &&
    email.value.length == 0 &&
    userName.value.length >= 6 &&
    event.code == "ArrowUp"
  ) {
    userName.select();
  }
});
