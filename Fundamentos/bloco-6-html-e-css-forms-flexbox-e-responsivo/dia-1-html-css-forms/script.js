const inputSubmit = document.getElementById('inputSub')
const email = document.getElementById('email-input')
const nome = document.getElementById('nome')
inputSubmit.addEventListener('click',(event) => {
    event.preventDefault();
    if(email.value.length > 10 && email.value.length < 50 ){
        alert('Dados enviados')
    }else{
        alert('Dados incorretos')
    }
})
