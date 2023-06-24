// importacion de todo el archivo controller.js
import * as controller from './controller.js';
// importacion de la libreria chalk: https://www.npmjs.com/package/chalk
import chalk from 'chalk';

// operacion de multiplicacion pasandole sumas y utilizando la libreria chalk
const operacion = controller.multiplica(controller.suma(1,2),controller.suma(4, 5));
console.log(chalk.green(operacion));
