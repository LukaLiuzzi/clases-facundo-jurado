/**
 * TODO LIST:
 * Agregar una tarea -
 * Listar las tareas pendientes -
 * Eliminar una tarea
 * Modificar una tarea
 * Cambiar el estado de la tarea completada/pendiente
 * Mostrar una lista de tarea completadas -
 */

function ToDoList() {
  // Función que muestre el menú
  //menu()
  agregarTarea()
  //Mostrar todas las tareas
  listarTareasPendientes()
  //Modificar tareas
  modificarTareas()
  // Estado de la tarea
  cambiarEstadoTarea()
  //Mostrar tareas finalizadas
  listarTareasCompletas()
  //Eliminar tarea
  eliminarTarea()
}

const tareas = [
  {
    nombre: "Practicas más JS",
    estado: "Pendiente",
  },
  {
    nombre: "Compras super",
    estado: "Completada",
  },
]

// Función Menú

//function menu() {
//let opcionUsuario = Number(
//  prompt("Ingresá la opción a la que queres acceder: ")
// )
//  return opcionUsuario
//}

// Función para agregar tareas

function agregarTarea() {
  const agregarTarea = prompt("Escribí la tarea que querés agregar: ")
  tareas.push({
    nombre: agregarTarea,
    estado: "Pendiente",
  })
}

console.log(tareas)

// Función para listar todas las tareas

function listarTareasPendientes() {
  const tareasPendientes = tareas.filter(
    (tarea) => tarea.estado === "Pendiente"
  )
  tareasPendientes.forEach((tareaPendiente, i) => {
    const mensaje = "Las tareas pendientes son: " + tareaPendiente.nombre
    alert(mensaje)
  })
}

// Listar completadas

function listarTareasCompletas() {
  const tareasCompletadas = tareas.filter(
    (tarea) => tarea.estado === "Completada"
  )
  tareasCompletadas.forEach((tareaCompletada, i) => {
    const mensaje = "Las tareas completadas son: " + tareaCompletada.nombre
    alert(mensaje)
  })
}

// Función para modificar una tarea.
function modificarTareas() {}

// EStado de la tarea: Completa / Pendiente

function cambiarEstadoTarea() {}

// Eliminar tareas
function eliminarTarea() {
  // Mostrar tareas más indice, ej: 1) Tarea 1
  // Prompt para que el usuario ponga el indice
  // Logica para eliminar (filter())
}

ToDoList()
