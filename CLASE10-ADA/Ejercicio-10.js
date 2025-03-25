//Ejercicio 10 - Cálculo de Descuento: 
//Escribe un programa que calcule el precio final de un producto después de aplicar un descuento. 
//Pide al usuario que ingrese el precio original y el porcentaje de descuento,
// y muestra el precio final.


const prompt = require('prompt-sync')();

let Price = parseFloat(prompt("Enter the price of your product:"));
let Discout =parseFloat(prompt("Enter the discount percentage of your product: "));

let FinalPrice = Price * (Discout / 100);

console.log('The final price of your product is', Price - FinalPrice);
