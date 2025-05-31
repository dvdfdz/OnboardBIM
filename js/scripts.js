/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });


    const slideIndex = Array(6).fill(1);
    const slideClasses = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6"];
    const carouselContainers = ["carousel1", "carousel2", "carousel3", "carousel4", "carousel5", "carousel6"];

    let timeoutIds = Array(6).fill(null);

    // Inicializar cada carrusel mostrando la primera slide
    slideClasses.forEach((_, i) => showSlides(1, i));

    // Iniciar autoSlide y agregar listeners para pausar/reanudar al pasar el ratón
    slideClasses.forEach((_, i) => {
        startAutoSlide(i);
        const container = document.querySelector(`.${carouselContainers[i]}`);
        if (container) {
            container.addEventListener("mouseenter", () => pauseAutoSlide(i));
            container.addEventListener("mouseleave", () => startAutoSlide(i));
        }
    });

    function plusSlides(n, no) {
        showSlides(slideIndex[no] += n, no);
    }

    function showSlides(n, no) {
        const slides = document.getElementsByClassName(slideClasses[no]);
        const total = slides.length;

        slideIndex[no] = ((n - 1 + total) % total) + 1;

        Array.from(slides).forEach(slide => {
            slide.style.display = "none";
        });

        slides[slideIndex[no] - 1].style.display = "block";
    }

    function autoSlide(no) {
        plusSlides(1, no);
        const interval = Math.floor(Math.random() * 2000) + 3000;
        timeoutIds[no] = setTimeout(() => autoSlide(no), interval);
    }

    function startAutoSlide(no) {
        // Si ya hay un timeout pendiente, no hacer nada
        if (timeoutIds[no] !== null) return;
        autoSlide(no);
    }

    function pauseAutoSlide(no) {
        clearTimeout(timeoutIds[no]);
        timeoutIds[no] = null;
    }



});
