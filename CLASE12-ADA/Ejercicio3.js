//Ejercicio 3: Ciclo For
//Nuestra tarea es contar la cantidad de números impares que hay 
//desde el número 0 hasta un número X (inclusive). 
//Para esto, debes seguir los siguientes pasos:

const prompt = require('prompt-sync')();

//1.Solicitar al usuario que ingrese un número X.
let Number= parseInt(prompt('Please enter a number: '));

//2.Inicializar una variable para contar los números impares.
let Counter="";
let Lap=0;

//3.Utilizar un ciclo for para recorrer los números desde 0 hasta X (inclusive).

//4.Dentro del ciclo, verificar si el número es impar.
for(Lap = 0; Lap<=Number; Lap++){

    //5.Si el número es impar, incrementar el contador de números impares.
if(Lap % 2 !==0 && Lap/Lap===1){
    Counter++;
}
};

//6.Al finalizar el ciclo, imprimir en consola la cantidad de números impares encontrados.
console.log ('The odd numbers between 0 and ' + Number + ' are: '  + Counter);
