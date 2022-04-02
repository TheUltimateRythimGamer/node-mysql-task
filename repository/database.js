var pg = require('pg');

//configuracion extra de SSL para evitar errores
pg.defaults.ssl = true;

//Objeto de configuracion.
var config = {
    user: 'swzxpllaoasxgj',
    host: 'ec2-52-21-136-176.compute-1.amazonaws.com',
    database: 'd3v66lum5eba6e',
    password: 'b77666dc682356b5b0cb6f657d4a1e0facb96a772d691becebc6e135ae0d017e',
    port: 5432,
    ssl:true
};

//Creacion de la conexion;
var client = new pg.Client(config);
client.connect();

module.exports = client;