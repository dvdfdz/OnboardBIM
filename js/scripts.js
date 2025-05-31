
window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('#mainNav');

    const navbarShrink = () => {
        if (!navbar) return;
        navbar.classList.toggle('navbar-shrink', window.scrollY > 0);
    };

    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    if (navbar) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%'
        });
    }

    const navbarToggler = document.querySelector('.navbar-toggler');
    document.querySelectorAll('#navbarResponsive .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    new SimpleLightbox({ elements: '#portfolio a.portfolio-box' });

    const slideIndex = [0, 0];
    const slideId = ["mySlides1", "mySlides2"];
    const timeouts = [null, null];
    const durations = [[], []];

    slideId.forEach((id, no) => {
        const slides = document.getElementsByClassName(id);
        durations[no] = Array.from(slides, () => getRandomDuration(3000, 5000));
        Array.from(slides).forEach(slide => slide.classList.add("slide-fade"));
        setupHoverEvents(no);
        showSlide(no);
    });

    function showSlide(no) {
        const slides = document.getElementsByClassName(slideId[no]);
        if (!slides.length) return;

        Array.from(slides).forEach(slide => slide.classList.remove("slide-visible"));

        slideIndex[no] = (slideIndex[no] + slides.length) % slides.length;
        slides[slideIndex[no]].classList.add("slide-visible");

        timeouts[no] = setTimeout(() => {
            slideIndex[no]++;
            showSlide(no);
        }, durations[no][slideIndex[no]]);
    }

    function getRandomDuration(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function setupHoverEvents(no) {
        const container = document.getElementsByClassName(slideId[no])[0]?.parentElement;
        if (!container) return;

        container.addEventListener("mouseenter", () => clearTimeout(timeouts[no]));
        container.addEventListener("mouseleave", () => showSlide(no));
    }
});
