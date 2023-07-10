// El bucle do-while se ejecuta al menos una vez si o si, y luego comprueba la condición
// y se repite mientras la condición sea verdadera.

// let respuesta = "bsas"

// do {
//   respuesta = prompt("¿Cuál es la capital de Argentina?")
// } while (respuesta !== "bsas")

// ============================================================

// Expresiones y Declaraciones

// Las declaraciones son sentencias que definen la creacion de una variable, funcion o clase.
// Son como las instrucciones que le damos a javascript para que haga algo.

// let nombre = "Facundo"

// console.log(let nombre = "facundo") // Esto es un error porque al ser una declaracion no devuelve ningun valor

// Las expresiones son sentencias que devuelven un valor.
// Pueden ser desde un numero o un string hasta una operacion matematica o una funcion.

// 2 * 3 // Esto es una expresion que devuelve el valor 6
// console.log(2 * 3) // Si lo ponemos en un console.log() se va a mostrar en la consola porque devuelve un valor

// if (let nombre = "facundo") {
//   console.log("hola")
// }

// while (let i = 0) {
//   console.log("hola")
//   i = i + 1
// }

// ==========================================================
/* Ejercicios

Conteo de vocales en una cadena
Escribe un programa que tome una cadena de texto
como entrada y cuente la cantidad de vocales (a, e, i, o, u) que contiene.
Pista: Las cadenas de texto tienen un metodo .length que devuelve la cantidad 
de caracteres que tiene la cadena. Se usa asi:
const texto = "Hola Mundo"
console.log(texto.length) // 10
Y con el metodo .charAt() podemos acceder a un caracter en particular de la cadena.
Se usa asi:
const texto = "Hola Mundo"
console.log(texto.charAt(0)) // "H"
console.log(texto.charAt(1)) // "o"
console.log(texto.charAt(2)) // "l"
console.log(texto.charAt(3)) // "a"
Tambien existe el metodo .toLowerCase() que convierte todos los caracteres
de la cadena a minusculas. Nos puede ayudar para ahorrar comprobaciones.

============================================================
Conteo de palabras en una cadena

Escribe un programa que tome una cadena de texto como entrada y cuente la
cantidad de palabras que contiene.

============================================================
Conteo de caracteres específicos en una cadena

Escribe un programa que tome una cadena de texto y un carácter específico 
como entrada, y cuente la cantidad de veces que aparece ese carácter en 
la cadena.
*/
