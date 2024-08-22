// Selecciono los elementos que necesito
const input = document.getElementById("miInput");
const boton = document.getElementById("miBoton");
const botonEliminar = document.getElementById("eliminarBoton");
const lista = document.getElementById("miLista");

// Añado el evento click al botón
boton.addEventListener("click", function () {
    // Obtengo el valor del input
    const nuevoElemento = input.value;

    // Verifico que el input no esté vacío
    if (nuevoElemento.trim() !== "") {
        // Creo un nuevo <li> con el texto del input
        const li = document.createElement("li");
        li.textContent = nuevoElemento;

        // Añado el <li> a la lista 
        lista.appendChild(li);

        // 
        input.value = "";
    }
});


// Añado el evento click al botón de eliminar
botonEliminar.addEventListener("click", function () {
    // Obtengo el último elemento de la lista
    const ultimoElemento = lista.lastElementChild;

    // Verifico que haya un último elemento
    if (ultimoElemento) {
        // Elimino el último elemento <li> de la lista
        lista.removeChild(ultimoElemento);
    }
});