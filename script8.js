function finTheOldest(people) {

    return people.reduce((oldest, person) => {
        // Esto calcula la edad actual de la persona
        const currentAge = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
        // Esto calcula la edad actual de la persona más vieja
        const oldestAge = (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth;

        // Se compara la edad actual de la persona con la edad actual de la persona más vieja
        return currentAge > oldestAge ? person : oldest;
    });

}

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

console.log(finTheOldest(people));  // Salida: { name: 'Ray', yearOfBirth: 1962, yearOfDeath: 2011 }
