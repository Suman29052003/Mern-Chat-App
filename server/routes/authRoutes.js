const express = require('express');
const router = express.Router();
const registerUser = require('../controllers/registerUser');
const loginUser = require('../controllers/loginUser');
const allUser = require("../controllers/allUser")
const protect = require("../middlewares/authMiddileware.js")

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/',protect,allUser);


module.exports = router;
