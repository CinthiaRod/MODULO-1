//Ejercicio 10: Flores Favoritas
//Escribe un programa en JavaScript para contar cuántas veces el usuario menciona sus flores favoritas.
const prompt = require('prompt-sync')();

//1.Inicializa un array vacío para almacenar las flores favoritas.
let flores= [];

//2.Pregunta al usuario por sus tres flores favoritas utilizando prompt y 
let PrimeraFlor = prompt('Por favor ingresa tu primer flor favorita: ');
let SegundaFlor = prompt('Por favor ingresa tu segunda flor favorita: ');
let TerceraFlor = prompt('Por favor ingresa tu tercera flor favorita: ');

//agrega cada una al array manualmente 
flores[1] = PrimeraFlor;
flores[2] = SegundaFlor;
flores[3] = TerceraFlor;

//3.Pregunta al usuario por una flor específica y verifica si está entre sus favoritas.
let BuscarFlor = prompt ('Ingresa el nombre de la flor que desees buscar: ')


//4.Muestra por consola cuántas de las flores favoritas se mencionaron (esto debe hacerse manualmente).
let contador = 0;
for (let i = 0; i < flores.length; i++) {
    
    //Condición para validar que la flor ingresada en la busqueda esta dentro del conteo
    if (flores[i] === BuscarFlor) {
        contador++;
    }
};
//Validando e imprimiendo el resultado, si aparece la flor y cuantas veces se repite
if (contador > 0){
    console.log(`La cantidad de veces que la flor ${BuscarFlor} se repite es: ${contador} `);
     
    // En caso de que la flor buscada no aparezca
}else{
    console.log(`La flor ${BuscarFlor} no se encuentra registrada en la lista.`);
};