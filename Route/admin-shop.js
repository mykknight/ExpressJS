const express = require('express');

const router2 = express.Router();

router2.get('/', (req, res, next) => {
    console.log('in the another middleware');
    res.send('<h1>Hello i am from expresssJS</h1>');
   // res.send({key1: 'newway'});
});



module.exports = router2;