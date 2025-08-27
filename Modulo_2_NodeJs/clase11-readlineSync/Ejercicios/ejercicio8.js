const readlineSync = require('readline-sync');

const sujetos = ['El gato', 'Un pájaro', 'La niña', 'El robot'];
const verbos = ['corre', 'salta', 'canta', 'dibuja'];
const complementos = ['en el parque', 'bajo la lluvia', 'sobre la mesa', 'en la luna'];

const numFrases = parseInt(readlineSync.question('¿Cuántas frases deseas generar? '));

for (let i = 0; i < numFrases; i++) {
    const sujeto = sujetos[Math.floor(Math.random() * sujetos.length)];
    const verbo = verbos[Math.floor(Math.random() * verbos.length)];
    const complemento = complementos[Math.floor(Math.random() * complementos.length)];
    console.log(`${sujeto} ${verbo} ${complemento}.`);
}
