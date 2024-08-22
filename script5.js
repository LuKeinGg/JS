function leapYears(año) {
    if (año % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(leapYears(2020)); //  tendría que retornar true