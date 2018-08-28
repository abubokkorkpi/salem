$(document).ready(function(){
  
   $(".nav_icon img").click(function(){
   	$(".main_menu").slideToggle();
   	$(".nav_icon img").hide();
   });
   $(".close_menu i").click(function(){
   	$(".main_menu").slideToggle();
	$(".nav_icon img").show();
   });

   $(".main_menu ul li a").click(function(){
     $(".main_menu").hide();
	 $(".nav_icon img").show();
   });

   $('.counter').counterUp({
		delay: 10,
		time: 2000
	});


   $( "#accordion" ).accordion({
      collapsible: true
    });

   $('#portfolio_main').mixItUp();

   $( "#main_price_tab" ).tabs({
      collapsible: false
    });

   $("#header_top").sticky({ topSpacing: 0 });


    $('.main_nav ul li a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname ==                         this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
        }
      }
    });
	
	wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
        )
      wow.init();


     

});

$(window).load(function() { // makes sure the whole site is loaded
	$('#preloader').fadeOut(); // will first fade out the loading animation
	$('.preloader_img').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$("body").removeClass("preloader_active");
})