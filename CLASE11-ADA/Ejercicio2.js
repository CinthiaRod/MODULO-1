//Ejercicio 2: Semáforo inteligente
//Consigna: Vamos a programar un semáforo. 
//Escribe un programa que le pida al usuario ingresar un color del semáforo: rojo, amarillo o verde. 
//Dependiendo del color ingresado, el programa debe imprimir un mensaje con la acción correspondiente:
//•Rojo: "Alto, no puedes avanzar."
//•Amarillo: "Precaución, prepárate para avanzar."
//•Verde: "Avanza con seguridad." 
//Si el usuario ingresa un color inválido, el programa debe mostrar un mensaje: 
//"Color no reconocido, ingresa rojo, amarillo o verde." 
//Utiliza un switch para resolver este ejercicio.

const prompt = require('prompt-sync')();

let Color = prompt( "Please  choose a traffic light color: ");

switch (Color){
    case 'red':
        console.log ('Stop, you can not move forward');
        break;
    case 'Red':
        console.log ('Stop, you can not move forward');
        break;
    case 'RED':
            console.log ('Stop, you can not move forward');
            break;
    case 'yellow':
        console.log('Caution, prepare to move forward');
        break;
    case 'Yellow':
            console.log('Caution, prepare to move forward');
            break;
     case 'YELLOW':
                console.log('Caution, prepare to move forward');
                break;
    case 'green':
        console.log('Move forward safely');
        break;
    case 'Green':
            console.log('Move forward safely');
            break;
    case 'GREEN':
        console.log('Move forward safely');
        break;
    default:
        console.log('Unrecognized color, enter red, yellow or green');
}
