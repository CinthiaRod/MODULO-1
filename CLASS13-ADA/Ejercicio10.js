//Ejercicio 10: Factorial de un número (Ejercicio entrevista) 
//Crea una función expresada llamada calcularFactorial que reciba un número
let calcularFactorial= function(numero){
    let calculo = 1;
    for (let i=1; i <= numero; i++){
calculo *= i;
    };
return calculo;
};
// y devuelva su factorial.
console.log (calcularFactorial(2));
