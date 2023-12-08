var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var w = document.documentElement.clientWidth || window.innerWidth;
if (w <= 4000) {
  menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
    sidebar.style.width = "200px";
  };
} else {
  false;
}
