
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar',
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla de multiplicar '
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Este es el numero hasta donde quieres la tabla',
    })
    .check((argv, option) => {
        if (isNaN(argv.b) || isNaN(argv.h) ) {
            throw 'La base tiene que ser un numero'
        }

        return true;
    })
    .argv;

module.exports = argv;