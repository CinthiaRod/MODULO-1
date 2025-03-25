//Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista)
//Crea una función declarada llamada calcularAreaTriangulo que reciba dos parámetros: la base y la altura
const prompt = require('prompt-sync')();

function calcularAreaTriangulo (base, altura){
    return (base*altura) /2;
};

// de un triángulo. La función debe devolver el área del triángulo.
console.log('El área del triangulo es: ', calcularAreaTriangulo(8,12));
