const express = require("express");

const authenticateUser = require("../middleware/autorization.js");
const upload = require("../middleware/uploadFIle.js");
const {
  sendMessage,
  getMessages,

  getUsersWithChat,
} = require("../controllers/chatController.js");

const router = express.Router();
router.post("/messages", authenticateUser, sendMessage);
router.get("/messages", authenticateUser, getMessages);
router.get("/partners", authenticateUser, getUsersWithChat);

module.exports = router;
