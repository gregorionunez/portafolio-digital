const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
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