//Ejercicio 3: Clasificación de edades
const prompt = require('prompt-sync')();

//Solicita al usuario una edad y
let Edad = parseFloat(prompt('Ingresa una edad: '))

// usa una función flecha para clasificarla en niño, adolescente, adulto o adulto mayor.
let Clasificacion = (Edad) =>{


// Condiciones para clasificar
    if (Edad >=0 && Edad <= 12){
        return 'niño';
    }else if (Edad > 12 && Edad <18){
        return 'adolescente';
    }else if (Edad = 18 && Edad <65){
        return'adulto';
    } else{
        return 'adulto mayor';
    };

};

//Mostrando el resultado
console.log('Según la edad ingresada eres un', Clasificacion(Edad));

