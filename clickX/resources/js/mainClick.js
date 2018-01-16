$(document).ready(function() {
  $(".navbar").click(function() {
    $(".first").toggleClass("hamburger-1");
    $(".second").toggleClass("hamburger-2");
    $(".third").toggleClass("hamburger-3");
  });

  $(".wrapper").click(function() {
    $("#mobile-menu").toggleClass("slideInDown");
    $("html").toggleClass("catchScroll");
    // $(".billyLogo").toggle();
    // return false;
  });

// $('#first_section').jarallax({
//     speed: 0.2
// });

// $('#third_section').jarallax({
//     speed: 0.2
// });

// $('.reel_One').jarallax({
//     speed: 0.2
// });

// $('.reel_Two').jarallax({
//     speed: 0.2
// });

// $('.reel_Three').jarallax({
//     speed: 0.2
// });

// $('.reel_Four').jarallax({
//     speed: 0.2
// });

// $('.reel_Five').jarallax({
//     speed: 0.2
// });

// $('.reel_Six').jarallax({
//     speed: 0.2
// });



});
