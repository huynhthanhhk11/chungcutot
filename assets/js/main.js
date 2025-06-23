document.addEventListener('DOMContentLoaded', function () {
    
    // 1. Mobile Menu Toggle
    const menuButton = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav'); // Giả sử nav mobile sẽ được đưa vào đây

    if (menuButton && mainNav) {
        menuButton.addEventListener('click', () => {
            // Logic mở menu mobile của bạn sẽ ở đây
            // Ví dụ: mainNav.classList.toggle('is-open');
        });
    }

    // 2. Footer Accordion on Mobile (Giữ nguyên)
    const accordionToggles = document.querySelectorAll('.footer-widget h4.accordion-toggle');
    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            if (window.innerWidth <= 767) {
                toggle.classList.toggle('active');
                const content = toggle.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            }
        });
    });

    // 3. (MỚI) Xử lý Header khi cuộn trang
    const header = document.querySelector('.header-wrapper');
    if (header) {
        const scrollThreshold = 50; // Ngưỡng cuộn (px) để header thay đổi

        window.addEventListener('scroll', function() {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

});
