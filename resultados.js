/* TU PUNTUACION ES MUY BUENA
TU PUNTUACION ES PERFECTA
PODRIAS MEJORAR 0_- 0*/
const text = document.getElementById("puntuacion");
const nombre = document.getElementById("nombre");
const puntaje = document.getElementById("puntaje");
let theName = localStorage.getItem("name");
let theAge = localStorage.getItem("age");
let thePuntaje = localStorage.getItem("puntaje");

if (thePuntaje >= 80) {
    text.innerHTML = "Felicidades " + theName + " tienes una excelente puntuacion.";
}else{
    if (thePuntaje >=40) {
    text.innerHTML = "Felicidades " + theName + " tienes una puntuacion normal.";
    }else{
    text.innerHTML = "Lo siento " + theName + " puedes mejorar.";
    }
}
nombre.innerHTML = "Tu puntaje es:";
puntaje.innerHTML = thePuntaje;
