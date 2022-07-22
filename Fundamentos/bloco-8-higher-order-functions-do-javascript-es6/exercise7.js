const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:


// console.log(authorUnique())

// //formal alternativa

// const expectedResult = false;

function authorUnique() {
  return books.every((book) => //para cadab book eu farei o seguinte
    !books.some((bookSome) => //é tipo um for encadeado , repare bem , veja quem eu tenho duas variaveis bookSome e book , é so lembrar do index e do index2 do for encadeado
      (bookSome.author.birthYear === book.author.birthYear) //porem aqui ele daria um erro que seria constar que o porprio elemento é igual a ele , para corrigir esse erro ele difrenciou por nome , ele so consta se o nome for diferente , se nao ele nao consta
      && (bookSome.author.name !== book.author.name))); //vai retornar true ou false ( o some resulta em true mas a exlamção antes dele o converte para fals)
}

console.log(authorUnique())

//Olhe o exemplo abaixo ---------------------------------//-----------------------------//---------------------------------------


{
function authorUnique() {
    return books.every((index1) => //para cadab index1 eu farei o seguinte , INDEX 1 POIS FAREI ISSO COM TODOS OS ELEMENTOS , EXEMPLO: VOU PEGAR PRIMEIRO OBJETO E COMPARAR COM TODOS OS OUTOS PORÉM VOU FAZER ISSO COM TODOS , POR ISSO O USO DO 'FOR ' ENCADEADO
      !books.some((index2) => //é tipo um for encadeado , repare bem , veja quem eu tenho duas variaveis index2 e index1 , é so lembrar do index e do index2 do for encadeado
        (index2.author.birthYear === index1.author.birthYear) //porem aqui ele daria um erro que seria constar que o porprio elemento é igual a ele , para corrigir esse erro ele difrenciou por nome , ele so consta se o nome for diferente , se nao ele nao consta
        && (index2.author.name !== index1.author.name))); //vai retornar true ou false ( o some resulta em true mas a exlamção antes dele o converte para fals)
  }
  
  console.log(authorUnique())
}