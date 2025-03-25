//Ejercicio 7:
//Pide al usuario que ingrese su peso en kilogramos y
// conviértelo a libras. 
//Muestra el resultado con un mensaje. (Averigua como pasar de kg a libras, Pista: 2.20462)

const prompt = require('prompt-sync')();

let Weight = parseFloat(prompt("Write your weight in kilograms:"));
let Pounds = (Weight * 2.20462);

console.log("Your weight in pounds is:" , Pounds);

