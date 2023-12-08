function ageInDays() {
  var birthYear = prompt("What year were you born?");
  var ageInDays = (2021 - birthYear) * 365;
  var h2 = document.createElement('h2');
  var textAnswer = document.createTextNode("You are " + ageInDays + " days old.");
  h2.setAttribute("id", "ageInDays");
  h2.appendChild(textAnswer);
  document.getElementById('result').appendChild(h2);
}
function reset() {
  var div = document.getElementById("result");
  div.removeChild(div.childNodes[0]);
}

var clickMe = document.getElementById('clickMe');
var resetMe = document.getElementById('resetMe');
window.addEventListener("keydown", function (event) {
  if (event.code == "Enter") {
    clickMe.click();
  }
});
window.addEventListener("keydown", function (event) {
  if (event.code == "Backspace") {
    resetMe.click();
  }
});
