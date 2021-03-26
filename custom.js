$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

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


jQuery(Document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

  