// /*
// Sumar elementos de un array:
// Crea una función que tome un array de números como argumento y use un bucle for para sumar todos los elementos del array. Luego, devuelve la suma.
// */

// const numeros = [9, 15, 25, 85, 1000] //Debe dar 1134

// function sumarArray(numeros) {
//   let sumaArray = 0
//   for (let i = 0; i < numeros.length; i++) {
//     sumaArray += numeros[i]
//   }
//   return sumaArray
// }

// resultado = sumarArray(numeros)
// console.log(resultado)

// /*
// Encontrar el valor máximo:
// Crea una función que tome un array de números como argumento y use un bucle for para encontrar el valor máximo en el array. Luego, devuelve el valor máximo.

// */

// const arrayNumeros = [9, 15, 25, 2200, 85, 1000]

// function valorMaximo(numeros) {
//   if (!Array.isArray(numeros)) {
//     return
//   }

//   let maximo = numeros[0]

//   for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] > maximo) {
//       maximo = numeros[i]
//     }
//   }

//   return maximo
// }

// const resultadoMaximo = valorMaximo(arrayNumeros)
// console.log(resultadoMaximo)

// /*
// Duplicar elementos en un array:
// Crea una función que tome un array de números como argumento y use un bucle for para duplicar cada elemento en el array. Luego, devuelve el nuevo array con los elementos duplicados.
// */

// const elementos = [1, 3, 9, 10]

// function duplicarElementos(elementos) {
//   const elementosDos = []
//   for (let i = 0; i < elementos.length; i++) {
//     const elementosDuplicados = elementos[i] * 2
//     elementosDos.push(elementosDuplicados)
//   }
//   return elementosDos
// }

// const resultadoDuplicado = duplicarElementos(elementos)
// console.log(resultadoDuplicado)

// function duplicarElementos2(elementos) {
//   const elementosDos = []
//   for (let i = 0; i < elementos.length; i++) {
//     elementosDos.push(elementos[i])
//     elementosDos.push(elementos[i])
//   }
//   return elementosDos
// }

// const resultadoDuplicado2 = duplicarElementos2(elementos)
// console.log(resultadoDuplicado)
// /*
// Filtrar elementos en un array:
// Crea una función que tome un array de números como argumento y use un bucle for para filtrar los elementos mayores que un valor dado. Luego, devuelve un nuevo array con los elementos filtrados.
// */

// const numerosArray = [1, 52, 10, 75]
// const numeroUsuario = 15

// function numeroMayor(numerosArray, numeroUsuario) {
//   let numerosMayores = []
//   for (let i = 0; i < numerosArray.length; i++) {
//     if (numerosArray[i] > numeroUsuario) {
//       numerosMayores.push(numerosArray[i])
//     }
//   }
//   return numerosMayores
// }

// const numerosMayores = numeroMayor(numerosArray, numeroUsuario) //este me volo la cabeza.
// console.log(numerosMayores)

// =============================== ACA ARRANCA LA CLASE ================================
// Busqueda de elementos en un array: indexOf, some, every, find, findIndex e includes
const emojis = ["🥑", "🍅", "🥕", "🌶️"]

// indexOf: Devuelve el primer índice en el que se puede encontrar un elemento dado en el array, ó devuelve -1 si no está presente.

const posicionZanahoria = emojis.indexOf("🥕")
const posicionAuto = emojis.indexOf("🚗")
console.log(posicionZanahoria) // 2
console.log(posicionAuto) // -1

// includes: Devuelve true si el elemento está en el array, y false si no está.
const tienePicante = emojis.includes("🌶️")
console.log(tienePicante) // true

// some: Devuelve true si al menos un elemento del array cumple la condición dada, y false si no.
const nombres = ["Ana", "Elsa", "Olaf", "Kristoff"]
const tieneTomate = emojis.some((emoji) => emoji === "🍅")
console.log(tieneTomate) // true
const tieneNombreLargos = nombres.some((nombre) => nombre.length > 5)
console.log(tieneNombreLargos) // true

// every: Devuelve true si todos los elementos del array cumplen la condición dada, y false si no.
const todosSonMenoresA10 = nombres.every((nombre) => nombre.length < 10)
console.log(todosSonMenoresA10) // true

// find: Devuelve el primer elemento del array que cumple la condición dada, y undefined si no hay ninguno.
const primerNombreLargo = nombres.find((nombre) => nombre.length > 5)
console.log(primerNombreLargo) // Kristoff

// findIndex: Devuelve el índice del primer elemento del array que cumple la condición dada, y -1 si no hay ninguno.
const indicePrimerNombreLargo = nombres.findIndex((nombre) => nombre.length > 5)
console.log(indicePrimerNombreLargo) // 3

console.log(nombres[indicePrimerNombreLargo]) // kristoff

// Ordenamiento de arrays
// sort: Ordena los elementos de un array localmente y devuelve el array ordenado. Por defecto, el ordenamiento se realiza por orden alfabético y en orden ascendente. ==> El método modifica el array original. <==
const numeros = [1, 5, 2, 10, 9]

// numeros.sort((a, b) => a - b)
// console.log(numeros)

// toSorted: Devuelve un array con los elementos ordenados. Por defecto, el ordenamiento se realiza por orden alfabético y en orden ascendente. ==> El método NO modifica el array original. <==

const numerosOrdenadosDeMayorAMenor = numeros.toSorted((a, b) => a - b)
const numerosOrdenadosDeMenorAMayor = numeros.toSorted((a, b) => b - a)
console.log(numerosOrdenadosDeMayorAMenor)
console.log(numerosOrdenadosDeMenorAMayor)

// Transformación de arrays
// filter: Crea un nuevo array con todos los elementos que cumplan la condición dada.
const numerosPares = numeros.filter((numero) => numero % 2 === 0)
console.log(numerosPares)

const randomStrings = ["Casa", "perro", "gato", "árbol", "pelota", "avión"]
const stringConT = randomStrings.filter((string) => string.includes("t"))
console.log(stringConT)

// map: Crea un nuevo array de la misma longitud que el array original, pero con los elementos transformados por una funcion que le pasamos como parametro.

const elementos = [1, 3, 9, 10]

// function duplicarElementos(elementos) {
//   const elementosDos = []
//   for (let i = 0; i < elementos.length; i++) {
//     const elementosDuplicados = elementos[i] * 2
//     elementosDos.push(elementosDuplicados)
//   }
//   return elementosDos
// }

// const resultadoDuplicado = duplicarElementos(elementos)
// console.log(resultadoDuplicado)

const elementosDuplicados = elementos.map((el) => el * 2)
console.log(elementosDuplicados)

const newRandomStrings = randomStrings.map((string) => string.toUpperCase())
console.log(newRandomStrings)

const nuevoArrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const numerosMayoresA5 = nuevoArrayNums
  .map((num) => num * 2)
  .filter((num) => num > 5)

console.log(numerosMayoresA5)

// reduce: Aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor. ==> Crea un valor unico a partir de un array. <==
const precios = [10, 20, 30, 40, 50]

// Esto seria hacerlo con un for
let totalFor = 0 // <- Acumuador
for (let i = 0; i < precios.length; i++) {
  totalFor += precios[i] // <- Le sumamos al acumulador el valor del elemento actual
}
console.log(totalFor) // 150

// Esto seria lo mismo pero con el reduce
const total = precios.reduce((acumulador, elementoActual) => {
  return acumulador + elementoActual
}, 0)

console.log(total)

/*
Sumar elementos de un array:
Crea una función que tome un array de números como argumento y use un bucle for para sumar todos los elementos del array. Luego, devuelve la suma. ✅

Encontrar el valor máximo:
Crea una función que tome un array de números como argumento y use un bucle for para encontrar el valor máximo en el array. Luego, devuelve el valor máximo.

Duplicar elementos en un array:
Crea una función que tome un array de números como argumento y use un bucle for para duplicar cada elemento en el array. Luego, devuelve el nuevo array con los elementos duplicados.

Filtrar elementos en un array:
Crea una función que tome un array de números como argumento y use un bucle for para filtrar los elementos mayores que un valor dado. Luego, devuelve un nuevo array con los elementos filtrados.
*/

const numerosEj = [9, 15, 25, 85, 1000] // Debe dar 1134

const totalNumerosEj = numerosEj.reduce((acc, el) => acc + el, 0)
console.log(totalNumerosEj)

const numerosDuplicados = numerosEj.map(function (el) {
  return el * 2
})

console.log("Numeros duplicados", numerosDuplicados)

const valorDado = 50

const filtrado = numerosEj.filter((valorElemento) => {
  return valorElemento > valorDado
})

console.log(filtrado)

/* 
Filtrar números pares:
Dado un array de números, utiliza el método filter para crear un nuevo array que contenga solo los números pares.*/

const arrayNumeros = [9, 25, 54, 30, 100, 85] // 54,30,100 (pares)

const arrayPares = arrayNumeros.filter((element) => element % 2 === 0)
console.log(arrayPares)

/* 
Sumar todos los elementos:
Dado un array de números, utiliza el método reduce para sumar todos los elementos del array.
*/

const sumaArray = arrayNumeros.reduce((acc, ele) => {
  return acc + ele
})
console.log(sumaArray) // debe dar 303

/*
Encontrar elementos únicos:
Dado un array con elementos duplicados, utiliza el método filter o Set para obtener un nuevo array con elementos únicos.
*/

const frutas = [
  "manzana",
  "plátano",
  "naranja",
  "manzana",
  "uva",
  "pera",
  "naranja",
]

const frutasUnicas = (frutas) => {
  const frutasFiltadas = frutas.filter((fruta, index) => {
    return frutas.indexOf(fruta) === index
  })

  console.log(frutasFiltadas)
}

/*
Convertir a mayúsculas:
Dado un array de strings, utiliza el método map para crear un nuevo array que contenga todos los strings en mayúsculas.
*/

const frutasMayusculas = frutas.map((ele) => ele.toUpperCase())
console.log(frutasMayusculas)

/* 
Ordenar números:
Dado un array de números desordenados, utiliza el método sort para ordenarlos de menor a mayor.
*/

const numerosOrdenados = arrayNumeros.sort((a, b) => a - b)
console.log(numerosOrdenados)

/* Encontrar el número más grande:
Dado un array de números, utiliza el método reduce para encontrar el número más grande en el array.*/

const maximo = arrayNumeros.reduce((acc, ele) => {
  if (ele > acc) {
    return ele
  } else {
    return acc
  }
})
console.log(maximo)

// Abajo dejo los que no supe resolver :(
/*

Contar ocurrencias:
Dado un array de elementos, utiliza el método reduce para contar cuántas veces aparece un elemento específico en el array.

*/

const contarOcurrencias = (arr, elementoBuscado) => {
  // Iteramos en el array
  const contadorOcurrencias = arr.reduce((ocurrenciasAcc, el) => {
    // Comprobamos si el elemento actual es igual al elemento buscado
    if (el === elementoBuscado) {
      // si es igual a el elemento buscado, sumamos 1 al contador
      return ocurrenciasAcc + 1
    } else {
      // Si no es igual, devolvemos el contador sin modificar
      return ocurrenciasAcc
    }
  }, 0)

  return contadorOcurrencias
}

console.log(contarOcurrencias(frutas, "manzana"))
console.log(contarOcurrencias(frutas, "pera"))
console.log(contarOcurrencias(frutas, "melon"))
