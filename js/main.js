// home logic 
$('.banner-carousel').owlCarousel({
    loop:true,
    margin:10,
    rtl:true,
    navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"], // Replace navigation text with Font Awesome icons

    nav:true,
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
$('.programs-carousel').owlCarousel({
    loop:true,
    margin:10,
    rtl:true,
    navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"], // Replace navigation text with Font Awesome icons

    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        991:{
            items:1
        } ,
        1200:{
            items:2
        } 
    }
})
// career pag logic 
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY >= 100) {
        navbar.classList.add("fixed-top");
        navbar.classList.remove("bg-nav");
        

    } else {
        navbar.classList.remove("fixed-top");
        navbar.classList.add("bg-nav");

    }
});
