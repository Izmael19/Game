const pregunta = document.getElementById("pregunta");
const respuesta = Array.from(document.querySelectorAll(".texto"));

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
const preguntas_aleatorias = Math.floor(Math.random() * preguntas.length);
pregunta.innerHTML = preguntas[preguntas_aleatorias].pregunta;
const pregunta_elegida = preguntas[preguntas_aleatorias];
let resp = pregunta_elegida.respuestas;
const opciones = resp.map(function (respuesta_c) {
    return respuesta_c
});
for (let i = 0; i < 4; i++) {
    respuesta[i].innerHTML = opciones[i];
}


