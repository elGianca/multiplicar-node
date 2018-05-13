/** require */
// Tipos:
const fs = require('fs');
const colores = require("colors");

/**1º Funcion listarTabla */
let listarTabla = ( base, limite = 10 ) => {

    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`El valor base "${base}" no es un numero.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor limite "${limite}" no es un numero.`);
            return;
        }

        console.log("==================".green);
        console.log(`===Tabla del ${base}===`.green);
        console.log("==================".green);
        
        for (let i = 0; i <=limite; i++) {
            data += `${base} * ${i} =  ${base * i}\n`;
        }

        resolve(data);   
    });
}

/**2º Funcion creaArchivo */
let crearArchivo = ( base, limite = 10) => {
    return new Promise ( (resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor base "${base}" no es un numero.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor limite "${limite}" no es un numero.`);
            return;
        }

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} =  ${base * i}\n`;
        }

        //Creacion de tabla en un archivo externo:
        fs.writeFile(`tablas/tabla_${base}.txt`, data, err => {
            if (err) {
                reject(err);
            } else {
                resolve(`The file has been saved! - tabla-${base}.txt`.green);
            }
        });
    });
}

module.exports = {
        listarTabla,
        crearArchivo
}

