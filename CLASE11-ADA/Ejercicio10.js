//Ejercicio 10: Adivina el número
//Consigna: Crea un programa donde la computadora seleccione un número al azar entre 1 y 10.
// Luego, pide al usuario que adivine el número hasta 3 intentos.
// Si el usuario acierta en cualquiera de los intentos, 
//muestra un mensaje de felicitación y detén los intentos restantes. 
//Si no acierta después de los 3 intentos, muestra el número secreto.
// Usa un for para resolver este ejercicio.

const prompt =require('prompt-sync')();

let RandomNumber = Math.floor(Math.random() * 10) + 1;
let Attempts = 0;

for (Attempts; Attempts < 3; Attempts ++){

let AttemptsUser = parseInt(prompt( `Attempt ${Attempts + 1}. What is the secret number? Choose between 1 and 10: `));

if( AttemptsUser === RandomNumber){
console.log ('You got it right!');
break;
}else{
console.log(`Sorry, ${AttemptsUser} it is not correct!`);
}
}if(Attempts ===3){
console.log(`I am sorry, you did not get it right. The correct number is ${RandomNumber}`);
}
  