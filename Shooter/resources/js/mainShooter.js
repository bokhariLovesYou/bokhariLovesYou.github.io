$(document).ready(function() {

// MONSTER LEFT: 0 to 250

// Saving dom objects to variables

  var wrapper = $("#wrapper");
  var shuttle = $("#shuttle");
  var cloud_1 = $("#cloud_1");
  var cloud_2 = $("#cloud_2");
  var cloud_3 = $("#cloud_3");
  var cloud_4 = $("#cloud_4");
  var monster_1 = $("#monster_1");
  var monster_2 = $("#monster_2");
  var monster_3 = $("#monster_3");
  var monster_4 = $("#monster_4");
  var monster_5 = $("#monster_5");
  var fire = $("#fire");
  var score = $("#score");
  var speed = 10;

  // Saving some initial setup

  var wrapper_width = parseInt(wrapper.width());
  var wrapper_height = parseInt(wrapper.height());
  var wrapper_bottom = parseInt(wrapper.css("top"));
  wrapper_bottom = 600;
  var cloud_1_initial_position = parseInt(cloud_1.css("top"));
  var cloud_2_initial_position = parseInt(cloud_2.css("top"));
  var cloud_3_initial_position = parseInt(cloud_3.css("top"));
  var cloud_4_initial_position = parseInt(cloud_4.css("top"));
  var monster_1_initial_position = parseInt(monster_1.css("top"));
  var monster_2_initial_position = parseInt(monster_2.css("top"));
  var monster_3_initial_position = parseInt(monster_3.css("top"));
  var monster_4_initial_position = parseInt(monster_4.css("top"));
  var monster_5_initial_position = parseInt(monster_5.css("top"));
  var fire_initial_position = parseInt(fire.css("bottom"));
  var new_fire;


  var go_left = false;
  var go_right = false;
  var shoot = false;
  var shooted = false;
  var dead = false;
  var game_over = false;
  var score_updated = false;

  var the_game = setInterval(function() {

     if (parseInt(monster_3.css("top")) >= wrapper_height && !monster_3.hasClass("class_1") || (parseInt(monster_2.css("top")) >= wrapper_height && !monster_2.hasClass("class_1")) || (parseInt(monster_1.css("top")) >= wrapper_height && !monster_1.hasClass("class_1")) || (parseInt(monster_4.css("top")) >= wrapper_height && !monster_4.hasClass("class_1")) || (parseInt(monster_5.css("top")) >= wrapper_height && !monster_5.hasClass("class_1"))) {
      stop_the_game();
    } else {

    // Saving current position of clouds as variables
    var cloud_1_current_position = parseInt(cloud_1.css("top"));
    var cloud_2_current_position = parseInt(cloud_2.css("top"));
    var cloud_3_current_position = parseInt(cloud_3.css("top"));
    var cloud_4_current_position = parseInt(cloud_3.css("top"));
    var monster_1_current_position = parseInt(monster_1.css("top"));
    var monster_2_current_position = parseInt(monster_2.css("top"));
    var monster_3_current_position = parseInt(monster_3.css("top"));
    var monster_4_current_position = parseInt(monster_4.css("top"));
    var monster_5_current_position = parseInt(monster_5.css("top"));
    var monster_1_current_x_position = parseInt(monster_1.css("left"));
    var monster_2_current_x_position = parseInt(monster_2.css("left"));
    var monster_3_current_x_position = parseInt(monster_3.css("left"));
    var monster_4_current_x_position = parseInt(monster_4.css("left"));
    var monster_5_current_x_position = parseInt(monster_5.css("left"));


    // Repeating Clouds
    if (cloud_4_current_position > wrapper_height) {
      speed = speed+0.6;
      cloud_4_current_position = -100;
      cloud_3_current_position = -100;
    } else if (cloud_3_current_position > wrapper_height) {
      cloud_3_current_position = -50;
    } else if (cloud_2_current_position > wrapper_height) {
      cloud_2_current_position = -50;
    } else if (cloud_1_current_position > wrapper_height) {
      cloud_1_current_position = -50;
    }
    // Repeating Monsters
    if (monster_5_current_position > wrapper_height && dead == true) {
      var new_position = parseInt(Math.random() * 250);
      monster_5.css("left", new_position);
      monster_5.removeClass("class_1");
      monster_5_current_position = -300;
    } else if (monster_4_current_position > wrapper_height && dead == true) {
      var new_position = parseInt(Math.random() * 290);
      monster_4.css("left", new_position);
      monster_4.removeClass("class_1");
      monster_4_current_position = -300;
    } else if (monster_3_current_position > wrapper_height && dead == true) {
      var new_position = parseInt(Math.random() * 250);
      monster_3.css("left", new_position);
      monster_3.removeClass("class_1");
      monster_3_current_position = -300;
    } else if (monster_2_current_position > wrapper_height && dead == true) {
      var new_position = parseInt(Math.random() * 250);
      monster_2.css("left", new_position);
      monster_2_current_position = -300;
    } else if (monster_1_current_position > wrapper_height && dead == true) {
      var new_position = parseInt(Math.random() * 100);
      monster_1.css("left", new_position);
      monster_1_current_position = -300;
    }

    // Moving position of clouds at the Y axis
    cloud_1.css("top", cloud_1_current_position + speed);
    cloud_2.css("top", cloud_2_current_position + speed);
    cloud_3.css("top", cloud_3_current_position + speed);
    cloud_4.css("top", cloud_4_current_position + speed);
    // Moving position of monsters at the Y axis
    monster_1.css("top", monster_1_current_position + speed);
    monster_2.css("top", monster_2_current_position + speed);
    monster_3.css("top", monster_3_current_position + speed);
    monster_4.css("top", monster_4_current_position + speed);
    monster_5.css("top", monster_5_current_position + speed);

        if (collision(monster_1, new_fire) || collision(monster_1, fire)) {
      monster_1.addClass("class_1");
      $("#fire").addClass("none");
      dead = true;
       score.text(parseInt(score.text()) + 1);
    } else if (collision(monster_2, new_fire) || collision(monster_2, fire)) {
      monster_2.addClass("class_1");
      $("#fire").addClass("none");
      dead = true;
       score.text(parseInt(score.text()) + 1);
    } else if (collision(monster_3, new_fire) || collision(monster_3, fire) || shoot === false) {
      monster_3.addClass("class_1");
      $("#fire").addClass("none");
      dead = true;
       score.text(parseInt(score.text()) + 1);
    } else if (collision(monster_4, new_fire) || collision(monster_4, fire)) {
      monster_4.addClass("class_1");
      $("#fire").addClass("none");
      dead = true;
       score.text(parseInt(score.text()) + 1);
    } else if(collision(monster_5, new_fire) || collision(monster_5, fire) || shoot === false) {
      monster_5.addClass("class_1");
      $("#fire").addClass("none");
      dead = true;
       score.text(parseInt(score.text()) + 1);
      }
    }
  }, 30);


  // Pressing left key to move shuttle left
  $(document).on("keydown", function(e) {
    var key = e.keyCode;
    if(key === 37 && go_left === false) {
      go_left = setInterval(left, 20);
    }
  });

  // Leaving key
  $(document).on("keyup", function(e) {
    var key = e.keyCode;
    if(key === 37) {
      clearInterval(go_left);
      go_left = false;
    }
  });

  // Pressing right key to move shuttle right
  $(document).on("keydown", function(e) {
    var key = e.keyCode;
    if(key === 39 && go_right === false) {
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




  // Firing from spacebar
  $(document).on("keydown", function(e) {
    // creating e.keyCode
    var key = e.keyCode;
    // if statement
    if(key === 32 && shoot === false && shooted === false) {
      // shoot with function (top) <-- Ball goes up
      shoot = setInterval(top, 5);
      // variable shooted gets true
      shooted = true;
      // then
    } else if (key === 32 && shooted === true) {
      //  variable new_fire = first fire
      new_fire = $(".fire");
      $("#fire").removeClass("none");
      // defining shuttle's current position
      shuttle_current_position = parseInt(shuttle.css("left"));
      // setting ball's X current position to shuttle's position + 25
      new_fire_current_position = new_fire.css("left", shuttle_current_position + 25);
      // setting ball's Y position to 110px;
      new_fire_current_x_position = new_fire.css("bottom", 110);
      new_fire_position = parseInt($(".fire").css("bottom"));
      shoot = setInterval(new_top, 5);
      }
  })

  $(document).on("keyup", function(e) {
    var key = e.keyCode;
    if(key === 32 && shooted === true) {
      fire.css("background-color", "orange");
      fire.css("border", "3px dotted white");
      shooted = true;
      clearInterval(new_top);
      new_top = false;
    }



  });

  // Function for left arrow
  function left() {
    shuttle.css('left', parseInt(shuttle.css('left')) - 5);
      if (shoot === false && shooted === false) {
    fire.css('left', parseInt(fire.css('left')) - 5);
    } if (shooted === false) {
    new_fire.css('left', parseInt(new_fire.css('left')) - 5);
    }
  }

  // Function for right arrow
  function right() {
    shuttle.css('left', parseInt(shuttle.css('left')) + 5);
     if (shoot === false && shooted === false) {
    fire.css('left', parseInt(fire.css('left')) + 5);
    } if (shooted === false) {
    new_fire.css('left', parseInt(new_fire.css('left')) + 5);
    }
  }

  // Function for shoot
  function top() {
    fire.css("opacity", "1");
    fire.css('bottom', parseInt(fire.css('bottom')) + 5);
      if (shooted === true) {
        all_fires.css('bottom', parseInt(all_fires.css('bottom')) + 5);
        new_fire.css('bottom', parseInt(new_fire.css('bottom')) + 5);
        fire.css('bottom', parseInt(fire.css('bottom')) + 5);
      }
  }

  $(document).on("keydown", function(e) {
    var key = e.keyCode;
    if(key === 13 && game_over === true) {
      location.reload();
    }
  });

  function stop_the_game() {
    clearInterval(the_game);
    game_over = true;
    $("#restart_div").show();
    $("#restart_div").css("opacity", "0.9");
    $("#restart").show();
  }

  $("#restart").click(function() {
    location.reload();
  });


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

        if (b1 <= y2 || y1 >= b2 || r1 <= x2 || x1 >= r2) return false;
        return true;
    }

});

