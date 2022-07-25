const books = require('./base')

function fantasyOrScienceFiction(objList) {
    return objList.filter(element => element.genre === 'Fantasia' ||element.genre === 'Ficção Científica')
}

console.log(fantasyOrScienceFiction(books))