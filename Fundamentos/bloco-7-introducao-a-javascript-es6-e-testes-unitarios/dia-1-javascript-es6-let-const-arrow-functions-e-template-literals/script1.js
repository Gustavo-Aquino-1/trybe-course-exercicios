
    // 🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas.

    // Modifique a estrutura da função para que ela seja uma arrow function;
    // Modifique as variáveis para que respeitem o escopo onde estão declaradas;
    // Modifique as concatenações para template literals.




// 🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas. 
/* function testingScope(escopo) {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true); */

//Modifique a estrutura da função para que ela seja uma arrow function; 
// const testingScope = (escopo) => {
//     if (escopo === true) {
//         let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//         ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//         console.log(ifScope);
//       } else {
//         let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//         console.log(elseScope);
//       }
// }

// testingScope(true);
 
//Modifique as concatenações para template literals. 

// const testingScope = (escopo) => {
//     if (escopo === true) {
//         let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//         ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//         console.log(ifScope);
//       } else {
//         let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//         console.log(elseScope);
//       }
// }

// testingScope(true);

// FINALIZADO EX 1

// INICO EX 2


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
function ordernaNum(a, b){
    return (a - b); //se a - b === 0 eles são iguais e permanecem inalteraveis , se for menor que 0 significa que o b é maior logo , o a deve ter um indice anterior ao de b,e se subtração de a - b for maior que zero signica que o a é maior  e que o b deve ter um indice anterior ao a.

    //primeiro exemplo 13 - 3 , é 10 ou seja > 0 , o a é maior que o b , entao o b assume um indice anterior ao de 'A' no caso o indice 0 , e o a como é maior vem depois de 'B'. 
}

const ordena = array => array.sort(ordernaNum);


console.log(`Os números ${ordena(oddsAndEvens).join(',')} se encontram ordenados de forma decrescente`)


/* 
const oddsAndEvens = [13, 3, 4, 10, 7, 2]; */

/* const sortArrayBonus = (array) => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
};

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`); */