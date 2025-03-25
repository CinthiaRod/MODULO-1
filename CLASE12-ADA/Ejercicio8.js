//Ejercicio 8: Rojo y Verde
//Para este ejercicio vamos a generar dos funciones:
//a) Una va a sumar los valores en la diagonal marcada en rojo.
//b) La otra va a marcar los valores de la diagonal marcada en verde.
//Ambas funciones deben devolver un resultado único. Rojo: 505
//Verde 505

//Generando la función para empezar a trabajar en crear la matriz 1-100
function Matrix10x10() {
    let Matrix = [];
    let CounterM = 1;

// Estableciendo un ciclo for para rellenar los parámetros en cada vuelta y 
//hacer push para agregarlos a la matriz como datos
    for (let lap = 0; lap < 10; lap++) {
        let Rows = [];
        for (let i = 0; i < 10; i++) {
            Rows.push(CounterM);
            CounterM++;
 }
        Matrix.push(Rows);
}

// Nos devolvera los valores
    return Matrix;
}

// Generando una funcion para realizar la primera suma de los valores, se genera un ciclo for para recorrelos
function FirstSum (Matrix) {
    let sum = 0;

    for (let lap = 0; lap < Matrix.length; lap++) {
        sum += Matrix[lap][lap];
    }

//y retorna el resultado de la suma
    return sum;
}

// Generando una funcion para realizar la segunda suma de los valores, se genera un ciclo for para recorrelos
function SecondSum(Matrix) {
    let sumTwo= 0;
    let Count2 = Matrix.length;

    for (let two = 0; two < Count2; two++) {
        sumTwo += Matrix[two][Count2- 1 - two];
    }

  // y retorna el resultado de la suma
    return sumTwo;
}

//Declaramos las variables llamando a las funciones declaradas
let Matrix10 = Matrix10x10();
let FirstSum1 = FirstSum (Matrix10);
let SecondSum2 = SecondSum (Matrix10);

//Mostramos los resultado de las sumas una vez ejecutadas las funciones y 
//los ciclos para recorrer los valores
console.log("The sum of first diagonal (red) is: ", FirstSum1);
console.log("The sum of second diagonal (green) is: ", SecondSum2);
