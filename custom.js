const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function(){

    $("html, body").animate({scrollTop: 0 }, "slow");

});

$(document).ready(function(){
    $('.customCard').on('mouseenter', function(e){
        x=e.pageX - $(this).offset().left,
        y=e.pageY - $(this).offset().top;
        $(this).find('span').css({top:y, left:x})
    })
    $('.customCard').on('mouseout', function(e){
        x=e.pageX - $(this).offset().left,
        y=e.pageY - $(this).offset().top;
        $(this).find('span').css({top:y, left:x})
    })
})

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbg");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });


  
