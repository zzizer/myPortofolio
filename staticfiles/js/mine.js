const wr = document.querySelector(".word-rotate");

const words = wr.children;

let x = 0;
rotate(x);

setInterval(() => {
  x = ++x % words.length;
  rotate(x);
}, 1000);

function rotate(start) {
  for (let i = 0; i < words.length; ++i) {
    const j = (start + i) % words.length;
    let percent = j / words.length;
    let rad = percent * 2 * Math.PI;
    let ty = Math.sin(rad) * 200;
    let tz = 40 * Math.cos(rad) - 40;
    let op = (Math.cos(rad) + 1) / 2;
    words[
      i
    ].style.transform = `perspective(100px) translateZ(${tz}px) translateY(${ty}%)`;
    words[i].style.opacity = `${op}`;
  }
}

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
