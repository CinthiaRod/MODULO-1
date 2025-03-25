//Ejercicio 8: Busca un nombre específico
//Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana'].
// Queremos saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías devolverlo.

let nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];
let buscar = nombres.find(function(nombres){
    return nombres === 'Laura'
});
console.log("El nombre buscado en la lista es: "+buscar);

