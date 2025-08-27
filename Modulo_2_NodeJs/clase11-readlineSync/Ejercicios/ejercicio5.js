const readlineSync = require('readline-sync');

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento;

do {
    intento = parseInt(readlineSync.question('Adivina el número (1-10): '));
    if (intento < numeroSecreto) {
        console.log('El número es mayor.');
    } else if (intento > numeroSecreto) {
        console.log('El número es menor.');
    }
} while (intento !== numeroSecreto);

console.log('¡Correcto! Has adivinado el número.');
