import express from "express";
import authenticateUser from "../middleware/autorization.js";
import upload from "../middleware/uploadFIle.js";
import {
  sendMessage,
  getMessages,
  getUsersWithChat,
} from "../controllers/chatController.js";

const router = express.Router();
router.post("/messages", authenticateUser, sendMessage);
router.get("/messages", authenticateUser, getMessages);
router.get("/partners", authenticateUser, getUsersWithChat);

export default router;
