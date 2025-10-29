const btnMenu = document.getElementById('btnMenu');
const btnCloseMenu = document.getElementById('btnCloseMenu');
const nav = document.getElementById('nav');


/* creación backdrop */
const backdrop = document.createElement("div");
backdrop.classList.add("backdrop");
document.body.appendChild(backdrop);


/* Funciones */
btnMenu.addEventListener('click' , ()=>{
    nav.classList.add('active');
    backdrop.classList.add("active");
});

btnCloseMenu.addEventListener('click' , ()=>{
    nav.classList.remove('active');
    backdrop.classList.remove("active");
});


