//Clasificación de palabras según su longitud
//Tienes una lista de palabras en una oración. 
let frase = "JavaScript es un lenguaje poderoso y versátil";
// Debes:
//1.Dividir la oración en palabras individuales.
let Dividir = frase.split(" ");

//2.Clasificar las palabras en dos categorías:
//Cortas (menos de 5 letras)
let cortas =[];

//Largas (5 letras o más)
let largas=[];

//Se utilizará ciclo for + codicionantes para clasificar las palabras
for(i = 0 ; i < Dividir.length ; i++)
    if(Dividir[i].length < 5){
        cortas.push(Dividir[i]);
    }else{
        largas.push(Dividir[i]);
    };

//3.Mostrar ambas listas de palabras clasificadas.
console.log("La lista de palabras cortas es: ", cortas);
console.log("La lista de palabras largas es: ", largas);

