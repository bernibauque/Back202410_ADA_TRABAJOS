const readlineSync = require('readline-sync');

const peso = parseFloat(readlineSync.question('Ingresa tu peso en kg: '));
const altura = parseFloat(readlineSync.question('Ingresa tu altura en metros: '));

const imc = (peso / (altura * altura)).toFixed(2);
console.log(`Tu IMC es: ${imc}`);
