//Ejercicio 3: Suma de dos números ingresados por el usuario
//Enunciado:
//Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores aritméticos. 
//Escribe un programa que:
//1.Pida al usuario que ingrese dos números.
//2.Sume ambos números.
//3.Muestre el resultado de la suma.

const prompt = require('prompt-sync')();

let FisrtNumber = parseFloat(prompt("Enter a number:"));
let SecondNumber = parseFloat(prompt("Enter a second number:"));
let Addition = (FisrtNumber + SecondNumber);

console.log("The sum of the numbers is:" , Addition);
