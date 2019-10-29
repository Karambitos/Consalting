'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
    // services

    const services = document.querySelector('.servic_button')
    const servicesClose = document.querySelector('.services__close')
    const popupService = document.querySelector('.modal')

        services.addEventListener('click', (event) => {
            event.preventDefault();
            popupService.classList.add("modal-show");
        });

        servicesClose.addEventListener('click', (event) => {
            event.preventDefault();
            popupService.classList.remove("modal-show");
        });
});

