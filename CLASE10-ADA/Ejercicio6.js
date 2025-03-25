//Ejercicio 6 - Comparaciones y Operadores Lógicos:
//Declara dos variables con valores numéricos. 
//Utiliza operadores de comparación y lógicos para verificar si ambos números son mayores que 10 y
// muestra el resultado en la consola.
//Pasos a seguir:
//Declaración y Asignación de Variables:
//1.Declara dos variables y asígnales valores numéricos de tu elección.
//Operadores de Comparación y Lógicos:
//2.Utiliza los operadores > (mayor que) y && (y lógico) para verificar si ambos números son mayores que 10.
//Mostrar Resultado en la Consola:
//3.Utiliza console.log() para mostrar el resultado de la comparación.
//Pista: Recuerda que para crear una variable utilizamos la palabra "let" seguida del nombre al cual 
//vamos a hacer referencia.
//Pista 2: Los operadores de comparación en JavaScript son >, <, >=, <=, ===, !==. 
//El operador lógico "&&" (y lógico) se utiliza para combinar condiciones y todas deben cumplirse 
//para que el resultado sea verdadero.

const prompt = require ('prompt-sync')();

let FirstNumber = 12;
let SecondNumber = 8;

if( FirstNumber >10 && SecondNumber > 10){
    console.log ('The first and second numbers are greater than 10');
} else if (FirstNumber < 10 && SecondNumber >10){
    console.log ('The second number is greater than 10');
}else if (FirstNumber >10 && SecondNumber <10){
    console.log ('The first number is greater than 10');
}else{    
    console.log ('The first and second numbers are not greater than 10')
}
