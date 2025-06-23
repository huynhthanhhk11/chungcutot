document.addEventListener('DOMContentLoaded', function () {
    
    // 1. Mobile Menu Toggle
    const menuButton = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuButton && mainNav) {
        menuButton.addEventListener('click', () => {
            mainNav.classList.toggle('is-open');
        });
    }

    // 2. Footer Accordion on Mobile
    const accordionToggles = document.querySelectorAll('.footer-widget h4.accordion-toggle');

    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            // Check if the screen is mobile-sized
            if (window.innerWidth <= 767) {
                const content = toggle.nextElementSibling; // The <ul> list
                
                // Toggle active class on the title
                toggle.classList.toggle('active');

                // Toggle display of the content
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            }
        });
    });

});
