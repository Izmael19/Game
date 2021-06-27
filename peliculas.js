const pregunta = document.getElementById("pregunta");
const respuesta = Array.from(document.querySelectorAll(".texto"));
const ans = document.getElementById("ttt");
const puntaje = document.getElementById("puntaje");

let preguntas = [
    {
        pregunta: '¿Como se llama el personaje que da vida al hombre con manos de tijeras?',
        respuestas: ['Paul Rudd', 'Clint Eastwood', 'Johnny Depp', 'Jason Statham'],
        correcta: 2,
    },
    {
        pregunta: '¿Cuantas peliculas tiene Rapidos y Furiosos?',
        respuestas: ['8', '5', '7', '4'],
        correcta: 0,
    },
    {
        pregunta: '¿Cómo se llama el enemigo de Sonic en su ultima pelicula?',
        respuestas: ['Robotech', 'Dr. Robotnik', 'Tails', 'Dr. Malo'],
        correcta: 1,
    },
    {
        pregunta: '¿La casa del cerdo mas haragan era de?',
        respuestas: ['ladrillo', 'Madera', 'Paja', 'Hierro'],
        correcta: 2,
    },
    {
        pregunta: '¿Rick y Morty eran?',
        respuestas: ['Amigos', 'Conocidos', 'Enemigos', 'Familia'],
        correcta: 3,
    }
]

pregunta.innerHTML = preguntas[0].pregunta; //pregunta escrita
let resp = preguntas[0].respuestas; //array de primera pregunta
let opciones = resp.map(function(respuesta_c) {
    return respuesta_c
});


for (let i = 0; i < 4; i++) {
    respuesta[i].innerHTML = opciones[i];
} //escribir respuestas 1
let y = 0;
let x = 0;
localStorage.setItem("puntaje", x);
for (let j = 0; j < resp.length; j++) { //colorear
    respuesta[j].parentNode.addEventListener("click", function() {
        y = y + 1;
        ans.style.pointerEvents = "none";
        if (j == preguntas[y-1].correcta) {
            respuesta[j].parentNode.style.background = "green";
            x = x + 20;
            localStorage.setItem("puntaje", x);
        } else {
            respuesta[j].parentNode.style.background = "red";
            respuesta[preguntas[y-1].correcta].parentNode.style.background = "green";
        };
        setTimeout(function() { 
            if (y==5) {
                location="resultados.html";
            }
            puntaje.innerHTML = x;
            respuesta[preguntas[y-1].correcta].parentNode.style.background = "";
            respuesta[j].parentNode.style.background = "";
            respuesta[preguntas[0].correcta].parentNode.style.background = "";
            let resp = preguntas[y].respuestas; //array de siguiente pregunta
            let opciones = resp.map(function(respuesta_c) {
                return respuesta_c
            });
            for (let i = 0; i < 4; i++) {
                respuesta[i].innerHTML = opciones[i];
            }
            pregunta.innerHTML = preguntas[y].pregunta;
            ans.style.pointerEvents = "auto";
        }, 1000);
    })
};
