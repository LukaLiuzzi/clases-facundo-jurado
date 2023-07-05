// BUCLES CON WHILE
// Es un bucle que se ejecuta mientras la condición sea verdadera

// while ( condicion ) { codigo a ejecutar }

// Si la condicion es falsa desde el principio, el codigo entre llaves no se ejecuta nunca

// let temporizador = 10

// while (temporizador > 0) {
//   // Mientras la cuenta atras sea mayor a 0
//   // Mostrar el valor del temporizador
//   console.log("Temporizador", temporizador)

//   // Restamos 1 al temporizador
//   temporizador = temporizador - 1
// }

// console.log("EXPLOTOOOO!!!")

// Break - Cuando javascript encuentre la palabra break, se sale del bucle

// let temporizador = 10

// while (temporizador > 0) {
//   // Mientras la cuenta atras sea mayor a 0
//   // Mostrar el valor del temporizador
//   console.log("Temporizador", temporizador)

//   // Restamos 1 al temporizador
//   temporizador = temporizador - 1

//   if (temporizador === 5) {
//     // Si el temporizador es igual a 5 salimos del bucle
//     break // Salimos del bucle
//   }
// }

// console.log("EXPLOTOOOO!!!")

// Continue - Cuando javascript encuentre la palabra continue, se salta el resto del bucle y vuelve a evaluar la condicion

// let temporizador = 10

// while (temporizador > 0) {
//   // Mientras la cuenta atras sea mayor a 0
//   // Mostrar el valor del temporizador

//   // Restamos 1 al temporizador
//   temporizador = temporizador - 1

//   if (temporizador % 2 === 0) {
//     // Si la cuenta atras es un numero par
//     continue // Saltamos a la siguiente iteracion
//   }

//   console.log("Temporizador", temporizador)
// }

// console.log("EXPLOTOOOO!!!")

// ANIDACION DE BUCLES

// const numeroDeRevisiones = 3
// let tiempoParaLaCarrera = 10

// while (tiempoParaLaCarrera > 0) {
//   // Mientras falte tiempo para arrancar la carrera
//   // Mostramos el valor del tiempo
//   console.log("Nos levantamos")
//   console.log("Ajustamos cosas y probamos el auto")
//   console.log("Tiempo para la carrera", tiempoParaLaCarrera)

//   // Crear una variable que nos contabilice las revisiones realizadas. La inicializamos en 0
//   let revisionesRealizadas = 0 // Esta variable se crea y se inicializa en 0 en cada ejecucion del bucle
//   // Las variables let y const que se crean dentro de un bucle, solo existen dentro de ese bucle.
//   // Cuando el bucle termina, la variable desaparece

//   while (revisionesRealizadas < numeroDeRevisiones) {
//     // Este bucle se va a ejecutar hasta que se hayan realizado las 3 revisiones
//     revisionesRealizadas = revisionesRealizadas + 1
//     console.log(revisionesRealizadas + " Revisiones")
//   }

//   console.log("Nos vamos a dormir")
//   // Ahora ya podemos restar 1 a la cuenta atras para la carrera
//   tiempoParaLaCarrera = tiempoParaLaCarrera - 1
// }

/*
============================ 
TAREA

let drinkCoffee = 0

while (drinkCoffee < 10) {
  drinkCoffee = drinkCoffee + 1
  
  if (drinkCoffee === 8) { break }
  if (drinkCoffee === 5) { continue }

  console.log('Café')
}

¿Cuántas veces saldrá en consola la palabra 'Café'?
5, 6, o 7? Porque? No vale ejecutar el codigo, hay que razonarlo.

============================

Ejercicio de suma de números pares:
Escribe un programa que calcule la suma de todos los números pares del 1 al 100 
utilizando un bucle while. Muestra el resultado al final.
Ejemplo: 1 + 2 + 3 + 4 + 5 + ... + 100 = 2550

*/
