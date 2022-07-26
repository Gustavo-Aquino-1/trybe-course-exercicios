const books = require('./base-2-3-4')

const namesAuthors = (objList) => {
   return objList.reduce((acc,cur) => {
       return acc + cur.author.name
    },'')
}

console.log(namesAuthors(books))