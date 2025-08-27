const readlineSync = require('readline-sync');

const contraseña = readlineSync.question('Ingresa tu contraseña: ', {
    hideEchoBack: true // Oculta la contraseña mientras se escribe
});

if (contraseña === 'secreto123') {
    console.log('Acceso concedido.');
} else {
    console.log('Acceso denegado.');
}
