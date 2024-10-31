// college-staff-carousel logic 
$(".college-staff-carousel").owlCarousel({
  loop: true,
  margin: 100,
  rtl:true , 
    responsiveClass:true,  
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],

  nav: true,
 
  responsive: {
    0: {
      items: 1,
   
 
    },
    768: {
      items: 2,
    },
    991: {
      items: 3,
    },
   
  },
});
// news-events logic
  
  $(document).ready(function(){
            function initializeCarousel(selector) {
                var owl = $(selector);
                owl.owlCarousel({
                    loop: true,
                    margin: -50,
                    nav: false,
                  rtl: true,
                        navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"], // Replace navigation text with Font Awesome icons

                    responsive: {
                      0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
                    },
                    onInitialized: function(event) {
                        highlightCenterItem(event.target);
                    },
                    onTranslated: function(event) {
                        highlightCenterItem(event.target);
                    }
                });
            }

           function highlightCenterItem(carousel) {
        var $carousel = $(carousel);
        var activeItems = $carousel.find('.owl-item.active');
        var centerIndex = Math.floor(activeItems.length / 3); // Center index for active items
        $carousel.find('.owl-item').removeClass('center-item').css('z-index', 1); // Reset z-index
        activeItems.eq(centerIndex).addClass('center-item').css('z-index', 10); // Set high z-index for center item
    }

            // Initialize each carousel
            initializeCarousel('.news-events-carousel').eq(0);
            initializeCarousel('.news-events-carousel').eq(1);
                        initializeCarousel('.news-events-carousel').eq(2);


        });
//  enviroment carousel 
$(".environment-carousel").owlCarousel({
    rtl: true,
    items: 1.5,           // Display 1 full item and half of the next
  loop: true,
 
    margin: 10,
    stagePadding: 0  ,     // Set to 0 for no padding around
});
//  perfect-education-carousel
$(".perfect-education-carousel").owlCarousel({
      
    items: 1.5,          // Display 1 full item and half of the next
    margin: 10,          // Space between items
    loop: true,
   

});
// float icon logic

       
       window.addEventListener('scroll', function() {
            var whatsappIcon = document.querySelector('.whatsapp-icon');
            if (window.scrollY > window.innerHeight / 3 ) {
                whatsappIcon.style.display = 'block';
            } else {
                whatsappIcon.style.display = 'none';
            }
       });
        	// scrolled navbar 
var scrollWindow = function () {
  
    $(window).scroll(function () {
    var navbar = document.querySelector(".new-web-navbar");
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 80) {
				if ( !navbar.hasClass('scrolled') ) {
                    navbar.addClass('scrolled');	
                  
              //  document.getElementById("logo").src = "../images/home/navbar/colored-logo.svg";

				}
                
			} 
			if (st < 80) {
				if ( navbar.hasClass('scrolled') ) {
                    navbar.removeClass('scrolled sleep');
                                  //  document.getElementById("logo").src = "../images/home/navbar/logo.svg";

				}
			} 
			if ( st > 150 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 150 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
scrollWindow();
  
// counter js logic in home page 
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
    
  });
});