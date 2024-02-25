const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const Concertar = document.getElementById('Concertar')
const lampada = document.getElementById('lamp')
const teste = document.getElementById('teste')
var texto = document.getElementById('texto')

function estaQuebrada(){
    return lampada.src.indexOf('quebrada') > -1
    //isso retorna True ou False
}

function lampLigada(){
    if (!estaQuebrada()){
        lampada.src = "img/ligada.jpg"
        texto.innerHTML = 'A Lampada está ligada'
    }
}

function lampDesligar(){
    if (!estaQuebrada()){
        lampada.src = "img/desligada.jpg"
        texto.innerHTML = 'A Lampada está desligada'
    }
}

function lampQuebrar(){
    lampada.src = "img/quebrada.jpg"
    texto.innerHTML = 'A Lampada está quebrada T-T'
}

function lampConcerta(){
    if (estaQuebrada()){
        texto.innerHTML = 'A Lampada acabou de ser concertada!!! :D'
        lampada.src = "img/desligada.jpg"
    }

}
function testando(){
    if (!estaQuebrada()){
        if (lampada.src = "img/ligada.jpg" ) {
            lampada.src = "img/desligada.jpg"
            texto.innerHTML = "DESLIGADA"
        } 
        if (lampada.src = "img/desligada.jpg" ) {
            lampada.src = "img/ligada.jpg"
            texto.innerHTML = "LIGADA"
          } else {
            //  block of code to be executed if the condition1 is false and condition2 is false
          }
    }
}


teste.addEventListener('click',testando)
ligar.addEventListener('click',lampLigada)
desligar.addEventListener('click',lampDesligar)
Concertar.addEventListener('click',lampConcerta)

lampada.addEventListener('mouseover',lampLigada)
lampada.addEventListener('mouseleave',lampDesligar)

lampada.addEventListener('dblclick',lampQuebrar)
