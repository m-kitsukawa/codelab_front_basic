$(function(){
  $('#accordion dt').on('click',function(){
    // $(this).toggleClass('open');
    $(this).next('#accordion dd').slideToggle();
    $('#accordion dt').not($(this)).next('#accordion dd').slideUp();
  });
});