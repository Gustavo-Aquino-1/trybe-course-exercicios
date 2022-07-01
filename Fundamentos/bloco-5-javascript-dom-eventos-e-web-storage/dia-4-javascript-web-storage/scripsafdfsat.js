//criaçaõ das funçoes que vao alterar os elementos , recebndo os parametros necessarios...
function setBackgroundColor(cor){
    let texto = document.querySelector('.texto')
    texto.style.backgroundColor = cor;
    localStorage.setItem('backgroundColor',cor)
}

function setFontColor(cor){
    let paragrafos = document.getElementsByClassName('paragrafo')
    for(let i = 0 ; i < paragrafos.length ; i += 1){
        paragrafos[i].style.color = cor;
    }
    localStorage.setItem('fontColor',cor)
}

function setFontSize(size){
    let paragrafos = document.getElementsByClassName('paragrafo')
    for(let paragrafo of paragrafos){
        paragrafo.style.fontSize = size
    }
    localStorage.setItem('FontSize',size)
}

function setLineHeigth(heigth){
    let paragrafos = document.getElementsByClassName('paragrafo')
    for(let i = 0 ; i < paragrafos.length ; i += 1){
        paragrafos[i].style.lineHeight = heigth;
    }
    localStorage.setItem('LineHeigth',heigth)
}

function setFontFamily(family){
    let paragrafos = document.getElementsByClassName('paragrafo')
    for(let i = 0 ; i < paragrafos.length ; i +=1){
        paragrafos[i].style.fontFamily = family;
    }
    localStorage.setItem('FontFamily',family)
}

//botoes background color
//adicionado eventos ecutadores para todos os botoes da pagina ...
let btnsBackground = document.querySelectorAll('#backgroundCor>button') //dentro do id que eu tinha separado eu pegop os botoes
for(let i = 0 ; i < btnsBackground.length ; i++){
    btnsBackground[i].addEventListener('click',function(event){
        setBackgroundColor(event.target.innerHTML) //disparando a funçao que tem muda o background color , pasando como parametro o html do botao que a chamou. por exemplo se o botao que chamou foi o botao 'black' esse parametro vai ser enviado .
    })
}

//font color 
//mesma coisa que  aterior
let btnsFontColor = document.querySelectorAll('#corTexto>button')
for(let i =0 ; i < btnsFontColor.length ; i ++){
   btnsFontColor[i].addEventListener('click',function(event){
     setFontColor(event.target.innerHTML) //por exemplo se o botao que originou se chama blue , vai ser enviado o parametro blue , pois o blue é o inner.html do meu botao que disparou o evento. evenet,targetr é quem disparou no caso o botao
   })
}

//font size

let fontSizeBtns = document.querySelectorAll('#tamanhoFont>button')
for(let i =0 ; i < fontSizeBtns.length ; i ++){
   fontSizeBtns[i].addEventListener('click',function(event){
     setFontSize(event.target.innerHTML) //se o botao que eu cliquei for por exemplo o 22px , é isso que sera enviado como parametro pois o 22px é o innerhtml do meu botao que disparou o evento.
   })
}

//line-height


let btnsLineHeight = document.querySelectorAll('#linhasSpace>button')
for(let i =0 ; i < btnsLineHeight.length ; i ++){
   btnsLineHeight[i].addEventListener('click',function(event){
     setLineHeigth(event.target.innerHTML)
   })
}

//font family


let btnsFontFamily = document.querySelectorAll('#fontFamily>button')
for(let i =0 ; i < btnsFontFamily.length ; i ++){
   btnsFontFamily[i].addEventListener('click',function(event){
     setFontFamily(event.target.innerHTML)
   })
}

function inicializar(){
    let backgroundColor = localStorage.getItem('backgroundColor') //o botao que a pessoa clicou
    if (backgroundColor) setBackgroundColor(backgroundColor)

    let fontColor = localStorage.getItem('fontColor')
    if (fontColor) setFontColor(fontColor)

    let FontSize = localStorage.getItem('FontSize')
    if(FontSize) setFontSize(FontSize)

    let LineHeigth = localStorage.getItem('LineHeigth')
    if (LineHeigth) setLineHeigth(LineHeigth)

    let FontFamily = localStorage.getItem('FontFamily')
    if(FontFamily) setFontFamily(FontFamily)

}

inicializar();