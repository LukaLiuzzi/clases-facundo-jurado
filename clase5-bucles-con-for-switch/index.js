// FOR
// A diferencia del while, el for es un bucle que se ejecuta una cantidad de veces determinada.

// for (incializacion; condicion; actualizacion) { codigo a ejecutar }
// La inicializacion se realiza antes de que se inicie el bucle y se utiliza para declarar variables y asignar valores iniciales.
// La condicion es una expresion booleana que se evalua antes de cada iteracion.
// Si la expresion es verdadera, se ejecuta el codigo del bucle. Si es falsa, el bucle termina.
// La actualizacion se utiliza para actualizar el valor de la variable de control en cada iteracion.
// Se suele incrementar o decrementar el valor de la variable.

// for (let numero = 1; numero <= 10; numero++) {
//   console.log(numero)
// }

// for (let i = 10; i >= 0; i--) {
//   if (i === 0) {
//     console.log("EXPLOTOOOO!!")
//   } else {
//     console.log("Faltan " + i + " segundos para que explote la bomba")
//   }
// }

// for tambien nos permite inicializar varias variables y actualizarlas en cada iteracion
// Esto no se suele usar mucho, pero es importante saber que se puede hacer
// for (let i = 0, j = 5; i < 5; i++, j--) {
//   console.log(i, j)
// }

// Break y Continue
// break: se utiliza para salir de un bucle
// continue: se utiliza para saltar una iteracion

// for (let i = 0; i < 10; i++) {
//   const esPar = i % 2 === 0
//   if (esPar) {
//     continue
//   }

//   // Si es impar mostramos este console log
//   console.log(i)

//   // Salimos del bucle al llegar a 7
//   if (i === 7) {
//     break
//   }
// }

// Bucles anidados con for
// let numeroInicial = 1
// let numeroFinal = 100

// while (numeroInicial <= numeroFinal) {
//   console.log("Tabla de multiplicar del ", numeroInicial)

//   let numeroMultiplicador = 1
//   while (numeroMultiplicador <= 10) {
//     let resultado = numeroInicial * numeroMultiplicador
//     console.log(numeroInicial, "x", numeroMultiplicador, "=", resultado)
//     numeroMultiplicador = numeroMultiplicador + 1
//   }

//   console.log("") // Salto de linea
//   numeroInicial = numeroInicial + 1
// }

// for (let numeroInicial = 1; numeroInicial <= 10; numeroInicial++) {
//   for (
//     let numeroMultiplicador = 1;
//     numeroMultiplicador <= 10;
//     numeroMultiplicador++
//   ) {
//     const resultado = numeroInicial * numeroMultiplicador
//     console.log(numeroInicial + " x " + numeroMultiplicador + " = " + resultado)
//   }
//   console.log("")
// }

// for (let i = 0; i < 10 && i !== 3; i++) {
// 0 Se ejecuta
// 1 Se ejecuta
// 2 Se ejecuta
// 3 Ya no se ejecuta
//   console.log("Hola")
// }

// Switch
// El switch es una estructura de control que nos permite ejecutar diferentes bloques de codigo dependiendo del valor de una variable.
// Evalua una expresion, comparando el valor de la expresion con los valores de cada caso.
// Si hay coincidencia, ejecuta el codigo asociado al caso.
// Se utiliza break para separar cada caso y evitar que se sigan evaluando los casos siguientes.
// Si no hay coincidencia, se ejecuta el codigo asociado al caso default. El default es opcional.

// switch (expresion) {
//   case valor1:
//     // codigo a ejecutar si la expresion es igual a valor1
//     break

//   case valor2:
//     // codigo a ejecutar si la expresion es igual a valor2
//     break

//   default:
//     // codigo a ejecutar si la expresion no coincide con ningun valor
//     break
// }

const dia = new Date().getDay()

switch (dia) {
  case 0:
    console.log("Hoy es domingo! Se duerme siesta!")
    break
  case 1:
    console.log("Hoy es lunes! Arranca la semana!!")
    break

  case 2:
    console.log("Hoy es martes, arranco dura la semana..")
    break

  case 3:
    console.log("Hoy es miercoles, ya estamos a mitad de semana!!")
    break

  case 4:
    console.log("Hoy es jueves, se acerca el finde!")
    break

  case 5:
    console.log("Hoy es viernes! Arranca el finde!!")
    break

  case 6:
    console.log("Hoy es sabado, se saleee!")
    break

  default:
    console.log("Hay un error al obtener el dia de hoy")
    break
}

// const diaConIf = new Date().getDay()
// if (dia === 0) {
//   console.log("Hoy es domingo! Se duerme siesta!")
// } else if (dia === 1) {
//   console.log("Hoy es lunes! Arranca la semana!!")
// } else if (dia === 2) {
// } else if (dia === 2) {
// } else if (dia === 2) {
// } else if (dia === 2) {
// } else if (dia === 2) {
// }

// Agrupacion de cases
// switch (dia) {
//   case 0:
//   case 6:
//     console.log("Hoy es fin de semana!")
//     break
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     console.log("Hoy es dia de semana!")
//     break
//   case 5:
//     console.log("Hoy es viernes!")
//     break
// }

// El patron switch (true), en lugar de evaluar una expresion, evalua una condicion.

// let edad = 25
// switch (true) {
//   case edad >= 18 && edad < 25:
//     console.log("Eres mayor de edad y eres joven")
//     break
//   case edad >= 25 && edad < 40:
//     console.log("Eres mayor de edad y estás en plena madurez")
//     break
//   case edad >= 40:
//     console.log("Eres mayor de edad y estás en la mejor edad")
//     break
//   default:
//     console.log("Eres menor de edad")
// }

/*
TAREA:

let x = 5

switch (true) {
  case (x < 0):
    console.log('x es negativo')
    break
  case (x > 0):
    console.log('x es positivo')
    break
  default:
    console.log('x es cero')
}

No, porque no se puede usar una expresión booleana en el switch
No, porque no se puede saber el valor de x dentro
Sí, no hay ningún problema
*/
