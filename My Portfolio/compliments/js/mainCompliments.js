  var $cover = $("#cover");
  var $paragraph = $("#quote");
  var $button = $("#button");
  var $buttonPrimary = $(".btn-secondary")
// var $quoteNew = $("<hr> <h1><b>You are beautiful</h1></b>")
// var $quoteNewTwo = $("<hr> <h1><b>You are gorgeous</h1></b>");
//
//
// $($button).click(function() {
// // $cover.hide(); //
// // $quote.hide(); //
// $quote.append($quoteNew);
// $quoteNew.show();
// $quoteNew(hide);
// $quoteNewTwo.show();
// });
//
//
// CREATING QUOTES

    $(document).ready(function (){

    var quoteSource = [ {
    quote: "You are beautiful <3"
    },
    {
    quote: "You are gorgeous <3"
    },
    {
    quote: "You make me laugh"
    },
    {
    quote: "You are a hero"
    },
    {
    quote: "I wish I could tell you how much I love you"
    },
    {
    quote: "You're an inspiration"
    },
    {
    quote: "Relax, you'll get there!"
    },
    {
    quote: "I wish I could find someone as attractive as you"
    },
    {
    quote: "The way you deal with your problems, is amazing!"
    },
    {
    quote: "I know, it's tough, but you're my superman!"
    },
    {
    quote: "Your smile <3"
    },
    {
    quote: "I like how you're looking right now. So sharp!"
    },
    {
    quote: "Dayummmm! Those eyes!"
    },
    {
    quote: "You're a genius!"
    },
    {
    quote: "You got this!"
    }
    ];


  // SOLUTION:
  // 1.) create a random color
    function getRandomColor() {
      var letters = '012345679ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
           //1.1.); Math.floor a random number
        color += letters[Math.floor(Math.random() * 15)];
      }
      return color;
    }

  // 2.) Link it with the quote text
    var colorMethod = function setRandomColor() {
       $("b").css('color', getRandomColor());
    }


    // $buttonPrimary.click(function {
    //   colorMethod;
    // });


    //BUTTON CLICK FUNCTION
    $button.click(function(evt) {
    //PREVENTING DEFAULT BROWSER ACTION UPON CLICK ON THE BUTTON
    var quote = $("#quote").text();
    evt.preventDefault();
    //GETTING QUOTE LENGTH
    var sourceLength = quoteSource.length;
    //GENERATING RANDOM NUMBER TO GET A RANDOM QUOTE
    var randomNumber = Math.floor(Math.random()*sourceLength);
    //GENERATING LOOP
    for (i=0; i <=sourceLength; i+=1) {
    // GENERATING NEW QUOTE
    var newQuotetext = quoteSource[randomNumber].quote;
    //TIME ANIMATION
    var timeAnimation = 500;
    //GETTING WHERE THE QUOTE HAS TO BE PLACED ON THE PAGE
    var quote = $("#quote");
    //HIDING THE 'CLICK ME' TEXT
    $cover.fadeOut(500);
    //HIDING THE PARAGRAPH TEXT
    $paragraph.fadeOut(timeAnimation, function() {
    //GETTING THE HTML
    quote.html('');
    //APPENDING NEW QUOTE
    quote.append('<h1> <b>'+newQuotetext+'</h1> </b>');
    //SHOWING THE NEW QUOTE
    $paragraph.fadeIn(500);
    $paragraph.fadeIn(timeAnimation);
    colorMethod();
    // $("b").on("mouseover", colorMethod);
          });

         };

       });

   });
