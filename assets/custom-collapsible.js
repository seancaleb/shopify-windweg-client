$(document).ready(function () {
  $('.collapsible__group').each(function () {
    const $group = $(this);

    $group.on('click', '.collapsible__title-wrapper', function () {
      const $item = $(this).closest('.collapsible__item');
      const $text = $item.find('.collapsible__text');
      const $caret = $(this).find('svg');

      const isActive = $item.hasClass('active');

      // Close all in group
      $group.find('.collapsible__item').removeClass('active').find('.collapsible__text').slideUp(150);
      $group.find('.collapsible__title-wrapper svg').removeClass('rotated');

      if (!isActive) {
        $item.addClass('active');
        $text.slideDown(150);
        $caret.addClass('rotated');
      }
    });
  });
});
