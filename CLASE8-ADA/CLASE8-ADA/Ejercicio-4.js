//Ejercicio 4: Determinar si un número es par o impar
//Enunciado:
//En este ejercicio, aprenderás a utilizar operadores aritméticos y condicionales. 
//Debes escribir un programa que:
//1.Solicite al usuario que ingrese un número entero.
//2.Determine si el número es par o impar.
//3.Muestre un mensaje indicando si el número es par o impar.

const prompt =require('prompt-sync')();

let Number = parseFloat(prompt('Enter a number:'));
let Answer ='';
if (Number % 2 ===0){
    Answer = 'Pair';
}else if(Number % 2 !==0 && Number/Number===1){
    Answer ='Odd';
}else {
    Answer ='Invalid number';
}
console.log ('The number is:' , Answer);