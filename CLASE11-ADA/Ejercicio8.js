//Ejercicio 8: Encuentra los múltiplos de un número
//Consigna: Escribe un programa que le pida al usuario un número entero positivo 
//y muestre todos los múltiplos de ese número entre 1 y 100.
// Utiliza un ciclo for para resolverlo.

const prompt = require('prompt-sync')();

let PositiveNumber = parseInt(prompt("Please enter a positive number: "));

if (PositiveNumber >0){
console.log ('The multiples of' , PositiveNumber , 'between 1 and 100: ');
for ( let Lap = 1; Lap <=100; Lap ++){
if (Lap % PositiveNumber === 0){
console.log(Lap);
}
}
}else {
console.log ('Please enter a valid number');
}
