const contratado = (nome) => {
    const namePeople = nome.split(' ').join('_')
    let obj = {
        name: nome,
        email: `${namePeople}@tryber.com`
    }

    return obj;
}


const newEmployees = (func) => {
    const employees = {
      id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(contratado))

//22-----------------------------22---------------------------22----------2---------------------

const checkNumbers = (resultado,tentativa) => {
    if(resultado === tentativa){
        return true;
    }
    return false;
}

const sorteio = (aposta,func) => {
    const result  = Math.floor(Math.random() *6)
    if(func(result,aposta) === true){
        return 'Parabéns você ganhou'
    }
    return 'You Lose'
}

console.log(sorteio(2,checkNumbers))

//33---------------------------33--------------------------------33---------3------------


const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const notaFinal = (certas,tentativa) => {
    let pontuacaoFinal = 0;
    for(let index = 0 ; index<certas.length ; index+=1){
        if(certas[index] === tentativa[index]){
            pontuacaoFinal += 1
        }else if(tentativa[index] === 'N.A'){
            pontuacaoFinal += 0;
        }
        else{
            pontuacaoFinal -= 0.5
        }
    }
    return pontuacaoFinal
}

const hofPrincipal = (gabarito,provaEstudante,func) => {
    const acertos = func(gabarito,provaEstudante)
    return `Você acertou ${acertos} !`
}

console.log(hofPrincipal(RIGHT_ANSWERS,STUDENT_ANSWERS,notaFinal))
