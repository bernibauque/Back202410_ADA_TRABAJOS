const net = require('net')
const readline = require('readline')

//creamos la interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//creamos el cliente
const client = new net.Socket();

// establecemos conexion con el servidor
client.connect(8080, 'localhost', () => {
    console.log("Conectado al servidor TCP");
    rl.question('Escribe un comando (Por ejemplo: GET VEHICLES o ADD VEHICLE {"marca" : "Nissan", "modelo" : "city", "anio" : 2014}): ', (command) => {
        client.write(command) // enviemos el comando al server
    });
})

// manejo de la respuesta del servidor
client.on('data', (data) => {
    console.log("Respuesta del servidor: ");
    console.log(data.toString()); // convertimos los datos a una cadena de texto

    rl.close() // cerrar la interfaz

    client.destroy() // cerrar la conexion con el server
});

// manejo del evento close
client.on('close', () => {
    console.log('Conexion cerrada');
})
