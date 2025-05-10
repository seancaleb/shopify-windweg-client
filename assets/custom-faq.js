$(document).ready(function () {
  $('.faq__title-wrapper').click(function () {
    const $item = $(this).closest('.faq__item');
    const $caret = $(this).find('svg');

    if ($item.hasClass('active')) {
      $item.removeClass('active').find('.faq__text').slideUp(150);
      $caret.removeClass('rotated');
    } else {
      $('.faq__item').removeClass('active').find('.faq__text').slideUp(150);
      $('.faq__item svg').removeClass('rotated');

      $item.addClass('active').find('.faq__text').slideDown(150);
      $caret.addClass('rotated');
    }
  });
});
