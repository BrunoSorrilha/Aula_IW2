const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe"); 

const jump = (event) => {
    let key = event.key; 
    
    if(key == 'ArrowUp' || key == ' ') { 
        mario.classList.add('jump'); 
        setTimeout(() => {
            mario.classList.remove('jump'); 
        },500)
    }
}

const loopGame = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); 

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ){ 
        pipe.style.animation = 'none'; 
        pipe.style.left = `${pipePosition}px`; 

        mario.style.animation = 'none'; 
        mario.style.bottom = `${marioPosition+25}px`; 

        mario.src = './img/mario-over.png';
        mario.style.width = '200px';
        mario.style.marginLeft = '50px';

        clearInterval(loopGame);
    }

}, 10)


document.addEventListener('keydown', jump);