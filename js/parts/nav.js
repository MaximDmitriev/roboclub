function nav() {
    let navBtn = document.querySelectorAll(".nav-menu"),
        homeBtn = document.querySelector(".home-btn"),
        header = document.querySelector("header"),
        main = document.querySelector(".main"),
        masterclass = document.querySelector(".masterclass"),
        program = document.querySelector(".program"),
        experts = document.querySelector(".experts"),
        media = document.querySelector(".social-media"),
        contacts = document.querySelector(".contacts");

    homeBtn.addEventListener('click', () => header.scrollIntoView({block:"start", behavior: "smooth"}));

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

                // case 1:
                // masterclass.scrollIntoView({block:"start", behavior: "smooth"});
                // break;

                case 1:
                program.scrollIntoView({block:"start", behavior: "smooth"});
                break;

                case 2:
                media.scrollIntoView({block:"start", behavior: "smooth"});
                break;

                case 3:
                experts.scrollIntoView({block:"start", behavior: "smooth"});
                break;

                case 4:
                contacts.scrollIntoView({block:"start", behavior: "smooth"});
                break;
            }
        });
    });
}

module.exports = nav;