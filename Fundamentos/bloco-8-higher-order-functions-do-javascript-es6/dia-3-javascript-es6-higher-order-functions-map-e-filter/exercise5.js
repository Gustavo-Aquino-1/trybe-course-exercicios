const books = require('./base')


function fantasyOrScienceFictionAuthors(booksList) {
    return booksList.filter(element => element.genre === 'Fantasia' || element.genre === 'Ficção Científica').map(element => element.author.name).sort()
}

console.log(fantasyOrScienceFictionAuthors(books))