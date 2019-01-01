function form() {

    let mask = require("./mask");

    let btnModal = document.querySelectorAll(".btn-modal"),
        modalForm = document.querySelector(".modal-frame-form"),
        modalFrame = document.querySelector(".modal-frame"),
        btnClose = document.querySelector(".close-btn"),
        homeBtn = document.querySelector(".home-btn"),
        inputFrame  = document.querySelector("#inputFrame"),
        inputInterest = document.querySelector("#inputInterest");

    mask(inputFrame);
    mask(inputInterest);

        // modalFrame.style.display = "none";

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
}

module.exports = form;