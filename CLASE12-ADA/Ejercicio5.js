//Ejercicio 5: Uso de Arrays y Condicionales
//Crea un programa que solicite al usuario ingresar 5 nombres y
// los almacene en un array. 
const prompt = require('prompt-sync')();
let Names = [];
for(let lap=0; lap< 5; lap++){
    let List= prompt(`Please enter a name: `);
    Names[lap]= List;
};
//Luego, solicita al usuario ingresar un nombre y 
let SearchName = prompt('Enter a name to search in the list: ');

//verifica si ese nombre se encuentra en el array.
let NameOnList = false;
for (let lap = 0; lap < 5; lap++) { 
    if (Names[lap] === SearchName) {
        NameOnList = true;
        break; 
    }
}
if (NameOnList) {
    console.log("The name is in the list!");
} else {
    console.log("The name is not found in the list!");
}