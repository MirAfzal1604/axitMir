"use strict";

const password = document.querySelector(".password");
const toggleEye = document.querySelector("#togglePassword");


toggleEye.addEventListener("click", function(e) {

    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.classList.toggle("bi-eye");
});