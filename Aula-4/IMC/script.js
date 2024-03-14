const altur = document.getElementById('altura')
const pes = document.getElementById('peso')
var coco = null

function juberto(){
    peso = Number(pes.value)
    altura = Number(altur.value)
    console.log(altura)
    console.log(peso)
    var peido = peso / altura**2
    console.log(peido)
    resultado.innerHTML = peido


    if (coco == false){
        if (peido < 18.5) {
            return "Abaixo do peso";
        } else if (peido >= 18.5 && peido < 24.9) {
        return "Peso normal";
        } else if (peido >= 25 && peido < 29.9) {
            return "Sobrepeso";
        } else if (peido >= 30 && peido < 34.9) {
            return "Obesidade grau 1";
        } else if (peido >= 35 && peido < 39.9) {
            return "Obesidade grau 2";
        } else {
           return "Obesidade grau 3";
        }
    }
    if (coco == true) {
        if (peido < 18.5) {
            return "Abaixo do peso";
        } else if (peido >= 18.5 && peido < 24.9) {
            return "Peso normal";
        } else if (peido >= 25 && peido < 29.9) {
            return "Sobrepeso";
        } else if (peido >= 30 && peido < 34.9) {
            return "Obesidade grau 1";
        } else if (peido >= 35 && peido < 39.9) {
            return "Obesidade grau 2";
        } else {
            return "Obesidade grau 3";
        }
    }
    diag.innerHTML = coco
    console.log(coco)
    
}

function vanderson(){
    coco = true
    console.log(coco)
}

function teve(){
    coco = false
    console.log(coco)
}

function classificar(peido) {

}


