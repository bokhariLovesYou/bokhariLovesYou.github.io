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

$(function(){

  var $w = $(window),
      $background = $('#first_section');

  // Fix background image jump on mobile
  if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    $background.css({'top': 'auto', 'bottom': 0});

    $w.resize(sizeBackground);
    sizeBackground();
  }

    function sizeBackground() {
     $background.height(screen.height);
  }
});

$(function(){

  var $w = $(window),
      $background = $('#third_section');

  // Fix background image jump on mobile
  if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    $background.css({'top': 'auto', 'bottom': 0});

    $w.resize(sizeBackground);
    sizeBackground();
  }

    function sizeBackground() {
     $background.height(screen.height);
  }
});

$('#first_section').jarallax({
    speed: 0.2
});

$('#third_section').jarallax({
    speed: 0.2
});

$('.reel_One').jarallax({
    speed: 0.2
});

$('.reel_Two').jarallax({
    speed: 0.2
});

$('.reel_Three').jarallax({
    speed: 0.2
});

$('.reel_Four').jarallax({
    speed: 0.2
});

$('.reel_Five').jarallax({
    speed: 0.2
});

$('.reel_Six').jarallax({
    speed: 0.2
});



});
