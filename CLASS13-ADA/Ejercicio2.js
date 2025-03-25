//Ejercicio 2: Número mayor (función expresada) 
//Crea una función expresada llamada encontrarMayor que reciba dos números como parámetros y
let encontrarMayor = function(a,b){
    if (a>b){
        return a;
    }else{
        return b;
    };
};
// devuelva el número mayor.
console.log('El número mayor es:',encontrarMayor(12,7));
