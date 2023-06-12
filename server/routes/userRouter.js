const express = require("express");
const {
  getUserProfile,
  updateProfile,
  deleteAccount,
  followUser,
  unfollowUser,
  getFollowersAndFollowing,
} = require("../controllers/userController.js");
const authenticateUser = require("../middleware/autorization.js");
const router = express.Router();

router.put("/updateProfile", authenticateUser, updateProfile);
router.get("/userprofile", authenticateUser, getUserProfile);
router.delete("/deleteaccount", authenticateUser, deleteAccount);
router.post("/follow", authenticateUser, followUser);
router.post("/unfollow", authenticateUser, unfollowUser);
router.post(
  "/getfollowersandfollowing",
  authenticateUser,
  getFollowersAndFollowing
);

module.exports = router;
