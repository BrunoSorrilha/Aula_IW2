/* Arquivo JS + alterar CSS */

let titulo = document.querySelector('h1')
//titulo.textContent = 'Aula 09 Manipular CSS'
//titulo.innerHTML = 'Aula Manipular CSS'
let imagem = document.querySelector('#foto')

/* MANIPULAR CSS */
document.querySelector('h1').style.color = "red";
titulo.style.color = "red";
titulo.style.backgroundColor = "#000";
titulo.style.borderBottom = "2px solid red";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "5px";

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
box[0].removeAttribute('class')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

let btnRose = document.querySelector('#btrose')

let btnAmare = document.querySelector('#btamare')

let btnzul = document.querySelector('#btzul')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
btnRose.addEventListener('click', modoRose)
btnAmare.addEventListener('click', modoAmare)
btnzul.addEventListener('click', modoZul)

function modoZul() {
    event.preventDefault();
    console.log('modo blue')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("rose");
    tela.classList.remove("amarelo");
    tela.classList.add("azul");
    imagem.setAttribute('src', 'img/azul.jpg')
    imagem.setAttribute('width', '280px')
    imagem.setAttribute('height', '280px')
    titulo.style.color = "red";
    titulo.style.backgroundColor = "#1a237e";
}

function modoAmare() {
    event.preventDefault();
    console.log('modo yellow')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("rose");
    tela.classList.remove("azul");
    tela.classList.add("amarelo");
    imagem.setAttribute('src', 'img/amarelo.png')
    imagem.setAttribute('width', '280px')
    imagem.setAttribute('height', '280px')
    titulo.style.color = "red";
    titulo.style.backgroundColor = "#ffc107";
}

function modoRose() {
    event.preventDefault();
    console.log('modo rose')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("amarelo");
    tela.classList.remove("azul");
    tela.classList.add("rose");
    imagem.setAttribute('src', 'img/rosa.jpeg')
    imagem.setAttribute('width', '280px')
    imagem.setAttribute('height', '280px')
    titulo.style.color = "red";
    titulo.style.backgroundColor = "#ffcbdb";
}

function modoDark() {
    event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
    tela.classList.remove("rose");
    tela.classList.remove("amarelo");
    tela.classList.remove("azul");
    imagem.setAttribute('src', 'img/preto.jpg')
    imagem.setAttribute('width', '280px')
    imagem.setAttribute('height', '280px')
    titulo.style.color = "red";
    titulo.style.backgroundColor = "#000000";
}

function modoLight() {
    event.preventDefault();
    console.log('modo light')
    tela.classList.remove("dark");
    tela.classList.remove("rose");
    tela.classList.remove("amarelo");
    tela.classList.remove("azul");
    tela.classList.add("light");
    imagem.setAttribute('src', 'img/branco.jpg')
    imagem.setAttribute('width', '400px')
    imagem.setAttribute('height', '280px')
    titulo.style.color = "red";
    titulo.style.backgroundColor = "#fff";
}


titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}

imagem.setAttribute('src', 'img/branco.jpg')
imagem.setAttribute('width', '400px')
imagem.setAttribute('height', '280px')
titulo.style.color = "red";
titulo.style.backgroundColor = "#fff";
