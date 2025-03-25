//Ejercicio 1: Calcula el doble de un número
//En este ejercicio, practicarás el uso de variables y operadores aritméticos. 
//Debes escribir un programa en JavaScript que:
//1.Solicite al usuario que ingrese un número cualquiera.
//2.Calcule el doble de ese número.
//3.Muestre el resultado en la consola.

const prompt = require('prompt-sync')();

let EnterNumber = parseFloat(prompt("Enter a number:"));
let DoubleNumber = (EnterNumber * 2);

console.log("The double of your number is:" , EnterNumber);
