const resultado = document.getElementById('resultado')
const vranumerin1 = document.getElementById('num1')
const vranumerin2 = document.getElementById('num2')
const multico = document.getElementById('botao1')
var num1 = 0
var num2 = 0

function multip(){
    num1 = Number(vranumerin1.value)
    num2 = Number(vranumerin2.value)
    var multi = (num1 * num2)
    console.log('multi', multi)
    resultado.innerHTML = multi
}

multico.addEventListener('click',multip)
