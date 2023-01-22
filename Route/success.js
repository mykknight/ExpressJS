
const express = require('express');
const succcont = require('../controller/product');

const router = express.Router();

router.use('/success', succcont.success);

module.exports = router;