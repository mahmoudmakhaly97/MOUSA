$(".college-staff-carousel").owlCarousel({
  loop: true,
  margin: 10,
  rtl: true,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  nav: true,
  responsiveClass: true,
  responsive: {
    0: { 
      items: 1,
      dots: false  
    },
    768: { 
      items: 2,
      dots: false   
    },
    991: { 
      items: 3, 
    }
  }
});


// acheivements-carousel logic 
$(".acheivments-carousel").owlCarousel({
  loop: true,
  margin: 20,
  rtl: true, 
 
    responsiveClass:true,  
 

  nav: true,
 
 
   responsive: {
        0: { items: 1 , dots:false },
     768: { items: 2 },
        991:{items: 2} ,
        1200: { items: 4 }
  }, 
               navText: ["<i class='fas fa-chevron-right'></i>" ,"<i class='fas fa-chevron-left'></i>"]

});
 

// our-new-programs-carousel  logic 
$(".our-new-programs-carousel").owlCarousel({
  loop: true,
  margin: 30,
  rtl: true, 
      animateOut: 'fadeOut', // Use fadeOut animation
    animateIn: 'fadeIn',   // Use fadeIn animation
    responsiveClass:true,  
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],

  nav: true,
 dots:false , 
   responsive: {
        0: { items: 1 },
 
        991: { items: 2 }
    }
});
// news-events logic
 $(document).ready(function(){
    function initializeCarousel(selector) {
        var owl = $(selector);
        owl.owlCarousel({
            loop: true,
            margin: -5,
            nav: false,
            rtl: true,
            navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
            responsive: {
                0: { items: 1, margin:0 },
                600: { items: 1 },
                1000: { items: 3 }
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
        var centerIndex = Math.floor(activeItems.length / 3);
        
        $carousel.find('.owl-item').removeClass('center-item').css('z-index', 1)
         .removeAttr('data-aos'); // Remove AOS from all

        var $centerItem = activeItems.eq(centerIndex);
        $centerItem.addClass('center-item').css('z-index', 10)
          //  .attr({
          //       'data-aos': 'fade-up',
          //       'data-aos-delay': '300'
          //   }); // Add AOS to centered item only

        AOS.refresh(); // Refresh AOS for new centered item
    }

    // Initialize the carousel
    initializeCarousel('.news-events-carousel');
});

//  enviroment carousel 
$(".environment-carousel").each(function() {
 
  const isArrowV2 = $(this).hasClass("arrow-v2");

  $(this).owlCarousel({
    rtl: true,
    items: 1.45,  // Display 1 full item and half of the next
    loop: true,
    nav: true,
    navText: isArrowV2 
      ? ["<svg  class='arrow-right-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 25'><path style='fill:#232326' d='M14 1v1h8.293L1 23.293l.707.707L23 2.707V11h1V1H14z' data-name='Kanan Atas'/></svg>" ,    "<svg  class='arrow-left-icon'  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 25'><path style='fill:#232326' d='M14 1v1h8.293L1 23.293l.707.707L23 2.707V11h1V1H14z' data-name='Kanan Atas'/></svg>" ]
   
      : ["<i  class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"], // Default

    margin: 12,
    stagePadding: 0,  // No padding around items
  });
});

//  perfect-education-carousel
$(".perfect-education-carousel").each(function() {
 
  const isArrowV2 = $(this).hasClass("arrow-v2");

  $(this).owlCarousel({
    items: 1.45,  // Display 1 full item and half of the next
    loop: true,
    nav: true,
    navText: isArrowV2 
      ? ["<svg  class='arrow-right-icon perfect' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 25'><path style='fill:#232326' d='M14 1v1h8.293L1 23.293l.707.707L23 2.707V11h1V1H14z' data-name='Kanan Atas'/></svg>" ,    "<svg  class='arrow-left-icon perfect'  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 25'><path style='fill:#232326' d='M14 1v1h8.293L1 23.293l.707.707L23 2.707V11h1V1H14z' data-name='Kanan Atas'/></svg>" ]
   
      : ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"], // Default

    margin: 12,
    stagePadding: 0,  // No padding around items
  });
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
        console.log("st" ,st);
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
			if ( st > 80 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 105 ) {
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