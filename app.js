const express = require('express');
const bodyparser = require('body-parser');

const app = express();

const adminroutes = require('./Route/admin');
const shoproutes = require('./Route/admin-shop');

app.use(bodyparser.urlencoded({extended: false}));

app.use(adminroutes);
app.use(shoproutes);

app.use((req,res,next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);