const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

const adminroutes = require('./Route/admin');
const shoproutes = require('./Route/admin-shop');
const Conctroutes = require('./Route/contact');
const succssroutes = require('./Route/success');

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminroutes);
app.use(shoproutes);
app.use('/admin',Conctroutes);
app.use(succssroutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','error.html'));

});

app.listen(3000);