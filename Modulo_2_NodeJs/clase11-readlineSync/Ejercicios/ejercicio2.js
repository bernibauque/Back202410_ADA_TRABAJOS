const readlineSync = require('readline-sync');
const crypto = require('crypto'); // Módulo para generar hash

function generarHash(texto) {
    return crypto.createHash('sha256').update(texto).digest('hex');
}

let opcion;
do {
    console.log('\n--- Menú ---');
    console.log('1. Ver mensaje de bienvenida');
    console.log('2. Generar hash de un texto');
    console.log('3. Salir');

    opcion = readlineSync.question('Elige una opción (1-3): ');

    switch (opcion) {
        case '1':
            console.log('¡Bienvenido/a al sistema!');
            break;
        case '2':
            const texto = readlineSync.question('Ingresa el texto para generar el hash: ');
            const hash = generarHash(texto);
            console.log(`El hash SHA-256 de "${texto}" es: ${hash}`);
            break;
        case '3':
            console.log('Saliendo del programa...');
            break;
        default:
            console.log('Opción no válida. Por favor, elige una opción del 1 al 3.');
    }
} while (opcion !== '3');
