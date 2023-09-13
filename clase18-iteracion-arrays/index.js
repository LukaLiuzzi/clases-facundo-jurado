// Imprimiendo los elementos de un array con un while
const frutas = ["🍎", "🍊", "🍌"]
const array = []
let i = 0

while (i < frutas.length) {
  console.log(frutas[i]) // Imprime el elemento que esta en la posicion i
  i++ // Incrementa el valor de i en 1
}

// Imprimiendo los elementos de un array con un for
console.clear()
const objetos = ["📺", "📱", "📟"]

for (let i = 0; i < objetos.length; i++) {
  console.log(objetos[i])
}

for (let i = objetos.length - 1; i >= 0; i--) {
  console.log(objetos[i])
}

// Imprimiendo los elementos de un array con un for...of
console.clear()
const animales = ["🐶", "🐱", "🐭"]

// Primero la variable que tiene el valor de cada elemento en cada iteracion, luego el array a iterar.
for (const animal of animales) {
  console.log(animal)
}

// Imprimiendo los elementos de un array con un forEach
// forEach no devuelve nada, solo itera sobre el array
console.clear()
const colores = ["🔴", "🟢", "🟡"]

colores.forEach((color, i) => {
  console.log(color, i)
})
