// Importamos el módulo 'fs' de Node.js para realizar operaciones de sistema de archivos.
// Este módulo nos permite leer y escribir archivos.
const fs = require('fs');

// Importamos el módulo 'path' de Node.js para trabajar con rutas de archivos.
// Este módulo ayuda a construir rutas de forma segura y compatible con diferentes sistemas operativos.
const path = require('path');

// Definimos la ruta del archivo JSON donde se almacenan los datos de los vehículos.
// Utilizamos 'path.join' para construir la ruta completa del archivo 'vehicles.json' en la carpeta 'data'.
// '__dirname' representa el directorio actual del archivo, lo que permite construir una ruta relativa.
const filePath = path.join(__dirname, '../data/vehicles.json');

// Definimos el modelo de vehículos, que contiene funciones para leer y escribir en el archivo JSON.
const vehicleModel = {

    // Función para leer los datos del archivo JSON y devolverlos.
    readVehicles: () => {
        // Leemos el archivo JSON de manera síncrona utilizando 'fs.readFileSync'.
        // Este método lee el contenido del archivo y lo devuelve como un buffer.
        const data = fs.readFileSync(filePath);

        // Convertimos el buffer a una cadena de texto y luego parseamos los datos JSON a un objeto JavaScript.
        // Finalmente, devolvemos el objeto resultante.
        return JSON.parse(data);
    },

    // Función para escribir datos en el archivo JSON.
    writeVehicles: (vehicles) => {
        // Convertimos el objeto de vehículos a una cadena JSON con formato e indentación.
        // 'JSON.stringify' toma un objeto y lo convierte a una cadena JSON.
        // El segundo argumento es 'null' (no se usa un reemplazo) y el tercer argumento es '2' (para indentación).
        const jsonData = JSON.stringify(vehicles, null, 2);

        // Escribimos la cadena JSON en el archivo utilizando 'fs.writeFileSync'.
        // Este método sobrescribe el archivo con los nuevos datos.
        fs.writeFileSync(filePath, jsonData);
    }
};

// Exportamos el modelo de vehículos para que pueda ser utilizado en otras partes de la aplicación.
module.exports = vehicleModel;

