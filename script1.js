function repeatString(texto, repeticiones) {
    let resultado = ""
    for (let i = 0; i < repeticiones; i++) {
        resultado += texto;
    }
    return resultado
}

// Ejemplo de uso:
console.log(repeatString("Hola, mundo!", 3)); 