const navToggler = document.querySelector(".togglerr");
const overlay = document.querySelector("#overlay");
const mobileNavbar = document.querySelector("#mobileNavbar");
const mobileNavItems = document.querySelectorAll("#mobileNavbar ul li");

const goToSection = function () {
  overlay.classList.add("main-hidden");
  mobileNavbar.classList.add("translate-x-full");
};

mobileNavItems.forEach((item) => {
  item.addEventListener("click", goToSection);
});

navToggler.addEventListener("click", function (e) {
  mobileNavbar.classList.toggle("translate-x-full");
  overlay.classList.toggle("main-hidden");
});

overlay.addEventListener("click", function (e) {
  document.querySelector("#mobileNavbar").classList.toggle("translate-x-full");
  overlay.classList.toggle("main-hidden");
});
