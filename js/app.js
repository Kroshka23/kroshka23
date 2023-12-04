var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      if (window.innerWidth <= 428) {
        swiper.params.spaceBetween = 18;
        swiper.params.slidesPerView = 1;
        swiper.update();
      } else if (window.innerWidth <= 768) {
        swiper.params.spaceBetween = 18;
        swiper.params.slidesPerView = 2;
        swiper.update();
      } else if (window.innerWidth <= 1024) {
        swiper.params.spaceBetween = 7;
        swiper.params.slidesPerView = 3;
        swiper.update();
      } else if (window.innerWidth <= 1280) {
        swiper.params.spaceBetween = 8;
        swiper.params.slidesPerView = 3;
        swiper.update();
      } else if (window.innerWidth <= 1440) {
        swiper.params.spaceBetween = 22;
        swiper.params.slidesPerView = 3;
        swiper.update();
      } else if (window.innerWidth <= 1728) {
        swiper.params.spaceBetween = 20;
        swiper.params.slidesPerView = 3;
        swiper.update();
      } else {
        swiper.params.spaceBetween = 30;
        swiper.params.slidesPerView = 3;
        swiper.update();
      }
    },
  },
});

const fq1 = document.querySelector("#fq_1");
const fq3 = document.querySelector("#fq_3");

const ht = document.querySelector("#ht");
const ht3 = document.querySelector("#ht-3");

const icon = document.querySelector(".icon");
const icon3 = document.querySelector("#icon-3");

const activeElem = "";
const element1 = "";
const element2 = "";

function activeBlock(activeElem, element1, element2) {
  activeElem.addEventListener("click", () => {
    if (activeElem.classList.contains("active")) {
      activeElem.classList.remove("active");
      element1.classList.add("aper");
      element2.classList.add("passive");
    } else {
      activeElem.classList.add("active");
      element1.classList.add("active");
      element1.classList.remove("aper");
      element2.classList.add("active");
      element2.classList.remove("passive");
    }
  });
}

activeBlock(fq1, icon, ht);
activeBlock(fq3, icon3, ht3);

const fq2 = document.querySelector("#fq_2");
const ht2 = document.querySelector("#ht-2");
const icon2 = document.querySelector("#icon-2");

fq2.addEventListener("click", () => {
  if (fq2.classList.contains("active")) {
    fq2.classList.remove("active");
    icon2.classList.add("aper");
    ht2.classList.add("pasiveB");
  } else {
    fq2.classList.add("active");
    icon2.classList.add("active");
    icon2.classList.remove("aper");
    ht2.classList.add("active");
    ht2.classList.remove("pasiveB");
  }
});

const openBurger = document.querySelector("#open-burger");
const exitBurger = document.querySelector("#exit-burger");
const burgerMenu = document.querySelector(".burger-menu");

openBurger.addEventListener("click", () => {
  burgerMenu.classList.add("active");
});
exitBurger.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
});
