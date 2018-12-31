'use strict';

document.addEventListener('DOMContentLoaded', () => {

    let nav = require("./parts/nav"),
        slider = require("./parts/slider"),
        experts = require("./parts/experts"),
        faq = require("./parts/faq"),
        maps = require("./parts/ymaps"),
        vk = require("./parts/vk"),
        ig = require("./parts/ig"),
        form = require("./parts/form");
    
    nav();
    slider();
    experts();
    faq();
    maps();
    vk();
    ig();
    form();

    //Navigaton

    // let navBtn = document.querySelectorAll(".nav-menu"),
    //     homeBtn = document.querySelector(".home-btn"),
    //     header = document.querySelector("header"),
    //     main = document.querySelector(".main"),
    //     masterclass = document.querySelector(".masterclass"),
    //     program = document.querySelector(".program"),
    //     experts = document.querySelector(".experts"),
    //     media = document.querySelector(".social-media"),
    //     contacts = document.querySelector(".contacts");

    // homeBtn.addEventListener('click', () => {
    //     header.scrollIntoView({block:"start", behavior: "smooth"});
    // });

    // let homeMove = setInterval(function(){
    //     homeBtn.classList.add("up");
    //     setTimeout(function(){
    //         homeBtn.classList.remove("up");
    //     }, 500);
    // }, 6000);

    // navBtn.forEach((item, i) => {
    //     item.addEventListener('click', () => {
            
    //         switch (i){
    //             case 0:
    //             main.scrollIntoView({block:"start", behavior: "smooth"});
    //             break;

    //             case 1:
    //             masterclass.scrollIntoView({block:"start", behavior: "smooth"});
    //             break;

    //             case 2:
    //             program.scrollIntoView({block:"start", behavior: "smooth"});
    //             break;

    //             case 3:
    //             media.scrollIntoView({block:"start", behavior: "smooth"});
    //             break;

    //             case 4:
    //             experts.scrollIntoView({block:"start", behavior: "smooth"});
    //             break;

    //             case 5:
    //             contacts.scrollIntoView({block:"start", behavior: "smooth"});
    //             break;
    //         }
    //     });
    // });

    //Slider

    // let slide = document.querySelectorAll(".program-wrapper"),
    //     nextBtn = document.querySelector(".next"),
    //     prevBtn = document.querySelector(".prev"),
    //     currentSlide = 0;

    // slide.forEach((item) =>{
    //     item.style.display = "none";
    // });

    // slide[0].style.display = "block";

    // function slideToNext(){
    //     slide[currentSlide].style.display = "none";

    //     if (currentSlide < slide.length - 1){
    //         currentSlide++;
    //         slide[currentSlide].style.display = "block";
    //     } else {
    //         currentSlide = 0;
    //         slide[currentSlide].style.display = "block";
    //     }
    // }

    // function slideToPrev(){
    //     slide[currentSlide].style.display = "none";

    //     if (currentSlide == 0) {
    //         currentSlide = slide.length - 1;
    //         slide[currentSlide].style.display = "block";
    //     } else {
    //         currentSlide--;
    //         slide[currentSlide].style.display = "block";
    //     }
    // }
  
    // // let autoSlide = setInterval(function(){slideToNext();}, 7000);


    // nextBtn.addEventListener('click', () => {
    //     // clearInterval(autoSlide);
    //     slideToNext();
    //     // autoSlide = setInterval(function(){slideToNext();}, 7000);
        

    // });

    // prevBtn.addEventListener('click', () => {
    //     // clearInterval(autoSlide);
    //     slideToPrev();  
    //     // autoSlide = setInterval(function(){slideToNext();}, 7000);     
    // });


    //Experts

    // let expNextBtn = document.querySelector(".experts-btn-next"),
    //     expPrevBtn = document.querySelector(".experts-btn-prev"),
    //     expertSlide = document.querySelectorAll(".experts-slide");

    // expNextBtn.addEventListener('click', () => {
    //     expertSlide.forEach((item) => {
    //         item.classList.toggle("active");
    //     });
    // });

    //faq

    // let faqBtn = document.querySelectorAll(".question-btn"),
    //     faqItem = document.querySelectorAll(".question"),
    //     faqItemFull = document.querySelectorAll(".row-body"),
    //     toggle = false;

    // function deploy(n){
    //     faqItem[n].classList.add("full");
    //     faqBtn[n].classList.add("fwd");
    //     setTimeout(() =>{
    //         faqItemFull[n].style.display = "flex";
    //     }, 500);
    // }

    // function rollUp(n){
    //     faqItem[n].classList.remove("full");
    //     faqBtn[n].classList.remove("fwd");
    //     faqItemFull[n].style.display = "none";
    // }


    // faqBtn.forEach((item, i) => {
    //     item.addEventListener('click', (event) => {
    
    //         if(event.target.parentElement.classList.contains("fwd")){
    //             rollUp(i);
    //             toggle = !toggle;
    //         }
    //         else{
    //             faqItem.forEach((item, i) => { 
    //                 rollUp(i)
    //             });
    //             deploy(i);
    //         }  
    //     });
    // }); 

    // maps

    // ymaps.ready(init);
    // function init () {
    //     let myMap1 = new ymaps.Map("mapBibirevo", {
    //     //   center: [55.894882, 37.610855],
    //       center: [55.8948, 37.6108],
    //       controls: [],
    //       zoom: 17
    //     });
    //     let myMap2 = new ymaps.Map("mapVdnh", {
    //     //   center: [55.894882, 37.610855],
    //         center: [55.8178, 37.6354],
    //         controls: [],
    //         zoom: 17
    //     });

    //     let placeBibirevo = new ymaps.Placemark([55.8948, 37.6108],
    //         {
    //             iconContent: "РОББО Клуб"
    //         },
    //         {
    //             preset: 'islands#darkGreenStretchyIcon'
    
    //         });
    //     myMap1.geoObjects.add(placeBibirevo);

    //     let placeVdnh = new ymaps.Placemark([55.8178, 37.6354],
    //         {
    //             iconContent: "РОББО Клуб"
    //         },
    //         {
    //             preset: 'islands#darkGreenStretchyIcon'
    
    //         });
    //     myMap2.geoObjects.add(placeVdnh);
    //   }

      //vk 
  
    // let divWidth = document.documentElement.clientWidth,
    // let widgetWidth = 400;

    // (document.documentElement.clientWidth < 580) ? widgetWidth = 320 : widgetWidth = 400;
    // // console.log(widgetWidth);


    // (function() {
    //     VK.Widgets.Post("postVk1", -146293871, 248, 'JGRAacVK2d0-MENU8FFhqC4klDuK', {width: `${widgetWidth}`});
    // }());
    
    // (function() {
    //     VK.Widgets.Post("postVk2", -146293871, 201, 'IgEMe3hkyIS0b3S-ryOkAuXhaD4S', {width: `${widgetWidth}`});
    // }());

    // (function() {
    //     VK.Widgets.Post("postVk3", -146293871, 255, '0zCkudzKbnQtuLM14pbc9qjMlfGX', {width: `${widgetWidth}`});
    // }());

    // (function() {
    //     VK.Widgets.Post("postVk4", -146293871, 252, '4AeOyEgT5syf-gUzPRRefXjR0lZP', {width: `${widgetWidth}`});
    // }());

    // (function() {
    //     VK.Widgets.Post("postVk5", -146293871, 253, '5WZdiXl-3ArEI3aDgWFXDWm475MC', {width: `${widgetWidth}`});
    // }());

    // let vkSlide = document.querySelectorAll(".vk-post"),
    //     btnVkprev = document.querySelector(".vk-prev"),
    //     btnVknext = document.querySelector(".vk-next"),
    //     // socialDiv = document.querySelector(".social-media"),
    //     // vkDiv = document.querySelector(".vk"),
    //     vkPostNum = 0;
        
    //     // console.log(vkSlide[0].style.cssText);
    //     // console.log(vkSlide[0].children[0]);
  
    // vkSlide.forEach((item) => {
    //     item.style.display = "none";
    // });
        
    // vkSlide[vkPostNum].style.display = "block";
    
    // // setTimeout(() => {
    // //     console.log(document.querySelector("#vkwidget1").clientHeight);
    // //     console.log(vkSlide[0].getAttribute("style"));
    // //     console.log(vkSlide[0].style.height);

    // // }, 7000); // показывает верно, как-то надо добраться до момента загрущки iframe

    
    // // vkDiv.addEventListener('load', () => {
    // //     console.log("here");
    // //     console.log(vkSlide[0].style.height);
    // // });
    // // console.log(vkSlide[0].getAttribute("style"));

    // btnVknext.addEventListener('click', () =>{
    //     vkSlide[vkPostNum].style.display = "none";
    //     if(vkPostNum == vkSlide.length - 1){
    //         vkPostNum = 0;
    //     } else {
    //         vkPostNum++; 
    //     }
    //     // if(document.documentElement.clientWidth < 580){
    //     //     vkSlide[vkPostNum].addEventListener('load', () => {
    //     //         console.log("loaded");
    //     //         socialDiv.style.height = parseInt(vkSlide[vkPostNum].style.height) + 135 + "px";
    //     //         vkDiv.style.height = parseInt(vkSlide[vkPostNum].style.height) + 15 + "px";
    //     //     });

    //     // }
    //     vkSlide[vkPostNum].style.display = "block";


    // });



    // btnVkprev.addEventListener('click', () =>{
    //     vkSlide[vkPostNum].style.display = "none";
    //     if(vkPostNum == 0){
    //         vkPostNum = vkSlide.length - 1;
    //     } else {
    //         vkPostNum--; 
    //     }

    //     // if(document.documentElement.clientWidth < 580){
    //     //     socialDiv.style.height = parseInt(vkSlide[vkPostNum].style.height) + 135 + "px";
    //     //     vkDiv.style.height = parseInt(vkSlide[vkPostNum].style.height) + 15 + "px";
    //     // }
    //     vkSlide[vkPostNum].style.display = "block";

    // });


    // //vk chat

    // let vk = VK.Widgets.CommunityMessages("vkMessage", 146293871, {
    //     widgetPosition: "left",
    //     welcomeScreen: 0,
    //     disableButtonTooltip: 1,
        
    // });

    // // vk.stopTitleAnimation();

    // ig

    // let btnIgprev = document.querySelector(".ig-prev"),
    //     btnIgnext = document.querySelector(".ig-next"),
    //     igPostNum = 1,
    //     urls = [
    //     "p/Bhvhnoyhhs0/",
    //     "p/BnsfxlLBPFe/",
    //     "p/BnwSx75lKVR/",
    //     "p/BodgLRVB3Wa/",
    //     "p/Bht1fD7hMpq/",
    //     // "p/BcagLIDlB9h/",
    //     "p/BVq96PGFA0Z/",
    //     "p/BbytzKMlLLH/"
    // ];

    // getIg(urls[0]);

    // btnIgnext.addEventListener('click', () => {
    //     if(igPostNum == urls.length - 1){
    //         igPostNum = 0;
    //     } else{
    //         igPostNum++;
    //     }
    //     getIg(urls[igPostNum]);
    // });

    // btnIgprev.addEventListener('click', () => { //пофиксить первый клик
    //     if(igPostNum == 0){
    //         igPostNum = urls.length - 1;
    //     } else{
    //         igPostNum--;
    //     }
    //     getIg(urls[igPostNum]);
    // });

    // function getIg(url){
    //     let divIg = document.querySelector(".ig-post");
    //     divIg.style.transition = "0.5s";

    //     let request = new XMLHttpRequest();

    //     request.open("GET", "https://api.instagram.com/oembed?url=http://instagr.am/" + url + "&maxwidth=320&omitscript=true&hidecaption=true");
    //     request.send();

    //     request.addEventListener('readystatechange', () => {
    //         if (request.readyState == 4 && request.status == 200){
    //             let data = JSON.parse(request.response);
    //             divIg.style.opacity = 0;

    //             setTimeout(() => {

                    
    //                 divIg.innerHTML = data.html;
    //                 instgrm.Embeds.process();

    //                 // let frame = divIg.querySelector("iframe");
    //                 // frame.addEventListener('load', () => {
    //                 //     frame.style.height = "444px";
    //                 //     console.log(frame);
    //                 // });

    //                 setTimeout(() => {divIg.style.opacity = 1;}, 600);
    //             }, 500);
    //         }

    //     });
    // }

    // modal form

    // let btnModal = document.querySelectorAll(".btn-modal"),
    //     modalForm = document.querySelector(".modal-frame-form"),
    //     modalFrame = document.querySelector(".modal-frame"),
    //     btnClose = document.querySelector(".close-btn");

    //     modalFrame.style.display = "none";

    //     btnClose.addEventListener('click', () => {
    //         modalFrame.style.display = "none";
    //         document.body.style.overflow = "";
    //         homeBtn.style.display = "block";

    //     });

    //     btnModal.forEach((item) => {
    //         item.addEventListener('click', () => {
    //             modalFrame.style.display = "block";
    //             document.body.style.overflow = "hidden";
    //             homeBtn.style.display = "none";

    //         });
    //     });
});

