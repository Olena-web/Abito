var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      spaceBetween: 10,
      slidesPerView: 2,
    },
    480: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    640: {
      spaceBetween: 40,
      slidesPerView: 4,
    },
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,

  thumbs: {
    swiper: swiper,
  },
});
const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar-panel");
const menuCloseBtn = document.querySelector(".close-menu");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("is-open");
});
menuCloseBtn.addEventListener("click", () => {
  menu.classList.toggle("is-open");
});
