//Ejercicio 2: Análisis y Modificación de Cadenas de Texto
//Pide al usuario que ingrese una oración.
//Luego, escribe la función “procesarOracion” que haga lo siguiente:
//1.Quite los espacios en blanco al principio y al final.
//2.Divida la oración en palabras.
//3.Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar “/a/g” 
//que indica que se debe buscar todas las apariciones del carácter 'a' 
//en la cadena (la bandera g es para global, lo que significa que reemplazará todas las apariciones,
//  no solo la primera).
//4.Encuentre la posición de la primera aparición de la palabra "javascript". De no aparecer retornar -1
//5.Convierta la oración a una cadena de palabras separadas por guiones.

const prompt = require ('prompt-sync')();
let oracion = prompt('Por favor, ingresa una oración: ');

let procesarOracion= oracion.trim();
const dividirOracion= oracion.split(" ");
const remplazar= oracion.replace(/a/g, "@")
const buscarJs = oracion.indexOf('Javascript');
const guinoes= dividirOracion.join('-');




//mostrando resusltados
console.log(`\nSe eliminan los espacios en blanco dentro de la frase: ${procesarOracion}`);
console.log(`\nSe divide la oración por palabras: ${dividirOracion}`);
console.log(`\nSe remplazaran las letras "a" dentro de la oración por "@": ${remplazar}`);
console.log(`\nBuscaremos si en la oración de encuentra la palabra Javascript, de lo contrario arrojara "-1": ${buscarJs}`);
console.log(`\nSeparamos la frase por guiones: ${guinoes}`);

