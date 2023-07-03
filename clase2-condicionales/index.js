// console.log()
// Nos sirve para mostrar lo que le pasemos como parametro en la consola del navegador
// console.log('Hola mundo')

// prompt()
// Mostrara un cuadro de dialogo para que el usuario ingrese un dato.
// Se puede proporcionar un mensaje para que el usuario sepa que debe ingresar.
// * Siempre devuelve un string
// const nombre = prompt("Ingresa tu nombre")
// console.log(nombre)

// alert()
// Mostrara un cuadro de dialogo con el mensaje que le pasemos como parametro
// alert("Hola mundo")

// confirm()
// Mostrara un cuadro de dialogo con el mensaje que le pasemos como parametro
// y nos devolvera un booleano dependiendo de la opcion que el usuario seleccione
// const confirmacion = confirm("¿Estas seguro de querer salir?")
// console.log(confirmacion)

// Todos estos metodos son metodos del objeto window, que ya viene por defecto con js en el navegador

// Practica
// 1. Pedir al usuario que ingrese 2 numeros
// 2. Mostrar en un alert el resultado de sumar ambos numeros

// const numero1 = prompt("Ingresa el primer numero")
// const numero2 = prompt("Ingresa el segundo numero")
// const resultado = Number(numero1) + parseInt(numero2)
// alert("El resultado de " + numero1 + " + " + numero2 + " es " + resultado)

// CONDICIONALES
// Nos permiten ejecutar un bloque de codigo si se cumple una condicion
// Si ( condicion ) entonces { operacion }
// const nombre = "luka"
// if (nombre === "Luka") {
//   console.log("El nombre es Luka")
// } else {
//   console.log("El nombre NO es Luka")
// }

// const nombreDeUsuario = prompt("Ingresa tu nombre de usuario")

// if (nombreDeUsuario === "") {
//   alert("No ingresaste un nombre de usuario")
// } else {
//   alert("Bienvenido " + nombreDeUsuario)
// }

// const precio = 105

// if (precio < 20) {
//   console.log("El precio es menor a 20")
// } else if (precio > 20 && precio < 50) {
//   console.log("El precio es mayor a 20 y menor a 50")
// } else if (precio > 50 && precio < 100) {
//   console.log("El precio es mayor a 50 y menor a 100")
// } else {
//   console.log("El precio es mayor a 100")
// }

const usuarioLogueado = true

const edadDelUsuario = 16

if (usuarioLogueado) {
  if (edadDelUsuario >= 18) {
    console.log("Podes pasar al boliche")
  } else {
    console.log("No podes pasar al boliche porque sos menor")
  }
}

// Esto es lo mismo pero mas prolijo y mas corto
if (usuarioLogueado && edadDelUsuario >= 18) {
  console.log("Podes pasar al boliche")
} else {
  console.log("No podes pasar al boliche porque sos menor")
}
