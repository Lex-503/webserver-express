/* const http = require('http');

http.createServer((req, responses) => {

    responses.writeHead(202, { 'Content-Type': 'application/json' });
    //responses.write('Hola Mundo');

    let salida = {
        nombre: 'Fernando',
        edad: 32,
        url: req.url
    }

    responses.write(JSON.stringify(salida));
    responses.end();
}).listen(8080);


console.log('Escuchando el puerto 8080'); */