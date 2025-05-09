$(document).ready(function () {
  $('.collapsible__title-wrapper').click(function () {
    const $item = $(this).closest('.collapsible__item');
    const $caret = $(this).find('svg');

    if ($item.hasClass('active')) {
      $item.removeClass('active').find('.collapsible__text').slideUp(150);
      $caret.removeClass('rotated');
    } else {
      $('.collapsible__item').removeClass('active').find('.collapsible__text').slideUp(150);
      $('.collapsible__item svg').removeClass('rotated');

      $item.addClass('active').find('.collapsible__text').slideDown(150);
      $caret.addClass('rotated');
    }
  });
});
