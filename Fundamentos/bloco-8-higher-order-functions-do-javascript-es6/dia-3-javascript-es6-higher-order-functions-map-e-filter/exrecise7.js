const books = require('./base')


function authorWith3DotsOnName() {
    return books.find(element => {
        const regExp = /(\w+\.)/gi
        const condi = element.author.name.match(regExp)
        return condi.length === 3;
    }).name;
}

console.log(authorWith3DotsOnName())

