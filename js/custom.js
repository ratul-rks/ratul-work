$(function(){

  var mixer = mixitup('.work_all_item');
  //banner slick part
    $('.banner_slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: ".banner_prev",
        nextArrow: ".banner_next",
      });

      // back to top part
      $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 50){
          $(".back_to_top").fadeIn(500)
        }else{
          $(".back_to_top").fadeOut(500)
        }
        if(scrolling > 100){
          $(".main_menu").addClass("nav_menu_bg")
        }else{
          $(".main_menu").removeClass("nav_menu_bg")
        }
      });

      $(".back_to_top").click(function(){
        $('html,body').animate({
          scrollTop:0
        }, 500)
      });
        
      //light box
      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      });

      $('.test_slide_all').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: false,
        nextArrow: false,
        dots: true,
      });
      

   
});