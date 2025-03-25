//Ejercicio 6:
//Pide al usuario que ingrese su edad y 
//verifica si es mayor o menor de edad. 
//Muestra un mensaje personalizado según el caso.

const prompt = require('prompt-sync')();

let Age = parseFloat(prompt ("Enter your age:"));
let Message = '';

if (Age < 18){
    Message='Under-age';
}else if (Age == 18){
    Message= 'He is barely of age';
} else if (Age > 18){
    Message='Adult';
} else{
    Message= 'Invalid number';
}
    
console.log (Message);