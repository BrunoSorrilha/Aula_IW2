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

function estaDesligada(){
    return lampada.src.indexOf('desligada') > -1
    //isso retorna True ou False
}

function testando(){
    if (!estaQuebrada()){
        if (estaDesligada()){
            lampada.src = "img/ligada.jpg"
            texto.innerHTML = 'A Lampada está ligada'
        }
         else{
            lampada.src = "img/desligada.jpg"
            texto.innerHTML = 'A Lampada está desligada'
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
