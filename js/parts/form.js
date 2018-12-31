function form() {
    let btnModal = document.querySelectorAll(".btn-modal"),
        modalForm = document.querySelector(".modal-frame-form"),
        modalFrame = document.querySelector(".modal-frame"),
        btnClose = document.querySelector(".close-btn");

        modalFrame.style.display = "none";

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