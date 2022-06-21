//1
const a = 10;
const b = 4;

let soma = a + b;
let sub = a - b;
let multi = a * b;
let div = a / b;
let mod = a % b;

//2
const n1 = 52
const n2 = 50;
if(n1 > n2){
    console.log(n1)
}else{
    console.log(n2)
}

//3
const nu1 = 13;
const nu2 = 87;
const nu3 = 54;

if(nu1 > nu2 && nu1 > nu3){
    console.log(nu1)
}else if(nu2 > nu1 && nu2 > nu3){
    console.log(nu2)
}else{
    console.log(nu3)
}

//4
const numero = -10;
let isPositive = false;
if(numero === 0){
    console.log('zero')
}else if(numero > 0){
    isPositive = true;
    console.log(isPositive)
}else{
    console.log(isPositive)
}

//5
const ang1 = 30;
const ang2 = 60;
const ang3 = 90;

if(ang1 < 0 | ang2 < 0 | ang3 < 0){
    console.log('dados incorretos')
}else{
    console.log('Calculando ...')
}

const somaAng = ang1 + ang2 + ang3;
if(somaAng ===180){
    console.log('Triangulo válido')
}else{
    console.log('Triangulo inválido')
}

//6
let peca = 'Bispo';
switch(peca.toLowerCase()){
    case 'rei':
        console.log('oi')
        break;
    case 'rainha':
        console.log('tudo')
        break;
    case 'bispo':
        console.log('diagonais') 
        break;
    default:
        console.log('peça inválida')       
}


//7
let porce = 64;
if(porce < 50){
    porce = 'F';
}else if(porce < 0 || porce > 100){
    porce = 'invalid'
}else if(porce >= 90){
    porce = 'A'
}else if(porce >=80){
    porce = 'B'
}else if(porce >= 70){
    porce = 'C'
}else if(porce >=60){
    porce = 'D'
}else if(porce >= 50){
    porce = 'E'
}

console.log(porce)

//8
const numero1 = 10
const numero2 = 9 
const numero3 = 8
let isValid = false;
if(numero1 % 2 ===0 || numero2 % 2 ===0 || numero3 % 2 ===0){
    isValid = true;
}

console.log(isValid)

//9
const numer1 = 10
const numer2 = 7
const numer3 = 8
let impar = false;
if(numer1 % 2 !==0 || numer2 % 2 !==0 || numer3 % 2 !==0){
    impar = true;
}

console.log(impar)

//10
const custoProduto = 7;
let custoTotalProduto = 7 + (7*20/100)
const venda = 15;
let lucro = venda - custoTotalProduto;
let vende1000 = lucro *1000
console.log(vende1000)

//11

const salarioBruto = 3000;
let aliquota;
let imposto;
if (salarioBruto <= 1556.94){
    aliquota = (salarioBruto*8/100)
}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    aliquota = (salarioBruto*9/100)
}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    aliquota = (salarioBruto*11/100)
}else if(salarioBruto > 5189.82){
    aliquota = 570.88
}

let salarioAtt = salarioBruto - aliquota;

if(salarioAtt <= 1903.98){
    imposto = 0;
}else if(salarioAtt >= 1903.99 && salarioAtt < 2826.65){
    imposto = (salarioAtt*7.5/100) - 142.80
}else if(salarioAtt >= 2826.66 && salarioAtt < 3751.05){
    imposto = (salarioAtt*15/100) - 354.80
}else if(salarioAtt >= 3751.06 && salarioAtt < 4664.68){
    imposto = (salarioAtt*22.5/100) - 636.13
}else if(salarioAtt > 4664.68){
    imposto = (salarioAtt*27.5/100) - 839.36
}

let salarioFinal = salarioAtt - imposto;
console.log('Seu sálario final é : '+ salarioFinal)