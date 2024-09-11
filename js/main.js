
function setLanguage(lang) {
    document.documentElement.lang = lang;

    if (lang === 'en-US') {
        document.documentElement.dir = 'ltr';
    } 

    // save the selected language
    localStorage.setItem('selectedLanguage', lang);

    // load the content for the selected language
    loadContent(lang);
}

function loadContent(lang) {
    fetch(`/api/content?lang=${lang}`)
        .then(response => response.json())
        .then(data => {
            // update your content areas with the fetched data
            document.getElementById('content').innerHTML = data.content;
        })
        .catch(error => console.error('Error fetching content:', error));
}

// on page load, check for a saved language preference and load the content
window.onload = function() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ar';
    setLanguage(savedLanguage);
};
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
// counter js logic in home page 
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
//events & news  pagination logic

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
    updateActivePageLink(page);
  }
 

  function updateActivePageLink(page) {
    pageLinks.forEach((link) => {
      const pageNumber = parseInt(link.getAttribute("data-page"));
      if (pageNumber === page) {
        link.classList.add("active");
        link.style.backgroundColor = "#5e9242"; // Add background color
      } else {
        link.classList.remove("active");
        link.style.backgroundColor = ""; // Remove background color
      }
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
    // Increment the current page and ensure it does not exceed the total number of pages
    const totalPages = Math.ceil(eventItems.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  prevArrow?.addEventListener("click", function (e) {
    e.preventDefault();
    // Decrement the current page and ensure it does not go below 1
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });

  // Set the active page on initial load
  function setActivePage(page) {
    document.querySelectorAll('.pagination .page-item').forEach(item => {
      item.classList.remove('active-pagination');
    });
    document.querySelector(`.pagination .page-item a[data-page="${page}"]`).style.backgroundColor = '#5e9242';
        document.querySelector(`.pagination .page-item a[data-page="${page}"]`).style.color = '#555';
  }

  showPage(currentPage);
  setActivePage(currentPage);
});




// events & news logic(our news section )
let newsImgTitleNumber = document.querySelector(".newsImgTitleNumber"); 
let newsImgTitleMonth = document.querySelector(".newsImgTitleMonth");
let newsImgTitleDay = document.querySelector(".newsImgTitleDay");
let newsImgDesc = document.querySelector(".newsImgDesc");
let newsImg = document.querySelector(".newsImg");
let newsInfoContainers = document.querySelectorAll(".news-info-container");
newsInfoContainers.forEach((container) => {
  container.addEventListener("click", function () {
    newsImgTitleNumber.textContent= container.querySelector(".newsInfoNumber").textContent 
    newsImgTitleMonth.textContent = container.querySelector(".newsInfoMonth").textContent;
    newsImgTitleDay.textContent = container.querySelector(".newsInfoDay").textContent;
    newsImgDesc.textContent = container.querySelector(".newsInfoDesc").textContent;
    newsImg.src = container.querySelector(".infoImg").src;
    })
})
// student tour logic 
  $(document).ready(function(){
            function initializeCarousel(selector) {
                var owl = $(selector);
                owl.owlCarousel({
                    loop: false,
                    margin: 10,
                    nav: true,
                  rtl: false,
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
                var centerIndex = Math.floor($carousel.find('.owl-item.active').length / 2);
                $carousel.find('.owl-item').removeClass('center-item');
                $carousel.find('.owl-item.active').eq(centerIndex).addClass('center-item');
            }

            // Initialize each carousel
            initializeCarousel('.student-tour-carousel').eq(0);
            initializeCarousel('.student-tour-carousel').eq(1);
                        initializeCarousel('.student-tour-carousel').eq(2);
 initializeCarousel('.student-tour-carousel').eq(3);

        });
 
 
    // adminstraive pagination
 document.addEventListener('DOMContentLoaded', function () {
  const cardsPerPage = 9; // Number of cards per page
  let currentPage = 1;    // Current page number
  const cards = Array.from(document.querySelectorAll('.adminstrative-card'));

  function updateTotalPages() {
    const visibleCards = cards.filter(card => card.parentElement.style.display !== 'none');
    return Math.max(1, Math.ceil(visibleCards.length / cardsPerPage));
  }

  function showPage(page) {
    const visibleCards = cards.filter(card => card.parentElement.style.display !== 'none');
    visibleCards.forEach((card, index) => {
      if (index >= (page - 1) * cardsPerPage && index < page * cardsPerPage) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  function generatePagination() {
    const paginationContainer = document.querySelector('.admistrative-pagination');
    paginationContainer.innerHTML = ''; // Clear existing pagination

    const totalPages = updateTotalPages(); // Update total pages

    // Previous page button
    paginationContainer.insertAdjacentHTML('beforeend', 
      `<li class="page-item ms-1">
        <a class="page-link" href="#" id="previous-page" aria-label="Previous">
          <i class="fa-solid fa-chevron-right fa-xs"></i>
        </a>
      </li>`
    );

    // Page number buttons
    if (totalPages > 1) {
      for (let i = 1; i <= totalPages; i++) {
        paginationContainer.insertAdjacentHTML('beforeend', 
          `<li class="page-item ms-1">
            <a class="page-link" href="#" data-page="${i}">${i}</a>
          </li>`
        );
      }
    }

    // Next page button
    paginationContainer.insertAdjacentHTML('beforeend', 
      `<li class="page-item">
        <a class="page-link" href="#" id="next-page" aria-label="Next">
          <i class="fa-solid fa-chevron-left fa-xs"></i>
        </a>
      </li>`
    );

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
    const activePage = document.querySelector(`.pagination .page-item a[data-page="${page}"]`);
    if (activePage) {
      activePage.parentElement.classList.add('active');
    }
  }

  // Initial display
  generatePagination();
  showPage(currentPage);
  setActivePage(currentPage);

 // Filter logic
document.getElementById('name').addEventListener('input', function () {
  const nameValue = document.getElementById('name').value.trim().toLowerCase();
  const cards = document.querySelectorAll('.adminstrative-card');

  cards.forEach(card => {
    const cardName = card.getAttribute('data-name').toLowerCase();
    const isNameMatch = nameValue === "" || cardName.includes(nameValue);

    if (isNameMatch) {
      card.parentElement.style.display = 'block';
    } else {
      card.parentElement.style.display = 'none';
    }
  });

  // Optional: Reset to the first page after filtering if using pagination
  currentPage = 1;
  generatePagination(); 
  showPage(currentPage); 
  setActivePage(currentPage); 
});



  // Show all items when inputs are empty
  document.getElementById('name').addEventListener('input', function () {
    if (this.value === '') {
      cards.forEach(card => {
        card.parentElement.style.display = 'block';
      });
      currentPage = 1;
      generatePagination();
      showPage(currentPage);
      setActivePage(currentPage);
    }
  });

  document.getElementById('job').addEventListener('change', function () {
    if (this.value === 'حدد عنصر') {
      cards.forEach(card => {
        card.parentElement.style.display = 'block';
      });
      currentPage = 1;
      generatePagination();
      showPage(currentPage);
      setActivePage(currentPage);
    }
  });
});

   $('.navs-carousel').owlCarousel({
    loop:false,
    margin:0,
     nav: false,
     navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"], // Replace navigation text with Font Awesome icons
     rtl: true,
    dots : false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
   })
// float icon logic

       
       window.addEventListener('scroll', function() {
            var whatsappIcon = document.querySelector('.whatsapp-icon');
            if (window.scrollY > window.innerHeight / 3 ) {
                whatsappIcon.style.display = 'block';
            } else {
                whatsappIcon.style.display = 'none';
            }
        });
// .....................

         document.addEventListener("DOMContentLoaded", function() {
             let searchBar = document.getElementById("search-bar");
             let closeSearch = document.getElementById("close-search");
             let searchButton = document.getElementById("search-button");
             let searchInput = document.getElementById("search-input");
             let searchResults = document.getElementById("search-results");
         
             const pages = ["index-ar.html", "about-ar.html", "adminstrative-ar.html", "admission-ar.html", "career-ar.html", "collage-councils-ar.html", "contactUs-ar.html", "dean-ar.html", "events_news_ar.html", "mission-vision-ar.html", "our-program-ar.html", "vice-deans-ar.html", "student-tour-ar.html"];
             document.querySelectorAll(".search-icon").forEach(function(icon) {
                 icon.addEventListener("click", function() {
                     searchBar.classList.toggle("d-none");
                     searchResults.classList.add("d-none");
                 });
             });
         
             closeSearch.addEventListener("click", function() {
                 searchBar.classList.add("d-none");
                 searchResults.classList.add("d-none");
             });
         
             searchInput.addEventListener("input", function() {
                 let query = searchInput.value.toLowerCase();
                 if (query.length === 0) {
                     searchResults.classList.add("d-none");
                 }
             });
         
             searchInput.addEventListener("keypress", function(event) {
                 if (event.key === "Enter") {
                     event.preventDefault();
                     let query = searchInput.value.toLowerCase();
                     if (query.length > 0) {
                         searchInAllPages(query);
                     } else {
                         searchResults.classList.add("d-none");
                     }
                 }
             });
         
             searchButton.addEventListener("click", function(event) {
                 event.preventDefault();
                 let query = searchInput.value.toLowerCase();
                 if (query.length > 0) {
                     searchInAllPages(query);
                 } else {
                     searchResults.classList.add("d-none");
                 }
             });
         
             async function searchInAllPages(query) {
                 let results = [];
                 for (let page of pages) {
                     let content = await fetchPageContent(page);
                     results = results.concat(searchInContent(query, content, page));
                 }
                 displayResults(results);
             }
         
             function searchInContent(query, { content, title }, pageUrl) {
                 let results = [];
                 let lowerCaseContent = content.toLowerCase();
                 let index = lowerCaseContent.indexOf(query);
                 while (index !== -1) {
                     let context = content.substring(index - 200, index + 50 + query.length);
                     results.push({ context, url: pageUrl, title });
                     index = lowerCaseContent.indexOf(query, index + 1);
                 }
                 return results;
             }
         
             async function fetchPageContent(url) {
                 try {
                     let response = await fetch(url);
                     if (response.ok) {
                         const html = await response.text();
                         const tempElement = document.createElement('div');
                         tempElement.innerHTML = html;
         
                         // Remove footer
                         const footer = tempElement.querySelector('footer');
                         if (footer) {
                             footer.remove();
                         }
         
                         // Remove copyright section
                         const copyrightSection = tempElement.querySelector('.copyright');
                         if (copyrightSection) {
                             copyrightSection.remove();
                         }
         
                         const title = tempElement.querySelector('.banner-title')?.innerHTML;
                         return { content: tempElement.textContent, title };
                     } else {
                         console.error("Failed to fetch content from", url);
                         return { content: "", title: "Error" };
                     }
                 } catch (error) {
                     console.error("Error fetching content from", url, error);
                     return { content: "", title: "Error" };
                 }
             }
         
             function displayResults(results) {
                 searchResults.innerHTML = "";
                 if (results.length === 0) {
                     let noDataItem = document.createElement("div");
                     noDataItem.className = "result-item";
                     noDataItem.innerHTML = "<p>No data found</p>";
                     searchResults.appendChild(noDataItem);
                 } else {
                     sessionStorage.setItem('searchResults', JSON.stringify(results));
                     window.location.href = '/search.html';
                 }
                 searchResults.classList.remove("d-none");
             }
         });
// parallax logic 
    var rellax = new Rellax('.rellax');
