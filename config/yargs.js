const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: "Descripcion de la tarea por hacer"
    },
    completado: {
        default: true,
        alias: 'c',
        desc: "Marca como completado o pendiente la tarea"
    }
}


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opts)
    .command('actualizar', 'Actuaiza el estado completado de una tarea por hacer', opts)
    .command('listar', 'Mostrar lista de por hacer', opts)
    .command('borrar', 'Borrar un elemento de la lista con la misma descripcion', opts)
    .help()
    .argv;

module.exports = {
    argv
}