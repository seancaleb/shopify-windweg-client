document.querySelectorAll('.swiper-slider').forEach((sliderEl, index) => {
  const scrollbarEl = sliderEl.querySelector('.swiper-scrollbar');

  const sliderClass = `swiper-instance-${index}`;
  sliderEl.classList.add(sliderClass);

  new Swiper(`.${sliderClass}`, {
    slidesPerView: 'auto',
    spaceBetween: 16,
    freeMode: true,
    momentum: true,
    momentumRatio: 0.5,
    scrollbar: {
      el: scrollbarEl,
      hide: true,
      draggable: true,
      snapOnRelease: true,
    },
    // preventClicks: false,
    // preventClicksPropagation: false,
  });
});

document.querySelectorAll('.swiper-slide a').forEach((el) => {
  el.addEventListener('click', (e) => {
    if (!swiper.allowClick) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
});
