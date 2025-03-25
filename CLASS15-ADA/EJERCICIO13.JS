//Simulador de una cola de atención al cliente
//Simula una cola de atención al cliente donde los clientes llegan y son atendidos uno por uno. 
//Tienes una lista inicial de clientes en espera y un bucle que los atiende de a uno. 
//Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"]
let listaClientes =["Ana", "Carlos", "VIP", "Sofía", "Juan"];
let contador=0;

//Realiza lo siguiente:
//1.Mientras haya clientes en la cola, atiende a cada uno y muéstralo por consola.
while (listaClientes.length > 0 ){
    let AtendiendoCliente = listaClientes.shift();
    contador++;

//2.Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un mensaje especial.

    if(AtendiendoCliente === "VIP"){
        console.log("¡Por favor dar la prioridad de atención al cliente!", AtendiendoCliente);
    }else{
    console.log("Se esta atendiendo a: ", AtendiendoCliente);

    };
};

//3.Al final, muestra cuántos clientes fueron atendidos en total.
console.log("Se atendio a un total de", contador, "clientes.");
