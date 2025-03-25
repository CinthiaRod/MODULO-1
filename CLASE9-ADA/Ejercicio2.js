//Ejercicio 2:
//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección. 
//Pide al usuario que ingrese un número y verifica si está dentro del rango definido por las constantes.

const prompt = require('prompt-sync')();

let EnterNumber=parseFloat(prompt("Enter a number:"));

const RANGO_MINIMO = 1;
const RANGO_MAXIMO = 100;
let Message ='';

if (EnterNumber >= RANGO_MINIMO && EnterNumber < RANGO_MAXIMO){
    Message = 'It is within the range';
}else if (EnterNumber === RANGO_MAXIMO && EnterNumber >1){
    Message = 'It is whithin the range';
}else {
    Message ='Invalid data'
}

console.log ( Message);
