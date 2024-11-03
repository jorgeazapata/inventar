document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('nav').classList.toggle('active');
});

const usuarioCorrecto = "1234";
const contraseñaCorrecta = "1234";

function verificarUsuario(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
  const usuarioIngresado = document.getElementById('usuario').value;
  const contraseñaIngresada = document.getElementById('contraseña').value;
  
  if (usuarioIngresado === usuarioCorrecto && contraseñaIngresada === contraseñaCorrecta) {
    window.location.href = 'presentacion.html'; // Redirige a la página de contenido
  } else {
    alert('Usuario o contraseña incorrectos.');
  }
}
