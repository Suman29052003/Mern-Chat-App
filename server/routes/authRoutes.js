const express = require('express');
const registerUser = require('../controllers/registerUser')

const router = express.Router();

router.post('/',registerUser)
// router.post('/login',authController.loginUser)

module.exports = router;