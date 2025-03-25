//Ejercicio 4:
//Declara una variable nombre y pide al usuario que ingrese su nombre. 
//Verifica si el nombre ingresado es igual a tu nombre.

const prompt = require('prompt-sync')();

let Name= 'Cinthia';
let Username= (prompt("Enter your name:"));

let Message ='';

if (Name == Username){
    Message = 'We have the same name';
}else if (Username == 'cinthia'){
    Message = 'We have the same name';
}else{
    Message = 'Your name is different from mine';
}

console.log ( Message);