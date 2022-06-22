//1

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//for(let number of numbers){
//    console.log(number)
//}

//2

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for(let number of numbers){
    soma += number
}
console.log(soma)
 */


//3

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for(let number of numbers){
    soma += number
}
let media = soma / numbers.length
console.log(media) */

//4

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for(let number of numbers){
    soma += number
}
let media = soma / numbers.length

if (media > 20 ){
    console.log('valor maior que 20')
}else{
    console.log('menor que 20')
}
 */

//5

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
for(let i = 0 ; i < numbers.length ; i++){
    if(i === 0){
        maior = numbers[0]
    }else{
        if(numbers[i] > maior){
            maior = numbers[i]
        }
    }
}
console.log(maior) */

//6
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
for(let i = 0 ; i < numbers.length ; i++){
    if(numbers[i] % 2 !== 0){
        impar += 1
    }
}

if(impar > 1){
    console.log(`${impar} números ímpares encontrados!`)
}else{
    console.log('Nenhum numero impar!')
}
 */


//7

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 0;
for(let i = 0 ; i < numbers.length ; i++){
    if(i === 0){
        menor = numbers[0]
    }else{
        if(numbers[i] < menor){
            menor = numbers[i]
        }
    }
}
console.log(menor)  */

//8

let array = []
for(let i = 1 ; i <= 25 ; i++){
    array.push(i)
}
console.log(array)

for(let number of array){
    div = number / 2
    console.log(div)
}