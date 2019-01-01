function slider() {
    let slide = document.querySelectorAll(".program-wrapper"),
        nextBtn = document.querySelector(".next"),
        prevBtn = document.querySelector(".prev"),
        currentSlide = 0;

    slide.forEach((item) =>{
        item.style.display = "none";
    });

    slide[0].style.display = "block";

    function slideToNext(){
        slide[currentSlide].style.display = "none";

        if (currentSlide < slide.length - 1){
            currentSlide++;
            slide[currentSlide].style.display = "block";
        } else {
            currentSlide = 0;
            slide[currentSlide].style.display = "block";
        }
    }

    function slideToPrev(){
        slide[currentSlide].style.display = "none";

        if (currentSlide == 0) {
            currentSlide = slide.length - 1;
            slide[currentSlide].style.display = "block";
        } else {
            currentSlide--;
            slide[currentSlide].style.display = "block";
        }
    }
  
    let autoSlide = setInterval(function(){slideToNext();}, 7000);


    nextBtn.addEventListener('click', () => {
        clearInterval(autoSlide);
        slideToNext();
        autoSlide = setInterval(function(){slideToNext();}, 7000);
        

    });

    prevBtn.addEventListener('click', () => {
        clearInterval(autoSlide);
        slideToPrev();  
        autoSlide = setInterval(function(){slideToNext();}, 7000);     
    });
}

module.exports = slider;