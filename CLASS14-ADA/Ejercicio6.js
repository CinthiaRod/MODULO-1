//Ejercicio 6: El deportista
//Para este ejercicio deberán definir un objeto literal “deportista”, con los siguientes atributos: nombre, energía, experiencia.
let Deportista= {
    Nombre: 'Usain Bolt',
    Energia: 100,
    Experiencia: 10,

//Ademas queremos poder pedirle al deportista que entrene. 
//Para esto, nuestro trabajo va a ser realizar una función “entrenarHoras.”
//✓Recibe por parámetro la cantidad de horas.
entrenarHoras: function (Horas) {

//✓Resta a su energía (this.energia) la cantidad de horas x 5.
this.Energia = this.Energia - (Horas * 5);

//✓Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
this.Experiencia = this.Experiencia + (Horas* 2);
}
};

//Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia 
//del deportista por consola.
console.log('\nDatos del deportista antes de entrenar');
console.log("La energía es: " + Deportista.Energia);
console.log("La experiencia es: " + Deportista.Experiencia);

//Despues del entrenar los resultados serían 
console.log('\nEl deportista finaliza su entrenamiento');
Deportista.entrenarHoras(3);
console.log("La energía actual es: " + Deportista.Energia);
console.log("La Experiencia actual es: " + Deportista.Experiencia);
