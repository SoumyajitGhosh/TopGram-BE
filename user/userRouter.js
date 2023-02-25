const express = require('express');
const userController = require('./userController');

const router = express.Router();

router.route('').post(userController.login);
router.route('').post(userController.signup);

module.exports = router;