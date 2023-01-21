const express = require('express');

const router = express.Router();

router.use('/login', (req,res,next) => {
     console.log("Login stage Okay");
     res.send('<form onsubmit= localStorage.setItem(`username`,document.getElementById(`usrnm`).value) action="/"> <h3>"Enter your Name"</h3></br> <input type="text" name="Username" id="usrnm"></br><button type="submit">Add Username</button></form>');
});

module.exports = router;