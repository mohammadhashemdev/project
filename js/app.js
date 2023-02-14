const navToggler = document.querySelector(".togglerr");
const overlay = document.querySelector("#overlay");

navToggler.addEventListener("click", function (e) {
  document.querySelector("#mobileNavbar").classList.toggle("translate-x-full");
  overlay.classList.toggle("hidden");
  overlay.style.opacity = 0.5;
});

overlay.addEventListener("click", function (e) {
  document.querySelector("#mobileNavbar").classList.toggle("translate-x-full");
  overlay.classList.toggle("hidden");
});
