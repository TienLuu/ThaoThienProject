$(window).scroll(function () {
   if ($(this).scrollTop() > 60) {
      $("#header").addClass("scrolled");
   } else {
      $("#header").removeClass("scrolled");
   }
});

/*  
    INIT OWL CAROUSEL
*/

// POPULAR DISHES
$(".owl-carousel").owlCarousel({
   loop: true,
   //    autoplay: true,
   margin: 60,
   dots: false,
   nav: true,
   responsive: {
      0: {
         items: 2,
      },
   },
});

$(document).ready(function () {
   $(".menu__list").slick({});
});
