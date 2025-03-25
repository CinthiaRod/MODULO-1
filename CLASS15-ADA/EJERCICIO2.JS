//Ejercicio 2: Eliminar al último invitado
//Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"].
let invitados = ["Ana", "Juan", "Carlos", "Sofía"];

//El último invitado no puede asistir. 
//Elimina al último invitado y 
let NoAsiste = invitados.pop();

//muestra quién fue eliminado y el estado actualizado de la lista.
console.log(`Lo siento el invitado ${NoAsiste} no puede ir a la fiesta`);

