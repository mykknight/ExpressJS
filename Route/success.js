const path = require('path');


const express = require('express');

const router = express.Router();

router.use('/success', (req,res,next) => {
    res.sendFile(path.join(__dirname,'../','Views','success.html'));
    console.log('success done');
});

module.exports = router;