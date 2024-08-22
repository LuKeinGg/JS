function getOdds(nums) {
    // La funcion filter recibe una funcion como parametro y devuelve un nuevo arreglo con los
    // elementos que cumplan con la condicion de la funcion que se le pasa como parametro
    return nums.filter(num => num % 2 !== 0);

}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getOdds(numeros)); 