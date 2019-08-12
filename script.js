// Guardar os elementos em variáveis
//numeros
const zero = document.querySelector('button[data-val="0"]');
const nove = document.querySelector('button[data-val="9"]');
const oito = document.querySelector('button[data-val="8"]');
const sete = document.querySelector('button[data-val="7"]');
const seis = document.querySelector('button[data-val="6"]');
const cinco = document.querySelector('button[data-val="5"]');
const quatro = document.querySelector('button[data-val="4"]');
const tres = document.querySelector('button[data-val="3"]');
const dois = document.querySelector('button[data-val="2"]');
const um = document.querySelector('button[data-val="1"]');

//operadores
const clear = document.querySelector('button[data-val="clear"]');
const ponto = document.querySelector('button[data-val="."]');

const div = document.querySelector('button[data-val="÷"]');
const mult = document.querySelector('button[data-val="x"]');
const sub = document.querySelector('button[data-val="-"]');
const somar = document.querySelector('button[data-val="+"]');
const igual = document.querySelector('button[data-val="="]');


const screen = document.querySelector('.screen');

function show(element) {
    screen.innerText += element.innerText;
}

function limpar() {
    screen.innerText = "";
}


function operacao(element) {
    if(element.innerText == '+'){
        valor = parseInt(screen.innerText);
    }
    limpar();
}
