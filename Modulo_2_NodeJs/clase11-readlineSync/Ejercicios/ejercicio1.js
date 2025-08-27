const readlineSync = require('readline-sync');

// Solicitar nombre y edad al usuario
const nombre = readlineSync.question('Por favor, ingresa tu nombre: ');
const edad = readlineSync.question('Ahora, ingresa tu edad: ');

// Mostrar mensaje personalizado
console.log(`¡Hola, ${nombre}! Tienes ${edad} años. Bienvenido/a.`);
