// OBJETOS - {}
const persona = {
  nombre: "Luka",
  edad: 21,
  estaTrabajando: true,
  alumnos: ["Facundo", "Diego", "Jose"],
  direccion: {
    pais: "Argentina",
    provincia: "Buenos aires",
  },
  caminar: () => {
    // Esto es un metodo, porque es una funcion dentro de un objeto
    console.log("Estoy caminando")
  },
  saltar: function () {
    console.log("Estoy saltando")
  },
  "nombre completo": "Luka Modric",
}

console.log(persona)
// Acceder a una propiedad de un objeto - Notacion de punto
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.estaTrabajando)
console.log(persona.altura)

// Acceder a una propiedad de un objeto - Notacion de corchetes
console.log(persona["nombre"])
console.log(persona["edad"])
console.log(persona["estaTrabajando"])
console.log(persona["altura"])

console.clear()
const promptDelUsuario = "nombre"
console.log(persona[promptDelUsuario]) // persona["nombre"]
console.log(persona.promptDelUsuario) // undefined

console.log(persona["nombre completo"])

console.log(persona.direccion.pais)
console.log(persona["direccion"]["pais"])
persona.caminar()
persona["saltar"]()

// Agregar propiedades a un objeto o modificar las existentes
console.clear()
const auto = {
  marca: "Ford",
  modelo: "Fiesta",
  anio: 2019,
}

console.log(auto)
auto.color = "rojo"
auto["asientos"] = 4

console.log(auto)
auto.modelo = "Focus"

console.log(auto)

auto["marca"] = "Chevrolet"

console.log(auto)

// Eliminar propiedades de un objeto
console.clear()
console.log(auto)

delete auto.anio

console.log(auto)

console.clear()

// Trabajamos con objetos
const nombre = "Luka"
const edad = 21

const usuario = { nombre, edad }

// Desestructuracion de objetos
const mueble = {
  tipo: "silla",
  color: "blanco",
  patas: 4,
  clientes: ["Facundo", "Diego", "Jose"],
}

const color = mueble.color
const tipo = mueble.tipo
const patas = mueble.patas
const cliente1 = mueble.clientes[0]

console.log(color, tipo, patas, cliente1)

console.clear()
const deporte = {
  nombre: "Futbol",
  pelota: "redonda",
  jugadores: ["Messi", "Ronaldo", "Neymar"],
  equipos: ["racing", "independiente"],
}

// const { nombrePropiedad } = nombreObjeto
const {
  jugadores,
  pelota,
  nombre: nombreDelDeporte,
  equipos = ["boca", "river"], // Valor por defecto si la propiedad no existe
} = deporte

console.log(jugadores)
console.log(pelota)
console.log(nombreDelDeporte)
console.log(equipos)

// Desestructuracion de objetos anidados
console.clear()

const persona2 = {
  nombre: "Facundo",
  edad: 21,
  direccion: {
    pais: "Argentina",
    provincia: "Buenos aires",
    localidad: "Avellaneda",
  },
}

const {
  direccion: { localidad, pais: paisDeLaPersona },
} = persona2

console.log(localidad)
console.log(paisDeLaPersona)

const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "music", "sports"],
}

const { weight = 70, height = 180 } = person

console.log(weight, height)

/**
 * Ejercicios:
 * 
 * Crear objetos: Crea tres objetos diferentes, cada uno representando un animal. Cada objeto debe tener propiedades como nombre, tipo, edad, y al menos un método que represente una acción que el animal pueda realizar.

Acceder a propiedades: Crea una función que acepte un objeto como parámetro e imprima en la consola el valor de la propiedad nombre de ese objeto.

Modificar objetos: Crea una función que acepte un objeto como parámetro y modifique una de sus propiedades. Luego, llama a esta función con uno de los objetos que creaste en el ejercicio 1.

Agregar propiedades: Crea una función que acepte un objeto como parámetro y agregue una nueva propiedad llamada color a ese objeto. Luego, llama a esta función con uno de los objetos que creaste en el ejercicio 1.

Eliminar propiedades: Crea una función que acepte un objeto como parámetro y elimine una de sus propiedades. Luego, llama a esta función con uno de los objetos que creaste en el ejercicio 1.

Desestructuración: Crea un objeto que represente una canción con propiedades como nombre, artista, duracion, y luego utiliza la desestructuración para obtener e imprimir en la consola el nombre del artista y la duración de la canción.

Objetos anidados: Crea un objeto que represente una receta de cocina con propiedades como nombre, ingredientes (que es un array de objetos), y luego utiliza la desestructuración para obtener e imprimir en la consola el primer ingrediente de la receta.

Combinar objetos: Crea dos objetos diferentes y luego combínalos en un tercer objeto utilizando el operador de propagación (...).

Iterar sobre propiedades: Crea una función que acepte un objeto como parámetro e itere sobre todas sus propiedades (tanto las propiedades directas como las anidadas) e imprima sus nombres y valores en la consola.

Métodos en objetos: Crea un objeto que represente un coche con propiedades como marca, modelo y un método llamado arrancar que imprima en la consola un mensaje como "El coche [marca] [modelo] ha arrancado".
 */

// Desestructuracion
const animal = {
  nombre: "Toby",
  especie: "perro",
  edad: 5,
  vacunas: {
    antirrabica: true,
    antipulgas: true,
  },
  ladrar: () => {
    console.log("Guau guau")
  },
}

const {
  especie,
  edad: edadDelAnimal,
  ladrar,
  nombre: nombreDelAnimal,
  vacunas: { antirrabica },
} = animal

console.log(especie) // perro
console.log(edadDelAnimal) // 5
console.log(nombreDelAnimal) // Toby
console.log(antirrabica) // true
