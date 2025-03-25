//Calcula el total de ventas de productos seleccionados Supón que tienes una lista de productos con sus precios en formato de objeto:
const products = [
{ name: 'Laptop', price: 1000 },
{ name: 'Mouse', price: 25 },
{ name: 'Teclado', price: 50 },
{ name: 'Monitor', price: 200 },
{ name: 'Audífonos', price: 75 }
];

//Queremos:
//Seleccionar los productos cuyo precio sea mayor o igual a 50.
let filtrar = products.filter(function(product){
    return product.price >= 50
});

//Obtener solo los nombres de esos productos.
let nombres= filtrar.map(function(product){
    return product.name
});

//Calcular el precio total sumando los precios de los productos seleccionados.
let PrecioTotal = filtrar.reduce((acum, product)=> acum + product.price, 0)

//Imprime el total y los nombres de los productos seleccionados en la consola.
console.log(`El precio total de los productos seleccionados es: $${PrecioTotal}`);
console.log("Los nombres de los articulos es: ", nombres.join(', '));
