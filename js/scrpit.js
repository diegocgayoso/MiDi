
function playSound(selectorAudio) {
    const element = document.querySelector(selectorAudio);

    if (element !== null && element.localName == 'audio') {
        element.play();
    } else {
        alert('Elemento não encontrado!')
    }
}

var teclas = document.querySelectorAll('.tecla');
var audios = document.querySelectorAll('audio');


// para
for (let count = 0; count < teclas.length; count++) {
    const tecla = teclas[count];
    const instrument = tecla.classList[1];
    console.log(instrument);
    const idAudio = `#som_${instrument}`;

    tecla.onclick = function () {
        playSound(idAudio);
    }

    tecla.onkeydown = function (evento) {
        console.log(evento.code);

        if (evento.code === 'Space' || evento.code === 'Enter')
            tecla.classList.add('ativa')
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}
// Enquanto
// let count = 0;
// while (count < teclas.length) {

//     const tecla = teclas[count];
//     const instrument = tecla.classList[1];
//     // console.log(instrument);

//     const idAudio = `#som_${instrument}`;
//     // console.log(idAudio)

//     teclas[count].onclick = function () {
//         playSound(idAudio);

//     }
//     count = count + 1;
//     // console.log(count);
// }