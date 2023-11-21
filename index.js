const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;





// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'FichasMuni'
});

// Conectar a la base de datos
db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos establecida');
});





// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());





// Ruta para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));





// Rutas para tus páginas
app.get('/busqueda.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'busqueda.html'));
});

app.get('/excel.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'excel.html'));
});

app.get('/agregar.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'agregar.html'));
});

app.get('/inicio.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'inicio.html'));
});





app.post('/manejarDatosFormularioPass', (req, res) => {
  // Obtener los datos del formulario
  const usuario = req.body.usuario;
  const contrasena = req.body.contrasena;

  // Verificar la existencia del usuario y contraseña en la base de datos
  const consulta = `SELECT * FROM usuarios WHERE nombre = ? AND contrasena = ?`;
  db.query(consulta, [usuario, contrasena], (error, resultados) => {
    if (error) {
      console.error('Error al realizar la consulta:', error);
      res.status(500).send('Error al verificar usuario y contraseña en la base de datos.');
      return;
    }

    if (resultados.length > 0) {
      // Usuario y contraseña válidos
      res.sendFile(path.join(__dirname, 'public', 'html', 'inicio.html'));
    } else {
      // Usuario y/o contraseña incorrectos
      // Redirige al index.html con el parámetro de error
      res.redirect('/?error=Credenciales incorrectas. Por favor, verifica tus datos.');
    }
  });
});





// Ruta para procesar el formulario
app.post('/procesarFormulario', (req, res) => {
  // Obtén los datos del formulario desde el cuerpo de la solicitud
  const { nombre_propietario, tipo_de_actualizacion, clave_catastral, localidad, recibido_por, entregado_por, estado } = req.body;

  // Realiza la inserción en la base de datos
  const consulta = 'INSERT INTO fichas (nombre_propietario, tipo_de_actualizacion, clave_catastral, localidad, recibido_por, entregado_por, estado) VALUES (?, ?, ?, ?, ?, ?, ?)';

  db.query(consulta, [nombre_propietario, tipo_de_actualizacion, clave_catastral, localidad, recibido_por, entregado_por, estado], (error, resultados) => {
    if (error) {
      console.error('Error al insertar datos en la base de datos:', error);
      res.status(500).json({ mensaje: 'Error al guardar los datos en la base de datos.', error: error.message });
      return;
    }

    // Redirige a la página agregar.html con un parámetro
    res.redirect(303, '/agregar.html?exito=true');
  });
});





// Ruta para obtener datos del formulario
app.get('/manejarDatosFormulario', (req, res) => {
  // Ejemplo de consulta, reemplázala con la consulta real a tu base de datos
  const consulta = 'SELECT id, nombre_propietario, tipo_de_actualizacion, clave_catastral, localidad, estado FROM fichas ORDER BY id DESC';
  db.query(consulta, (error, resultados) => {
      if (error) {
          console.error('Error al realizar la consulta:', error);
          res.status(500).send('Error al obtener datos de la base de datos.');
          return;
      }

      res.json(resultados);
  });
});





// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
