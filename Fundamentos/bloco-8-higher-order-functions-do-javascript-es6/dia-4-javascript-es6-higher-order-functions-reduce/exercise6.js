const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(estudantes,notas) {
  // escreva seu código aqui
  return estudantes.map((element , index) => {
    let gradeMedia = notas[index].reduce((acc,cur) => acc + cur)/notas[index].length
    let obj = {
        name: element,
        nota: gradeMedia
    }
    return obj
  })
}

console.log(studentAverage(students,grades))


// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];