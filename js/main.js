$(document).ready(function(){

	// menu fixed function
	$(window).scroll(function(){
		if($(this).scrollTop() > 40)
		{
			$('#menu').addClass("fixed");
		}else{
			$('#menu').removeClass("fixed");
		}
	});

  // scroll top function
	$("#s_top").click(function(){
    	$("html,body").animate({scrollTop:0},1000);
	  });


// wow js
	new WOW().init();

//contner up 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
      });

 // pageloader
	$(window).on('load', function() { // makes sure the whole site is loaded 
		$('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(350).css({'overflow':'visible'});
	});

	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });

 //alert("help");


});











