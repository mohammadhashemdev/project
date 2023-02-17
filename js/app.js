const navToggler = document.querySelector(".togglerr");
const overlay = document.querySelector("#overlay");
const mobileNavbar = document.querySelector("#mobileNavbar");
const mobileNavItems = document.querySelectorAll("#mobileNavbar ul li");

const goToSection = function () {
  overlay.classList.add("main-hidden");
  mobileNavbar.classList.add("translate-x-full");
};

const mobileNavClose = function () {
  mobileNavbar.classList.toggle("translate-x-full");
  overlay.classList.toggle("main-hidden");
};

mobileNavItems.forEach((item) => {
  item.addEventListener("click", goToSection);
});

navToggler.addEventListener("click", mobileNavClose);
overlay.addEventListener("click", mobileNavClose);

// owl carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
  },
});
