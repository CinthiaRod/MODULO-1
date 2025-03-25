//Encuentra los nombres más cortos y transforma su formato
//Tienes una lista de nombres de personas: ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo']. 
let nombres = ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo'];

//Queremos realizar varias tareas con esta lista:
//Primero, filtra los nombres que tengan menos de 5 letras.
let filtrar = nombres.filter(function(nombre){
    return nombre.length < 5
});

//Luego, transforma los nombres resultantes para que estén en mayúsculas.
//Finalmente, construye una frase que diga: 
//"Los nombres seleccionados son: [nombres]", donde [nombres] sea la lista resultante unida por comas.
let frase = filtrar.reduce(function(acum, filtrar){
    return acum + ', ' + filtrar
})

//Al final, imprime la frase en la consola.
console.log(`Los nombres seleccionados son: ` + frase.toUpperCase());

