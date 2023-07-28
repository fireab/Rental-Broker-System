import express from "express";
import {
  register,
  login,
  logout,
  sendOtp,
  checkOtp,
} from "../controllers/authController.js";

const router = express.Router();
router.post("/setupOTP", sendOtp);
router.post("/checkOTP", checkOtp);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
