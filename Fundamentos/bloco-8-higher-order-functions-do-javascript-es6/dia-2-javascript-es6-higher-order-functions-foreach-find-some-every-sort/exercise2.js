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

  //2

  function smallerName() {
    let nameBook;
    // escreva aqui o seu código
     let tamanhos = [] 
     let namesBook = books.forEach((element) => tamanhos.push(element.name.length))
     let minTamanho = tamanhos.sort((a,b) => a-b)
     let min = minTamanho[0]
     let livroObj = books.find((element) => element.name.length === min )
     return livroObj.name
    // Variável nameBook que receberá o valor do menor nome;
    // return nameBook;
  }

  console.log(smallerName())

  //forma alternativa

  function smallerName() {
    let nameBook; //como nameBook é vazio ele é considerado um falsy , ou seja falso
    //logo no if eu coloquei o contario de nameBook no caso true , ou seja quando ela estiver vazia o contrario vai ser true so que depois que ela ja adcionoiu um um elemento om contrario sera false!! 
    // escreva aqui o seu código
  
    books.forEach((book) => {
      if (!nameBook || book.name.length < nameBook.length) { //leia o !nameBook (se ela estiver vazia)
        nameBook = book.name;
      }
    });
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }