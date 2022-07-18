const techList = (array,nome) => {
    let result = [];
    let arrayOrdened = array.sort()
    for(let item of arrayOrdened){
        result.push({tech: item , name: nome})
    }
    if(result.length === 0){
        return "Vazio!"
    }
    return result
}

module.exports = techList;