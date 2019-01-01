function form() {

    let mask = require("./mask");

    let btnModal = document.querySelectorAll(".btn-modal"),
        modalForm = document.querySelector(".modal-frame-form"),
        intForm = document.querySelector(".interest-form"),
        modalFrame = document.querySelector(".modal-frame"),
        btnClose = document.querySelector(".close-btn"),
        homeBtn = document.querySelector(".home-btn"),
        inputFrame  = document.querySelector("#inputFrame"),
        inputInterest = document.querySelector("#inputInterest"),
        btnCall = document.querySelector("#btnCall"),
        btnSend = modalForm.querySelector("button");

    mask(inputFrame);
    mask(inputInterest);


        btnClose.addEventListener('click', () => {
            modalFrame.style.display = "none";
            document.body.style.overflow = "";
            homeBtn.style.display = "block";

        });

        btnModal.forEach((item) => {
            item.addEventListener('click', () => {
                modalFrame.style.display = "block";
                document.body.style.overflow = "hidden";
                homeBtn.style.display = "none";

            });
        });

        function sendForm(btn, form) {
            
            btn.addEventListener('click', (event) => {
                let pass = 0;
                event.preventDefault();
                form.querySelectorAll("input").forEach((item) => {

                    if(item.value == 0) {
                        item.classList.add("animated");
                        item.style.border = "2px solid red";
                        item.classList.add("pulse");
                        setTimeout(() => {
                            item.style.border = "2px solid black";
                            item.classList.remove("pulse");
                        }, 2000);
                    } else{
                        pass++;
                    }
                });
                if(pass == form.querySelectorAll("input").length){
                    let data = new FormData(form);

                    let r = new XMLHttpRequest();
    
                    r.open("POST", "./server.php");
                    r.send(data);
    
                    r.addEventListener('readystatechange', () => {
                        if(r.status == 200 && r.readyState == 4) {
                            form.querySelectorAll("input").forEach((item) => item.value = "");
                        }
    
                    });
                }


            });
        }

        sendForm(btnCall, intForm);
        sendForm(btnSend, modalForm);
}

module.exports = form;