//Encuentra la película más corta y analiza los títulos largos Supón que tienes una lista de películas con su duración en minutos:
const movies = [
{ title: 'El Señor de los Anillos', duration: 200 },
{ title: 'Inception', duration: 148 },
{ title: 'Matrix', duration: 136 },
{ title: 'Toy Story', duration: 81 },
{ title: 'Coco', duration: 105 }
];
//Queremos:
//Encontrar la película más corta en duración.
let menorDuracion = movies.reduce((menor, movie) =>
    movie.duration < menor.duration ? movie : menor, movies[0]);

//De las películas restantes, quedarnos con aquellas cuyo título tenga más de 10 caracteres.
let tituloLargo10 = movies. filter((movie)=>
    movie.title.length > 10 && movie!== menorDuracion)

//Crear una lista de los títulos largos en minúsculas.
let TituloMiniscula= tituloLargo10.map((movie)=>
movie.title.toLowerCase());

//Imprime en la consola:
//El título de la película más corta.
console.log(`El título de la pelicula más corta es: ${menorDuracion.title}`);

//La lista de títulos largos en minúsculas
console.log(`\nEl título más largo de la lista de peliculas es: ${TituloMiniscula}`);
