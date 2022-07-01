window.onload = function(){
    let select = document.getElementById('select1')
    select.addEventListener('change',function(){
        let corSelecionada = select.selectedOptions[0].value // 0 pois retorna um array mesmo tendo so um elemernto
        document.body.style.backgroundColor = corSelecionada;

        localStorage.setItem('background',corSelecionada)
    })
}

let fontSizePage = document.querySelector('input[name="font-size"]')
fontSizePage.addEventListener('change',function(){
    let p = document.querySelector('p')
    p.style.fontSize = `${fontSizePage.value}px`

    localStorage.setItem('fontSize',`${fontSizePage.value}px`)
})


let select2 = document.getElementById('select2')
    select2.addEventListener('change',function(){
        let fontSelecionada = select2.selectedOptions[0].value // 0 pois retorna um array mesmo tendo so um elemernto
        let p = document.querySelector('p')
        p.style.fontFamily = fontSelecionada;
        
        localStorage.setItem('fontFamily',fontSelecionada)
    })
    
    let select3 = document.getElementById('select3')
    select3.addEventListener('change',function(){
        let p = document.querySelector('p')
        let corSelecionada = select3.selectedOptions[0].value
        p.style.color = corSelecionada;
        document.body.style.color = corSelecionada;

        localStorage.setItem('FontColor',corSelecionada)

})

let select4 = document.getElementById('select4')
select4.addEventListener('change',function(){
    let p = document.querySelector('p')
    let optionSelected = select4.selectedOptions[0].value
    p.style.lineHeight = optionSelected;


    localStorage.setItem('LineHeigth',optionSelected)
})


//salvando no Localstorage

let savedBAckground = localStorage.getItem('background')
document.body.style.backgroundColor = savedBAckground;

let savedFontSize = localStorage.getItem('fontSize')
let p = document.querySelector('p')
p.style.fontSize = savedFontSize;

let savedFontFamily = localStorage.getItem('fontFamily')
p.style.fontFamily = savedFontFamily;

let savedFontColor = localStorage.getItem('FontColor')
p.style.color = savedFontColor;
document.body.style.color = savedFontColor;

let savedLineHeigth = localStorage.getItem('LineHeigth')
p.style.lineHeight = savedLineHeigth