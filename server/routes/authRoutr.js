const express = require("express");
const {
  register,
  login,
  logout,
  sendOtp,
  checkOtp,
} = require("../controllers/authController.js");

const router = express.Router();
router.post("/setupOTP", sendOtp);
router.post("/checkOTP", checkOtp);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
