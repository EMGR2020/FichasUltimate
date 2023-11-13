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

// Ruta de la página principal
app.get('/', (req, res) => {
  // Obtén el parámetro de error de la URL
  const errorParam = req.query.error;

  if (errorParam) {
    // Si hay un error, renderiza el index.html con el parámetro de error
    res.sendFile(path.join(__dirname, 'public', 'index.html') + `?error=${errorParam}`);
  } else {
    // Si no hay error, simplemente carga el index.html
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  }
});

// Ruta para procesar el formulario y mostrar mensaje en la misma página
app.post('/manejarDatosFormulario', (req, res) => {
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

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
