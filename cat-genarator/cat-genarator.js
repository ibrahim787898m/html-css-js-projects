function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("result");
  image.src = "giphy.webp";
  image.style =
    "width: 200px; height: 200px; margin: 10px 10px; box-shadow: 0 10px 50px rgba(0, 0, 0, 0.7)";
  div.appendChild(image);
}
function destroyCat() {
  var div = document.getElementById("result");
  div.removeChild(div.childNodes[0]);
}
var generate = document.getElementById("generate");
var destroy = document.getElementById("destroy");
window.addEventListener("keydown", function (event) {
  if (event.code == "Enter") {
    generate.click();
  }
});
window.addEventListener("keydown", function (event) {
  if (event.code == "Backspace") {
    destroy.click();
  }
});
