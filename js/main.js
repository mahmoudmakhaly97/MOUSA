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
 