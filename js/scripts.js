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


    let slideIndex = [0, 0,];
    let slideId = ["mySlides1", "mySlides2", "mySlides3",];

    function showSlides(no) {
        const slides = document.getElementsByClassName(slideId[no]);
        const total = slides.length;

        for (let i = 0; i < total; i++) {
            slides[i].classList.remove("slide-active", "slide-exit");
            slides[i].style.left = "100%"; // Ocultar fuera de vista
        }

        // Slide saliente
        const prevIndex = slideIndex[no];
        const prevSlide = slides[prevIndex];
        if (prevSlide) {
            prevSlide.classList.add("slide-exit");
            prevSlide.style.left = "-100%";
        }

        // Actualizar índice
        slideIndex[no] = (prevIndex + 1) % total;

        // Slide entrante
        const currentSlide = slides[slideIndex[no]];
        currentSlide.classList.add("slide-active");
        currentSlide.style.left = "0";
    }

    function autoAdvance(no) {
        showSlides(no);

        const nextInterval = Math.floor(Math.random() * 2000) + 3000; // 3 a 5 seg
        setTimeout(() => autoAdvance(no), nextInterval);
    }

    autoAdvance(0); // Para mySlides1
    autoAdvance(1); // Para mySlides2
    autoAdvance(2); // Para mySlides3







});


