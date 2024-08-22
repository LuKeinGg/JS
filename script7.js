function getTheTitles(books) {
    // Utilizo el método map para crear un nuevo arreglo solo con los títulos
    const titles = books.map(book => book.title);

    console.log(titles);

    return titles;


}

const books = [
    {
        title: 'The Lord of The Rings',
        author: 'J.R.R Tolkien'
    },
    {
        title: 'Harry Potter',
        author: 'J.K Rowling'
    }
]

getTheTitles(books);  // Salida: ['The Lord of The Rings', 'Harry Potter']