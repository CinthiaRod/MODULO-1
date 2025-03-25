//Ejercicio 8: Funcion backEnd()
//Creá la función backEnd() que recibirá 2 números como parámetros. 
function backEnd (F,C){

    //La función deberá imprimir por pantalla los números del 1 al 100, 
//pero teniendo en cuenta los siguientes criterios:
    for(i=1 ; i <=100 ; i++ ){

//✓Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string “Back End” en lugar del número.    
if(i % F ==0 && i % C == 0){
    console.log("Back End");

//✓Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá mostrar el string “End” en su lugar del número.
}else if(i % C === 0){
    console.log ("End");
//✓Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá mostrar el string “Back” en lugar del número.
}else if(i % F === 0){
    console.log("Back");
    }else{
        console.log(i);
    };
    };
};
//Se ingresan los parámetros
backEnd(12,7);
