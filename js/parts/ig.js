function ig() {
    let btnIgprev = document.querySelector(".ig-prev"),
        btnIgnext = document.querySelector(".ig-next"),
        igPostNum = 1,
        urls = [
        "p/Bhvhnoyhhs0/",
        "p/BnsfxlLBPFe/",
        "p/BnwSx75lKVR/",
        "p/BodgLRVB3Wa/",
        "p/Bht1fD7hMpq/",
        // "p/BcagLIDlB9h/",
        "p/BVq96PGFA0Z/",
        "p/BbytzKMlLLH/"
    ];

    getIg(urls[0]);

    btnIgnext.addEventListener('click', () => {
        if(igPostNum == urls.length - 1){
            igPostNum = 0;
        } else{
            igPostNum++;
        }
        getIg(urls[igPostNum]);
    });

    btnIgprev.addEventListener('click', () => { //пофиксить первый клик
        if(igPostNum == 0){
            igPostNum = urls.length - 1;
        } else{
            igPostNum--;
        }
        getIg(urls[igPostNum]);
    });

    function getIg(url){
        let divIg = document.querySelector(".ig-post");
        divIg.style.transition = "0.5s";

        let request = new XMLHttpRequest();

        request.open("GET", "https://api.instagram.com/oembed?url=http://instagr.am/" + url + "&maxwidth=320&omitscript=true&hidecaption=true");
        request.send();

        request.addEventListener('readystatechange', () => {
            if (request.readyState == 4 && request.status == 200){
                let data = JSON.parse(request.response);
                divIg.style.opacity = 0;

                setTimeout(() => {

                    divIg.innerHTML = data.html;
                    instgrm.Embeds.process();

                    setTimeout(() => {divIg.style.opacity = 1;}, 600);
                }, 500);
            }

        });
    }
}

module.exports = ig;