/* ----------- Инциалазиця слайдера на мобильных устройствах ---------- */

const slider = document.querySelector(".info-slider");
const slider1 = document.querySelector(".reasons-slider");
const slider2 = document.querySelector(".reviews-slider");

let mySwiper;
let mySwiper2;
let mySwiper3;

function mobileSlider() {
  if (window.innerWidth <= 600 && slider.dataset.mobile == "false") {
    mySwiper = new Swiper(slider, {
      slidesPerview: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      slideClass: "info__item",
    });

    slider.dataset.mobile = "true";
  }

  if (window.innerWidth > 600) {
    slider.dataset.mobile = "false";

    if (slider.classList.contains("swiper-initialized")) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});

function mobileSlider1() {
  if (window.innerWidth <= 600 && slider1.dataset.mobile == "false") {
    mySwiper2 = new Swiper(slider1, {
      slidesPerview: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      slideClass: "reasons__item",
    });

    slider1.dataset.mobile = "true";
  }

  if (window.innerWidth > 600) {
    slider1.dataset.mobile = "false";

    if (slider1.classList.contains("swiper-initialized")) {
      mySwiper2.destroy();
    }
  }
}

mobileSlider1();

window.addEventListener("resize", () => {
  mobileSlider1();
});

function mobileSlider2() {
  if (window.innerWidth <= 600 && slider2.dataset.mobile == "false") {
    mySwiper3 = new Swiper(slider2, {
      slidesPerview: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      slideClass: "reviews__item",
    });

    slider2.dataset.mobile = "true";
  }

  if (window.innerWidth > 600) {
    slider2.dataset.mobile = "false";

    if (slider2.classList.contains("swiper-initialized")) {
      mySwiper3.destroy();
    }
  }
}

mobileSlider2();

window.addEventListener("resize", () => {
  mobileSlider2();
});

/* ----------- Плавная прокрута до формы ---------- */

const buttons = document.querySelectorAll("[data-scroll='btn']");
const form = document.querySelector("#form");

const scrollTo = (element) => {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth",
  });
};

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollTo(form);
  });
});

/* ----------- Валидация email ---------- */

const input = document.querySelector(".footer__form-input");
const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

input.addEventListener("change", (e) => {
  if (!regex.test(String(e.target.value).toLocaleLowerCase())) {
    alert("Введите корректный еmail");
  } else {
    alert("Форма успешно отправлена!");
    e.target.value = "";
  }
});

/* ----------- AOS Aнимация ---------- */

AOS.init();
