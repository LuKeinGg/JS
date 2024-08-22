function removeFromArray(arreglo, item) {
    const index = arreglo.indexOf(item);

    if (index !== -1) {
        arreglo.splice(index, 1);
    }

    console.log(arreglo);
}

// Ejemplo de uso:
let frutas = ["manzana", "plátano", "cereza", "naranja"];
removeFromArray(frutas, "cereza");  // Salida: ["manzana", "plátano", "naranja"]
