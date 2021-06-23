$(document).ready(function($) {
	"use strict";

  //OwlCarousel
	$("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      navigation : true
 
  });

  

  //Sticky-Header	
	 $(window).on('scroll',function(){
	  var sticky = $('#navigation'),
	      scroll = $(window).scrollTop();

	  if (scroll >= 150) sticky.addClass('navbar-fixed');
	  else sticky.removeClass('navbar-fixed');
	});

  // Back-to-top
    var btt = $('.back-to-top');

    btt.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    $(window).on('scroll',function() {
        var self = $(this),
        height = self.height(),
        top = self.scrollTop();

        if (top > height) {
            if (!btt.is(':visible')) {
                btt.show();
            }
        }   else {
                btt.hide();
            }
    });

    //Data-Filter
    $(".filter-button").on('click',function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
          $(this).removeClass("active");
            }
        $(this).addClass("active");


    //Btn-Focus
    $("#btn-one").focus();

    

    //Initiat WOW JS
        new WOW().init();

});