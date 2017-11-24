var $plus = $("#plus");
var $subtract = $("#subtract");
var $count = $("#count");
var num = 0;
var $reset = $("#reset")


$("#plus").click(function() {
$count.html(function(i, val) {
return val*1+1
});
});

$("#subtract").click(function() {
$count.html(function(i, val) {
return val*1-1
});
});

$($reset).click(function() {
$count.html(function(i, val) {
return val*0

});
});
