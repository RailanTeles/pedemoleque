// navbaar
const navbarIcon = document.querySelector("#ImgNavbar");
const navBar = document.querySelector(".Navbar");
const wave = document.querySelector(".wavenabar");
const overlay = document.querySelector(".overlay");


navbarIcon.addEventListener('click', function(){
    navBar.classList.add("On");
    wave.classList.add("OnWave");
    overlay.classList.add("OnOverlay");
})

overlay.addEventListener('click', function(){
    navBar.classList.remove("On");
    wave.classList.remove("OnWave");
    overlay.classList.remove("OnOverlay");
})


// Seletor
const seletores = document.querySelectorAll(".sel");
let position = 1

seletores.forEach((seletor, index) => {
    seletor.addEventListener('click', () => {
        
        seletores.forEach(s => s.classList.remove("selactive"));
        
        seletor.classList.add("selactive");
        // console.log(position); //Usar position para se referir a página buscada anteriormente
        switch(index) {
            case 0:
                seletor.style.backgroundColor = "#D33699";
                position = 0;
                break;
            case 1:
                seletor.style.backgroundColor = "#3B06A2";
                position = 1;
                break;
            case 2:
                seletor.style.backgroundColor = "#48A8F9";
                position = 2;
                break;
        }
        seletores.forEach((s, i) => {
            if (i !== index) {
                s.style.backgroundColor = ""; 
            }
        });
    });
});
