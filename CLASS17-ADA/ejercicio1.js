//Ejercicio 1: Manipulación Completa de un Objeto Literal y Arrays
//Crea un objeto literal que represente un estudiante.
// El mismo debe tener las siguientes propiedades: nombre, edad y un array de notas (con 5 notas).
let estudiante = {
    nombre:'Coco',
    edad: 11
};
let notas = [10,8,9,10,9]

//Luego, escribe la función “procesarEstudiante” que tendrá como objetivo realizar las siguientes tareas:
//1.Agregar una nueva nota al array de notas.
let procesarEstudiante = notas.push(9);

//2.Eliminar la primera nota del array.
let EliminarNota = notas.shift();

//3.Calcular el promedio de las notas restantes.
let suma = notas.reduce( function(acum, nota){
    return acum + nota
});
let promedio =suma / notas.length

//4.Convertir el nombre del estudiante a mayúsculas. Para esto investiga sobre el método “toUpperCase()”
estudiante.nombre = estudiante.nombre.toUpperCase()

//5.Devuelver un objeto con el nombre en mayúsculas y el promedio de las notas.
console.log(`El nombre del estudiante es ${estudiante.nombre} y su promedio es ${promedio}`);
