//Ejercicio 9: Última aparición de un modelo de auto
//Se está realizando el desarrollo de una aplicación para control de gastos. 
//Cada día, el usuario ingresa sus gastos cotidianos.
const prompt = require ('prompt-sync')();

//La idea es solo registrar el total de los gastos, al finalizar la jornada.
//Para simplificar, vamos a considerar que todos los meses tienen (4 semanas)
//Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día.
const Matrix7x4 =[
    [560, 500, 700, 800, 900, 750, 1300],
    [510, 679, 850, 550, 1500, 1290, 1400],
    [1240, 930, 990, 740, 589, 500, 1350],
    [820, 550, 1130, 1000, 700, 666, 900]
];

//a)Lo que nos solicitan es dar el total de gastos en una semana.
function OverheadsOfWeek(Week) {
    let Sum = 0;
    for (let Lap = 0; Lap < Matrix7x4[Week].length; Lap++) {
        Sum += Matrix7x4[Week][Lap];
    }
    return Sum;
}

//b)La aplicación también tendrá una parte de estadísticas, 
//para esto nos solicitan dar el total de un día en particular
function OverheadsForDay(day) {
    let Sum = 0;
    for (let i = 0; i < Matrix7x4.length; i++) {
        Sum += Matrix7x4[i][day];
    }
    return Sum;
}

//c)Por último, es necesario tener el total de gastos realizados en el mes.
function OverheadsForMonth() {
    let Sum = 0;
    for (let k = 0; k < Matrix7x4.length; k++) {
        for (let j = 0; j < Matrix7x4[k].length; j++) {
            Sum += Matrix7x4[k][j];
        }
    }
    return Sum;
}

//Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
function WeekDayHigh() {
    let WeekHigh = 0;
    let DayHigh = 0;
    let HighCost = Matrix7x4[0][0];

    for (let lap = 0; lap < Matrix7x4.length; lap++) {
        for (let i = 0; i < Matrix7x4[lap].length; i++) {
            if (Matrix7x4[lap][i] > HighCost) {
                HighCost = Matrix7x4[lap][i];
                WeekHigh = lap + 1; 
                DayHigh = i + 1; 
            }
        }
    }

    return { lap: WeekHigh, i: DayHigh};
}

//Mostrando la información en consola(Ejemplo del ejercicio semana 2 y día 3)
console.log('\n',"The total sum of expenses for week two is: ", OverheadsOfWeek(1));
console.log('\n' ,"The total sum of expenses for day three is: ", OverheadsForDay(2)); 
console.log('\n',"The total sum of expenses for month is: ", OverheadsForMonth());
const HighCost = WeekDayHigh();
console.log('\n',"The week with the most expenses in the month is: ", HighCost.lap);
console.log('\n',"The day with the most expenses in the month is:", HighCost.i);

