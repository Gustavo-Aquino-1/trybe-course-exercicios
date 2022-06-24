//1


/* function palindromo(string){
    let reverseWord = '' 
    for(let i = string.length -1 ;  i >= 0 ; i--){
        reverseWord += string[i]
    }
    if(reverseWord === string){
        console.log('palindromo')
    }else{
        console.log('Nao palindromo')
    }
}

palindromo('ana');
 */

//2

/* function maior(array){
    let maior = 0 
    for(let i = 0 ; i < array.length ; i ++){
        if(i === 0 ){
            maior = array[i]
        }else{
            if(array[i] > maior){
                maior = i
            }
        }
    }
    return maior
}

console.log(maior([2, 3, 6, 7, 10, 1])) */

//3


/* function menor(array){
    let menor = array[0]
    for(let i = 0 ; i < array.length ; i+= 1){
        if(array[i] < menor){
            menor = i
        }
    }  
    return menor
}
   

console.log(menor([2, 4, 6, 7, 10, 0, -3])) */

//4

/* function maxName(nomes){
    let maior ;
    let nome;
    for(let i = 0 ; i < nomes.length ; i ++){
        if(i === 0){
            maior = nomes[i].length
        }else{
            if(nomes[i].length > maior ){
                maior = nomes[i].length
                nome = nomes[i]
            }
        }
    }
    return nome
}

console.log(maxName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); */

//5

/* function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {  // assim ele vai comparar o index(1) com todos os outros
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0; //resetando para começar novamente
    }
    return numeros[indexNumeroRepetido];
  } */

/* 
function sum(n){
    let array = [];
    for(let i = 0 ; i <= n ; i++){
        array.push(i)
    }
    let soma = 0 
    for(let i of array){
        soma += i
    }
    return soma
}

console.log(sum(5)); */


//7

/* function comp(word,wordend){
    let fimWord = word[word.length - 2] + word[word.length - 1]
    let isTrue = false;
    if(fimWord === wordend){
        isTrue = true
    }else{
        isTrue = false;
    }
    return isTrue
}

/* console.log(comp('trybe' , 'be')) */
/* console.log(comp('hoje' , 'je'))  */


let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

 console.log(`O morador do bloco 2 de nome ${moradores.blocoDois[1].nome} ${moradores.blocoDois[1].sobrenome} mora no ${moradores.blocoDois[1].andar}° , apartamento:  ${moradores.blocoDois[1].apartamento}`) 