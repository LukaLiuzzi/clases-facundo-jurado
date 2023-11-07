/**
 * TODO LIST:
 * Agregar una tarea
 * Listar las tareas pendientes
 * Eliminar una tarea
 * Modificar una tarea
 * Cambiar el estado de la tarea completada/pendiente
 * Mostrar una lista de tarea completadas
 */

function ToDoList() {
  // Función que muestre el menú
  //menu()
  agregarTarea()
  //Mostrar todas las tareas
  listarTareas()
  //Modificar tareas
  modificarTareas()
  // Estado de la tarea
  cambiarEstadoTarea()
  //Mostrar tareas finalizadas
  listarTareasCompletas()
  //Eliminar tarea
  eliminarTarea()
}

const tareas = [tarea1, tarea2]

const tarea1 = {
  nombre: "",
  estado: "Completado",
}

// Función Menú

//function menu() {
//let opcionUsuario = Number(
//  prompt("Ingresá la opción a la que queres acceder: ")
// )
//  return opcionUsuario
//}

// Función para agregar tareas

function agregarTarea() {
  const agregarTarea = prompt("Tarea: ")

  console.log(tarea.nombre)
}

console.log(tarea)

// Función para listar todas las tareas

function listarTareas() {}

// Función para modificar una tarea.
function modificarTareas() {}

// EStado de la tarea: Completa / Pendiente

function cambiarEstadoTarea() {}

// Listar completadas

function listarTareasCompletas() {}

// Eliminar tareas
function eliminarTarea() {}

ToDoList()
