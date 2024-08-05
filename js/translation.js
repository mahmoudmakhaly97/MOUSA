document.addEventListener("DOMContentLoaded", function() {
   // Check the dir attribute
   const isRTL = document.documentElement.getAttribute("dir") === "rtl";

   // Select all elements with data-ar and data-en attributes
   document.querySelectorAll('[data-ar][data-en]').forEach(function(element) {
      element.textContent = isRTL ? element.getAttribute('data-ar') : element.getAttribute('data-en');
   });
});