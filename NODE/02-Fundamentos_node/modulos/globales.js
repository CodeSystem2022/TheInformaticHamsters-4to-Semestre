// this === global = true


// Mostrar algo en consola
//console.log

//Mostrar un mensaje en forma de error
//console.error();

//Ejecutar un código después de un intervalo de tiempo
//setTimeout(() => {});


//Ejecutar un código cada intervalo de tiempo
//setInterval(() => {};)

//Da prioridad de ejecución a una función asincronica
//setImmediate(() => {});

//console.log(global);
//console.log(setInterval);

let i = 0;
let intervalo = setInterval(() => {
   console.log('Hola');
   if (i === 3) {
       clearInterval(intervalo); //detenemos la funcion
   }
   i++
}, 1000);

setImmediate( () => {
    console.log('Saludo inmediato')
});

//requiere();

//console.log(process);
//console.log(__dirname);
console.log(__filename);

globalThis.miVariable = 'mi variable global';

console.log(miVariable)