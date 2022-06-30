function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

function daysOfTheMonth(){
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const ulList = document.getElementById('days')
    for(let day of decemberDaysList){
        let dayItem = document.createElement('li');
        dayItem.innerText = day;
        ulList.appendChild(dayItem) 
        if(day === 24 | day === 31){
            dayItem.className = 'day holiday'
        }else if(day === 4 | day === 11 | day === 18){
            dayItem.className = 'day friday'
        }else if(day === 25){
            dayItem.className = 'day holiday friday'
        }else{
            dayItem.className = 'day'
        }
    }
}

daysOfTheMonth();

function buttonHoliday(string){
    const buttonContainer = document.querySelector('.buttons-container')
    const button = document.createElement('button')
    button.innerText = string;
    button.id = 'btn-holiday' 
    buttonContainer.appendChild(button)
}

buttonHoliday('Feriados');

function alteraHoliday(){
    const botaoHoliday = document.getElementById('btn-holiday')
    let dayHoli = document.getElementsByClassName('holiday')
    botaoHoliday.addEventListener('click',function(){
        for(let holi of dayHoli){
            if(holi.style.backgroundColor !== 'green'){
                holi.style.backgroundColor = 'green'
            }else{
                holi.style.backgroundColor = 'rgb(238,238,238)'
            }
        }
    })
}
alteraHoliday();

function botaoSexta(string){
    let buttonContainer = document.querySelector('.buttons-container')
    let botSexta = document.createElement('button')
    botSexta.innerText = string;
    botSexta.id = 'btn-friday'
    buttonContainer.appendChild(botSexta)
}

botaoSexta('Sexta-feira')

function alteraTextoSexta(arrayDays){
    const botaoSexta = document.getElementById('btn-friday')
    let fridays = document.getElementsByClassName('friday')
    let texto = 'Sextou!'
    botaoSexta.addEventListener('click',function(){
        for(let index in fridays){
            if(fridays[index].innerText === texto){
                fridays[index].innerText = arrayDays[index]
            }else{
                fridays[index].innerText = texto;
            }
        }
    })
}

alteraTextoSexta([4,11,18,25])

function zoom(){
    const ulDays = document.getElementById('days')
    ulDays.addEventListener('mouseover',function(event){
        event.target.style.fontSize = '30px'
    })
}

zoom();

function Saizoom(){
    const ulDays = document.getElementById('days')
    ulDays.addEventListener('mouseout',function(event){
        event.target.style.fontSize = '20px'
    })
}

Saizoom();


function taskNew(string){
    let span = document.createElement('span')
    span.innerText = string
    const myTasks = document.querySelector('.my-tasks')
    myTasks.appendChild(span)
}

taskNew('Novo projeto')


function addColor(cor){
    const myTasks = document.querySelector('.my-tasks')
    let div = document.createElement('div')
    div.className = 'task'
    div.style.backgroundColor = cor;
    myTasks.appendChild(div)
}

addColor('green');

function selectTask(){
  let div = document.querySelector('.task')
  div.addEventListener('click',function(){
    if(div.className.includes('selected')){
        div.classList.remove('selected')
    }else{
        div.classList.add('selected')
    }
    })
}

selectTask();


function colorTask(){
    const days = document.getElementById('days')
    const task = document.querySelector('.task')
    let cor = task.style.backgroundColor;
    const taskSe = document.getElementsByClassName('selected')
    days.addEventListener('click',function(event){
        if(event.target.style.color !== cor){
            let color = taskSe[0].style.backgroundColor;
            event.target.style.color = color;
        }else{
            let unsetColor = 'rgb(119,119,119)'
            event.target.style.color = unsetColor;
        }
    })
}

colorTask();


function addTasksForCalendar(){
    const inputValor = document.getElementById('task-input')
    const botao = document.getElementById('btn-add')
    const list = document.querySelector('.task-list')
    botao.addEventListener('click',function(){
        if(inputValor.value.length > 0){  //é necessario o uso do length
            let li = document.createElement('li')
            li.innerText = inputValor.value;
            list.appendChild(li)
            inputValor.value = ''
        }else{
            alert('Não Há tarefa para inseir')
        }
    })

    inputValor.addEventListener('keyup',function(event){
        if(event.key === 'Enter' && inputValor.value.length > 0){
            let li = document.createElement('li')
            li.innerText = inputValor.value;
            list.appendChild(li)
            inputValor.value = ''
        }
    })
}

addTasksForCalendar();