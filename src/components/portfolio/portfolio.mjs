new Swiper('.portfolio__slider', {
  loop: true,
  navigation: {
    nextEl: '.portfolio__btn-next',
    prevEl: '.portfolio__btn-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
  spaceBetween: 30,
  slidesPerGroup: 1,
});
