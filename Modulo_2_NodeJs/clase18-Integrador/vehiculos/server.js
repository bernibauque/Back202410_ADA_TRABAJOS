// Importamos el módulo 'net' de Node.js para crear un servidor TCP.
const net = require('net');

// Importamos el controlador de vehículos desde el archivo 'vehicleController'.
const vehicleController = require('./controllers/vehicleController');

// Importamos la función 'v4' del paquete 'uuid' para generar identificadores únicos.
const { v4: uuidv4 } = require('uuid');

// Función para validar si una cadena podría ser un JSON (sin usar try-catch).
function isJSON(str) {
    return str.startsWith('{') && str.endsWith('}');
}

// Creamos el servidor TCP utilizando 'net.createServer'.
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    // Evento que se dispara cuando el servidor recibe datos del cliente.
    socket.on('data', (data) => {
        const command = data.toString().trim();

        if (command === 'GET VEHICLES') {
            // Obtenemos todos los vehículos.
            const response = vehicleController.getVehicles();
            socket.write(response);
        } else if (command.startsWith('ADD VEHICLE')) {
            // Extraemos los datos del nuevo vehículo del comando.
            const vehicleDataString = command.replace('ADD VEHICLE ', '');

            // Verificamos si los datos tienen un formato que parezca ser JSON.
            if (isJSON(vehicleDataString)) {
                // Convertimos los datos a un objeto JSON si la estructura básica es válida.
                const vehicleData = JSON.parse(vehicleDataString);

                // Verificamos que los datos sean un objeto.
                if (vehicleData && typeof vehicleData === 'object') {
                    // Creamos un nuevo vehículo con un ID único.
                    const newVehicle = { id: uuidv4(), ...vehicleData };
                    const response = vehicleController.addVehicle(newVehicle);
                    socket.write(response);
                } else {
                    socket.write('Datos de vehículo inválidos.');
                }
            } else {
                socket.write('Error: Formato de JSON no válido.');
            }
        } else {
            socket.write('Comando no reconocido');
        }
    });

    // Evento cuando el cliente cierra la conexión.
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

// El servidor escucha en el puerto 8080.
server.listen(8080, () => {
    console.log('Servidor TCP escuchando en el puerto 8080');
});

