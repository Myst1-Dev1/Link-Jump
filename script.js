const link = document.querySelector('.link');
const pipe = document.querySelector('.pipe');
const game = document.querySelector('.game_board')
const jump = document.getElementById('jump')

function Jump(){
    link.classList.add('jump');

    setTimeout(() => {
        link.classList.remove('jump');
    },500)
}

function Iniciar() {
    const loop = setInterval(() => {
    
        let pipePosition = pipe.offsetLeft;
        let linkPosition = +window.getComputedStyle(link).bottom.replace('px', '');
        const score = document.getElementById('score');
        var resultado = score.innerHTML = `${count}`;
    
        if(pipePosition <= 80 && pipePosition > 0 && linkPosition < 15) {
    
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            link.style.animation = 'none';
            link.style.bottom = `${linkPosition}px`;
    
            link.src = './img/gameover-removebg-preview.png';
            link.style.top = '30%';
            link.style.left = '40%';
    
            clearInterval(loop);
            clearInterval(contador);
            alert(`Game over seu score foi ${resultado}`)
        }
    },10);

    let count = 0;
    const contador = setInterval(() => {
    count++;

    if(count >= 15) {
        return count++ * 60
    } 

    },300);
}

Iniciar();


// function Start() {
//     if (game.style.display === "none") {
//         game.style.display = "block";
//       } else {
//         game.style.display = "none";
//       }

// }


document.addEventListener('keydown', jump);
