const express = require('express');
const protect = require('../middlewares/authMiddileware');
const {accessChat,fetchChats} = require('../controllers/chatController');
const router = express.Router();

router.route("/").post(protect,accessChat);
router.route("/").get(protect,fetchChats);
// router.route("/group").post(protect,createGroupChat);
// router.route("/rename").put(protect,removeFromGroup);
// router.route("groupadd").put(protect,addToGroup);

module.exports = router;
