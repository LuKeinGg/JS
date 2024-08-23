//Lista de personas
const personas = ["Carlos", "Ana", "Marta", "Juan", "Sofía", "Pedro", "Lucía", "Miguel"];

// Elemento de la lista y el input de búsqueda
const lista = document.getElementById("listaPersonas");
const inputBusqueda = document.getElementById("busquedaInput");

// Función para renderizar la lista de personas
function renderizarLista(filtro = "") {
    // Limpio la lista antes de renderizar
    lista.innerHTML = "";

    // Filtro y renderizo los elementos de la lista
    personas
        .filter(persona => persona.toLowerCase().includes(filtro.toLowerCase()))
        .forEach(persona => {
            const li = document.createElement("li");
            li.textContent = persona;
            lista.appendChild(li);
        });
}

// A cada cambio en el input de búsqueda, se renderiza la lista con el filtro
inputBusqueda.addEventListener("input", function () {
    // Aca se obtiene el valor del input y se pasa como filtro
    const filtro = inputBusqueda.value;
    renderizarLista(filtro);
});

// Renderizar la lista inicial (sin filtro)
renderizarLista();
