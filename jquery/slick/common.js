$(document).ready(function() {
  $('#slider').slick({
    // ここにオプションを追記する
     centerPadding: '30%',
     focusOnSelect: true,
     speed: 1000,
    //  waitForAnimate: false,
     autoplay: true,
     autoplaySpeed: 5000,
     dots: true
   });
});