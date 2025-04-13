const arrowTop = document.querySelector(".scrollButton");

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        arrowTop.style.display = 'none';
    } else {
        arrowTop.style.display = 'block';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
}

$(document).ready(function () {
        // Cache the navbar links
        const navLinks = $('.nav-link');

        // Add scroll event listener
        $(window).on('scroll', function () {
        const scrollPosition = $(window).scrollTop();

        navLinks.each(function () {
            const section = $($(this).attr('href'));
            const sectionTop = section.offset().top - 100; // Offset for fixed navbar
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinks.removeClass('active');
            $(this).addClass('active');
            }
        });
    });
});