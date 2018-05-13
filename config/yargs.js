const opciones = {
                base: {
                    demand: true,
                    alias: 'b'
                },
                limite: {
                    alias: 'l',
                    default: 10
                }
            }

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de Multiplicar', opciones)
    .command('crear', 'Genera un archivo con la tabla de Multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}