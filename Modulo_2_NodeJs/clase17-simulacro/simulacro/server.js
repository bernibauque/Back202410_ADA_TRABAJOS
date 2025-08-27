const net = require('net');
const vehicleController = require('./controllers/vehicleController');

const { v4: uuidv4 } = require('uuid');

//funcion para validar si una cadena es un json
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
            const vehicleDataString = command.replace('ADD VEHICLE ', '')
            //Extraemos los datos del nuevo vehiculo del comando

            if (isJSON(vehicleDataString)) {
                const vehicleData = JSON.parse(vehicleDataString)
                //convertir los datos a un objeto json si la estructura es valida

                // verificar que los datos sean un objeto
                if (vehicleData && typeof vehicleData === 'object') {
                    //crear un nuevo vehiculo con un id unico
                    const newVehicle = { id: uuidv4(), ...vehicleData }
                    const response = vehicleController.addVehicle(newVehicle)
                    socket.write(response);
                } else {
                    socket.write('Datos de vehiculo invalidos.')
                }
            } else {
                socket.write('Error: Formato de JSON no valido')
            }
        } else {
            socket.write('Comando no reconocido')
        }
    })

    socket.on('end', () => {
        console.log('Cliente desconectado');
    })
});

server.listen(8080, () => {
    console.log('TCP Server listening on port 8080');
});