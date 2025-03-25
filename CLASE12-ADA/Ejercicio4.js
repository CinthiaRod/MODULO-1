//Ejercicio 4: Ciclo For - Array
//Crear un programa que permita registrar las notas de varios 
//estudiantes usando arrays y mostrarlas por pantalla:

const prompt = require('prompt-sync')();

//1.Crear un array para almacenar las notas.
//2.Define un array vacío llamado notas donde almacenaremos las notas de los estudiantes.
let Ratings =[];
let Students= 5;

//3.Pide al usuario que ingrese las notas de varios estudiantes una por una utilizando el método prompt.
//4.Usa un bucle for para solicitar las notas y 
//asignarlas directamente a posiciones específicas del array notas.
for(let lap=0; lap < Students; lap++){
    let RatingStudents = parseInt(prompt(`Please enter the ratings of the students:`));
    Ratings [lap] = RatingStudents;
};

//5.Imprime en consola las notas ingresadas usando el array notas.
console.log(`The Ratings of the students are: ${Ratings}`);

