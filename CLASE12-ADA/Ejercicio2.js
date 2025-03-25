//Ejercicio 2: Do While
//Escribe un programa que solicite al usuario ingresar una contraseña.
// Si la contraseña es incorrecta, debe volver a pedirla hasta 
//que el usuario ingrese la correcta. 
//La contraseña correcta es "1234".

const prompt = require('prompt-sync')();
//Variables
let  Pass= parseFloat(prompt("Please enter the password:" ));
let Lap =1;
let CorrectPass= '1234';
//Iniciar ciclo Do While
do{
//Condición para solicitar otra contraseña en caso de ser diferente a la contraseña correcta
if(Pass != CorrectPass){
Pass=parseFloat(prompt('Enter another password please:')); 
Lap++;
//Si la contraseña ingresada es igual a la correcta se emite el mensaje en la consola y se detiene
}else if(Pass == CorrectPass){
    console.log('\n' +'Password correct!');
    break;
 // Dejaremos en un loop infinito hasta que sea correcta
}}while(Lap);

