//Ejercicio 1: While
//Crea un programa que solicite al usuario ingresar números 
//continuamente hasta que el usuario ingrese un número negativo.
// Luego, imprime la suma de todos los números ingresados.

const prompt=require('prompt-sync')();
//Definiendo variables
let Sum=0;
let Number='';
//Ingresando condición para que el número sea mayor o igual a 0
while(Number >= 0){
    //Se solicita al usuario ingresar un número
Number=parseInt(prompt("Please enter a number:"));
//Condición si el dato ingresado no es un número
if (!isNaN(Number)){
    //Sumando los números de cada vuelta
Sum += Number;
//Condición en caso de que sea diferente a número
} else{
    console.log('You entered something that is not a number! ');

}}
console.log(`The result of the sum is: ${Sum}`);
