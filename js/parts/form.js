function form() {

    let mask = require("./mask");

    let btnModal = document.querySelectorAll(".btn-modal"),
        modalForm = document.querySelector(".modal-frame-form"),
        msgForm = document.querySelector(".message-frame-form"),
        intForm = document.querySelector(".interest-form"),
        modalFrame = document.querySelector(".modal-frame"),
        msgFrame = document.querySelector(".message-frame"),
        btnClose = document.querySelector("#modalClose"),
        btnMsgCls = document.querySelector("#msgClose"),
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

        btnMsgCls.addEventListener('click', () => {
            msgFrame.style.display = "none";
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

        let msgTxt = {
            success: "Спасибо! <br> Мы скоро свяжемся в Вами!",
            error: "Ошибка сервера!<br> Попробуйте еще раз."
        };

        let  msgImg = {
            success: "./img/telephone.svg",
            error: "./img/error.svg"
        };

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
    
                    r.open("POST", "./smart.php");
                    r.send(data);
    
                    r.addEventListener('readystatechange', () => {
                        if(r.status == 200 && r.readyState == 4) {
                            form.querySelectorAll("input").forEach((item) => item.value = "");
                            modalFrame.style.display = "none";
                            msgFrame.style.display = "block";
                            msgForm.querySelector("p").innerHTML = msgTxt.success;
                            msgForm.querySelector("img").setAttribute("src", msgImg.success);
                            setTimeout(() => {
                                msgFrame.style.display = "none";
                                document.body.style.overflow = "";
                                homeBtn.style.display = "block";
                            }, 3000);
                        }
                        if(r.status != 200) {
                            modalFrame.style.display = "none";
                            msgFrame.style.display = "block";
                            msgForm.querySelector("p").innerHTML = msgTxt.error;
                            msgForm.querySelector("img").setAttribute("src", msgImg.error);
                            setTimeout(() => {
                                msgFrame.style.display = "none";
                                modalFrame.style.display = "block";
                            }, 3000);
                        }
                    });
                }
            });
        }

        sendForm(btnCall, intForm);
        sendForm(btnSend, modalForm);
}

module.exports = form;