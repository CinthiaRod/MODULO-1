//Ejercicio 5: Verificar origen del auto
//Utiliza una función flecha para determinar si la marca ingresada corresponde a un auto de origen nacional o importado.
const prompt =require('prompt-sync')();
const ClasificacionAutos= Marca =>{
    
//Considera que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de origen nacional, 
//se utilizaran condicionantes y dependiendo de ello será el resultado que retorne (Se considero las variantes de su escritura)
if (Marca == 'Fiat' || Marca == 'Ford' || Marca == 'Chevrolet' ){
return 'Nacional';
}else if(Marca == 'fiat' || Marca == 'ford' || Marca == 'chevrolet' ){
    return 'Nacional';
}else if(Marca == 'FIAT' || Marca == 'FORD' || Marca == 'CHEVROLET' ){
    return 'Nacional';
}else{
    return 'Importado'
};
};

//✓Solicita al usuario que ingrese la marca de un auto.
const Marca = prompt('Por favor ingresa la marca de un auto: ');

//✓Muestra un mensaje indicando si el auto es de origen nacional o importado, basado en la marca ingresada por el usuario.
console.log('La marca de auto ingresada corresponde a un auto: ' + ClasificacionAutos(Marca));
