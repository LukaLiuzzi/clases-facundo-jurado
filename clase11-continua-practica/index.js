// Vamos a tener 4 productos, cada uno con su nombre y precio
// Vamos a tener un menu con las opciones Ver productos, comprar un producto, salir
// Vamos a validar todo con lo que sabemos hasta ahora
// En caso de comprar productos, vamos a calcular el total de la compra y se lo vamos a mostrar al usuario

const PRODUCTO_CAMISETA = 1
const PRECIO_CAMISETA = 1000

const PRODUCTO_JEAN = 2
const PRECIO_JEAN = 2000

const PRODUCTO_ZAPATILLA = 3
const PRECIO_ZAPATILLA = 3500

const PRODUCTO_BUZO = 4
const PRECIO_BUZO = 1500

function simuladorTienda() {
  let carrito = "Usted compro: "
  let totalCompra = 0

  // Hacer switch con validaciones - (ver switch de la practica anterior)

  let menuOpcion

  do {
    menuOpcion = Number(menu())
    switch (menuOpcion) {
      case 1:
        verProductos()
        break
      case 2:
        comprarProductos()
        break
      case 3:
        SumatoriaDeProductosAlCarrito() // Faltan los parametros
        calcularTotalCompra() // Faltan los parametros
        break
      case 4:
        break
    }
  } while (
    menuOpcion !== 4 // Si el usuario ingresa 4, sale del bucle
  )
}

simuladorTienda()

function menu() {
  const rtaUsuario = prompt(
    "1) Ver productos \n 2) Comprar producto \n 3) Finalizar compra \n 4) Salir"
  )

  if (!isNaN(rtaUsuario) && rtaUsuario >= 1 && rtaUsuario <= 4) {
    // Si es numero y esta entre 1 y 4 => Si es un numero me devuelve false la funcion isNaN y le invertimos el valor con el ! (not)
    return rtaUsuario
  } else {
    alert("Error, ingrese una opción valida")
    menu()
  }
}

function verProductos() {
  alert(
    "Productos: \n Camiseta" +
      " " +
      "$" +
      PRECIO_CAMISETA +
      "\n Jean" +
      " " +
      "$" +
      PRECIO_JEAN +
      "\n Zapatilla " +
      " " +
      "$" +
      PRECIO_ZAPATILLA +
      "\n Buzo" +
      " " +
      "$" +
      PRECIO_BUZO
  )
}

function comprarProductos() {
  const producto = Number(
    prompt(
      "Selecciona el producto que queres comprar: \n 1) Camiseta \n 2) Jean \n 3) Zapatilla \n 4) Buzo \n 5) Seleccionar todos"
    )
  )

  switch (producto) {
    case 1:
      alert("Se agrego al carrito: Camiseta " + "$" + PRECIO_CAMISETA)
      break
    case 2:
      alert("Se agrego al carrito: Jean " + "$" + PRECIO_JEAN)
      break
    case 3:
      alert("Se agrego al carrito: Zapatilla " + "$" + PRECIO_ZAPATILLA)
      break
    case 4:
      alert("Se agrego al carrito: Buzo " + "$" + PRECIO_BUZO)
      break
  }
}

function SumatoriaDeProductosAlCarrito(carrito, producto, nombreProducto) {
  // Recibimos por parametros el valor viejo del carrito y el valor del producto que se quiere agregar ➡️

  // Hacemos las validaciones necesarias
  if (producto >= 1 || producto <= 4) {
    carrito = carrito + "\n" + nombreProducto
  }

  return carrito
  // Devolvemos el valor nuevo del carrito
}

function calcularTotalCompra(totalCompra, producto, precioProducto) {
  // Recibimos por parametros el valor viejo del totalCompra y el valor del producto que se quiere agregar ➡️

  // Hacemos las validaciones necesarias
  if (producto >= 1 || producto <= 4) {
    totalCompra = totalCompra + precioProducto
  }

  // Devolvemos el valor nuevo del totalCompra
  return totalCompra
}
