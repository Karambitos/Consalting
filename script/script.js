'use strict';

document.addEventListener('DOMContentLoaded', () => {
   
    {
        // services

    const services = document.querySelector('.servic_button')
    const servicesClose = document.querySelector('.services__close')
    const popupService = document.querySelector('.modal-services')
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

    const spinerMenu = document.querySelector('.burger__menu')
    const spinnerButton = document.querySelectorAll('.spinner-line')

        spinner.addEventListener('click', (event) => {
            event.preventDefault();
            spinerMenu.classList.toggle("modal-show-right");
            spinnerButton.forEach(elem => {
                elem.classList.toggle("active")  
            });

         });

    const burgerServ = document.querySelector('.burger__service-button')
    const sudmenuServ = burgerServ.querySelectorAll('.servise_item')
   
            burgerServ.addEventListener('click', (event) => {
            event.preventDefault();
            // console.log(target);
            // console.log(sudmenuServ);
            sudmenuServ.forEach(elem => {
                if (elem.style.display === '') {
                    elem.style.display = 'block';
                } else {
                    elem.style.display = '';
                }    
            });
        });

        const development = burgerServ.querySelector('.development')
        const submenuListServ = burgerServ.querySelector('.service__submenu--list')
            development.addEventListener('click', (event) => {
            event.preventDefault();
            submenuListServ.style.display = 'block';
            // sudmenuServ.forEach(elem => {
            //     if (elem.style.display === '') {
            //         elem.style.display = 'block';
            //     } else {
            //         elem.style.display = '';
            //     }    
            // });
        });
    
    }
    

});



