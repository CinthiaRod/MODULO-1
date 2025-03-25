//Ejercicio 7: Matriz 5x5

const prompt=require ('prompt-sync')();

//Declara una variable que contenga una matriz de 5x5
// llena de puros números enteros y positivos.
let matrix5 =[
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
];
let AllNumbersSum=0;
// Luego, escribe un algoritmo para sumar todos los números 
//en la matriz.
for(let lap=0; lap<matrix5.length; lap++){
    for(let s=0; s< matrix5[lap].length; s++){
        let total= matrix5[s][lap]
        AllNumbersSum += total;
    }

}
console.log(`The sum of all numbers in the matrix 5 x 5 is:  ${AllNumbersSum}`);




