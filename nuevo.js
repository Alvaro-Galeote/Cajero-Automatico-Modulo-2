document.addEventListener('DOMContentLoaded', function() {
    // Obtener el nombre de usuario desde sessionStorage
    const nombreUsuario = sessionStorage.getItem('nombreUsuario');
    
    if (nombreUsuario) {
        // Cambiar el contenido del elemento <p> con id "nombreUser"
        const elementoNombreUsuario = document.getElementById('nombreUser');
        
        if (elementoNombreUsuario) {
            elementoNombreUsuario.textContent = nombreUsuario;
        } else {
            console.error('El elemento con id "nombreUser" no se encontró en el DOM.');
        }
        
        // Buscar la cuenta del usuario en el array
        const cuentaUsuario = cuentas.find(cuenta => cuenta.nombre === nombreUsuario);
        
        if (cuentaUsuario) {
            // Actualizar el saldo en todos los elementos con clase "saldo"
            const elementosSaldo = document.querySelectorAll('.saldo');
            
            elementosSaldo.forEach(elemento => {
                elemento.textContent = `$ ${cuentaUsuario.saldo}`;
            });
        } else {
            console.error('La cuenta del usuario no se encontró en el array de cuentas.');
        }
    } else {
        console.log('No hay un nombre de usuario almacenado en sessionStorage.');
    }

      // Obtener el botón "Guardar"
      const botonGuardar = document.getElementById('guardar-ingreso');

      // Agregar evento al botón "Guardar"
      botonGuardar.addEventListener('click', function () {
          // Obtener el valor del campo de entrada con id "input-ingreso"
          const montoIngresado = document.getElementById('input-ingreso').value;
  
          // Verificar que el valor ingresado sea un número
          if (!isNaN(montoIngresado)) {
              // Convertir el valor ingresado a número
              const montoFloat = parseFloat(montoIngresado);
  
              // Obtener el nombre de usuario desde sessionStorage
              const nombreUsuario = sessionStorage.getItem('nombreUsuario');
  
              // Buscar la cuenta del usuario en el array
              const cuentaUsuario = cuentas.find(cuenta => cuenta.nombre === nombreUsuario);
  
              // Verificar si se encontró la cuenta del usuario
              if (cuentaUsuario) {
                // Actualizar el elemento p con la clase "ingresoN"
                const elementoIngresoN = document.querySelector('.ingresoN');
                if (elementoIngresoN) {
                    elementoIngresoN.textContent = `$ ${montoFloat}`;
                }
                  
                if((cuentaUsuario.saldo + montoFloat) < 990){
                    // Actualizar el saldo en la cuenta
                  cuentaUsuario.saldo += montoFloat;


                  // Actualizar el elemento p con el nuevo saldo
                  const elementoP = document.getElementById('saldo-actualizado');
                  if (elementoP) {
                      elementoP.textContent = `$ ${cuentaUsuario.saldo}`;
                  }
  
                  // Actualizar todos los elementos con la clase "saldo"
                  const elementosSaldo = document.querySelectorAll('.saldo');
                  elementosSaldo.forEach(elemento => {
                      elemento.textContent = `$ ${cuentaUsuario.saldo}`;
                  });
                }
              } else {
                  console.error('La cuenta del usuario no se encontró en el array de cuentas.');
              }
          } else {
              console.error('Ingrese un monto válido.');
          }
      });



});




//retirar
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el botón "Guardar" para el retiro
    const botonGuardarRetiro = document.getElementById('guardar-retiro');

    // Agregar evento al botón "Guardar" para el retiro
    botonGuardarRetiro.addEventListener('click', function () {
        // Obtener el valor del campo de entrada con id "input-retiro"
        const montoRetiro = document.getElementById('input-retiro').value;

        // Verificar que el valor ingresado sea un número
        if (!isNaN(montoRetiro)) {
            // Convertir el valor ingresado a número
            const montoFloatRetiro = parseFloat(montoRetiro);

            // Obtener el nombre de usuario desde sessionStorage
            const nombreUsuario = sessionStorage.getItem('nombreUsuario');

            // Buscar la cuenta del usuario en el array
            const cuentaUsuario = cuentas.find(cuenta => cuenta.nombre === nombreUsuario);

            // Verificar si se encontró la cuenta del usuario
            if (cuentaUsuario) {
                // Actualizar el elemento p con id "retiro"
                const elementoRetiro = document.getElementById('retiro');
                if (elementoRetiro) {
                    elementoRetiro.textContent = `$ ${montoFloatRetiro}`;
                }

                // Calcular el nuevo saldo después del retiro
                const nuevoSaldo = cuentaUsuario.saldo - montoFloatRetiro;

                if(nuevoSaldo>=10){
                    // Actualizar el saldo en la cuenta
                        cuentaUsuario.saldo = nuevoSaldo;
                    // Actualizar todos los elementos con la clase "saldo"
                    const elementosSaldo = document.querySelectorAll('.saldo');
                    elementosSaldo.forEach(elemento => {
                        elemento.textContent = `$ ${nuevoSaldo}`;
                    });
                }

            } else {
                console.error('La cuenta del usuario no se encontró en el array de cuentas.');
            }
        } else {
            console.error('Ingrese un monto válido.');
        }
    });
});
