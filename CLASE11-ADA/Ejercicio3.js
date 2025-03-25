//Ejercicio 3: ¿Sabes contar?
//Consigna: Crea un programa que le pida al usuario un número positivo.
// El programa deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola.
// Usa un ciclo for para realizar la tarea.

const prompt = require('prompt-sync')();

let PositiveNumber = parseInt(prompt("Enter a number positive: "));

if( PositiveNumber >= 1){
for(let Lap = 1; Lap <= PositiveNumber; Lap++)
console.log ('Turning around number' + Lap);
}else{
    console.log ('Invalid number')

}

