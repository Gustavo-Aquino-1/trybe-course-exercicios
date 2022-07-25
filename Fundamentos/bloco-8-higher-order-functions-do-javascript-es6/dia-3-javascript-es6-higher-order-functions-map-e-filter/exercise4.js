const books = require('./base')


function oldBooksOrdered(objList) {
    return objList.filter(element => 2022 - element.releaseYear > 60).sort((a,b) => a.releaseYear - b.releaseYear)
}

console.log(oldBooksOrdered(books))