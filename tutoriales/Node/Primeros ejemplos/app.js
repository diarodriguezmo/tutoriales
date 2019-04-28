var express = require('express'); //usa función require para llamar módulo express
var app = express();
var square = require('./square'); //Para importar square
var wiki = require('./wiki.js');

app.get('/', function (req, res, next) {
    res.send('Hola Mundo!');
    
});
app.all('/secret', function (req, res, next) {
    console.log('Accediendo a la seccion secreta ...');
    next(); // pasa el control al siguiente manejador
});
app.use('/wiki', wiki);
app.listen(3000, function () {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
    console.log('El área de un cuadrado con lado de 4 es ' + square.area(4));
    console.log('Ejemplo sícrono:');
    console.log('Primero');
    console.log('Segundo');
    console.log('Ejemplo asícrono:');
    setTimeout(function () {
        console.log('Primero');
    }, 3000);
    console.log('Segundo');
});