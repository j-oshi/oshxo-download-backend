(function ($, Drupal, once) {
  Drupal.behaviors.header = {
    attach: function (context, settings) {
      // Header scroll class
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $("#header").addClass("header-scrolled");
        } else {
          $("#header").removeClass("header-scrolled");
        }
      });

      $('.hamburger-icon').click(function() {
        $('.nav-menu, .commerce-section').slideToggle();
      });
    },
  };
})(jQuery, Drupal, once);
