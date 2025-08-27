// Importamos el modelo de vehículo desde la carpeta 'models'.
// Este modelo contiene las funciones para leer y escribir datos de vehículos en un archivo JSON.
const vehicleModel = require('../models/vehicleModel');

// Importamos la vista de respuesta desde la carpeta 'views'.
// Esta vista se encarga de formatear las respuestas que se envían al cliente.
const responseView = require('../views/responseView');

// Definimos el controlador de vehículos.
// El controlador maneja la lógica de negocio para obtener y añadir vehículos.
const vehicleController = {

    // Método para obtener todos los vehículos.
    // Este método es utilizado para obtener una lista completa de vehículos desde el archivo JSON.
    getVehicles: () => {
        // Llamamos a la función 'readVehicles' del modelo de vehículos para leer los datos del archivo JSON.
        // Esta función devuelve un array con todos los vehículos.
        const vehicles = vehicleModel.readVehicles();

        // Llamamos a la función 'formatResponse' de la vista de respuesta para formatear los datos de los vehículos.
        // Esto nos permite devolver los datos en un formato adecuado para el cliente.
        return responseView.formatResponse(vehicles);
    },

    // Método para añadir un nuevo vehículo.
    // Este método es utilizado para agregar un nuevo vehículo al archivo JSON.
    addVehicle: (newVehicle) => {
        // Llamamos a la función 'readVehicles' del modelo de vehículos para obtener la lista actual de vehículos.
        // Esto nos permite trabajar con los datos actuales antes de añadir el nuevo vehículo.
        const vehicles = vehicleModel.readVehicles();

        // Añadimos el nuevo vehículo al array de vehículos.
        // Esto modifica la lista de vehículos en memoria, incluyendo el nuevo vehículo.
        vehicles.push(newVehicle);

        // Llamamos a la función 'writeVehicles' del modelo de vehículos para guardar los cambios en el archivo JSON.
        // Esto asegura que el nuevo vehículo se registre de forma persistente en el archivo.
        vehicleModel.writeVehicles(vehicles);

        // Llamamos a la función 'formatResponse' de la vista de respuesta para devolver un mensaje de éxito.
        // Esto nos permite enviar una respuesta formateada al cliente indicando que el vehículo se añadió correctamente.
        return responseView.formatResponse({ message: 'Vehículo añadido exitosamente' });
    }
};

// Exportamos el controlador de vehículos para que pueda ser utilizado en otras partes de la aplicación.
module.exports = vehicleController;

