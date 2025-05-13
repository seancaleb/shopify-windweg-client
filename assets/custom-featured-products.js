const featuredProductsSwiper = new Swiper('.products-swiper', {
  slidesPerView: 4,
  spaceBetween: 24,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    990: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});
