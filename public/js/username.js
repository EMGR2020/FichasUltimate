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
  

  document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    const tablaDatos = document.getElementById('tablaDatos');
    const noDatos = document.getElementById('noDatos');

    // Simulamos una carga de 3 segundos (puedes ajustar según tus necesidades)
    setTimeout(function () {
        // Iniciar la solicitud AJAX para obtener los datos de la base de datos
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const datos = JSON.parse(xhr.responseText);

                    if (datos.length > 0) {
                        // Mostrar la tabla con los datos
                        loader.style.display = 'none';
                        tablaDatos.style.display = 'block';

                        // Lógica para construir la tabla con estilos de Bootstrap
                        const tablaHTML = `
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre Propietario</th>
                                        <th>Tipo de Actualización</th>
                                        <th>Clave Catastral</th>
                                        <th>Localidad</th>
                                        <th>Estado</th>
                                        <th>Subir a Excel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${datos.map((dato, index) => `
                                        <tr>
                                            <td>${index + 1}</td>
                                            <td>${dato.nombre_propietario}</td>
                                            <td>${dato.tipo_de_actualizacion}</td>
                                            <td>${dato.clave_catastral}</td>
                                            <td>${dato.localidad}</td>
                                            <td>${dato.estado}</td>
                                            <td><input type="checkbox" id="checkbox_${dato.id}" class="subirExcelCheckbox"></td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        `;

                        tablaDatos.innerHTML = tablaHTML;
                    } else {
                        // Mostrar el mensaje de "No se encontraron datos"
                        loader.style.display = 'none';
                        noDatos.style.display = 'block';
                    }
                } else {
                    console.error('Error en la solicitud AJAX:', xhr.statusText);
                }
            }
        };

        xhr.open('GET', '/manejarDatosFormulario', true);
        xhr.send();
    }, 6000); // 3 segundos de simulación de carga
});
