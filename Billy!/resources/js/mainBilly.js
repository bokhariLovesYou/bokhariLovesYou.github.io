$(document).ready(function() {
  $(".navbar").click(function() {
    $(".first").toggleClass("hamburger-1");
    $(".second").toggleClass("hamburger-2");
    $(".third").toggleClass("hamburger-3");
  });

    $("html").imagesLoaded(function() {
        $("body").toggleClass('loaded');
    });


  jQuery.fn.clickToggle = function(a,b) {
  var ab = [b,a];
  return this.on("click", function(){ ab[this._tog^=1].call(this); });
};


    click = false;
    function catchScroll() {
     var scrollPosition = [
      self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
      self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      ];

      var html = jQuery('html');
      html.data('scroll-position', scrollPosition);
      html.data('previous-overflow', html.css('overflow'));
      html.css('overflow', 'hidden');
      window.scrollTo(scrollPosition[0], scrollPosition[1]);
    }

  $(".wrapper").click(function() {
    $(".billyLogo").toggleClass("animateLogo");
    $("#mobile-menu").toggleClass("slideInDown");
    $(".nyc").toggleClass("red");
    $(".nyc").toggleClass("overlay");
    $(".wrapper").toggleClass("overlay");
    $(".red-border").toggleClass("red");
    $(".belongPara").toggleClass("paraRight");
    $("html").toggleClass("catchScroll");
    $("html").toggleClass("left");
    // $(".billyLogo").toggle();
    // return false;
  });

  // $(".wrapper").clickToggle(function() {
  //     var scrollPosition = [
  //     self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
  //     self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  //     ];

  //     var html = jQuery('html');
  //     html.data('scroll-position', scrollPosition);
  //     html.data('previous-overflow', html.css('overflow'));
  //     html.css('overflow', 'hidden');
  //     window.scrollTo(scrollPosition[0], scrollPosition[1]);
  // }, function() {
  //   var html = jQuery('html');
  //   var scrollPosition = html.data('scroll-position');
  //   html.css('overflow', html.data('previous-overflow'));
  //   window.scrollTo(scrollPosition[0], scrollPosition[1]);

  // });

  $(".search").on('click', function() {
    $(".search-modal").addClass("slideInDown");
  });

  $(".cross").on('click', function() {
    $(".search-modal").removeClass("slideInDown");
    $(".place-holder").val('');
  });


  $(".nyc").click(function() {
    $(".nyc").toggleClass("red");
    $(".red-border").toggleClass("red");
  });

  $(".red-border").click(function() {
    $(".nyc").toggleClass("red");
    $(".red-border").toggleClass("red");
  });

  $(".wrapper-4").click(function() {
    $(".nyc").toggleClass("red");
    $(".mobile-nav li:nth-child(5)").toggleClass("colorText");
  });

  // var nextimage=0;
  // var images=new Array('file:///Users/haanibokhari/Desktop/ALL%20OF%20MY%20APPS/My%20Portfolio/Billy!/images/cover5.jpg',
  //                      'file:///Users/haanibokhari/Desktop/ALL%20OF%20MY%20APPS/My%20Portfolio/Billy!/images/belong.jpg',
  //                      'file:///Users/haanibokhari/Desktop/ALL%20OF%20MY%20APPS/My%20Portfolio/Billy!/images/cover3.jpg'
  //                      );
  // doSlideshow();

  // function doSlideshow() {
  //   if(nextimage>=images.length) {
  //     nextimage=1;
  //   }
  //   $('.bg-main').css('background-image', 'url("'+images[nextimage++]+'")').fadeIn(500, function(){
  //     setTimeout(doSlideshow, 1000);
  //   });
  // }

  $(".shout2").addClass("hide");

  setInterval(function() {
    if ($(".bg-main").hasClass('slideshow'))
    {
      $(".bg-main").removeClass("slideshow");
      $(".bg-main").addClass("slideshow2");
      $(".shout").addClass("hide");
      $(".shout2").removeClass("hide");
    }
    else {
      $(".bg-main").removeClass("slideshow2");
      $(".bg-main").addClass("slideshow");
      $(".shout2").addClass("hide");
      $(".shout").removeClass("hide");
    }
  }, 5000);


});
