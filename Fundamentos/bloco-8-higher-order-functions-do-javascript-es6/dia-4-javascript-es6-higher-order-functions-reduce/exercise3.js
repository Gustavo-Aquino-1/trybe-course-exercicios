const books = require('./base-2-3-4')

const average = (objList) => {
   return objList.reduce((acc,cur) => {
        let curAge = cur.releaseYear - cur.author.birthYear
        return acc + curAge
    },0) / books.length
}

console.log(average(books))