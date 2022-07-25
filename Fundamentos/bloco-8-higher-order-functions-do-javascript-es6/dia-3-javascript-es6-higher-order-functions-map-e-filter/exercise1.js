const books = require('./base')

const formatedBooks = (booksList) => {
    return booksList.map(element => `${element.name} - ${element.genre} - ${element.author.name}`)
}

console.log(formatedBooks(books))