'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
    // services

    const services = document.querySelector('.servic_button')
    const servicesClose = document.querySelector('.services__close')
    const popupService = document.querySelector('.modal')
    const spinner = document.querySelector('.spinner')

        services.addEventListener('click', (event) => {
            event.preventDefault();
            popupService.classList.add("modal-show");
            spinner.style.display = 'none';
        });

        servicesClose.addEventListener('click', (event) => {
            event.preventDefault();
            popupService.classList.remove("modal-show");
            spinner.style.display = '';
        });


    // BURGER

    const nav = document.querySelector('.navigation')
    const cont = document.querySelector('.contacts')
    const siteNav = document.querySelector('.site-navigation')
    const siteCont = document.querySelector('.site-contacts')
    

        spinner.addEventListener('click', (event) => {
            event.preventDefault();
            siteNav.classList.toggle("site-nav__active");
            siteCont.classList.toggle("site-cont__active");
            nav.classList.toggle("navigation__active");
            cont.classList.toggle("contacts__active");

            nav.style.display = 'block';
            cont.style.display = 'block';

            // if (nav.style.display = 'block') {
            //     nav.style.display = ''
            // } if (cont.style.display = 'block') {
            //     cont.style.display = ''
            // } 
        });
       
    
});



