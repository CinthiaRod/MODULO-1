//Ejercicio 1: ¿Positivo, negativo o cero?
//Consigna:
//Vamos a trabajar con números y aprender a clasificarlos. 
//Escribe un programa que le pida al usuario un número cualquiera.
// El programa deberá analizar si el número ingresado es positivo, negativo o cero.
// Utiliza estructuras if para resolverlo y 
//muestra un mensaje explicativo en cada caso.

const prompt = require ('prompt-sync')();

let Number = parseInt (prompt("Enter a number: "));

if (Number === 0){
console.log('The number is zero');
} else if (Number > 0){
    console.log('The numer is positive');
} else if (Number < 0){
    console.log('The number is negative');
} else{
    console.log('Invalid number');
}
