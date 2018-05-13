//Muy importante:
let {
    crearArchivo: getCreadoFile,
    listarTabla: getListarTabla
    } = require('./multiplicar/multiplicacion.js');

let var_argv =  require('./config/yargs.js').argv;
let comando = var_argv._[0];
console.log(comando);


    /** Ejecucion del programa */
switch (comando) {
    case 'listar':
                getListarTabla(var_argv.base, var_argv.limite)
                    .then((result) => {
                        console.log(result);                        
                    }).catch((err) => {
                        console.log(err);                        
                    });                
        break;
    case 'crear':
                getCreadoFile(var_argv.base, var_argv.limite)
                    .then((file) => {
                        console.log(`EXITO: ${file}`);
                    })
                    .catch((err) => {
                        console.log(err);        
                    });
        break;
    default:
        console.log("Comando no reconocido...");        
        break;
}

//process tiene los procesos de NODE
// console.log(process.argv);

//Instalacion de Yargs: npm i yargs --save
//Instalacion de Nodemon: npm i --save-dev nodemon