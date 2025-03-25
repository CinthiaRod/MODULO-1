//Ejercicio 9: Cuenta la cantidad total de letras en una lista de palabras
//Imagina que tienes una lista de palabras ['sol', 'luna', 'estrella']. 
//Queremos saber cuántas letras hay en total entre todas las palabras. 
// Por ejemplo, 'sol' tiene 3 letras, 'luna' tiene 4, y 'estrella' tiene 8. 
// La suma total debería ser 15.

let palabras = ['sol', 'luna', 'estrella'];

let suma = palabras.reduce(function(acum, palabras){
    return  acum + palabras
});
console.log("La suma de las letras de cada palabra es: " + suma.length);
