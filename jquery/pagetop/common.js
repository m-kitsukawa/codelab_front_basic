$(function() {
  $("#pagetop").hide();
  $(window).scroll(function() {
    if ($(window).scrollTop() > 150) {
      $("#pagetop").slideDown(600);
    } else {
      $("#pagetop").slideUp(600);
    }
  });
});
