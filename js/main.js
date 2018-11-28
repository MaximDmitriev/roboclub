'use strict';

document.addEventListener('DOMContentLoaded', () => {

    //Navigaton

    let navBtn = document.querySelectorAll(".nav-menu"),
        homeBtn = document.querySelector(".home-btn"),
        header = document.querySelector("header"),
        main = document.querySelector(".main"),
        masterclass = document.querySelector(".masterclass"),
        program = document.querySelector(".program"),
        experts = document.querySelector(".experts"),
        contacts = document.querySelector(".contacts");

    homeBtn.addEventListener('click', () => {
        header.scrollIntoView({block:"start", behavior: "smooth"});
    });

    let homeMove = setInterval(function(){
        homeBtn.classList.add("up");
        setTimeout(function(){
            homeBtn.classList.remove("up");
        }, 500);
    }, 6000);

    navBtn.forEach((item, i) => {
        item.addEventListener('click', () => {
            
            switch (i){
                case 0:
                main.scrollIntoView({block:"start", behavior: "smooth"});
                break;

                case 1:
                masterclass.scrollIntoView({block:"start", behavior: "smooth"});
                break;

                case 2:
                program.scrollIntoView({block:"start", behavior: "smooth"});
                break;

                case 4:
                experts.scrollIntoView({block:"start", behavior: "smooth"});
                break;

                case 5:
                contacts.scrollIntoView({block:"start", behavior: "smooth"});
                break;
            }
        });
    });

    //Slider

    let slide = document.querySelectorAll(".program-wrapper"),
        nextBtn = document.querySelector(".next"),
        prevBtn = document.querySelector(".prev"),
        currentSlide = 0;

    slide.forEach((item) =>{
        item.style.display = "none";
    });

    slide[0].style.display = "block";

    function slideToNext(){
        slide[currentSlide].style.display = "none";

        if (currentSlide < slide.length - 1){
            currentSlide++;
            slide[currentSlide].style.display = "block";
        } else {
            currentSlide = 0;
            slide[currentSlide].style.display = "block";
        }
    }

    function slideToPrev(){
        slide[currentSlide].style.display = "none";

        if (currentSlide == 0) {
            currentSlide = slide.length - 1;
            slide[currentSlide].style.display = "block";
        } else {
            currentSlide--;
            slide[currentSlide].style.display = "block";
        }
    }
  
    let autoSlide = setInterval(function(){slideToNext();}, 5000);


    nextBtn.addEventListener('click', () => {
        clearInterval(autoSlide);
        slideToNext();
        autoSlide = setInterval(function(){slideToNext();}, 5000);
        

    });

    prevBtn.addEventListener('click', () => {
        clearInterval(autoSlide);
        slideToPrev();  
        autoSlide = setInterval(function(){slideToNext();}, 5000);     
    });


    //Experts

    let expNextBtn = document.querySelector(".experts-btn-next"),
        expPrevBtn = document.querySelector(".experts-btn-prev"),
        expertSlide = document.querySelectorAll(".experts-slide");

    expNextBtn.addEventListener('click', () => {
        expertSlide.forEach((item) => {
            item.classList.toggle("active");
        });
    });

    //faq

    let faqBtn = document.querySelectorAll(".question-btn"),
        faqItem = document.querySelectorAll(".question"),
        faqItemFull = document.querySelectorAll(".row-body"),
        toggle = false;

    function deploy(n){
        faqItem[n].classList.add("full");
        faqBtn[n].classList.add("fwd");
        setTimeout(() =>{
            faqItemFull[n].style.display = "flex";
        }, 500);
    }

    function rollUp(n){
        faqItem[n].classList.remove("full");
        faqBtn[n].classList.remove("fwd");
        faqItemFull[n].style.display = "none";
    }


    faqBtn.forEach((item, i) => {
        item.addEventListener('click', (event) => {
    
            if(event.target.parentElement.classList.contains("fwd")){
                rollUp(i);
                toggle = !toggle;
            }
            else{
                faqItem.forEach((item, i) => { 
                    rollUp(i)
                });
                deploy(i);
            }  
        });
    }); 

    // maps

    let divMapBibirevo = document.querySelector("#mapBibirevo"),
        divMapVdnh = document.querySelector("#mapVdnh"),
        k = "b59c759a-af40-45f1-8a1f-1e61f0009b9f";

    // function init(ymaps){
    //     var mapBibirevo = new ymaps.Map("mapBibirevo", {
    //         center:[55.89, 37.61],
    //         zoom: 10
    //     });
    // }
    ymaps.ready(init);
    function init () {
        let myMap1 = new ymaps.Map("mapBibirevo", {
        //   center: [55.894882, 37.610855],
          center: [55.8948, 37.6108],
          controls: [],
          zoom: 17
        });
        let myMap2 = new ymaps.Map("mapVdnh", {
        //   center: [55.894882, 37.610855],
            center: [55.8178, 37.6354],
            controls: [],
            zoom: 17
        });

        let placeBibirevo = new ymaps.Placemark([55.8948, 37.6108],
            {
                iconContent: "РОББО Клуб"
            },
            {
                preset: 'islands#darkGreenStretchyIcon'
    
            });
        myMap1.geoObjects.add(placeBibirevo);

        let placeVdnh = new ymaps.Placemark([55.8178, 37.6354],
            {
                iconContent: "РОББО Клуб"
            },
            {
                preset: 'islands#darkGreenStretchyIcon'
    
            });
        myMap2.geoObjects.add(placeVdnh);
      }

      //vk 
  


    (function() {
        VK.Widgets.Post("postVk1", -146293871, 248, 'JGRAacVK2d0-MENU8FFhqC4klDuK', {width: 400});
    }());
    
    (function() {
        VK.Widgets.Post("postVk2", -146293871, 201, 'IgEMe3hkyIS0b3S-ryOkAuXhaD4S', {width: 400});
    }());

    (function() {
        VK.Widgets.Post("postVk3", -146293871, 255, '0zCkudzKbnQtuLM14pbc9qjMlfGX', {width: 400});
    }());

    (function() {
        VK.Widgets.Post("postVk4", -146293871, 252, '4AeOyEgT5syf-gUzPRRefXjR0lZP', {width: 400});
    }());

    (function() {
        VK.Widgets.Post("postVk5", -146293871, 253, '5WZdiXl-3ArEI3aDgWFXDWm475MC', {width: 400});
    }());

    let vkSlide = document.querySelectorAll(".vk-post"),
        btnVkprev = document.querySelector(".vk-prev"),
        btnVknext = document.querySelector(".vk-next"),
        vkPostNum = 0;

    vkSlide.forEach((item) => {
        item.style.display = "none";
    });

    vkSlide[vkPostNum].style.display = "block";

    btnVknext.addEventListener('click', () =>{
        vkSlide[vkPostNum].style.display = "none";
        if(vkPostNum == vkSlide.length - 1){
            vkPostNum = 0;
        } else {
            vkPostNum++; 
        }
        vkSlide[vkPostNum].style.display = "block";

    });

    // let i = 50;
    // btnVknext.addEventListener('click', () =>{
    //     vkSlide[vkPostNum].style.marginLeft = i + "px";
    //     i+=50;

    // });

    btnVkprev.addEventListener('click', () =>{
        vkSlide[vkPostNum].style.display = "none";
        if(vkPostNum == 0){
            vkPostNum = vkSlide.length - 1;
        } else {
            vkPostNum--; 
        }
        vkSlide[vkPostNum].style.display = "block";

    });


    //vk chat

    VK.Widgets.CommunityMessages("vkMessage", 146293871, {
        widgetPosition: "left",
        welcomeScreen: 1

    });



    // modal form

    let btnModal = document.querySelectorAll(".btn-modal"),
        modalForm = document.querySelector(".modal-frame-form"),
        modalFrame = document.querySelector(".modal-frame"),
        btnClose = document.querySelector(".close-btn");

        modalFrame.style.display = "none";

        btnClose.addEventListener('click', () => {
            modalFrame.style.display = "none";
        });

        btnModal.forEach((item) => {
            item.addEventListener('click', () => {
                modalFrame.style.display = "block";
            });
        });
});

