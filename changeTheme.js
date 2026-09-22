console.log("probandoo")

//deleccionando los elementos van a interactuar con el usuario o a cambiar

var btn = document.querySelector(".btn-mode");
var body = document.querySelector("body");

btn.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
})