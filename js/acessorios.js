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

// Funções
function setadireita(count, modelo){
    if(count != 2){
        count = count + 1;
        modelo.style.marginLeft = `-${100 * count}%`;
    }else{
        count = 0;
        modelo.style.marginLeft = `-${100 * count}%`;
    }
    return count;
}

function setaesquerda(count, modelo){
    if(count != 0){
        count = count - 1;
        modelo.style.marginLeft = `-${100 * count}%`;
    }else{
        count = 2;
        modelo.style.marginLeft = `-${100 * count}%`;
    }
    return count;
}

//  Linha 1
const setaDir1 = document.querySelector('#setadirlinha1');
const setaEsqr1= document.querySelector('#setaesqlinha1');
const modelo1 = document.querySelector('.linha1');

let count1 = 0

setaDir1.addEventListener('click', function(){
    count1 = setadireita(count1, modelo1);
})


setaEsqr1.addEventListener('click', function(){
    count1 = setaesquerda(count1, modelo1);
})


//  Linha 2
const setaDir2 = document.querySelector('#setadirlinha2');
const setaEsqr2= document.querySelector('#setaesqlinha2');
const modelo2 = document.querySelector('.linha2');

let count2 = 0

setaDir2.addEventListener('click', function(){
    count2 = setadireita(count2, modelo2);
})


setaEsqr2.addEventListener('click', function(){
    count2 = setaesquerda(count2, modelo2);
})

//  Linha 3
const setaDir3 = document.querySelector('#setadirlinha3');
const setaEsqr3= document.querySelector('#setaesqlinha3');
const modelo3 = document.querySelector('.linha3');

let count3 = 0

setaDir3.addEventListener('click', function(){
    count3 = setadireita(count3, modelo3);
})


setaEsqr3.addEventListener('click', function(){
    count3 = setaesquerda(count3, modelo3);
})

//  Linha 4
const setaDir4 = document.querySelector('#setadirlinha4');
const setaEsqr4= document.querySelector('#setaesqlinha4');
const modelo4 = document.querySelector('.linha4');

let count4 = 0

setaDir4.addEventListener('click', function(){
    count4 = setadireita(count4, modelo4);
})


setaEsqr4.addEventListener('click', function(){
    count4 = setaesquerda(count4, modelo4);
})