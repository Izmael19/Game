const pregunta = document.getElementById("pregunta");
const respuesta = Array.from(document.querySelectorAll(".texto"));

let preguntas = [{
        pregunta: '¿Cuántos luchadores hay en Street Fighter II?',
        respuestas: ['12', '20', '6', '10'],
        correcta: 0,
    },
    {
        pregunta: '¿Cuántas entradas para mandos tiene Nintendo 64?',
        respuestas: ['2', '5', '1', '4'],
        correcta: 3,
    },
    {
        pregunta: '¿Cómo se llama el enemigo de Sonic?',
        respuestas: ['Robotech', 'Dr. Robotnik', 'Tails', 'Dr. Malo'],
        correcta: 1,
    },
    {
        pregunta: '¿Cuál fue la primera consola de PlayStation?',
        respuestas: ['PS1', 'PS Project', 'Play One', 'PlayStation Origin'],
        correcta: 0,
    },
    {
        pregunta: '¿Cuál es el material de la primera espada que recibes en The Legend of Zelda?',
        respuestas: ['Hierro', 'Acero', 'Madera', 'Hueso'],
        correcta: 2,
    }
]

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

shuffle(preguntas); //random array
pregunta.innerHTML = preguntas[0].pregunta; //pregunta escrita
let resp = preguntas[0].respuestas; //array de primera pregunta
const opciones = resp.map(function(respuesta_c) {
    return respuesta_c
});

for (let i = 0; i < 4; i++) {
    respuesta[i].innerHTML = opciones[i];
} //escribir preguntas 1

for (let j = 0; j < resp.length; j++) { //colorear
    respuesta[j].parentNode.addEventListener("click", function() {
        if (j == preguntas[j].correcta) {
            respuesta[j].parentNode.style.background = "green";
        } else {
            respuesta[j].parentNode.style.background = "red";
            respuesta[preguntas[0].correcta].parentNode.style.background = "green";
        };
        /*
                setTimeout(function() {
                    pregunta.innerHTML = preguntas[1].pregunta;
                }, 1000); */
    })
}
console.log(preguntas);