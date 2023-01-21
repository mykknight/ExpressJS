const express = require('express');
const fs = require('fs');

const router2 = express.Router();

router2.get('/',(req,res,next) => {
    fs.readFile('mess.text','utf8', (err,data) => {
        if(err) console.log(err);
        else {
            res.send(`<form onsubmit = "document.getElementById('usrnm').value = localStorage.getItem('username')"
            action="/" method="POST"><div>${data}</br>Send Message</div>
            <input type="text" name="Message"></br>
            <input type="hidden" name="username" id="usrnm">
            <button type="submit">Send It</button></form>`);
        
        }
     });
});

router2.post('/',(req,res,next) => {
    console.log(req.body);
    fs.appendFileSync('mess.text', req.body.username+": "+req.body.Message+"; ");
    res.redirect('/');
});

module.exports = router2;

