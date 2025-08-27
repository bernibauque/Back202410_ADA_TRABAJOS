// Importamos el módulo 'net' de Node.js para crear una conexión TCP.
// Este módulo proporciona funcionalidades para implementar clientes y servidores TCP.
const net = require('net');

// Importamos el módulo 'readline' de Node.js para leer entradas desde la consola.
// Este módulo permite crear una interfaz para interactuar con el usuario a través de la línea de comandos.
const readline = require('readline');

// Creamos la interfaz para leer entradas desde la consola.
// La interfaz utiliza 'process.stdin' como entrada (teclado del usuario) y 'process.stdout' como salida (pantalla del usuario).
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Creamos un cliente TCP utilizando 'net.Socket'.
// Este cliente será utilizado para conectarse a un servidor TCP.
const client = new net.Socket();

// Establecemos la conexión con el servidor TCP.
// Nos conectamos al puerto 8080 en el 'localhost' (dirección del servidor).
client.connect(8080, 'localhost', () => {
    // Mensaje que se muestra cuando la conexión se establece exitosamente.
    console.log('Conectado al servidor TCP');

    // Utilizamos 'rl.question' para pedir al usuario que escriba un comando.
    // La entrada del usuario se envía al servidor a través de 'client.write'.
    rl.question('Escribe un comando (Por ejemplo: GET VEHICLES o ADD VEHICLE {"marca": "Nissan", "modelo": "Sentra", "año": 2022}): ', (command) => {
        client.write(command); // Enviamos el comando al servidor TCP.
    });
});

// Manejo de la respuesta del servidor.
// El evento 'data' se activa cuando el cliente recibe datos del servidor.
client.on('data', (data) => {
    // Mostramos la respuesta recibida del servidor en la consola.
    console.log('Respuesta del servidor:');
    console.log(data.toString()); // Convertimos los datos a una cadena de texto y los mostramos.

    // Cerramos la interfaz de readline después de recibir la respuesta.
    rl.close();

    // Cerramos la conexión TCP con el servidor.
    client.destroy();
});

// Manejo del evento cuando la conexión se cierra.
// El evento 'close' se activa cuando la conexión TCP se cierra.
client.on('close', () => {
    // Mensaje que se muestra cuando la conexión se cierra.
    console.log('Conexión cerrada');
});
