function mostrarContenido(titulo){
    document.getElementById('main-Inicio').style.display = 'none';
    document.getElementById(titulo).style.display = 'flex';
}

function volver(pagina) {
    // Muestra el main principal
    document.getElementById('main-Inicio').style.display = 'flex';
    // Oculta el contenido específico
    document.getElementById(pagina).style.display = 'none';
}

// Objeto base para representar la estructura de un usuario
let usuarioBase = {
    nombre: "",
    saldo: 0,
    acceso: ""
  };
  
  // Crear instancias del objeto con valores específicos
  let usuario1 = Object.create(usuarioBase);
  usuario1.nombre = "Mali";
  usuario1.saldo = 200;
  usuario1.acceso = "Mali Perez";
  
  let usuario2 = Object.create(usuarioBase);
  usuario2.nombre = "Gera";
  usuario2.saldo = 290;
  usuario2.acceso = "Gera Sanchez";
  
  let usuario3 = Object.create(usuarioBase);
  usuario3.nombre = "Maui";
  usuario3.saldo = 67;
  usuario3.acceso = "Mahui Gutierritos";
  
  let usuario4 = Object.create(usuarioBase);
  usuario4.nombre="Alvaro";
  usuario4.saldo=100;
  usuario4.acceso="Alvarito";
  // Colocar instancias en un arreglo
  const cuentas = [usuario1, usuario2, usuario3,usuario4];

const logIn = document.getElementById('formularioIniciarSesion');

const ele=document.getElementById('login-container');
const mensaje = document.createElement("p");
            mensaje.textContent = "Usuario o password incorrectos, intenta de nuevo";
            mensaje.setAttribute("style","color:red, font-weight: bold,font-size:larger");

logIn.addEventListener("submit",function(event){
        event.preventDefault();

        const usuarioP = document.getElementById('nombreUsuario').value;
        const contraseniaP = document.getElementById('contrasenia').value;
        let exitoso = false;
        for (let usuario of cuentas) {
            if (usuario.nombre === usuarioP && usuario.acceso===contraseniaP) {
                exitoso=true;
                sessionStorage.setItem('nombreUsuario', usuarioP);
                window.location.href = "operaciones.html";
              break;
            }
          }
          
        if(!exitoso){
            ele.appendChild(mensaje);
        }
})
