$(".fa fa-bars").on("click", function() {
  if ($('body').hasClass("active")) {
    $('body').removeClass("active");
    $(".fa fa-times").slideUp();
  } else {
    $('body').addClass("active");
    $(".fa fa-times").slideDown();
  }
});
// console.log('common js');
// console.log($('.fa'));
// $('.fa').on("click", function() {
//   // debugger;
//   //clickしたとき
//   console.log('clik');
//   //bodyタグにあくてぃぶくらすをつける
//   $('body').addClass('active');
//   console.log('active add');
// });