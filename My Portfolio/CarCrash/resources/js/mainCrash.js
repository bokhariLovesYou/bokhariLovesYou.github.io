$(document).ready(function() {

// saving dom objects to variables

 var wrapper = $("#wrapper");
 var car = $("#car");
 var car_1 = $("#car-1");
 var car_2 = $("#car-2");
 var car_3 = $("#car-3");
 var line_1 = $("#line-1");
 var line_2 = $("#line-2");
 var line_3 = $("#line-3");
 var restart_div = $("#restart-div");
 var restart_btn = $("#restart");
 var score = $("#score");
 var speed = 10;

 // saving some initial setup

  var wrapper_width = parseInt(wrapper.width());
  var wrapper_height = parseInt(wrapper.height());
  var wrapper_bottom = parseInt(wrapper.css("bottom"));
  var line_1_initial_position = parseInt(line_1.css("top"));
  var line_2_initial_position = parseInt(line_2.css("top"));
  var line_3_initial_position = parseInt(line_3.css("top"));
  var car_1_initial_position = parseInt(car_1.css("top"));
  var car_2_initial_position = parseInt(car_2.css("top"));
  var car_3_initial_position = parseInt(car_3.css("top"));
  var car_1_initial_x_position = parseInt(car_1.css("left"));
  var car_2_initial_x_position = parseInt(car_2.css("left"));
  var car_3_initial_x_position = parseInt(car_3.css("left"));

  var go_left = false;
  var go_right = false;
  var go_up = false;
  var go_down = false;
  var game_over = false;
  var score_updated = false;


// 1.) Move the road [ move the lines through timer ];
// 2.) Move Opponent Cars with lines
//  2.1) Create Random Number of position of 3 cars
// 3.) Control YOUR car.
//  3.1) left arrow push css left by 5px

var the_game = setInterval(function() {

  if (collision(car, car_1) || collision(car, car_2) || collision(car, car_3)) {
   stop_the_game();
  } else {

  // 1.1 Creating variables for current position of lines and cars
  var line_1_current_position = parseInt(line_1.css("top"));
  var line_2_current_position = parseInt(line_2.css("top"));
  var line_3_current_position = parseInt(line_3.css("top"));
  var car_1_current_position = parseInt(car_1.css("top"));
  var car_2_current_position = parseInt(car_2.css("top"));
  var car_3_current_position = parseInt(car_3.css("top"));
  var car_current_position = parseInt(car.css("left"));


  // 1.1 If 3rd line reaches the bottom of wrapper
  if (line_3_current_position > wrapper_height) {
    // Increase speed
    speed = speed+0.4;
    //  position 3rd line -300
    line_3_current_position = -300;
  }  else if (line_2_current_position > wrapper_height) {
    // position 2nd line -300
    line_2_current_position = -300;
    // position 1st line -300
  } else if (line_1_current_position > wrapper_height) {
    line_1_current_position = -300;
  }

  // 2.1 If Car1 passes the wrapper
  if (car_1_current_position > wrapper_height) {
    var new_position = parseInt(Math.random() * 250);
    var new_color = '#' + (function co(lor){   return (lor +=
    [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
    && (lor.length == 6) ?  lor : co(lor); })('');
    // change the car's position at X axis [120 - 370]
    car_1.css("left", new_position);
    car_1.css("background-color", new_color);
    // Repeat cars
    car_1_current_position = -300;
  } else if (car_2_current_position > wrapper_height) {
    var new_position = parseInt(Math.random() * 350);
    var new_color = '#' + (function co(lor){   return (lor +=
    [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
    && (lor.length == 6) ?  lor : co(lor); })('');
    // change the car's position at X axis
    car_2.css("left", new_position);
    car_2.css("background-color", new_color);
      // increment score
      score.text(parseInt(score.text()) + 1);
    // Repeat cars
    car_2_current_position = -300;
  } else if (car_3_current_position > wrapper_height) {
    var new_position = parseInt(Math.random() * 450);
    var new_color = '#' + (function co(lor){   return (lor +=
    [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
    && (lor.length == 6) ?  lor : co(lor); })('');
    // change the car's position at X axis
    car_3.css("left", new_position);
    car_3.css("background-color", new_color);
    // Repeat cars
    car_3_current_position = -300;
  }

  // Move position of lines and cars
  line_1.css("top", line_1_current_position + speed);
  line_2.css("top", line_2_current_position + speed);
  line_3.css("top", line_3_current_position + speed);
  car_1.css("top", car_1_current_position + speed);
  car_2.css("top", car_2_current_position + speed);
  car_3.css("top", car_3_current_position + speed);

  if (go_left === false) {
    leave();
  }
 }
}, 20);

// Pressing left key to move car left

$(document).on("keydown", function(e) {
  var key = e.keyCode;
  if(key === 37 && go_left === false && game_over === false) {
    go_left = setInterval(left, 20);
  }
});

// leaving key
$(document).on("keyup", function(e){
  var key = e.keyCode;
  if(key === 37) {
    clearInterval(go_left);
    go_left = false;
  }
});

// Pressing right key to move car right
$(document).on("keydown", function(e) {
  var key = e.keyCode;
  if(key === 39 && go_right === false && game_over === false) {
    go_right = setInterval(right, 20);
  }
});

// Leaving key

$(document).on("keyup", function(e) {
  var key = e.keyCode;
  if(key === 39) {
    clearInterval(go_right);
    go_right = false;
  }
});

  // Pressing up key to move car up
$(document).on("keydown", function(e) {
  var key = e.keyCode;
  if(key === 38 && go_up === false && game_over === false) {
    go_up = setInterval(top, 30);
  }
});

  // leaving key

$(document).on("keyup", function(e) {
  var key = e.keyCode;
  if(key === 38) {
    clearInterval(go_up);
    go_up = false;
  }
});

  // Pressing down key to move car down
$(document).on("keydown", function(e) {
  var key = e.keyCode;
  if(key === 40 && go_down === false && game_over === false) {
    go_down = setInterval(bottom, 20);
  }
});

  // leaving key
$(document).on("keyup", function(e) {
  var key =e.keyCode;
  if(key === 40) {
    clearInterval(go_down);
    go_down = false;
  }
});

// Restart from pressing Enter Key
$(document).on("keydown", function(e){
  var key = e.keyCode;
  if(key === 13 && game_over === true) {
    location.reload();
  }
});

function stop_the_game() {
  clearInterval(the_game);
  game_over = true;
  restart_div.show();
  restart_div.css("opacity", "0.9");
  restart_btn.show();
}

restart_btn.click(function() {
  location.reload();
});

function left() {
  car.css('left', parseInt(car.css('left')) - 5);
}

function leave() {
  car.css("left", car_current_position);
}

function right() {
  car.css('left', parseInt(car.css('left')) + 5);
}

function top() {
  car.css('top', parseInt(car.css('top')) - 5);
}

function bottom() {
  car.css('top', parseInt(car.css('top')) + 5);
}


    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }


});
