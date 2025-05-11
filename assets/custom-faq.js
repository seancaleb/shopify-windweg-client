$(document).ready(function () {
  $('.faq__group').each(function () {
    const $group = $(this);

    $group.on('click', '.faq__title-wrapper', function () {
      const $item = $(this).closest('.faq__item');
      const $text = $item.find('.faq__text');
      const $caret = $(this).find('svg');

      const isActive = $item.hasClass('active');

      // Close all in group
      $group.find('.faq__item').removeClass('active').find('.faq__text').slideUp(150);
      $group.find('.faq__title-wrapper svg').removeClass('rotated');

      if (!isActive) {
        $item.addClass('active');
        $text.slideDown(150);
        $caret.addClass('rotated');
      }
    });
  });
});
