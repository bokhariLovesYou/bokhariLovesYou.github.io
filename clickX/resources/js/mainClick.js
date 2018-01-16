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

$('#first_section').stellar({
  scrollProperty: 'transform'
});

$('#third_section').stellar({
  scrollProperty: 'transform'
});

$('.reel_One').stellar({
  scrollProperty: 'transform'
});

$('.reel_Two').stellar({
  scrollProperty: 'transform'
});

$('.reel_Three').stellar({
  scrollProperty: 'transform'
});

$('.reel_Four').stellar({
  scrollProperty: 'transform'
});

$('.reel_Five').stellar({
  scrollProperty: 'transform'
});

$('.reel_Six').stellar({
  scrollProperty: 'transform'
});



});
