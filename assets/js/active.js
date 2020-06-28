(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    $('.control-btn').click(function () {
      $('.control-btn').removeClass('active');
      $(this).addClass('active');
    });

    $('.single-control').click(function () {
      $('.single-control').removeClass('active');
      $(this).addClass('active');
    });
  });

  jQuery(window).on('load', function () {
    // code
  });
})(jQuery);
