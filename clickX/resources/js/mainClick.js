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

});
