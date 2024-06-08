(function ($, Drupal, once) {
  Drupal.behaviors.vertical_thumbnail_carousel = {
    attach: function (context, settings) {
      // Use the 'once' function correctly with an arbitrary key, selector, and context
      const elements = once("owlCarouselInit", ".image_list", context);
      elements.forEach(function (element) {
        // Wrap the element in a jQuery object
        const $imageList = $(element);
        // Image click event to replace the main image
        $imageList.find("li").click(function () {
          const newImage = $(this).data("image");
          $(".image_selected img", context).attr("src", newImage);
        });
      });
    },
  };
})(jQuery, Drupal, once);