//Ejercicio 6: La tabla de multiplicar
//Consigna: Crea un programa que le pida al usuario un número y 
//luego imprima su tabla de multiplicar desde el 1 hasta el 10. 
//Usa un ciclo for.

const prompt =require('prompt-sync')();

let Number = parseInt (prompt("Enter a number: "));

if (!isNaN(Number)){
console.log ('This is the multiplication table of the number', Number);
for ( let Lap = 1; Lap <=10; Lap ++){
console.log (`${Number} x ${Lap} = ${Number * Lap}`);   
}
} else {
console.log ('Invalid number')
}

