//Ejercicio 9: Última aparición de un modelo de auto
//En este ejercicio, trabajaremos con una lista de modelos de autos. 
//✓Utiliza un array llamado modelosAutos que contiene varios modelos de autos, 
//algunos repetidos para demostrar la funcionalidad.
const Autos = ["Jeep", "Fiat", "Toyota", "Mazda","Toyota", "Nissan"];

//✓Implementa la función ultimaAparicionModeloAuto(modelo), que toma modelo como parámetro (un string).
function ultimaAparicionModeloAuto(Modelos) {
    let Ultimo = -1;

    //✓Debes recorrer el array de manera manual para encontrar la última aparición del modelo.
    for (let vuelta = 0; vuelta < Autos.length; vuelta++) {
//Condición que valida la información en cada vuelta
if (Autos[vuelta] === Modelos) {
    Ultimo = vuelta;
}
}
//✓Si el modelo se encuentra en el array, la función debe imprimir por consola la posición (índice + 1)
if (Ultimo !== -1) {
    console.log(`El modelo del auto ${Modelos} se encuentra en la posición ${Ultimo + 1}.`);
   
    // Respuesta en caso de ser diferente a lo indicado
}else{
    console.log(`El modelo del auto ${Modelos} no se encuentra en el registro.`);
}
};

//Ejecutando la funcionalidad con el ingreso de datos/valores
ultimaAparicionModeloAuto('Hyundai');
ultimaAparicionModeloAuto('Jeep');
ultimaAparicionModeloAuto('Toyota');
ultimaAparicionModeloAuto('Mazda');
