const readlineSync = require('readline-sync');

const preguntas = [
    { pregunta: '¿Cuál es la capital de Francia?', respuesta: 'paris' },
    { pregunta: '¿Cuántos planetas hay en el sistema solar?', respuesta: '8' },
    { pregunta: '¿Quién escribió "Cien años de soledad"?', respuesta: 'gabriel garcia marquez' }
];

let aciertos = 0;

preguntas.forEach((pregunta) => {
    const respuestaUsuario = readlineSync.question(`${pregunta.pregunta} `).toLowerCase();
    if (respuestaUsuario === pregunta.respuesta) {
        console.log('¡Correcto!');
        aciertos++;
    } else {
        console.log('Incorrecto.');
    }
});

console.log(`Obtuviste ${aciertos} de ${preguntas.length} respuestas correctas.`);
