const navToggler = document.querySelector(".togglerr");
const overlay = document.querySelector("#overlay");

navToggler.addEventListener("click", function (e) {
  document.querySelector("#mobileNavbar").classList.toggle("translate-x-full");
  overlay.classList.toggle("main-hidden");
});

overlay.addEventListener("click", function (e) {
  document.querySelector("#mobileNavbar").classList.toggle("translate-x-full");
  overlay.classList.toggle("main-hidden");
});
