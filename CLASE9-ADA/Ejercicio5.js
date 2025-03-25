//Ejercicio 5:
//Escribe un programa que pida al usuario que ingrese tres números y 
//determine cuál es el mayor de los tres.

const prompt = require('prompt-sync')();

let NumberOne = parseFloat(prompt("Enter a number:"));
let NumberTwo = parseFloat (prompt("Enter a second number:"));
let NumberThree = parseFloat(prompt("Enter a third number:"))
let Message = '';

if (NumberOne > NumberTwo && NumberOne >NumberThree){
Message= NumberOne;
} else if (NumberTwo > NumberOne && NumberTwo >NumberThree){
    Message=NumberTwo;
} else if (NumberThree >NumberOne && NumberThree >NumberTwo){
    Message=NumberThree;
} else{
    Message='Wrong data entered';
}
console.log ( 'The largest number is:' , Message);
