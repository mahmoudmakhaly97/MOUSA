// home logic 
$('.banner-carousel').owlCarousel({
    loop:true,
    margin:10,
    rtl:true,
    animateOut: 'fadeOut'
,
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
$(".programs-carousel").owlCarousel({
  loop: true,
  margin: 30,
  rtl: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ], // Replace navigation text with Font Awesome icons

  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    991: {
      items: 1,
    },
    1200: {
      items: 2,
    },
  },
});

$(".admission-carousel").owlCarousel({
  loop: true,
  margin: 30,
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
      items: 1,
    },
    1200: {
      items: 2,
    },
  },
});












$(".recent-carousel").owlCarousel({
  loop: true,
  margin: 30,
  rtl: true,
  autoplay: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ], // Replace navigation text with Font Awesome icons

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
    1200: {
      items: 3,
    },
  },
});
$(".meet-our-people-carousel").owlCarousel({
  loop: true,
  margin: 30,
  rtl: true,
  autoplay: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ], // Replace navigation text with Font Awesome icons

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
    1200: {
      items: 3,
    },
  },
});
$(".stories-carousel").owlCarousel({
  loop: true,
  margin: 30,
  rtl: true,
  autoplay: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ], // Replace navigation text with Font Awesome icons

  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    991: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
// career pag logic
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY >= 100) {
    navbar.classList.add("sticky-top");
    navbar.style.top = 0;
    navbar.style.background = " rgb(79 ,79 ,79,1)";
    navbar.classList.remove("bg-nav");
  } else {
    navbar.classList.remove("sticky-top");
    navbar.classList.add("bg-nav");
    navbar.style.top = "3rem";
      navbar.style.background = "transparent";
  }
});

//active link in navbar
   document.addEventListener("DOMContentLoaded", function () {
     // Get the current URL path
     const currentPath = window.location.pathname;

     // Define a list of objects with path fragments and their corresponding nav link IDs
     const navLinkMapping = [
       { path: "index-ar.html", id: "index-ar" },
       { path: "/about-ar.html", id: "about-ar" },
       { path: "/college-admin", id: "college-admin-link" },
       { path: "/our-program-ar.html", id: "our-program-ar" },
       { path: "/students", id: "students-link" },
       { path: "/graduates", id: "graduates-link" },
       { path: "/e-gate", id: "e-gate-link" },
     ];

     // Remove the "active" class from all nav links
     document.querySelectorAll(".nav-link").forEach((link) => {
       link.classList.remove("active");
     });

     // Check each mapping to see if the current path includes the defined path
     navLinkMapping.forEach((mapping) => {
       if (currentPath.includes(mapping.path)) {
         document.getElementById(mapping.id).classList.add("active");
       }
     });

     // Add click event listeners to nav links
     document.querySelectorAll(".nav-link").forEach((link) => {
       link.addEventListener("click", function () {
         // Remove the "active" class from all nav links
         document.querySelectorAll(".nav-link").forEach((link) => {
           link.classList.remove("active");
         });
         // Add the "active" class to the clicked link
         this.classList.add("active");
       });
     });
   });


window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  document.querySelector(".background-left").style.transform = `translateY(${
    scrollPosition * 0.4
  }px)`;
  document.querySelector(".background-right").style.transform = `translateY(${
    scrollPosition * -0.4
  }px)`;
});
// changeArrow
const arrows = document.querySelectorAll(".arrow-btn");
for (let i = 0; i < arrows.length; i++) {
  arrow[i].addEventListener("click", function () {
    if (arrows[i].style.transform == "rotate(180deg)") {
      arrows[i].style.transform = "rotate(0deg)";
    } else {
      arrows[i].style.transform = "rotate(180deg)";
    }
  });
}
// pagination logic
document.addEventListener('DOMContentLoaded', function() {
  const itemsPerPage = 3;  
  const eventItems = document.querySelectorAll('.event-item');
  const pageLinks = document.querySelectorAll('.page-link[data-page]');
  const container = document.querySelector('#available-events .row');
  const prevArrow = document.getElementById('previous-page');
  const nextArrow = document.getElementById('next-page');
  let currentPage = 1;  

  function clearContainer() {
      container.innerHTML = '';
  }

  function showPage(page) {
      clearContainer();  

      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
       for (let i = start; i < end; i++) {
          if (eventItems[i]) {
              eventItems[i].classList.add('active');
              container.appendChild(eventItems[i]);
          }
      }
  }

  function showAllItems() {
      clearContainer();
      eventItems.forEach(item => {
          item.classList.add('active');
          container.appendChild(item);
      });
  }

  pageLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const page = parseInt(this.getAttribute('data-page'));
          currentPage = page;
          showPage(page);
      });
  });

  nextArrow.addEventListener('click', function(e) {
      e.preventDefault();
      showAllItems();  
  });

  prevArrow.addEventListener('click', function(e) {
      e.preventDefault();
      currentPage = 1; 
      showPage(1);  
  });

 
  showPage(1);
});
