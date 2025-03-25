//Ejercicio 3:
//Declara dos variables booleanas condicion1 y condicion2.
//Pide al usuario que ingrese dos valores booleanos (true o false) y 
//muestra el resultado de diversas combinaciones lógicas.

const prompt = require('prompt-sync')();

let condition1 = 'Halloween is october 31';
let condition2 = 'Halloween is not october 31';

let TrueUser = (prompt("Enter a sentence about something that is true:"));
let FalseUser = (prompt("Enter a sentence about something that is false:"));

console.log ('Both sentence are true:', condition1, "and" , TrueUser);
console.log ('First sentence are true and second sentece are false:', condition1,  "and", FalseUser);
console.log ('First sentence are false and second sentence are true:', condition2,  "and", TrueUser);
console.log ('Both sentence are false', condition2,  "and", FalseUser);
