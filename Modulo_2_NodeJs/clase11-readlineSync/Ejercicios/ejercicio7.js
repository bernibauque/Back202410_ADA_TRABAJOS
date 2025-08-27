const readlineSync = require('readline-sync');

const dolares = parseFloat(readlineSync.question('Ingresa la cantidad en dólares: '));
const euros = dolares * 0.85;

console.log(`${dolares} dólares son ${euros.toFixed(2)} euros.`);
