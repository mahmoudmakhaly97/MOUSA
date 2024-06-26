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
// active link in navbar 
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');

  const removeActiveClasses = () => {
    navLinks.forEach(link => link.classList.remove('active'));
  };

  // Add click event to each nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      removeActiveClasses();
      link.classList.add('active');
    });
  });

  // Highlight the correct nav link based on the current URL
  const currentPath = window.location.pathname.split('/').pop();
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
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

//career page email js 
    emailjs.init("AuRvOuvPi559q1G0A"); // Replace with your actual EmailJS public key

    const servicesId = "service_rpttfao"; // Your EmailJS service ID
    const templatesId = "template_ukrihu8"; // Your EmailJS template ID

    function sendEmail(servicesId, templatesId, formData) {
      emailjs.send(servicesId, templatesId, formData).then(
        function (response) {
          console.log("Email sent successfully:", response);
          alert("Application submitted successfully!");
          document.getElementById("jobApplicationForm").reset();
        },
        function (error) {
          console.error("Error sending email:", error);
          alert(
            "There was an error submitting your application. Please try again later."
          );
        }
      );
    }
const fileInput = document.getElementById("cv");

// Add an event listener to handle file selection
fileInput.addEventListener("change", function () {
  // Check if files are selected
  if (this.files && this.files.length > 0) {
    // Access the first selected file (you can loop through all files if multiple are selected)
    const file = this.files[0];

    // Log file details to console (for demonstration)
    console.log("File selected:", file);
    console.log("File name:", file.name);
    console.log("File size:", file.size);
    console.log("File type:", file.type);
  }
});
    document
      .getElementById("jobApplicationForm")
      .addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = {
          from_email: this.email.value, // Add sender email address here
          to_email: "hr@almoosacollege.edu.sa", // Replace with your recipient email address
          firstName: this.firstName.value,
          lastName: this.lastName.value,
          phone: this.phone.value,
          email: this.email.value,
          position: this.position.value,
          address: this.address.value,
          city: this.city.value,
          area: this.area.value,
          zipCode: this.zipCode.value,
           cv: fileInput,
        };

        sendEmail(serviceId, templateId, formData);
      });
//     // contact us  email js 
    

 
    emailjs.init("xiVC1ZJJemcTumPIW"); // Replace with your actual EmailJS public key

    const serviceId = "service_5cxbji9"; // Your EmailJS service ID
    const templateId = "template_c66djk5"; // Your EmailJS template ID

    function sendEmail(serviceId, templateId, formData) {
      emailjs.send(serviceId, templateId, formData).then(
        function (response) {
          console.log("Email sent successfully:", response);
          alert("Application submitted successfully!");
          document.getElementById("contactForm").reset();
        },
        function (error) {
          console.error("Error sending email:", error);
          alert(
            "There was an error submitting your application. Please try again later."
          );
        }
      );
    }

 
    document
      .getElementById("contactForm")
      .addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = {
          from_email: this.email.value, // Add sender email address here
          to_email: "info@almoosacollege.edu.sa", // Replace with your recipient email address
          name: this.name.value,
          phone: this.phone.value,
          email: this.email.value,
          subject: this.subject.value,
          message: this.message.value,
        };

        sendEmail(serviceId, templateId, formData);
      });
    