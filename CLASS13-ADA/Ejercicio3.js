//Ejercicio 3: Mensaje global y local 
//Declara una variable global llamada saludoGlobal con el valor 
//"Hola desde el scope global". 
let saludoGlobal = 'Hola desde el scope global';

//Luego, crea una función llamada mostrarMensaje que declare una variable local 
//llamada saludoLocal con el valor "Hola desde el scope local" 
function mostrarMensaje(){
let saludoLocal = 'Hola desde el scope local';
return saludoLocal;
};

//y que imprima ambos mensajes.
console.log(saludoGlobal);
console.log(mostrarMensaje());



