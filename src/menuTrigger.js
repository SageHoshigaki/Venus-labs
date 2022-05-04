let trigger = document.getElementsByClassName("navbar-menu");
let burger = document.getElementsByClassName("");

trigger.addEventListener("click", function () {
  console.log("clicked");
  trigger.classList.toggle("active");
  burger.classList.toggle("active");
});
