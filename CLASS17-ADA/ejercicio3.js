//Ejercicio 3: Gestión Compleja de Arrays
//A partir del siguiente array de productos, 
let productos=[
    {nombre:"Alfajores", precio:30},
    {nombre:"Chocolates", precio:50},
    {nombre:"Chupetines", precio:70},
    {nombre:"Caramelo", precio:20},
    {nombre:"Bombones", precio:20}
];

// escriba la función ‘gestionarProductos’ que realice las siguientes tareas:
//1.Añada un nuevo producto al array.

let gestionarProductos = productos.push({nombre:"Paleta de helado", precio: 30})
console.log("Agregamos un producto: \n", productos);

//2.Elimine el último producto del array.
productos.pop();
console.log("\nEliminamos el último producto del array: \n", productos);

//3.Encuentre el índice de un producto específico. En este punto pueden usar forEach o investigar el método “findIndex()”
let indice = productos.findIndex((producto) => 
    producto.nombre === "Chocolates");
    console.log("\nBuscamos un producto específico: ", indice);

//4.Verifique si existe un producto con precio mayor a 50. Para esto investigar el método “.some()” https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some
let PrecioMayor = productos.some((producto)=> producto.precio >50);
console.log("\n¿Existe un producto con precio mayor a 50? ", PrecioMayor);

//5.Devuelva una cadena de nombres de productos separados por comas.
let SeparadosXComas = productos.reduce((acum, producto)=> { 
    return acum + (acum ? " , " : "") + producto.nombre; },
"");
console.log("\nSeparamos por comas los nombres de los productos: ", SeparadosXComas);
