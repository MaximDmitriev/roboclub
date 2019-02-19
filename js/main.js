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
    form();
    slider();
    experts();
    faq();
    vk();

    let browser = window.navigator.userAgent,
        text = document.querySelectorAll(".experts-slide-desc p");

        if(/msie/i.test(browser) || /trident/i.test(browser)){
            text.forEach((item) =>{
                item.style.maxWidth = "35%";
            });
        }


    let viewMap = true,
        viewIg = true;

    (document.documentElement.clientWidth > 576) ? maps() : viewMap = false;
    (document.documentElement.clientWidth > 991) ? ig() : viewIg = false;

    window.addEventListener("resize", () => {
        if(document.documentElement.clientWidth > 576 && viewMap == false) {
            maps();
            viewMap = true;
        }
            
        if(document.documentElement.clientWidth > 991 && viewIg == false) {
            ig();
            viewIg = true;
        } 
    });
 
});

