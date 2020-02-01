$(function(){
  $('#accordion dt').click(function(){
    $("#accordion").children("dt")[0].click();
    // $('#accordion dt').on('click',function(){
      // $(this).toggleClass('open');
    $(this).next('#accordion dd').slideToggle();
    $('#accordion dt').not($(this)).next('#accordion dd').slideUp();
  });
});