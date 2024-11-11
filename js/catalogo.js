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
const feminina = document.querySelector('.Feminina')
let position = 1

seletores.forEach((seletor, index) => {
    seletor.addEventListener('click', () => {
        
        seletores.forEach(s => s.classList.remove("selactive"));
        
        seletor.classList.add("selactive");
        
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
        switch(index) {
            case 0:
                feminina.style.marginLeft = "0%";
                break;
            case 1:
                feminina.style.marginLeft = "-100%";
                break;
            case 2:
                feminina.style.marginLeft = "-200%";
                break;
        }

        seletores.forEach((s, i) => {
            if (i !== index) {
                s.style.backgroundColor = ""; 
            }
        });
    });
});



// Carrossel

// Funções
function setadireita(count, modelo){
    if(count != 4){
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
        count = 4;
        modelo.style.marginLeft = `-${100 * count}%`;
    }
    return count;
}

// Feminino PRAIA
const setaDirFemPraia = document.querySelector('#setadirpraiafem');
const setaEsqrFemPraia = document.querySelector('#setaesqpraiafem');
const modeloFemPraia = document.querySelector('.modelofempraia1');

let countFemPraia = 0

setaDirFemPraia.addEventListener('click', function(){
    countFemPraia = setadireita(countFemPraia, modeloFemPraia);
})


setaEsqrFemPraia.addEventListener('click', function(){
    countFemPraia = setaesquerda(countFemPraia, modeloFemPraia);
})

//  Feminino Roupas
const setaDirFemRoupa = document.querySelector('#setadirfemroupa');
const setaEsqrFemRoupa = document.querySelector('#setaesqfemroupa');
const modeloFemRoupa = document.querySelector('.modelofemroupa1');

let countFemRoupa = 0

setaDirFemRoupa.addEventListener('click', function(){
    countFemRoupa = setadireita(countFemRoupa, modeloFemRoupa);
})


setaEsqrFemRoupa.addEventListener('click', function(){
    countFemRoupa = setaesquerda(countFemRoupa, modeloFemRoupa);
})


//  Geral Roupas feminina
const setaDirGeralFem = document.querySelector('#setadirgeralfem');
const setaEsqrGeralFem = document.querySelector('#setaesqgeralfem');
const modeloGeralFem = document.querySelector('.modelogeralfem1');

let countGeralFem = 0

setaDirGeralFem.addEventListener('click', function(){
    countGeralFem = setadireita(countGeralFem, modeloGeralFem);
})


setaEsqrGeralFem.addEventListener('click', function(){
    countGeralFem = setaesquerda(countGeralFem, modeloGeralFem);
})


// Geral Roupas feminina
const setaDirGeralMas = document.querySelector('#setadirgeralmas');
const setaEsqrGeralMas = document.querySelector('#setaesqgeralmas');
const modeloGeralMas = document.querySelector('.modelogeralmas1');

let countGeralMas = 0

setaDirGeralMas.addEventListener('click', function(){
    countGeralMas = setadireita(countGeralMas, modeloGeralMas);
})


setaEsqrGeralMas.addEventListener('click', function(){
    countGeralMas = setaesquerda(countGeralMas, modeloGeralMas);
})


// Praia Masculino
const setaDirMasPraia = document.querySelector('#setadirmaspraia');
const setaEsqrMasPraia = document.querySelector('#setaesqmaspraia');
const modeloMasPraia = document.querySelector('.modelomaspraia1');

let countMasPraia = 0

setaDirMasPraia.addEventListener('click', function(){
    countMasPraia = setadireita(countMasPraia, modeloMasPraia);
})


setaEsqrMasPraia.addEventListener('click', function(){
    countMasPraia = setaesquerda(countMasPraia, modeloMasPraia);
})

// Praia Masculino
const setaDirMasRoupa = document.querySelector('#setadirmasroupa');
const setaEsqrMasRoupa = document.querySelector('#setaesqmasroupa');
const modeloMasRoupa = document.querySelector('.modelomasroupa1');

let countMasRoupa = 0

setaDirMasRoupa.addEventListener('click', function(){
    countMasRoupa = setadireita(countMasRoupa, modeloMasRoupa);
})


setaEsqrMasRoupa.addEventListener('click', function(){
    countMasRoupa = setaesquerda(countMasRoupa, modeloMasRoupa);
})