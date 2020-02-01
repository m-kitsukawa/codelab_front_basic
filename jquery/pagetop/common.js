$(function() {
  $("#pageTop").hide();
  $(window).scroll(function() {
    if ($(window).scrollTop() > 150) {
      $("#pageTop").fadeIn();
    } else {
      $("#pageTop").fadeOut();
    }
  });
});
