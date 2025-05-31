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


    let slideIndex = [1, 1];
    let slideId = ["mySlides1", "mySlides2"];

    // Mostrar inicialmente
    showSlides(1, 0);
    showSlides(1, 1);

    // Avanzar a la siguiente slide
    function plusSlides(n, no) {
        showSlides(slideIndex[no] += n, no);
    }

    // Mostrar slide actual con transición
    function showSlides(n, no) {
        let i;
        let x = document.getElementsByClassName(slideId[no]);
        if (n > x.length) { slideIndex[no] = 1 }
        if (n < 1) { slideIndex[no] = x.length }

        for (i = 0; i < x.length; i++) {
            x[i].style.opacity = 0;
            x[i].style.transition = "opacity 1s ease";
            x[i].style.zIndex = 0;
        }

        let currentSlide = x[slideIndex[no] - 1];
        currentSlide.style.opacity = 1;
        currentSlide.style.zIndex = 1;
    }

    // 🔁 Avanzar automáticamente con intervalo aleatorio entre 3 y 5 segundos
    function autoAdvance() {
        plusSlides(1, 0);
        plusSlides(1, 1);

        // Generar un nuevo intervalo aleatorio
        const nextInterval = Math.floor(Math.random() * 2000) + 3000; // entre 3000 y 5000 ms
        setTimeout(autoAdvance, nextInterval);
    }

    autoAdvance(); // Iniciar auto-advance







});


