//Ejercicio 4: ¿Es par o impar?
//Consigna: Los números pueden ser pares o impares. 
//Escribe un programa que le pida al usuario un número y 
//determine si es par o impar. 
//Muestra un mensaje explicativo indicando qué significa cada caso.

const prompt = require('prompt-sync')();

let Number = parseInt (prompt("Enter a number: "));

if (Number % 2 ===0){
console.log ('The number is pair');
}else if(Number % 2 !==0 && Number/Number===1){
console.log ('The number is odd');
}else {
console.log ('Invalid number');
}
