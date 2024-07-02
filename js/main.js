// home logic 
$('.banner-carousel').owlCarousel({
    loop:true,
    margin:10,
    rtl:true,
    animateOut: 'fadeOut',
    autoplay:true,

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
// active link in navbar ..................................................
   document.addEventListener("DOMContentLoaded", function () {
     const navLinks = document.querySelectorAll(".nav-link");

     const currentUrl = window.location.href;

     navLinks.forEach((link) => {
       if (link.href === currentUrl) {
         link.classList.add("active");

         if (link.closest(".nav-dropdown")) {
           link
             .closest(".nav-item")
             .querySelector(".nav-link")
             .classList.add("active");
         }
       }
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
//upcoming events   pagination logic
document.addEventListener("DOMContentLoaded", function () {
  const itemsPerPage = 3;
  const eventItems = document.querySelectorAll(".event-item");
  const pageLinks = document.querySelectorAll(".page-link[data-page]");
  const container = document.querySelector("#available-events .row");
  const prevArrow = document.getElementById("previous-page");
  const nextArrow = document.getElementById("next-page");
  let currentPage = 1;

  function clearContainer() {
    container.innerHTML = "";
  }

  function showPage(page) {
    clearContainer();

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    for (let i = start; i < end; i++) {
      if (eventItems[i]) {
        eventItems[i].classList.add("active");
        container.appendChild(eventItems[i]);
      }
    }
  }

  function showAllItems() {
    clearContainer();
    eventItems.forEach((item) => {
      item.classList.add("active");
      container.appendChild(item);
    });
  }

  pageLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const page = parseInt(this.getAttribute("data-page"));
      currentPage = page;
      showPage(page);
    });
  });

  nextArrow?.addEventListener("click", function (e) {
    e.preventDefault();
    showAllItems();
  });

  prevArrow?.addEventListener("click", function (e) {
    e.preventDefault();
    currentPage = 1;
    showPage(1);
  });

  showPage(1);
});

// adminstrative pagination logic

  document.addEventListener('DOMContentLoaded', function () {
    const cardsPerPage = 9; // Number of cards per page
    let currentPage = 1;    // Current page number
    const cards = document.querySelectorAll('.card');
    const totalPages = Math.ceil(cards.length / cardsPerPage); // Calculate total pages

    function showPage(page) {
      cards.forEach((card, index) => {
        if (index >= (page - 1) * cardsPerPage && index < page * cardsPerPage) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }

    function generatePagination() {
      const paginationContainer = document.querySelector('.pagination');
      paginationContainer.innerHTML = ''; // Clear existing pagination

      // Previous page button
      paginationContainer.insertAdjacentHTML('beforeend', `
        <li class="page-item">
          <a class="page-link" href="#" id="previous-page" aria-label="Previous">
            <i class="fa-solid fa-chevron-right fa-xs"></i>
          </a>
        </li>
      `);

      // Page number buttons
      for (let i = 1; i <= totalPages; i++) {
        paginationContainer.insertAdjacentHTML('beforeend', `
          <li class="page-item mx-1">
            <a class="page-link" href="#" data-page="${i}">${i}</a>
          </li>
        `);
      }

      // Next page button
      paginationContainer.insertAdjacentHTML('beforeend', `
        <li class="page-item">
          <a class="page-link" href="#" id="next-page" aria-label="Next">
            <i class="fa-solid fa-chevron-left fa-xs"></i>
          </a>
        </li>
      `);

      // Add event listeners to pagination links
      document.querySelectorAll('.pagination .page-link').forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          const page = this.getAttribute('data-page');
          if (page) {
            currentPage = parseInt(page);
          } else {
            if (this.id === 'previous-page' && currentPage > 1) {
              currentPage--;
            }
            if (this.id === 'next-page' && currentPage < totalPages) {
              currentPage++;
            }
          }
          showPage(currentPage);
          setActivePage(currentPage);
        });
      });
    }

    function setActivePage(page) {
      document.querySelectorAll('.pagination .page-item').forEach(item => {
        item.classList.remove('active');
      });
      document.querySelector(`.pagination .page-item a[data-page="${page}"]`).parentElement.classList.add('active');
    }

    // Initialize pagination
    generatePagination();

    // Initialize the first page
    showPage(currentPage);
    setActivePage(currentPage);
  });
