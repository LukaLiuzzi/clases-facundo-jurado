// Las funciones nos sirven para ejecutar bloques de codigo que realizan una tarea especifica. Se pueden ejecutar reiteradas veces.

// Declaramos una funcion
function saludar() {
  console.log("Hola Luka")
  // Mucho mas codigo...
}

// Ejecutamos la funcion
// saludar()

// Esta funcion no devuelve nada, por lo tanto, respuesta es undefined
// const respuesta = saludar()
// console.log(respuesta)

// Retornando un resultado
function sumar() {
  return 1 + 3
}

const resultado = sumar()

// console.log(resultado) // 4

// Funcion que devuelve un numero random del 1 al 10
// Vamos a usar el objeto Math, que es un objeto que trae JS que tiene propiedades y metodos matematicos.
// Match.random() retorna un numero aleatorio entre 0 y 1. Con decimales.
// Match.floor() redondea un numero que le pasemos hacia abajo.

function obtenerNumeroRandom() {
  // Obtenemos un numero entre 0 y 1
  const random = Math.random() // Por ejemplo nos devuelve: 0.344563463457657447

  // Lo multiplicamos por 10 para que este entre 0 y 10
  const randomMultiplicado = random * 10 // => 3.49765843684353

  // Redondeamos hacia abajo para que este entre 0 y 9
  const redondeado = Math.floor(randomMultiplicado)

  // Le sumamos 1 para que este entre 1 y 10
  const resultado = redondeado + 1 // => 4

  // Retornamos el resultado
  return resultado
}

console.log(obtenerNumeroRandom())
console.log(obtenerNumeroRandom())
console.log(obtenerNumeroRandom())
console.log(obtenerNumeroRandom())
console.log(obtenerNumeroRandom())

// Funciones con parametros
function saludar(nombre) {
  console.log("Hola " + nombre)
}

saludar("Luka")
saludar("Facundo")

function sumar(a, b) {
  return a + b
}

function restar(a, b) {
  return a - b
}

function multiplicar(a, b) {
  return a * b
}

function dividir(a, b) {
  return a / b
}

console.log(sumar(5, 7))
console.log(sumar(7, 7))
console.log(restar(6, 3))
console.log(multiplicar(6, 6))
console.log(dividir(9, 3))

// El orden de los parametros IMPORTA. Una funcion puede RETORNAR 1 SOLO VALOR. Quiere decir que una vez que retorna, se sale de la funcion.
function cocinarEnHorno(comida, tiempo, potencia) {
  if (comida === "arroz") return "El arroz no se puede meter al horno" // Cuando retornamos una funcion, el codigo de abajo no se ejecuta nunca

  if (comida === "arroz" && tiempo === 4 && potencia === "bajo") {
    return "Arroz cocinado"
  }

  if (comida === "milanesa" && tiempo === 1 && potencia === "alto") {
    return "Milanesa cocida"
  }

  if (comida === "papas" && tiempo === 3 && potencia === "bajo") {
    return "Papas al horno"
  }

  return "Comida no soportada"
}

const resultadoDeHorno = cocinarEnHorno("milanesa", 1, "alto")
console.log(resultadoDeHorno)

const resultadoDeHorno2 = cocinarEnHorno(1, 5, "milanesa")
console.log(resultadoDeHorno2)

const resultadoDeHorno3 = cocinarEnHorno("arroz", 4, "bajo")
console.log(resultadoDeHorno3)
