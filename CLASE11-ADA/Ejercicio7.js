//Ejercicio 7: Calculadora simple
//Consigna: Crea un programa que le pida al usuario dos números y una operación matemática a realizar: 
//suma, resta, multiplicación o división. 
//Según la operación ingresada, el programa deberá calcular y
// mostrar el resultado. Si el usuario ingresa una operación inválida, 
//el programa debe mostrar un mensaje de error. 
//Usa switch para resolverlo.

const prompt = require('prompt-sync')();

let FirstNumber = parseInt(prompt("Enter a first number:" ));
let SecondNumber = parseInt(prompt("Enter a second number: "));
let Operation = prompt ("Enter the symbol for your operation (+, -, *, /): ");

switch (Operation){
case '+':
console.log ('The result is: ', FirstNumber + SecondNumber);
break;
case '-':
console.log ('The result is: ' , FirstNumber - SecondNumber);
break;
case '*':
console.log ('The result is: ' , FirstNumber * SecondNumber);
break;
case '/':
console.log ('The result is: ' , FirstNumber / SecondNumber);
break;
default:
console.log ('The result is: Invalid operation');
}
