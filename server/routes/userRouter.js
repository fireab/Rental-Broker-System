const express = require("express");
const {
  getUserProfile,
  updateProfile,
  deleteAccount,
} = require("../controllers/userController.js");
const router = express.Router();

router.put("/updateProfile", updateProfile);
router.get("/userprofile", getUserProfile);
router.delete("/deleteaccount", deleteAccount);

module.exports = router;
