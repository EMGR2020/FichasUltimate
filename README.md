# Fichas Catastral

Este Programa, resuelve el dilema de las fichas Catastrales, con respecto a su correcto monitoreo, ya que durante el trabajo y el pasar del tiempo, y al no llevar un control de ubicación de fichas debido a su alto traslado de departamento en departamento, la fichas terminan en lugares que uno no sabe. por ende este programa toma registro de fichas y almacena el registro de las fichas para su debido monitoreo, ademas favorece a la disminución de tiempo

## Instalación

Asegúrate de tener [Node.js](https://nodejs.org/) instalado.

1. Clona este repositorio: `git clone https://github.com/EMGR2020/FichasUltimate.git`
2. Entra al directorio del proyecto: `cd C:\FichasUltimate 1.0.0`
3. Instala las dependencias: `npm install`

## Uso

Su correcto uso esta desde la búsqueda de fichas, saber donde y con quien esta ubicado (departamento), agregar las fichas que ingresan al departamento encargado de subir las fichas al sistema, puede editar la ficha desde el apartado de búsqueda, para asi actualizarla, en el inicio del programa aparecerán todas las fichas que estén en el departamento que las en lista, las fichas fuera de ese departamento tendrán que ser buscadas aparte, habrá un botón de exportar a excel si se presiona dicha ficha se trasladara a excel y cambiara de departamento, es decir de computo a archivos por ejemplo, ahora en el apartado de excel podrá descargar el archivo correspondiente para que asi tenga en físico las fichas que saco del departamento para dar ya salida y trabajo terminado al programa.

## Estructura del Proyecto

#Estructura del proyecto
- .vscode
    Lo que es .vscode es la carpeta de una extension que se instalo previamente en visual para la corrección de ortografía en caso de necesitarse 
    // No Relevante
    
    - settings.json
        Este archivo es el que guarda las palabras que estarán corregidas por dicha extension // No relevante

- node_modules
    La carpeta node_modules no requiere mucha presentación, se origina al instalar las dependencias

- public
    La carpeta public contiene todos los recursos que se mostraran en el cliente.

    - assets
        La carpeta assets almacena las imágenes y algunos recursos que se necesiten en el proyecto

    - html
        La carpeta html, su nombre lo dice, contiene todo archivo de estructura html

        - agregar.html
            Este archivo html es para agregar los datos de las fichas que pasan por el departamento encargado de registrar las fichas y que estarán monitorizando las fichas por ende usando el programa

        - busqueda.html
            Este archivo se encarga de la búsqueda de las fichas

        - datos.html
            Este archivo fue creado para la validación de los datos del usuario. // Relevancia Media 

        - excel.html
            Este archivo se encarga de la exportación de la fichas a excel para tener control de fichas de forma física

        - inicio.html
            Este archivo esta para darle esas opciones de navegación por el programa, tiene la opción de ver las fichas que están ingresadas en el departamento encargado del uso del programa

    - js
        La carpeta js contiene los archivos de javascript

        - loader.js
            El archivo loader se encarga de crear un sistema o animación de carga para las paginas.
        
        - username.js
            El archivo username.js contiene una diversidad mas amplia de lo que es la funcionalidad del programa como desde: procesar datos u obtener datos para el sistema de login, un pequeño loader para la tabla de fichas y la creación de una tabla para mostrar las fichas que hay en el departamento que las en lista en caso de haber

    - styles
        La carpeta style almacena los archivos css

        - styles.css
            Este archivo contiene todos los estilos de las paginas

    - index.html
        El index.html contiene la interfaz del login (inicio de sesión)

- .gitignore
    Este es un archivo que contiene información de algunas cosas que se deben de omitir o ignorar del proyecto

- index.js
    El index.js es el archivo que contiene toda la información entre comillas del servidor, desde el puerto las variables de algunas dependencias, rutas de paginas, configuración a base de datos y demás

- package-lock.json
    Este archivo se genera automáticamente al instalar todas las dependencias

- package.json
    De la misma forma que el package-lock.json (archivo anterior, o, superior)

- README.md
    Este archivo es el que contiene información sobre el proyecto de hecho es el archivo que están leyendo

- start.bat
    Este archivo contiene 2 lineas de comando para arrancar el servidor sin necesidad de entrar a la terminal y arrancarlo, este archivo arranca el servidor sin necesidad de hacer tanto protocolo

## Contribuir

Si quieres contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una rama para tu característica o corrección: `git checkout -b caracteristica-nueva`
3. Haz commit de tus cambios: `git commit -m 'Añade nueva característica'`
4. Sube tus cambios a tu repositorio: `git push origin caracteristica-nueva`
5. Abre un Pull Request en GitHub.

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE.md](LICENSE.md) para más detalles.
