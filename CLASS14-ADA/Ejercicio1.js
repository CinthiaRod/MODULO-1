//Ejercicio 1: Calcular el precio final con IVA

const prompt =require ('prompt-sync')();

//Usa una función flecha para calcular el precio final.
let calcularPrecio = (Precio,Porcentaje) => Precio +(Precio * Porcentaje/100);

//Solicita al usuario el precio de un producto y el porcentaje de IVA.  
let  Precio = parseInt(prompt('Por favor ingresa el precio de tu producto: '));
let Porcentaje = parseInt(prompt('Por favor inngresa el IVA: '));    
let PrecioFinal = calcularPrecio (Precio, Porcentaje)

//Mostrando el precio final
console.log(`Su precio final es: ${PrecioFinal}`);
