/*  
    INIT OWL CAROUSEL
*/

$(".owl-carousel").owlCarousel({
   loop: true,
   //    autoplay: true,
   margin: 30,
   dots: true,
   nav: true,
   responsive: {
      0: {
         items: 4,
      },
   },
});

/*  
   INIT COUNTING NUMBER
*/
$(".counter").countUp();

wow = new WOW({
   boxClass: "wow", // default
   animateClass: "animated", // default
   offset: 0, // default
   mobile: true, // default
   live: true, // default
});
wow.init();

$(window).scroll(function () {
   if ($(this).scrollTop() > 60) {
      $("#header").addClass("scrolled");
   } else {
      $("#header").removeClass("scrolled");
   }
});
