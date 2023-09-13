// Funciones flecha
// No se pueden ejecutar antes de ser declaradas
// Si recibe 1 solo parametro, no hace falta poner parentesis en la declaracion
// Si la funcion es una sola linea, no hace falta poner llaves ni return, ya que es implicito

const suma = (a, b) => {
  return a + b
}

const suma2 = (a) => {
  return a + 2
}

console.log(suma2(2))

const suma3 = (a, b) => a + b

console.log(suma3(2, 3))

// ==================================================
// Se declaran con [] y dentro se ponen los elementos separados por coma
// Se pueden mezclar tipos de datos dentro de un array pero no es recomendable
// Se puede acceder a los elementos por su indice
const arrayMixto = [1, "2", ["df", "sds"], false, true, null, undefined, 8, 9]
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const index = 2

console.log(numeros[0]) // 1
console.log(numeros[1]) // 2
console.log(numeros[9]) // undefined
console.log(numeros[index]) // 3

// Tambien podemos modificar los elementos de un array con su indice
numeros[0] = 200

console.log(numeros[0]) // 200
console.log(numeros)

// Metodos y propiedades de los arrays
// length: devuelve la cantidad de elementos del array
console.log(numeros.length) // 9

// push: agrega un elemento al final del array y devuelve la cantidad de elementos del array => Muta el array original
console.clear()
numeros.push(60)
numeros.push(70)
console.log(numeros)

// pop: elimina el ultimo elemento del array y devuelve el elemento eliminado => Muta el array original
console.clear()
const frutas = ["manzana", "banana", "pera"]
const ultimoElemento = frutas.pop()

console.log(ultimoElemento)
console.log(frutas)

// shift: elimina el primer elemento del array y devuelve el elemento eliminado => Muta el array original
console.clear()
const primerElemento = frutas.shift()

console.log(primerElemento)
console.log(frutas)

// unshift: agrega un elemento al principio del array y devuelve la cantidad de elementos del array => Muta el array original
console.clear()
frutas.unshift("naranja")
console.log(frutas)

// concat: concatena 2 arrays y devuelve un nuevo array => No muta el array original
console.clear()
const alumnos1A = ["Juan", "Pedro", "Maria"]
const alumnos1B = ["Ana", "Lucia", "Jorge"]

const alumnos1Anio = alumnos1A.concat(alumnos1B)

console.log(alumnos1Anio)

// spread operator: concatena 2 arrays y devuelve un nuevo array => No muta el array original
console.clear()
const alumnos2A = ["Juan", "Pedro", "Maria"]
const alumnos2B = ["Ana", "Lucia", "Jorge"]

const alumnos2Anio = [...alumnos2A, ...alumnos2B]
console.log(alumnos2Anio)

/*
Ejericio:
En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función procesarPedido que recibe un pedido, que es un array de platos. Lo que debemos hacer es:

El primer elemento lo sacamos del array, ya que es el nombre del cliente.
Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
Después añadimos al final del array el nombre del usuario que sacamos antes.
Recuerda que debes devolver el array modificado:

function procesarPedido(pedido) {
  // Aca va el codigo
}

*/

const nombreUsuario = "Pablo"
const pedido = [nombreUsuario, "Fideos con salsa", "Ensalada"]

function procesarPedido(pedido) {
  pedido.shift() && pedido.unshift("Bebida") && pedido.push(nombreUsuario)
  return pedido
}
console.log(procesarPedido(pedido))
