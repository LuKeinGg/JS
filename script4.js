function sumAll(a, b) {
    let suma = 0;

    // AMe aseguro de que 'a' sea menor o igual que 'b'
    if (a > b) {
        [a, b] = [b, a];  // Intercambio valores si 'a' es mayor que 'b'
    }

    for (let i = a; i <= b; i++) {
        suma += i;
    }

    console.log(suma);
}

// Ejemplo de uso:
sumAll(1, 5);  // Salida: 15 (1 + 2 + 3 + 4 + 5)
sumAll(5, 1);  // Salida: 15 (1 + 2 + 3 + 4 + 5)
sumAll(4, 12);  // Salida: 72 (4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12)
