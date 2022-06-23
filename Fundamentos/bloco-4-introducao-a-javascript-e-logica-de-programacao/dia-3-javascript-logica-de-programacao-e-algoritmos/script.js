//1
/* 
1-criar uma variavel para guardar o fatorial
2 - criar um loop for.
3 - exibir o fatorial */

/* let fatorial = 10;
for(let i = fatorial -1 ; i > 0; i -= 1){
    fatorial *= i
}

console.log(fatorial) */

//2
/* 1 - criar uma variavel para receber a nova palavra 
2 - loop for
3 - exibir nova palavra */

/* let word = 'tryber';
let reverseWord = ''
for(let i = word.length - 1 ; i >= 0  ; i -= 1){
    reverseWord += word[i]  //deve ser colocado += para nao ser sobre escrito!!
}

console.log(reverseWord)
 */


//3

/* 1 - criar a variavel Maior 
2 - comparar todos elementos atraves do loop for 
3 - exebir variavel maior.
 */

/* let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior;
for(let i = 0 ;  i < array.length ; i ++){
    if(i === 0){
        maior = array[i]
    }else{
        if(array[i].length > maior.length){
            maior = array[i]
        }
    }
} */

/* console.log(maior) */

/* 1 - criar a variavel menor
2 - comparar todos elementos atraves do loop for 
3 - exebir variavel menor. */

/* let array = ['java', 'javascript', 'python', 'html', 'css'];
let menor;
for(let i = 0 ;  i < array.length ; i ++){
    if(i === 0){
        menor = array[i]
    }else{
        if(array[i].length < menor.length){
            menor = array[i]
        }
    }
}

console.log(menor)
 */

//4
/* 1 - cirar loop para ir de 2 a 50
2 - loop parar dividir esses numeros
3- variavel para guradar divisoes
4- exibir o maior primo  */

let maior = 0 
let numDivs = 0 
for(let i = 2 ; i <= 50 ; i ++){
    for(let index =1 ; index <=50 ; index ++){
        if(i % index === 0){
            numDivs += 1
        }
    }
    if(numDivs === 2){  //cuidado com a identação esse if so pode acontecer apos o de cima estar totoalmete finalaizado .
        if(i === 2){
            maior = i 
        }else{
            if(i > maior){
                maior = i 
            }
        }
    }
    numDivs = 0;
}

console.log(maior)