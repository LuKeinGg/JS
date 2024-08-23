// Selecciono el span que contiene el contador y el botón por su ID
const contador = document.getElementById("contador");
const boton = document.getElementById("incrementarBoton");

let valorContador = 0;

//Añado el evento de click al boton
boton.addEventListener("click", function () {
    //Indico que el contador se vaya aumentado en 1
    valorContador += 1;

    // Actualizo el texto dentro del span con el nuevo valor del contador
    contador.textContent = valorContador;

});