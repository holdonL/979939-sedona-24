var modal = document.querySelector(".modal");
var button = document.querySelector(".button-search");

modal.classList.add("js");

button.addEventListener("click", toggleMenu);

function toggleMenu(evt) {
    evt.preventDefault;
    modal.classList.toggle("show");
}