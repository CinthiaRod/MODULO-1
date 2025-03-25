//Ejercicio 9:
//Define una constante PI con el valor de pi (3.14159). 
//Pide al usuario que ingrese el radio de un círculo y 
//calcula su área y perímetro utilizando la constante PI.

const prompt = require('prompt-sync')();

const PI = 3.14159;

let Radius= parseFloat(prompt("Enter the radious of a circle:"));
let Area=(PI * Radius **2);
let Perimeter = (2 * PI * Radius);

console.log ("The area of the circle is:" , Area);
console. log ("The perimeter of the circle is:" , Perimeter);
