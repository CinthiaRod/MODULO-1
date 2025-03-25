//Gestión de inventario de una tienda
//Eres encargado de una tienda y tienes un inventario inicial de productos. La lista de productos es:
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];

//Debes realizar las siguientes acciones:
//1.Agregar un nuevo producto "Impresora" al inventario usando el método adecuado.
inventario.push("Impresora");

//2.Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado.
let buscar = inventario.includes("Tablet");
console.log("¿Se encuentra en en el inventario la Tablet? ", buscar);

//3.Eliminar el primer producto del inventario.
inventario.shift();

//4.Mostrar la lista actualizada de productos en una sola cadena, separados por comas.
console.log(inventario.join(", "));

