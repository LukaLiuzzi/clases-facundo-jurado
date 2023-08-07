// Simulador de cajero automatico: Promt. COnsultar, retirar, depositar, salir

// Funcion principal
function cajeroAutomatico() {
  const saldo = 1000

  login()

  let opcion = Number(mostrarMenu())

  switch (opcion) {
    case 1:
      consultarSaldo(saldo)
      break
    case 2:
      retirarDinero(saldo)
      break
    case 3:
      depositarDinero(saldo)
      break
    case 4:
      return
  }
}

cajeroAutomatico()

function login() {
  const contrasenia = 111
  let contraseniaUsuario
  // Comprobar que sean iguales
  // Si son iguales, le vamos a permitir ingresar al cajero
  // Si son diferentes, le vamos a pedir que ingrese nuevamente la contraseña
  do {
    contraseniaUsuario = prompt("Ingresa tu contraseña:")
    if (+contraseniaUsuario === contrasenia) {
      alert("Bienvenido al cajero")
      break
    } else {
      alert("Contraseña incorrecta")
    }
  } while (+contraseniaUsuario !== contrasenia)
}

function mostrarMenu() {
  const respuestaUsuario = prompt(
    "1) Consultar saldo \n 2) Retirar dinero \n 3) Depositar dinero \n 4) Salir"
  )
  return respuestaUsuario
}

function consultarSaldo(saldo) {
  alert("Su saldo es de $" + saldo)
}

function retirarDinero(saldo) {
  let retirar
  do {
    retirar = prompt("Ingrese el monto a retirar: ")
    if (!isNaN(retirar) && +retirar <= saldo) {
      // saldo - retirar // Hacemos una resta para actualizar el saldo pero no lo guardamos en ningun lado
      saldo -= retirar // Esta es la forma correcta de actualizar el saldo
      alert("Retiro exitoso")
      break
    } else {
      alert("No tenes saldo disponible, intenta con otro monto")
    }
  } while (isNaN(retirar) && +retirar >= saldo) // Aca tambien falta algo mas para volver para atras

  return saldo
}

// Funcion depositar dinero
function depositarDinero(saldo) {
  let deposito

  do {
    deposito = Number(prompt("¿Cuánto quieres depositar?"))
    if (!isNaN(deposito)) {
      saldo += deposito
      alert("Deposito exitoso. El nuevo saldo es $" + saldo)
      break
    } else {
      alert(
        "El deposito no se realizo, volve a intentarlo. Ingresa numeros validos"
      )
    }
  } while (isNaN(deposito))

  return saldo
}

// TAREA
/*
1 - Si elijo una opcion y finaliza el flujo de esa opcion se vuelva a mostrar el menu
(por ejemplo, si elijo consultar saldo y me muestra el saldo, que luego me vuelva a mostrar el menu)

2 - Si cancelo alguna opcion, que me vuelva a mostrar el menu

3 - Si ingreso una opcion que no existe, que me muestre un alert que diga opcion incorrecta y que me vuelva a mostrar el menu.

4 - Si ingreso una opcion que no sea un numero, que me muestre un alert que diga opcion incorrecta y que me vuelva a mostrar el menu.

5 - En el retiro, que me diga cuanto saldo me queda luego de retirar el dinero

6 - En todos los menus, verificar que si no ingreso un numero, me muestre un alert que diga opcion incorrecta y que me vuelva a mostrar ese mismo menu.
*/
