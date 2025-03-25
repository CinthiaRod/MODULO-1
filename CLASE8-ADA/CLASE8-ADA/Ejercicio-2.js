//Ejercicio 2: Verificar si un número es positivo, negativo o cero
//Enunciado:
//En este ejercicio, practicarás el uso de condicionales (if, else). 
//Escribe un programa en JavaScript que:
//1.Pida al usuario que ingrese un número.
//2.Verifique si el número es positivo, negativo o igual a cero.
//3.Muestre un mensaje indicando cuál es el caso.

const prompt =require('prompt-sync')();

let Number = parseFloat(prompt("Enter a number:"));
let Message ='';

if (Number > 0){
    Message = 'Positive';
}else if (Number < 0){
    Message = 'Negative';
}else if(Number == 0){
    Message ='Zero';
}else {
    Message ='Invalid number'
}

console.log ('The number is:' , Message);
