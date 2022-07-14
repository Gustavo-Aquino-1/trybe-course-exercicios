const btn = document.getElementById('btn')
const cliques = document.getElementById('clique')
let counter = 0 
btn.addEventListener('click',() => {
    counter += 1
    cliques.innerText = counter;

})