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

    const burgerServ = document.getElementById('service')
    // const sudmenuServ = document.getSelectionAll('.servise_item')
        
            burgerServ.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(burgerServ);

            
            // const sudmenuServ = burgerServ.getSelectionAll('.servise_item');
            // console.log(sudmenuServ)
            // sudmenuServ.forEach(elem => {
            //     elem.classList.toggle("modal-show")  
            // });
        });

    // const burgerServ = document.getSelection('.burger__service-button')
    // const sudmenuServ = document.getSelection('.servise_item')
    // console.log(burgerServ)
        // burgerServ.addEventListener('click', (event) => {
        //     event.preventDefault();
        //     sudmenuServ.classList.toggle("modal-show");
            
        // });
    }
    

});



