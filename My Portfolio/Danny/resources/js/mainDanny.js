
$(document).ready(function() {

  $("#s1").addClass("show");

  setInterval(function() {
    if ($("#s1").hasClass("show"))
    {
      $("#s1").removeClass("show");
      $("#s2").addClass("show");
    }
    else {
      $("#s2").removeClass("show");
      $("#s1").addClass("show");
    }
  }, 2000);

  $(".navbar").click(function() {
    $(".first").toggleClass("hamburger-1");
    $(".second").toggleClass("hamburger-2");
    $(".third").toggleClass("hamburger-3");
  });

  $(".wrapper-nav").click(function() {
    $("#mobile-menu").toggleClass("slideInRight");
    $("#page-4").toggleClass("hide");
    $("#page-3").toggleClass("hide");
    $("#page-2").toggleClass("hide");
  });

  $(".main-bg-2, .main-bg-201").mouseover(function() {
    $(".main-bg-2").addClass("hover-bg-1");
    $(".main-bg-201").addClass("hover-bg-2");
  });

  $(".main-bg-2, .main-bg-201").mouseleave(function() {
    $(".main-bg-2").removeClass("hover-bg-1");
    $(".main-bg-201").removeClass("hover-bg-2");
  })

  $(".hover-area").mouseover(function() {
    $(".main-bg-301").addClass("hover-bg-301");
    $(".main-bg-302").addClass("hover-bg-302");
    $(".main-bg-3").addClass("hover-bg-3");
    $(".text").addClass("slideLeft");
  });

  $(".hover-area").mouseleave(function() {
    $(".main-bg-301").removeClass("hover-bg-301");
    $(".main-bg-302").removeClass("hover-bg-302");
    $(".main-bg-3").removeClass("hover-bg-3");
    $(".text").removeClass("slideLeft");
  });

  $("#fullpage").fullpage();


});




