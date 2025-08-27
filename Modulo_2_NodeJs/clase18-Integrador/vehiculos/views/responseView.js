// Definimos la vista de respuesta, que se encarga de formatear las respuestas que se envían al cliente.
// Esta vista toma los datos y los convierte en un formato adecuado para la comunicación.
const responseView = {

    // Método para formatear las respuestas.
    // Este método convierte los datos en una cadena JSON con una estructura legible.
    formatResponse: (data) => {
        // Convertimos los datos a una cadena JSON utilizando 'JSON.stringify'.
        // El primer argumento es el objeto de datos, el segundo es 'null' (no se usa un reemplazo), 
        // y el tercer argumento es '2' (para agregar indentación de dos espacios).
        // Esto produce una cadena JSON bien formateada, con una estructura fácil de leer.
        return JSON.stringify(data, null, 2);
    }
};

// Exportamos la vista de respuesta para que pueda ser utilizada en otras partes de la aplicación.
module.exports = responseView;


