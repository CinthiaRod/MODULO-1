//Ejercicio 8:
//Pide al usuario que ingrese las longitudes de los tres lados de un triángulo.
//Determina y muestra si el triángulo es equilátero, isósceles o escaleno.
// (Investiga sobre los triángulos para determinar la formula)

const prompt = require('prompt-sync')();

let FirstSide = parseFloat(prompt("Enter a number for first side of an triangle:"));
let SecondSide = parseFloat(prompt("Enter a number for second side of an triangle:"));
let ThirdSide = parseFloat(prompt("Enter a number for third side of an triangle:"));
let Message ='';

if (FirstSide == SecondSide && FirstSide == ThirdSide){
    Message='The triangle is equilateral';
}else if (FirstSide == SecondSide && FirstSide != ThirdSide){
    Message= 'The triangle is isósceles';
} else if (SecondSide == ThirdSide && FirstSide != SecondSide){
    Message='The triangle is isósceles';
}else if (FirstSide == ThirdSide && FirstSide != SecondSide){
    Message='The triangle is isósceles';
}else{
    Message= 'The triangle is scalene';
}
    
console.log (Message);

