// Function Expression
// Es una funcion que se asigna a una variable

function suma(a, b) {
  // Esto es una declaracion de funcion
  return a + b
}

const suma2 = function (a, b) {
  // Esto es una expresion de funcion
  return a + b
}

// Entre estas 2 hay una diferencia muy importante

// Hoisting
// Las declaraciones de funciones se elevan al inicio del archivo

restar()

function restar() {
  console.log(5 - 3)
}

// Las expresiones de funciones no se elevan

// multiplicar() Esto da error porque no se puede llamar a una funcion que no esta definida aun

const multiplicar = function () {
  console.log(2 * 2)
}

// Arrow functions
// Son una forma mas corta de escribir funciones

const miFuncionFlecha = () => {
  console.log("Hola mundo")
}

// Si la funcion recibe un solo parametro, se pueden omitir los parentesis. Si tiene mas de uno, se deben poner los parentesis

const otraFuncionFlecha = (nombre) => {
  console.log(nombre)
}

const otraFuncionFlecha2 = (nombre, apellido) => {
  console.log(nombre, apellido)
}

// Si la funcion solo tiene una linea de codigo, se pueden omitir las llaves y el return

const otraFuncionFlecha3 = (nombre, apellido) => console.log(nombre, apellido)

// Las funciones flecha tienen ciertas ventajas sobre las funciones normales

// Sintaxis mas concisa: Es mas corta y facil de leer

// Return implicito

// Las funciones anonimas son mas legibles.

// Diferencia entre funcion regular y funcion flecha
function sumaEnFuncionNormal(a, b) {
  return a + b
}

const sumaEnFuncionFlecha = (a, b) => a + b

// Mini ejercicio
const ejercicio = (a, b) => {
  a + b
}

ejercicio(2, 3)

// 5
// undefined <==
// Error

// Recursividad
// La recursividad es una tecnica en programacion que consiste en que una funcion se llame a si misma
// Se evita que se llame a si misma infinitamente con una condicion base

console.clear()

function cuentraAtras(numero) {
  // Condicion base: Si el numero que recibe es menor de 0, salimos de la funcion
  if (numero < 0) {
    return
  }

  // Si el numero es mayor o igual a 0, lo mostramos
  console.log(numero)

  // Llamamos a la funcion con el numero anterior
  cuentraAtras(numero - 1)
}

cuentraAtras(3) // Ejecutamos la funcion por primera vez

console.clear()

// El factorial de un numero es el resultado de multiplicar ese numero por todos los anteriores hasta
// llegar a 1. Por ejemplo, el factorial de 5 es 5 * 4 * 3 * 2 * 1 = 120
let vecesQueSeEjecuto = 0
function factorial(n) {
  vecesQueSeEjecuto++
  // Condicion base: Si el numero es 0 o 1, devolvemos 1 y no llamamos a la funcion nuevamente
  if (n === 0 || n === 1) {
    return 1
  } else {
    // Si el numero es mayor que 1, llamamos a la funcion
    return n * factorial(n - 1)
  }
}

console.log(factorial(5))
console.log(vecesQueSeEjecuto)
