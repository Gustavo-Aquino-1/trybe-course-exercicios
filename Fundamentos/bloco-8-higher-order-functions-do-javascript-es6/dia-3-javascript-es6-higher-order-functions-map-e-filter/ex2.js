const books = require('./base')

const nameAndAge = (objList) => {
     
    let newArray = objList.map(element => {
        const idade = element.releaseYear - element.author.birthYear
        const obj = {age:idade,author:element.author.name}
        return obj
    })

    return newArray.sort((a,b) => a.age - b.age)
}

console.log(nameAndAge(books))