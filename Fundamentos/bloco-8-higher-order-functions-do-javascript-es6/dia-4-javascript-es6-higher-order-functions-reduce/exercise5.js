const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

  const quantiA = (string) => {
    let as = 0
    for(let letter of string.toLowerCase()){
        if(letter === 'a'){
            as += 1
        }
    }
    return as
  }
  
  function containsA() {
    // escreva seu código aqui
   return names.reduce((acc,cur) => {
      cur = quantiA(cur)  
      return acc + cur
    },0)
  }

  console.log(containsA())