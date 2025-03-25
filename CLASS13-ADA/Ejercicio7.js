//Ejercicio 7: Mensaje según la hora
//Declara una variable global llamada horaActual (puedes asignarle un valor fijo).
let horaActual = 15;

// Crea una función declarada llamada mostrarSaludo 
function mostrarSaludo(){

    // que imprima "Buenos días" si la hora es menor a 12,
    if (horaActual < 12){
        return '¡Buenos días!';

        // "Buenas tardes" si es menor a 18, o 
    }else if (horaActual = 12 && horaActual <18){
        return '¡Buenas tardes!';

//"Buenas noches" en cualquier otro caso.
    } else{
        return '¡Buenas noches!';
    };

};

console.log(mostrarSaludo());

