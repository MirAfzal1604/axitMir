// function myFunction(x) {
//     x.classList.toggle("change");
// }

const navLink = document.querySelector(".nav_links");
const burger = document.querySelector(".burger");

burger.addEventListener("click", show);

function show() {
    navLink.style.display = "block";
    navLink.style.top = "0";
}

function onClose() {
    navLink.style.top = "-100%";
}