$(document).ready(function() {


    $("html").imagesLoaded(function() {
        $("body").toggleClass('loaded');
    });

var bg1 = $("#large-header");


function resizeBackground() {
    bg1.height($(window).height() + 60);
}
// function resizeBackground2() {
//   bg2.height($(window).height() - 30);
// }

$(window).resize(resizeBackground);
resizeBackground();

// $(window).resize(resizeBackground2);
// resizeBackground2();

$(function(){

  var $w = $(window),
      $background = $('#wrapper');

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
      $background2 = $('#large-header');

  // Fix background image jump on mobile
  if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    $background2.css({'top': 'auto', 'bottom': 0});

    $w.resize(sizeBackground);
    sizeBackground();
  }

  function sizeBackground() {
     $background2.height(screen.height);
  }
});

    var scrollLink = $(".scroll");
    var didScroll;

    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $("body, html").animate({
        scrollTop: $(this.hash).offset().top
      }, 800);
      $(".scroll").blur();
    });

    // Navigation
    $(".wrapper_nav, .mobile_nav_link").click(function() {
      $(".first").toggleClass("hamburger-1");
      $(".second").toggleClass("hamburger-2");
      $(".third").toggleClass("hamburger-3");
      $(".navbar_2").toggleClass("change_color");
    });

    $(".wrapper_nav, .mobile_nav_link").click(function() {
      $("#wrapper_mobile").toggleClass("slideInRight");
      $(".film").toggleClass("hide");
      $(".demo-1").toggleClass("hide");
    });

    // Smooth Scroll
    $(document).scroll(function() {
      didScroll = true;
      $(".navbar_2").addClass("grey");
      $(".navbar_2").addClass("border");
      $(".navbar_2").addClass("loader");
      $(".first").hide();
      $(".second").hide();
      $(".third").hide();
      // $(".navbar_2").addClass("height");
    });

    setInterval(function() {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 500);

    function hasScrolled() {
      $(".navbar_2").removeClass("grey");
      $(".navbar_2").removeClass("border")
      $(".navbar_2").removeClass("loader");
      $(".first").removeClass("loader");
      $(".second").removeClass("loader");
      $(".third").removeClass("loader");
      $(".first").show();
      $(".second").show();
      $(".third").show();
      // $(".navbar_2_to_top").removeClass("slideOutRight");
      // $(".navbar_2").show();
      $(".navbar_back_to_top").addClass("slideInRight");
      // $(".navbar_2").removeClass("height");
    }

    // Change of height for logo
  $(".work").waypoint(function(){
    $(".psbLogo_2").addClass("height");
    $(".psbLogo_2").addClass("invert");

   $(".portfolio").waypoint(function(){
    $(".psbLogo_2").addClass("height")
    $(".psbLogo_2").addClass("invert");
    });


    $(".connect").waypoint(function() {
      $(".footer").addClass("animated slideOutDown");
    });


    $(".film").waypoint(function() {
      $(".footer").removeClass("animated slideOutDown");
      $(".footer").addClass("animated slideInUp");

   });

  });

  var start = new Date;
  var count = 0;

  for (var i = 0; i < 10; i++) {
  var interval = setInterval(function() {
    $('#seconds').text(Math.round((new Date - start) / 1000, 0));
  }, 1000);
    setTimeout(function(){
      window.clearInterval(interval);
      $('#seconds').text(count);
  }, 60000);
}

  var minutes = setInterval(function() {
    $('#minutes').text(count);

});

// Image slideshow
  $(".img-1").magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade',
    type:'image'
  });
  $(".img-2").magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade',
    type:'image'
  });
  $(".img-3").magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade',
    type:'image'
  });
  $(".img-4").magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade',
    type:'image'
  });
  $(".img-5").magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade',
    type:'image'
  });
  $(".img-6").magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade',
    type:'image'
  });
  $(".img-7").magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade',
    type:'image'
  });
  $(".img-8").magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade',
    type:'image'
  });
  $(".img-9").magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade',
    type:'image'
  });
  $(".img-10").magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade',
    type:'image'
  });
  $(".img-11").magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade',
    type:'image'
  });
  $(".img-12").magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade',
    type:'image'
  });
  $(".img-13").magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade',
    type:'image'
  });

  $('.gallery-item').magnificPopup({
  type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    type: 'image',
    gallery: {
    enabled:true
  }
});

// Touch
$("body").swipe({
        swipeLeft: function(event, direction, distance, duration, fingerCount) {
            $(".mfp-arrow-left").magnificPopup("prev");
        },
        swipeRight: function() {
            $(".mfp-arrow-right").magnificPopup("next");
        },
        threshold: 50
    });

  $(".nav a").on('click', function() {
    $(".nav-collapse").collapse('hide');
  });
});

  // Audio Player
  var audio;

  //Hide Pause Button

  $("#pause").hide();

  //initialise Audio
  initAudio($('#playlist li:first-child'));

  // Initialiser Function
  function initAudio(element) {
      var song = element.attr('song');
      var title = element.text();
      var cover = element.attr('cover');
      var artist = element.attr('artist');

      //Create Audio Object
    audio = new Audio('resources/media/' + song)

    if(!audio.currentTime) {
      $('#duration').html('0:00');
    }

    $('#audio-player .artist').text(artist);
    $('#audio-player .title').text(title);

    //insert Cover
    $('img.cover').attr('src','resources/imgMedia/covers/' + cover);

    $('#playlist li').removeClass('active');
    element.addClass('active');
  }

  // Play Button

  $('#play').click(function() {
    audio.play();
    $('#play').hide();
    $('#pause').show();
    // $('#duration').fadeIn(400);
    showDuration();
  });

    // Pause Button

  $('#pause').click(function() {
    audio.pause();
    $('#pause').hide();
    $('#play').show();
  });

    //Stop Button

  $('#stop').click(function() {
    audio.pause();
    audio.currentTime = 0;
    $('#pause').hide();
    $('#play').show();
    // $('#duration').fadeOut(400);
  });

  // Next Button
  $('#nextAudio').click(function() {
    audio.pause();
    var next = $('#playlist li.active').next();
    if(next.length == 0) {
      next = $('#playlist li:first-child');
    }
    if ($('#play').is(':visible')) {
      $('#play').hide();
      $('#pause').show();
    }
    initAudio(next);
    audio.play();
    showDuration();
  });

  // Previous Button
  $('#prevAudio').click(function() {
    audio.pause();
    var prev = $('#playlist li.active').prev();
    if(prev.length == 0) {
      prev = $('#playlist li:last-child');
    }
    if ($('#play').is(':visible')) {
      $('#play').hide();
      $('#pause').show();
    }
    initAudio(prev);
    audio.play();
    showDuration();
  });

  //Volume Control

  $('#volume').change(function() {
    audio.volume = parseFloat(this.value / 10);
  });

  // After song ends play next song
  $(audio).on("ended", function() {
    audio.pause();
    var next = $('#playlist li.active').next();
      if (next.length == 0) {
        next = $('#playlist li:first-child');
      }
      initAudio(next);
      audio.play();
      showDuration();
  });

  //Time Duration

  function showDuration() {
    $(audio).on('timeupdate', function() {
        //Get Hours & Minutes
        var s = parseInt(audio.currentTime % 60);
        var m = parseInt((audio.currentTime) / 60) % 60;
        //Add 0 if less than 10
        if(s < 10) {
          s = '0' + s;
        }
        $('#duration').html(m + ':' + s);
        var value = 0;
        if (audio.currentTime > 0) {
          value = (100 / audio.duration) * audio.currentTime;
        }

        $('#progress').css('width', value+'%');
    });
  };



  $(function() {
    // Get the form.
    var form = $("#ajax-contact");
    // Get the messages div.
    var formMessages = $("#form-messages")
    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
      // Stop the browser from submitting the form.
      e.preventDefault();
      // Serialize the form data.
      var formData = $(form).serialize();
      // Submit the form using AJAX.
      $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
      })
      .done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');
        // Set the message text.
        $(formMessages).text("Oops, gitHub doesnt provide to host server-side languages. However, I'll get a new domain, soon. Sorry :(");
        // Clear the form.
        $("#name").val('');
        $("#email").val('');
        $("#message").val('');
      })
      .fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');
        // Set the message text.
        if (data.responseText !== '') {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text('Oops! An error occured and your message could not be sent.');
        }
      });

    });

  });

  $(document).on('click','.navbar-collapse',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }

});



