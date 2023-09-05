// 3.2 Utilizamos el setTimeOut y hacemos pruebas en ejecución: son ejecuciones no bloqueantes, son sincronos
console.log ('Inicio del programa'); //1
setTimeout(()=>{
    console.log('Primer Timeout'); // 5

}, 3000) // despues de 3seg va a estar disponible

setTimeout(()=>{
    console.log('Segundo Timeout'); //2

}, 0) 


setTimeout(()=>{
    console.log('Tercero Timeout'); //3

}, 0) // se ejecuta al instante

console.log('Fin del programa'); //4