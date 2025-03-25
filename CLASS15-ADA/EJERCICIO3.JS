//Ejercicio 3: Agregar y eliminar a la fila de mascotas
//Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato", "Conejo"]. 
let fila =["Perro", "Gato", "Conejo"];

//Llega un "Hámster" que debe ser atendido primero. 
//Agrega el "Hámster" al inicio de la lista. 
fila.unshift("Hámster");
//Luego, atiende a la primera mascota de la fila y muéstrala. 
console.log(`Favor de pasar con el veterinario la persona con su mascosta ${fila[0]}`);
fila.shift();// se elimina de la lista


//Finalmente, muestra la lista actualizada.
console.log('El orden actual de la fila es el siguiente: ', fila);
