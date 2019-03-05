var modal = document.querySelector(".modal");
var button = document.querySelector(".button-search");

button.addEventListener("click", toggleMenu);

function toggleMenu(evt) {
    evt.preventDefault;
    modal.classList.toggle("show");
}