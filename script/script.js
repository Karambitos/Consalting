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
});

