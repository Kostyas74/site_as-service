$('.comm_prev').click(function() {
  $width = $("#comment_carousel").width();
  $max = "-=" + $width + "px";
  event.preventDefault();
  $('#comment_carousel').animate({
    scrollLeft: $max
  }, "slow");
});

 $('.comm_next').click(function() {
  $width = $("#comment_carousel").width();
  $max = "+=" + $width + "px";
  event.preventDefault();
  $('#comment_carousel').animate({
    scrollLeft: $max
  }, "slow");
});

 $('.rec_prev').click(function() {
  $width = $("#recommend_carousl").width();
  $max = "-=" + $width + "px";
  event.preventDefault();
  $('#recommend_carousl').animate({
    scrollLeft: $max
  }, "slow");
});

 $('.rec_next').click(function() {
  $width = $("#recommend_carousl").width();
  $max = "+=" + $width + "px";
  event.preventDefault();
  $('#recommend_carousl').animate({
    scrollLeft: $max
  }, "slow");
});
  $('.main_prev').click(function() {
  $width = $("#main_carousl").width();
  $max = "-=" + $width + "px";
  event.preventDefault();
  $('#main_carousl').animate({
    scrollLeft: $max
  }, "slow");
});

 $('.main_next').click(function() {
  $width = $("#main_carousl").width();
  $max = "+=" + $width + "px";
  event.preventDefault();
  $('#main_carousl').animate({
    scrollLeft: $max
  }, "slow");
});