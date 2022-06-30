function createDaysOfTheWeek() {
    const weekDays = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ];
    const weekDaysList = document.querySelector(".week-days");
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement("li");
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    }
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // Exercício 1:
  
  //     Crie um calendário dinamicamente.
  //     O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
  
  //         Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
  
  //     A tag <ul> deve conter o id 'days';
  //     Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
  //     Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
  //     Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
  
  // let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  function daysMonth(){
    const list = document.getElementById('days')
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    for(let day of decemberDaysList){
      let li = document.createElement('li')
      li.innerText = day;
      list.appendChild(li)
      if(day === 24 || day === 31){
        li.className = 'day holiday'
      }else if(day === 4 || day === 11 || day ===18){
        li.className = 'day friday'
      }else if(day === 25){
        li.className = 'day holiday friday'
      }else{
        li.className = 'day'
      }
    }
  }
  
  daysMonth();
  // 🚀 Exercício 2:
  
  //     Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
  //         Sua função deve receber um parâmetro com a string 'Feriados'
  //         Adicione a este botão a ID "btn-holiday"
  //         Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
  
  function botHoliday(string){
    const divPai = document.querySelector('.buttons-container')
    const botao = document.createElement('button')
    botao.id = "btn-holiday"
    botao.innerText = string;
    divPai.appendChild(botao)
  }
  
  botHoliday('Feriados')
  
  // 🚀 Exercício 3:
  
  //     Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
  //         Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
  
  //         👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".
  
  function corHoliday(){
      const feriados = document.getElementsByClassName('holiday')
      const button = document.getElementById("btn-holiday");
      button.addEventListener('click',function(){
        for(let i of feriados){
          if(i.style.backgroundColor !== 'blue'){
            i.style.backgroundColor = 'blue'
          }else{
            i.style.backgroundColor = "rgb(238,238,238)"
          }
        }
      })
  }
  
  corHoliday();
  
  // 🚀 Exercício 4:
  // Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
  
  //     Adicione a esse botão o ID "btn-friday";
  //     Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".
  
  function botFriday(string){
    const divPai = document.querySelector('.buttons-container');
    const botaoSexta = document.createElement('button');
    botaoSexta.innerText = string;
    botaoSexta.id = 'btn-friday';
    divPai.appendChild(botaoSexta);
  }
  
  botFriday('Sexta-feira');
  
  // 🚀 Exercício 5:
  // Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
  
  //     👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.
  
  function mudaSexta(array){
    const sextasFeiras = document.getElementsByClassName('friday');
    const botaoSexta = document.getElementById('btn-friday') 
    const texto = 'SEXTOUU'
    botaoSexta.addEventListener('click',function(){
      for(let sexta in sextasFeiras){
        if(sextasFeiras[sexta].innerHTML !== texto){
          sextasFeiras[sexta].innerText = texto
        }else{
          sextasFeiras[sexta].innerHTML = array[sexta]
        }
      }
    })
  }
  
  mudaSexta([4,11,18,25])
  
  
  // 🚀 Exercício 6:
  
  //     Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
  //         Dica - Propriedade: event.target.
  
  function zoomEntra(){
     const days = document.getElementById('days')
     days.addEventListener('mouseover',function(event){
      event.target.style.fontSize = '30px'
     })
  }
  
  zoomEntra();
  
  function zoomSai(){
    const days = document.getElementById('days')
    days.addEventListener('mouseout',function(event){
      event.target.style.fontSize = '20px'
    })
  }
  
  zoomSai();
  
  // 🚀 Exercício 7:
  
  //     Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
  //         O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
  
  function addTask(string){
    const divPai = document.querySelector('.my-tasks')
    const spanTask = document.createElement('span');
    spanTask.innerText = string;
    divPai.appendChild(spanTask)
  }
  
  addTask('Projeto');
  
  
  // 🚀 Exercício 8:
  // Implemente uma função que adicione uma legenda com cor para a tarefa.
  
  // * Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`.
  
  //     O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
  //     O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
  
  function addTaskColor(color){
    let div = document.createElement('div')
    div.style.backgroundColor = color;
    div.className = 'task'
    const divPai = document.querySelector('.my-tasks')
    divPai.appendChild(div)
  }
  
  addTaskColor('aqua');
  
  // 🚀 Exercício 9:
  
  //     Implemente uma função que selecione uma tarefa.
  //         Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
  //         Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.
  
  function taskSelected(){
      const div = document.querySelector('.task')
      div.addEventListener('click',function(event){
        if(event.target.className.includes('selected')){
          event.target.classList.remove('selected')
        }else{
          event.target.className = 'task selected'
        }
      })
  }
  
  taskSelected();
  
  
  // 🚀 Exercício 10:
  
  //     Implemente uma função que atribua a cor da tarefa ao dia do calendário.
  //         Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
  //         Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)
  
  function dayColor(){
    const days = document.getElementById('days');
    const task = document.querySelector('.task')
    const taskSe = document.getElementsByClassName('selected')
    days.addEventListener('click',function(event){
      if(task.className.includes('selected')){
        event.target.style.color = taskSe[0].style.backgroundColor
      }else{
        event.target.style.color = 'rgb(119,119,119)'
      }
    })
  }
  
  dayColor();
  
  
  // 🚀 Bônus:
  // Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
  
  //     Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
  //     Ao pressionar a tecla "enter" o evento também deverá ser disparado.
  //     Dica - Propriedade: key.
  
  function addTaskInList(){
    const inputValor = document.getElementById('task-input')
    const btnAdd = document.getElementById('btn-add')
    const lista = document.querySelector('.task-list')
    inputValor.addEventListener('keyup',function(event){
      if(event.key === 'Enter' && inputValor.value.length > 0){
        let li = document.createElement('li')
        li.innerText = inputValor.value;
        lista.appendChild(li)
        inputValor.value = ''
      }
    })
    
    btnAdd.addEventListener('click',function(){
      if(inputValor.value.length > 0){
        let li = document.createElement('li')
        li.innerText = inputValor.value;
        lista.appendChild(li)
        inputValor.value = ''
      }else{
        alert('Não há oque adicionar!')
      }
    })
  }
  
  addTaskInList();