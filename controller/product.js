const path = require('path');

exports.contact = (req,res,next) => {
    res.sendFile(path.join(__dirname,'../','Views','contact.html'));
    console.log('Contact done');
}

exports.success = (req,res,next) => {
    res.sendFile(path.join(__dirname,'../','Views','success.html'));
    console.log('success done');
}