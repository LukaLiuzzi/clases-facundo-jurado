/* REGLAS DE SINTAXIS */

// Comentario de una linea

/* 
Comentario de mas de una linea I
Comentario de mas de una linea II
*/

// No se tienen en cuenta los espacios en blanco y las nuevas lineas (Igual que html)
// console.log("Hola Mundo")

// Javascript es CASE SENSITIVE (diferencia entre mayusculas y minusculas)

// Javascript NO ES LO MISMO QUE javascript

// Existen palabras reservadas por el lenguaje:
// break, case, catch, continue, default, let, delete, do, else, finally, for, function, if,
// in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with y varias mas

/*
QUE ES UN ALGORITMO?
En informática, se llaman algoritmos el conjunto de instrucciones sistemáticas y previamente definidas que se utilizan para realizar una
determinada tarea. Estas instrucciones están ordenadas y acotadas a manera de pasos a seguir para alcanzar un objetivo.

Todo algoritmo tiene una entrada, conocida como input y una salida, conocida como output,y entre medias, están las instrucciones o secuencia de pasos a seguir. 
Estos pasos deben estar ordenados y, sobre todo, deben ser una serie finita de operaciones que permitan conseguir una determinada solución.

Caracteristicas: 
Inicio y fin
Exactidud
Secuencia
Completos
Finitos
*/

// Variables
// Una variable es un espacio en memoria que se utiliza para almacenar un valor.
// El valor que se almacena en una variable puede cambiar a lo largo de la ejecución del programa.
// 3 formas distintas de declarar variables (var, let, const) - (no son lo mismo)

// let nos permite reasignar valores a la variable
let numero // Declaramos la variable

numero = 1 // Le asignamos un valor a la variable

numero = numero + 4 // Le asignamos un nuevo valor a la variable

// console.log(numero + 5)

// console.log(numero)

let nombre = "Facundo"
let luzEncendida = true

// const no nos permite reasignar valores a la variable
const numero2 = 2

// numero2 = 3 // Esto no se puede hacer, genera un error y se corta la ejecucion del codigo

const pi = 3.14

// const no se puede inicializar sin un valor
// const numero3 // Esto no se puede hacer, genera un error y se corta la ejecucion del codigo

// var es la forma antigua de declarar variables, no se usa mas (mas adelante vamos a ver la diferencia con let)
var numero4

numero4 = 6

// console.log(numero4)

// Nomenclatura de variables (Puede contener letras, numeros y el guion bajo => _ )
// No se puede empezar con un numero
// No se puede usar espacios
// No se puede usar caracteres especiales
// No se puede usar palabras reservadas
// No se puede usar acentos
// No se puede usar ñ

const miVariable = 1
const mivariable = 1

const nombreDeUsuario = "Luka"

// Convenciones
// Existen diferentes nombres para las variables: camelCase, PascalCase, snake_case, SCREAMING_CASE

const apellidoDeLaMadre = "Perez" // camelCase
const ApellidoDeLaMadre = "Perez" // PascalCase
const apellido_de_la_madre = "Perez" // snake_case
const APELLIDO_DE_LA_MADRE = "Perez" // SCREAMING_CASE

// null y undefined (2 tipos de datos primitivos)
// null => No tiene valor
// undefined => No esta definido
let nuevaVariable // undefined porque su valor no esta definido
let nuevaVariable2 = null // null porque su valor es null

null === undefined // false
null === null // true
undefined === undefined // true

// Operador typeof
// Nos permite saber el tipo de dato de una variable
console.log(typeof "Hola") // string
console.log(typeof 1) // number
console.log(typeof true) // boolean
console.log(typeof null) // object
console.log(typeof undefined) // undefined

const edad = 21

console.log(typeof edad === "number") // true
console.log(typeof edad === "string") // false

// Prompt, consola y alert
