//Ejercicio 5: Encuentra los números pares entre dos valores
//Consigna: Escribe un programa que le pida al usuario dos números enteros (inicio y fin).
//El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, 
//incluyendo los límites si son pares. 
//Utiliza un ciclo for para recorrer los números entre el inicio y el fin.
// Si el número inicial es mayor que el final, el programa debe mostrar un mensaje 
//indicando que los valores son inválidos.

const prompt = require('prompt-sync')();

let StartNumber = parseInt(prompt('Enter a start number: '));
let FinalNumber = parseInt(prompt('Enter a final number: '));

if (StartNumber <= FinalNumber){
for( let Lap= StartNumber; Lap <= FinalNumber; Lap++){
if (Lap % 2 === 0){
console.log('These are the even numbers within the range of numbers: ' , Lap);
}else if(StartNumber == FinalNumber){
console.log('Invalid data, the starting number is equal than the final number');
}
}
}else{
console.log('Invalid data, the starting number is greater than the final number or is not valid number');
}
