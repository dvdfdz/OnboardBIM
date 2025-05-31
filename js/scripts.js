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
    let slideIndex = [0, 0];
    let slideId = ["mySlides1", "mySlides2"];
    let timeouts = [null, null];
    let slideDurations = [[], []];

    initSlides(0);
    initSlides(1);

    function initSlides(no) {
        let slides = document.getElementsByClassName(slideId[no]);
        slideDurations[no] = Array.from(slides).map(() =>
            getRandomDuration(3000, 5000)
        );
        slideIndex[no] = 0;
        setupHoverEvents(no);
        showSlide(no);
    }

    function showSlide(no) {
        let slides = document.getElementsByClassName(slideId[no]);
        if (slideIndex[no] >= slides.length) slideIndex[no] = 0;
        if (slideIndex[no] < 0) slideIndex[no] = slides.length - 1;

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex[no]].style.display = "block";

        // Programar la siguiente slide automáticamente
        timeouts[no] = setTimeout(() => {
            slideIndex[no]++;
            showSlide(no);
        }, slideDurations[no][slideIndex[no]]);
    }

    function getRandomDuration(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function setupHoverEvents(no) {
        let container = document.getElementsByClassName(slideId[no])[0]?.parentElement;
        if (!container) return;

        container.addEventListener("mouseenter", () => {
            clearTimeout(timeouts[no]);
            timeouts[no] = null;
        });

        container.addEventListener("mouseleave", () => {
            showSlide(no); // Reanuda desde la misma imagen
        });
    }

});
