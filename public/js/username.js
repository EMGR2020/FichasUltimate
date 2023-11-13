document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const usuarioInput = document.getElementById('usuarioInput');
      const contrasenaInput = document.getElementById('contrasenaInput');
  
      const usuario = usuarioInput.value;
      const contrasena = contrasenaInput.value;
  
      // Enviar los datos a la nueva página
      window.location.href = `/datos.html?usuario=${usuario}&contrasena=${contrasena}`;
    });
  
    // Obtener parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const usuario = params.get('usuario');
    const contrasena = params.get('contrasena');
  
    console.log(usuario, contrasena);
  });
  