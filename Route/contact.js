const path = require('path');


const express = require('express');

const router = express.Router();

router.use('/contactus', (req,res,next) => {
    res.sendFile(path.join(__dirname,'../','Views','contact.html'));
    console.log('Contact done');
});

module.exports = router;