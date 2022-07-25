const books = require('./base')

function oldBooks(booksList) {
    // escreva seu código aqui
    return booksList.filter(element => 2022 - element.releaseYear > 60).map(element => element.name)
}

console.log(oldBooks(books))