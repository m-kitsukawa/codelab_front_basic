$(".fa").on("click", function() {
  if ($('body').hasClass("active")) {
    $('body').removeClass("active");
    $(".fa").slideUp();
  } else {
    $('body').addClass("active");
    $(".fa").slideDown();
  }
});
$("#mask").on("click", function() {
  if ($('body').hasClass("active")) {
    $('body').removeClass("active");
    $("fa").slideUp();
  } else {
    $('body').addClass("active");
    $("fa").slideDown();
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