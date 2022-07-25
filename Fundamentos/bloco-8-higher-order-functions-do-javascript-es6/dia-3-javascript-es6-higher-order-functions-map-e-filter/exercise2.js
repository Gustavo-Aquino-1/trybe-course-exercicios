const books = require('./base')

function nameAndAge(objList) {
    return objList.map(element => ({age: element.releaseYear - element.author.birthYear , author: element.name})).sort((a,b) => a.age - b.age)
  }

  console.log(nameAndAge(books))