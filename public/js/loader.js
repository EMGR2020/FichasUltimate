// script.js (o el archivo que estés usando para tus scripts)
document.addEventListener('DOMContentLoaded', function () {
    const loaderContainer = document.getElementById('loader-container');
  
    // Simulamos una carga de 1.5 segundos
    setTimeout(function () {
      // Ocultamos el loader al finalizar el tiempo
      loaderContainer.style.display = 'none';
    }, 3000);
  });
  