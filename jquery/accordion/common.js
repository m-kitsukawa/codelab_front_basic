$(function(){
  $('#accordion dt').click(function(){
      $(this).toggleClass('.open');
    $(this).next('#accordion dd').slideToggle();
    $('#accordion dt').not($(this)).next('#accordion dd').slideUp();
  });
});