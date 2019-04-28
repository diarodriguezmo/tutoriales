var express = require('express'); //usa funci�n require para llamar m�dulo express
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
    console.log('Aplicaci�n ejemplo, escuchando el puerto 3000!');
    console.log('El �rea de un cuadrado con lado de 4 es ' + square.area(4));
    console.log('Ejemplo s�crono:');
    console.log('Primero');
    console.log('Segundo');
    console.log('Ejemplo as�crono:');
    setTimeout(function () {
        console.log('Primero');
    }, 3000);
    console.log('Segundo');
});