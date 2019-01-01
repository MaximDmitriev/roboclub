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

 
});

