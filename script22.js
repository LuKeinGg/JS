// Seleccio el párrafo por su ID
const windowSizeParagraph = document.getElementById("windowSize");

// Función para actualizar el tamaño de la ventana en el párrafo
function updateWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    windowSizeParagraph.textContent = `Tamaño actual de la ventana: ${width}px de ancho y ${height}px de alto`;
}

// Esto es para detectar cuando se cambia el tamaño de la ventana
window.addEventListener("resize", updateWindowSize);

updateWindowSize();
