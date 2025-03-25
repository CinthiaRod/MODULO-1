//Ejercicio 10:
//Pide al usuario que ingrese un número del 1 al 7 y
// muestra el día de la semana correspondiente. 
//Si el número no está dentro de ese rango, muestra un mensaje de error.

const prompt = require('prompt-sync')();

let Day = parseFloat(prompt("Enter a number:"));
let Message ='';

if (Day == 1){
    Message = 'It is monday';
} else if (Day == 2){
    Message = 'It is tuesday';
}else if (Day == 3){
    Message = 'It is wednesday';
}else if (Day == 4){
     Message = 'It is thursday';
}else if (Day ==5){
    Message = 'It is friday ';
}else if (Day == 6){
    Message = 'It is saturday';
}else if (Day ==7){
    Message = 'It is sunday'
}else{
    Message ='Invalid data';
}

console.log (Message);