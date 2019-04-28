var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function (req, res) {
    res.send('Página de inicio Wiki');
});

// About page route
router.get('/about', function (req, res) {
    res.send('Acerca de esta wiki');
});

module.exports = router;// JavaScript source code
