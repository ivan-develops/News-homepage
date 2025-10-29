const btnMenu = document.getElementById('btnMenu');
const btnCloseMenu = document.getElementById('btnCloseMenu');
const nav = document.getElementById('nav');
const backdrop = document.createElement("div");


function openMenu() {
    nav.classList.add('active');
    backdrop.classList.add("active");
}

function closeMenu() {
    nav.classList.remove('active');
    backdrop.classList.remove("active");
}

function createBackdrop() {
    backdrop.classList.add("backdrop");
    document.body.appendChild(backdrop);
}


createBackdrop();
btnMenu.addEventListener('click' , openMenu);
btnCloseMenu.addEventListener('click' , closeMenu);