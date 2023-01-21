const express = require('express');
const bodyparser = require('body-parser');

const chat = express();
const loginroute = require('./grpchat-login');
const msgroute = require('./grpchat-msg');


chat.use(bodyparser.urlencoded({extended: true}));

chat.use(loginroute);
chat.use(msgroute);

chat.use((req,res,next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

chat.listen(3000);