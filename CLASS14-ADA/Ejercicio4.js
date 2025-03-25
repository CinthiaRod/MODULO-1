//Ejercicio 4: Calcular descuento por cantidad
//Usa una función flecha para calcular el total con descuento según la cantidad.
const prompt = require('prompt-sync')();
const CalcularTotal= (Precio, CantidadArticulos) =>{
    let descuento='';

    //Si son más de 10 articulos tendrá 30% de descuento
    if (CantidadArticulos >=10){
        descuento= 0.30;

    //Si son más de 10 articulos tendrá 30% de descuento
    }else if( CantidadArticulos >3 && CantidadArticulos <10){
        descuento=0.10;
        
        //Si es diferente a las condiciones anteriores no aplica el descuento
    }else{
        descuento=0;
    };
    // Se genera una variable para calcular el total y agregamos como retornará la función
let Subtotal=CantidadArticulos * Precio;
return Subtotal -(Subtotal * descuento);
};
//Solicitamos al usuario ingresar la información
let CantidadArticulos = parseInt(prompt('Ingresa la cantidad de articulos de tu compra: '));
let Precio =(parseInt(prompt(`Por favor ingresa un precio: `)));

//Mostrando el resultado + mensaje
console.log(`El precio total con descuento es: ${CalcularTotal(Precio, CantidadArticulos)}`);
