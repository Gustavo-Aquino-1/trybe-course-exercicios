const professionalBoard = [
    {
      id: '8579-6',
      firstName: 'Ana',
      lastName: 'Gates',
      specialities: ['UX', 'Design'],
    },
    {
      id: '5569-4',
      firstName: 'George',
      lastName: 'Jobs',
      specialities: ['Frontend', 'Redux', 'React', 'CSS'],
    },
    {
      id: '4456-4',
      firstName: 'Leila',
      lastName: 'Zuckerberg',
      specialities: ['Context API', 'RTL', 'Bootstrap'],
    },
    {
      id: '1256-4',
      firstName: 'Linda',
      lastName: 'Bezos',
      specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
    },
    {
      id: '9852-2-2',
      firstName: 'Jeff',
      lastName: 'Cook',
      specialities: ['Ruby', 'SQL'],
    },
    {
      id: '4678-2',
      firstName: 'Paul',
      lastName: 'Dodds',
      specialities: ['Backend'],
    },
  ];
  
  // Pesquisa
  const searchEmployee = (id, detail) => {
    let values = Object.values(professionalBoard)
    let idExists = false;
    let detailExists= false;
    for(let i = 0 ; i < values.length ; i+=1){
        if(values[i].id === id){
            idExists = true
        }
        if(Object.keys(values[i]).includes(detail)){
            detailExists = true;
        }
        if(idExists === true && detailExists == true){
            return values[i][detail]
        }
    };
    if(idExists === false){
        throw new Error('ID não identificada')
    }
    if(detailExists === false){
        throw new Error("Informação indisponível")
    }
}  


  module.exports = {searchEmployee,professionalBoard}