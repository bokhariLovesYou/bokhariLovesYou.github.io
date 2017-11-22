// placeholder variable
var $infoNeeded = $("#infoNeeded")
// submit button variable
var $button = $("#submit");
// some background styles [not used currently]
var outputBackground = function() {
    $(this).addClass('card card-info card-block pb-1 input-group');
}

//Function which styles and modifies dom with a click
var $myFunction = $('<div class="container"> <div class="input-group" id="output"><span class="card card-info card-block"><ul></ul></span><button type="button" id="done" class="btn btn-success">Done</button><button type="button" id="delete" class="btn btn-danger">Delete</button></div></div><br>');

//Document loaded
$(document).ready(function() {
  //execute this function when the submit button is clicked
  $button.click(function() {
    $myFunction;
    //getting the value from the placeholder
    var guestInfo = $("#infoNeeded").val();
    //getting the length of the words in the placeholder
    var infoLength = guestInfo.length;
    //only execute the function if length is > 0
    if (infoLength > 0) {
      //append to the dom the $myFunction function [It has the designs of the list]
             // ++ Append the value from the placeholder to the dom
        $("#outputTwo").append('<div class="container"> <div class="input-group" id="output"><span class="card card-info card-block"><ul></ul><h3> <li>' + guestInfo + '</h3> </li></span><button type="button" id="done" class="btn btn-success done">Done</button><button type="button" id="delete" class="btn btn-danger delete">Delete</button></div></div><br>');
        //clear the placeholder
        $infoNeeded.val('');
    //closing IF bracket
    }
   //closing button.click() function
  });

    $("body").on("click", "#delete", function() {
      $(this).parent('#output').remove();
      $(this).remove();
    });

    $("body").on("click", "#done", function() {
      $(this).parent("#output").css("text-decoration", "line-through");
      // $(this).css("text-decoration", "line-through");

    });
  // prevents browser's default action
  // e.preventDefault();
  //closing document.ready function
});


