const logosContainerEl = document.querySelector('.logos-wrapper');

const logosSwiper = new Swiper(logosContainerEl, {
  slidesPerView: 'auto',
  loop: true,
  allowTouchMove: false,
  speed: 4000,
  loopAdditionalSlides: 6,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

window.addEventListener('resize', () => {
  logosSwiper.update();
});
