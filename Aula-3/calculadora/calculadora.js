const resultado = document.getElementById('resultado')
const vranumerin1 = document.getElementById('num1')
const vranumerin2 = document.getElementById('num2')

function multi(){
    num1 = Number(vranumerin1.value)
    num2 = Number(vranumerin2.value)
    var mult = num1 * num2
    console.log(mult)
    resultado.innerHTML = mult
}

function divid(){
    num1 = Number(vranumerin1.value)
    num2 = Number(vranumerin2.value)
    var divi = num1 / num2
    console.log(divi)
    resultado.innerHTML = divi
}

function soma(){
    num1 = Number(vranumerin1.value)
    num2 = Number(vranumerin2.value)
    var somar = num1 + num2
    console.log(somar)
    resultado.innerHTML = somar
}

function sub(){
    num1 = Number(vranumerin1.value)
    num2 = Number(vranumerin2.value)
    var subi = num1 - num2
    console.log(subi)
    resultado.innerHTML = subi
}
