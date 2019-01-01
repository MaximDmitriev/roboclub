function experts() {
    let expNextBtn = document.querySelector(".experts-btn-next"),
        expPrevBtn = document.querySelector(".experts-btn-prev"),
        expertSlide = document.querySelectorAll(".experts-slide");

    expNextBtn.addEventListener('click', () => {
        expertSlide.forEach((item) => item.classList.toggle("active"));
    });

    expPrevBtn.addEventListener('click', () => {
        expertSlide.forEach((item) => item.classList.toggle("active"));
    });
}

module.exports = experts;