//Ejercicio 5 – Operadores:
//Pasos a seguir:
//Declaración y Asignación de Variables:
//1.Declara y asigna un valor numérico a dos variables: primerNumero y segundoNumero.
//Operaciones Matemáticas:
//2.Declara las siguientes variables: resultadoSuma, resultadoResta, resultadoMultiplicacion, 
//resultadoDivision.
//3.Asigna a cada una de estas variables el resultado de la suma, resta, multiplicación y
// división de las variables primerNumero y segundoNumero.
//Mostrar Resultados:
//1.Utiliza console.log(nombreDeLaVariable) para imprimir cada uno de los resultados y 
//ver cómo se ven los mismos.
//Pista 1: Recuerda que para crear una variable utilizamos la palabra "let" seguida del nombre al cual 
//vamos a hacer referencia.
//Pista 2: Para asignar el valor a una variable utilizamos el operador "=" seguido del valor que queremos
// asignarle.

const prompt=require('prompt-sync')();

let primerNumero = 10;
let segundoNumero = 7;

let resultadoSuma = primerNumero + segundoNumero;
let resultadoResta = primerNumero - segundoNumero;
let resultadoDivision = primerNumero / segundoNumero;
let resultadoMultiplicacion = primerNumero * segundoNumero;

console.log ("Resultado de la suma del primer y segundo número:", resultadoSuma);
console.log ("Resultado de la resta del primer y segundo número:", resultadoResta);
console.log("Resultado de la multiplicación del primer y segundo número:", resultadoMultiplicacion);
console.log("Resultado de la división del primer y segundo número:", resultadoDivision);
