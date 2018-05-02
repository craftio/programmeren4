var express = require('express');
var app = express();

// Route methods
app.get('/', function (request, response) {
    response.send('Hello Avans!');
})

app.get('/about', function (request, response) {
    response.send('Written by btaks');
})

app.post('/', function (request, response) {
    response.send('Hello Avans, POST request received!');
})

app.put('/', function (request, response) {
    response.send('Hello Avans, PUT request received!');
})

// Fixes non-response error by giving suitable error
app.all('*', function (request, response) {
    response.status(404);
    response.send('404 - Not found');
})

app.listen(3000, function () {
    console.log('Server app is listening on port 3000');
})