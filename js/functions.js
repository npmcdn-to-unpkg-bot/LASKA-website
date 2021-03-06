// LASKA logo hero parallax
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });
});

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 0)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
})(jQuery); // End of use strict
