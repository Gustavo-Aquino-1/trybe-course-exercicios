const books = require('./base')

  function formatedBookNames(objList) {
    return objList.map(element => `${element.name} - ${element.genre} - ${element.author.name}`)
  }

  console.log(formatedBookNames(books))