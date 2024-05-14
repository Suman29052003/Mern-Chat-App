const express = require('express');
const registerUser = require('../controllers/registerUser')
const loginUser = require('../controllers/loginUser')
const upload = require('../config/multerConfig'); // Import the multer configuration

const router = express.Router();

router.post('/', upload.single('pic'), registerUser)
router.post('/login',loginUser)

module.exports = router;