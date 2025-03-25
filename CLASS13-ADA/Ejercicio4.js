//Ejercicio 4: Número par o impar 
//Crea una función declarada llamada esPar que reciba un número y 
function esPar(){
    let a =12;

//devuelva "Es par" si el número es par o "Es impar" si el número es impar. 
if(a % 2 === 0){
    return `${a} es par`;
    
}else{
return `${a} es impar`
};
};
//Usa una variable local para guardar el resultado.
console.log(esPar());
