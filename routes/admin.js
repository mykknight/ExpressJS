const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();
var cors = require('cors');
router.use(cors());

router.post('/user/add-user', adminController.AddUser);

router.get('/user/get-user',adminController.GetUsers);

router.put('/user/update-user/:prodID',adminController.updateUser);

router.delete('/user/delete-user/:prodID',adminController.DltUser);

module.exports = router;
