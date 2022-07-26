const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    return arrays.reduce((acc,cur) => {
       return acc.concat(cur)
    },[])
  }

  console.log(flatten())

  //coloquei um array como valor inical e fui concatenando os elementos nele
  //vale lembrar que o conact pega apensas os valores , se esses elementos estivesses dentro de outos arrays esses array seriam 'eliminados' e seriam resgatos só os valores assim como no exemplo acima
  