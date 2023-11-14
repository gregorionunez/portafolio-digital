const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const vermas = document.querySelector('.cerrar-ver-mas');
const cerrarvermas = document.querySelector('.ver-mas');
const estudiosdesc = document.querySelector('.estudios-desc');

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

cerrarvermas.addEventListener("click", () => {
    var displayValue = window.getComputedStyle(estudiosdesc).display;

    if(displayValue === 'block'){
        estudiosdesc.style.display = 'none';
    }else{
        estudiosdesc.style.display = 'block';
    }
    
})

vermas.addEventListener("click", () => {
    var displayValue = window.getComputedStyle(estudiosdesc).display;

    if(displayValue === 'block'){
        estudiosdesc.style.display = 'none';
    }else{
        estudiosdesc.style.display = 'block';
    }
    
})

function irArriba(){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        var botonarriba = document.getElementById('boton-arriba');
        if(scroll>300){
            botonarriba.style.right = 20 + "px";
        }else{
            botonarriba.style.right = -100 + "px";
        }
    })
}

irArriba();