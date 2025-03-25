//Ejercicio 7 - Intercambio de Valores:
// Declara dos variables con valores iniciales y 
//luego intercambia sus valores. 
//Muestra los valores antes y después del intercambio en la consola.
// Para intercambiar valores puedes usar varios métodos
//(usando una variable temporal, aritmética o asignación simultanea), 
//eres libre de elegir el que desees, eso si, investiga sobre el que usaras.

const prompt = require ('prompt-sync')();

let Value1 = 12;
let Value2 = 8;

console.log ('Before exchange variables');
console.log ('First number:', Value1);
console.log ('Second number:', Value2);

let temporal= Value1;
Value1 = Value2;
Value2 = temporal;

console.log ('After exchange variables');
console.log ('First number:', Value1);
console.log ('Second number:' , Value2);
