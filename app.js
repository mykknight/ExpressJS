const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
   // console.log('always middleware');
    next();
});

app.use('/add-product', (req, res, next) => {
    //console.log('in the another middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"> <input type="text" name="qty"> <button type="submit">Add Product</button></form>');
});

app.use('/product', (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    //console.log('in the another middleware');
    res.send('<h1>Hello i am from expresssJS</h1>');
   // res.send({key1: 'newway'});
});


app.listen(2000);