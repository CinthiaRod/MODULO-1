//Ejercicio 6: Iguales a 10 pero menores de 1000

const prompt = require ('prompt-sync')();
 
//Dada una matriz
const DataMatrix =[
    [12,8,23,12],
[3,18,1000,288],
[1055, 45, 23, 10],
[6, 200, 666, 100],
];
let sum = 0;

// recorrer sus valores y 
//(Elegí recorrer por filas y después por cada uno de los elementos de la fila usando un segundo for)
for (let Count= 0; Count< DataMatrix.length; Count++){
    for(let i=0; i<DataMatrix[Count].length; i++){
        let Numbers = DataMatrix[Count][i];

//sumar solo los números que estén por encima o sean iguales a 10,pero menores que 1000
   if (Numbers >= 10 && Numbers <= 1000){
    sum += Numbers;
   }     
    }
    }
console.log(`The sum is: ${sum}`)

