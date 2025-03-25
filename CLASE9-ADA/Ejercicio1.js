//Ejercicio 1:
//Declara dos variables numéricas numero1 y numero2.
//Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales.

const prompt = require('prompt-sync')();
let EnterNumberOne = parseFloat(prompt("Enter a number:"));
let EnterNumberTwo = parseFloat(prompt("Enter a second number:"));
let Message ='';

if (EnterNumberOne > EnterNumberTwo){
    Message = 'First number is a greater than the second';
}else if (EnterNumberTwo > EnterNumberOne){
    Message = 'Second numer is a greater than firts';
}else {
    Message ='Ther are equal numbers'
}

console.log ( Message);