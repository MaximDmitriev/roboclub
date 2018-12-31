function faq() {
    let faqBtn = document.querySelectorAll(".question-btn"),
        faqItem = document.querySelectorAll(".question"),
        faqItemFull = document.querySelectorAll(".row-body"),
        toggle = false;

    function deploy(n){
        faqItem[n].classList.add("full");
        faqBtn[n].classList.add("fwd");
        setTimeout(() =>{
            faqItemFull[n].style.display = "flex";
        }, 500);
    }

    function rollUp(n){
        faqItem[n].classList.remove("full");
        faqBtn[n].classList.remove("fwd");
        faqItemFull[n].style.display = "none";
    }


    faqBtn.forEach((item, i) => {
        item.addEventListener('click', (event) => {
    
            if(event.target.parentElement.classList.contains("fwd")){
                rollUp(i);
                toggle = !toggle;
            }
            else{
                faqItem.forEach((item, i) => { 
                    rollUp(i)
                });
                deploy(i);
            }  
        });
    }); 
}

module.exports = faq;