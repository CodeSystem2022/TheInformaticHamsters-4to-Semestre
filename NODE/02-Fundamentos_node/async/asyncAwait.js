// La palabra async no es necesaria en las funciones, porque ya son asincronas
// Igual proyectan una sincronia visual
async function hola(nombre){ 
    return new Promise(function(resolve, reject) {
        setTimeout( function (){
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1000);
    });
    
}

async function hablar (nombre){
    return new Promise((resolve, reject) => { // usamos la sintaxis  ES6
        setTimeout( function (){
            //Validamos el error o aprobacion
            console.log('Bla bla bla');
            //if(err) reject('Hay un error');
            resolve();
        }, 1000);
    });
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
       setTimeout( function (){
            console.log('Adios ' + nombre);
           // resolve();
           reject('Hay un error');
        }, 1000); 
    })
    
}
//await hola ('Ariel');// Esto es una mala sintaxis
//await solo es valido dentro de una funcion asincrona


async function main() {
    let nombre = await hola ('Ariel');
    await hablar ();
    await hablar ();
    await hablar ();
    await adios (nombre);
    console.log('Termina el proceso...')
}
console.log('Empezamos el proceso...')
main();
console.log('Esta va a ser la segunda instruccion...')