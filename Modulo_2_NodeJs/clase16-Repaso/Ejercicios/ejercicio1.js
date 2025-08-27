const net = require('net');
const fs = require('fs');
const path = require('path');

// Ruta al archivo JSON
const rutaMensajes = path.join(__dirname, 'mensajes.json');

// Crear servidor TCP
const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    // Escuchar mensajes del cliente
    socket.on('data', (data) => {
        const mensaje = data.toString().trim();

        if (mensaje === '/historial') {
            // Leer y enviar el historial de mensajes
            const historial = fs.readFileSync(rutaMensajes, 'utf-8');
            socket.write(`Historial:\n${historial}\n`);
        } else {
            // Guardar el mensaje en el archivo JSON
            const mensajes = JSON.parse(fs.readFileSync(rutaMensajes, 'utf-8') || '[]');
            mensajes.push({ fecha: new Date().toISOString(), mensaje });
            fs.writeFileSync(rutaMensajes, JSON.stringify(mensajes, null, 2));

            // Confirmar al cliente
            socket.write('Mensaje guardado\n');
        }
    });

    // Manejar desconexión
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

// Iniciar servidor
server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
