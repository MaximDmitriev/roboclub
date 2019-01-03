function vk() {
    let widgetWidth = 400;

    (document.documentElement.clientWidth < 580) ? widgetWidth = 320 : widgetWidth = 400;

    let vkSlide = document.querySelectorAll(".vk-post"),
        btnVkprev = document.querySelector(".vk-prev"),
        btnVknext = document.querySelector(".vk-next"),
        // socialDiv = document.querySelector(".social-media"),
        // vkDiv = document.querySelector(".vk"),
        vkPostNum = 0;

    let vkPost = [
        {
            num: "postVk1",
            idPost: "248",
            hash: "JGRAacVK2d0-MENU8FFhqC4klDuK",
            show: false
        },
        {
            num: "postVk2",
            idPost: "201",
            hash: "IgEMe3hkyIS0b3S-ryOkAuXhaD4S",
            show: false
        },
        {
            num: "postVk3",
            idPost: "255",
            hash: "0zCkudzKbnQtuLM14pbc9qjMlfGX",
            show: false
        },
        {
            num: "postVk4",
            idPost: "252",
            hash: "4AeOyEgT5syf-gUzPRRefXjR0lZP",
            show: false
        },
        {
            num: "postVk5",
            idPost: "253",
            hash: "5WZdiXl-3ArEI3aDgWFXDWm475MC",
            show: false
        },
    ];

    if (document.documentElement.clientWidth < 768) vkSlide.forEach((item) => {item.style.animation = "none";});
  
    vkSlide.forEach((item) => {
        item.style.display = "none";
    });
        
    vkSlide[vkPostNum].style.display = "block";
    
    function showVk(pos) {
        if (!vkPost[pos].show){
            VK.Widgets.Post(vkPost[pos].num, -146293871, vkPost[pos].idPost, vkPost[pos].hash, {width: `${widgetWidth}`});
            vkPost[pos].show = true;
        }
    }

    showVk(vkPostNum);

    btnVknext.addEventListener('click', () => {
        vkSlide[vkPostNum].style.display = "none";
        if(vkPostNum == vkSlide.length - 1) {
            vkPostNum = 0;
        } else {
            vkPostNum++; 
        }
        vkSlide[vkPostNum].style.display = "block";
        showVk(vkPostNum);
    });

    btnVkprev.addEventListener('click', () => {
        vkSlide[vkPostNum].style.display = "none";
        if(vkPostNum == 0) {
            vkPostNum = vkSlide.length - 1;
        } else {
            vkPostNum--; 
        }
        vkSlide[vkPostNum].style.display = "block";
        showVk(vkPostNum);
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