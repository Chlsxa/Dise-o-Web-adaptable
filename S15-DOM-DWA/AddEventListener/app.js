const btnAumentar = document.querySelector(".btn-info");

const span = document.getElementById("span");

//crear contador 
let contador = 0;

btnAumentar.addEventListener("click", () => {
    console.log("Me diste click, así que aumentaré");
    //span.textContent = 1;
    contador++;
    span.textContent = contador;
});

const btnDisminuir = document.querySelector(".btn-danger");

btnDisminuir.addEventListener("click", () => {
    //span.textContent =1;
    contador--;
    span.textContent = contador;
})