//Ejercicio 8 - Conversión de Temperaturas: 
//Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit.
// La fórmula de conversión es:
//Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.
//Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
//Pista 2: La fórmula puede representarse asi:
//let fahrenheit = celsius * 9 / 5 + 32;

const prompt = require ('prompt-sync')();

let  Celsius = prompt ("Enter the current temperature in celsius:");
let Fahrenheit = Celsius * 9 / 5 +32;

console.log ('The temperature in Fahrenheit is:', Fahrenheit);
