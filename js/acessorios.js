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