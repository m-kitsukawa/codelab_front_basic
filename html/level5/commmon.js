$(document).ready(function() {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    slidesToShow: 3,
    prevArrow: '<div class="prev">PREV</div>',
    nextArrow: '<div class="next">NEXT</div>',

    responsive: [
      {
        breakpoint: 376, //ブレイクポイントを指定
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
