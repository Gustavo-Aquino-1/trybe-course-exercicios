const books = require('./base-2-3-4')

const longestBook = (objList) => {
    return objList.reduce((acc,cur) => {
     let accLength = acc.name.length   
     let curLength = cur.name.length
     return accLength > curLength ? acc : cur 
    })
}

console.log(longestBook(books))