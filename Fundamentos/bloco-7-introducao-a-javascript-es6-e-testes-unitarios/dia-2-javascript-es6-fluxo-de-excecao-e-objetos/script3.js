const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//   const criarTurno = (objeto,chave,valor) => {
//     objeto[chave] = valor;
//     console.log(objeto)
//   }

//   const chaveTurno = Object.keys(lesson3)[3] 
// //   console.log(chaveTurno , lesson3[chaveTurno])
//   criarTurno(lesson2,chaveTurno,lesson3[chaveTurno])

//   //2
//   const listKeys = obj => Object.keys(obj);
//   console.log(listKeys(lesson3))

//   //3
//   const lengthObj = obj => Object.keys(obj).length;
//   console.log(lengthObj(lesson3))

//   //4
//   const valuesObj = obj => Object.values(obj);
//   console.log(valuesObj(lesson2))

//   //5
//   let allLessons = Object.assign({},{lesson1,lesson2,lesson3}) //criando um novo objeto , junatnado os 3 objetos em um só e colocando este em um objeto vazio , olhe o console.log!! 
//   console.log(allLessons)
  
//   //6
//   const allStudents = () => {
//     const lesson1Students = allLessons.lesson1.numeroEstudantes
//     const lesson2Students = allLessons.lesson2.numeroEstudantes
//     const lesson3Students = allLessons.lesson3.numeroEstudantes
//     const soma = lesson1Students + lesson2Students + lesson3Students
//     return soma
//   }

//   console.log(allStudents())

  //7
//   const catKey = (obj,key) => {
//     const numbersKeys = Object.values(obj) // retorna um array com os valores
//     console.log(numbersKeys[key]) //peguei o valor na posição que o usario indicou
//   }

//   catKey(lesson3,2);

  //

  const exists = (obj,chave,valor) => {
    const array = [chave, valor] //crinado array para compara com os arrays criados na linha abaixo
    const chaves = Object.entries(obj)
    let existe = false;
    for(const chave in chaves){
        if(chaves[chave].includes(array[0]) && chaves[chave].includes(array[1])){ //vendo se a achave e o valor dados pelo uario estao inclusos no array , se os dois estiiverem vai retornar true.
            existe = true;
        }
    }
    return existe
  }

  console.log(exists(lesson1,'turno','manhã'))