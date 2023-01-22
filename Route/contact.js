const path = require('path');


const express = require('express');

const contcontrol = require('../controller/product')

const router = express.Router();

router.use('/contactus', contcontrol.contact);

module.exports = router;