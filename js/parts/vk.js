function vk() {
    let widgetWidth = 400;

    (document.documentElement.clientWidth < 580) ? widgetWidth = 320 : widgetWidth = 400;

    (function() {
        VK.Widgets.Post("postVk1", -146293871, 248, 'JGRAacVK2d0-MENU8FFhqC4klDuK', {width: `${widgetWidth}`});
    }());
    
    (function() {
        VK.Widgets.Post("postVk2", -146293871, 201, 'IgEMe3hkyIS0b3S-ryOkAuXhaD4S', {width: `${widgetWidth}`});
    }());

    (function() {
        VK.Widgets.Post("postVk3", -146293871, 255, '0zCkudzKbnQtuLM14pbc9qjMlfGX', {width: `${widgetWidth}`});
    }());

    (function() {
        VK.Widgets.Post("postVk4", -146293871, 252, '4AeOyEgT5syf-gUzPRRefXjR0lZP', {width: `${widgetWidth}`});
    }());

    (function() {
        VK.Widgets.Post("postVk5", -146293871, 253, '5WZdiXl-3ArEI3aDgWFXDWm475MC', {width: `${widgetWidth}`});
    }());

    let vkSlide = document.querySelectorAll(".vk-post"),
        btnVkprev = document.querySelector(".vk-prev"),
        btnVknext = document.querySelector(".vk-next"),
        // socialDiv = document.querySelector(".social-media"),
        // vkDiv = document.querySelector(".vk"),
        vkPostNum = 0;
        
        // console.log(vkSlide[0].style.cssText);
        // console.log(vkSlide[0].children[0]);
    if (document.documentElement.clientWidth < 768) vkSlide.forEach((item) => {item.style.animation = "none";});
  
    vkSlide.forEach((item) => {
        item.style.display = "none";
    });
        
    vkSlide[vkPostNum].style.display = "block";
    
    // setTimeout(() => {
    //     console.log(document.querySelector("#vkwidget1").clientHeight);
    //     console.log(vkSlide[0].getAttribute("style"));
    //     console.log(vkSlide[0].style.height);

    // }, 7000); // показывает верно, как-то надо добраться до момента загрущки iframe

    
    // vkDiv.addEventListener('load', () => {
    //     console.log("here");
    //     console.log(vkSlide[0].style.height);
    // });
    // console.log(vkSlide[0].getAttribute("style"));

    btnVknext.addEventListener('click', () => {
        vkSlide[vkPostNum].style.display = "none";
        if(vkPostNum == vkSlide.length - 1) {
            vkPostNum = 0;
        } else {
            vkPostNum++; 
        }
        // if(document.documentElement.clientWidth < 580){
        //     vkSlide[vkPostNum].addEventListener('load', () => {
        //         console.log("loaded");
        //         socialDiv.style.height = parseInt(vkSlide[vkPostNum].style.height) + 135 + "px";
        //         vkDiv.style.height = parseInt(vkSlide[vkPostNum].style.height) + 15 + "px";
        //     });

        // }
        vkSlide[vkPostNum].style.display = "block";


    });



    btnVkprev.addEventListener('click', () => {
        vkSlide[vkPostNum].style.display = "none";
        if(vkPostNum == 0) {
            vkPostNum = vkSlide.length - 1;
        } else {
            vkPostNum--; 
        }

        // if(document.documentElement.clientWidth < 580){
        //     socialDiv.style.height = parseInt(vkSlide[vkPostNum].style.height) + 135 + "px";
        //     vkDiv.style.height = parseInt(vkSlide[vkPostNum].style.height) + 15 + "px";
        // }
        vkSlide[vkPostNum].style.display = "block";

    });

    //vk chat
    if (document.documentElement.clientWidth > 768) {

        let vk = VK.Widgets.CommunityMessages("vkMessage", 146293871, {
            widgetPosition: "left",
            welcomeScreen: 0,
            disableButtonTooltip: 1,  
        });
    }
}

module.exports = vk;