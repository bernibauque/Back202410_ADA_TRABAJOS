const readlineSync = require('readline-sync');

const num1 = parseFloat(readlineSync.question('Ingresa el primer número: '));
const num2 = parseFloat(readlineSync.question('Ingresa el segundo número: '));
const operacion = readlineSync.question('Elige la operación (+, -, *, /): ');

let resultado;
switch (operacion) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        resultado = num1 / num2;
        break;
    default:
        resultado = 'Operación no válida';
}

console.log(`El resultado es: ${resultado}`);
