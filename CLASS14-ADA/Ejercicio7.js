//Ejercicio 7: Libros
//Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
//✓título: una cadena con el título del libro.
//✓autor: una cadena con el nombre del autor del libro.
//✓anioPublicacion: un número con el año de publicación del libro.

let Libro1 ={
    Titulo: 'Los cuatro acuerdos',
    Autor:'Dr. Miguel Ángel Ruiz',
    AnioPublicacion:1998
};
let Libro2 ={
    Titulo:'Sanación emocional del niño interior, metodo ser mejor ser',
    Autor:'Margarita Blanco Rugerio',
    AnioPublicacion: 2014
};
//Luego, crea una función llamada mostrarLibro que tome un arreglo de libros como parámetro y
// muestre por consola la información de cada libro en el formato especificado.
function mostrarLibro (Libros){
if (Libros){
    return `El primer libro se llama ${Libro1.Titulo}, su autor es el ${Libro1.Autor} y se publicó en el año ${Libro1.AnioPublicacion}.` +'\n' +`\nEl segundo libro se llama ${Libro2.Titulo}, su autora es ${Libro2.Autor} y se publicó en el año ${Libro2.AnioPublicacion}.`
}
};
let Libros = [[Libro1],[Libro2]];
console.log(mostrarLibro(Libros));
