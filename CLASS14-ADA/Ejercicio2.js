//Ejercicio 2: Calcular promedio de calificaciones
//usa una función flecha para calcular el promedio.
const prompt = require('prompt-sync')();
const Calcular= (Calificaciones) =>{
    let suma =0 ;
    for (let vuelta=0; vuelta < Calificaciones.length; vuelta++){
        suma += Calificaciones[vuelta];
    };
    return suma/Calificaciones.length;
};
//Solicita al usuario cinco calificaciones y 
let Calificaciones=[];
for (let i=0; i < 5; i++){
Calificaciones.push(parseInt(prompt(`Por favor ingresa una calificación: `)));
};

//Mostrando el resultado
console.log(`El promedio de las calificaciones es: ${Calcular(Calificaciones)}`);
