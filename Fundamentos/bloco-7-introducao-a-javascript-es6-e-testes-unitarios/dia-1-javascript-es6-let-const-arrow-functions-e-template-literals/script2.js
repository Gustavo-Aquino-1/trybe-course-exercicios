// PARTE 2

// const factorial = numero => {
//     let factorial = 1;
//     while (numero >= 1){
//         factorial *= numero
//         numero --
//     }
//     return factorial
// }

// console.log(factorial(3))

/* const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));  */

//repare que ele chama a função na proprio operador


//exercicio 2  
/* 
const returnBiggerWord = phrase => {
    const array = phrase.split(' ')
    array.sort((a,b) => a.length - b.length) //mesma logica do sort do script1.js , porém em vez de fazer subtração de dois numeros , faço a subtração do tamanho das duas palavras
    return array[array.length-1]
}

console.log(returnBiggerWord('olha la o paralelogramo')) */


// 4 - 🚀 Crie duas funções JavaScript com as seguintes especificações: 

const function1 = nome => {
    const frase = `Tryber ${nome} aqui`;
    return frase;
}

/* console.log(function1('Lucas')) */

const function2 = parametroFunction1 => {
    const skills = ['JavaScript','Python','CSS','HTML']
   /*  const text = `${parametroFunction1} , Minhas quatro principais hablidades são ${skills.join(',')}` */
    const text = `${parametroFunction1} , Minhas quatro principais hablidades são:
    - ${skills[0]}
    - ${skills[1]}
    - ${skills[2]}
    - ${skills[3]}`
    return text
}

console.log(function2(function1('Gustavo Aquino')))

