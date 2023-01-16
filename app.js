const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('in the middleware');
    next(); // allowa to continue next middleware
});

app.use((req, res, next) => {
    console.log('in the another middleware');
   /// res.send('<h1>Hello i am from expresssJS</h1>');
    res.send({key1: 'newway'});
});

const server = http.createServer(app);

server.listen(2000);
