const lista=document.querySelector("#lista");
const inputNumero=document.querySelector("input");


function generarHola() {
    let numeroIngresado=inputNumero.value;
    for (let i = 1; i <= numeroIngresado ; i++ ) {
       lista.innerHTML += `<p>Hola ${i} <\p>`;
        
    }
} 