var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    breakpoints: {
    1728: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    1440: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    1280: {
      spaceBetween: 22,
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 8,
      slidesPerView: 3,
    },
    768: {
      spaceBetween: 7,
      slidesPerView: 3,
    },
    428: {
      spaceBetween: 18,
      slidesPerView: 2,
    },
    100: {
      spaceBetween: 18,
      slidesPerView: 1,
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
