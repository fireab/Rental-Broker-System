const express = require("express");
const {
  getUserProfile,
  updateProfile,
  deleteAccount,
  followUser,
  unfollowUser,
  getFollowersAndFollowing,
} = require("../controllers/userController.js");
const router = express.Router();

router.put("/updateProfile", updateProfile);
router.get("/userprofile", getUserProfile);
router.delete("/deleteaccount", deleteAccount);
router.post("/follow", followUser);
router.post("/unfollow", unfollowUser);
router.post("/getfollowersandfollowing", getFollowersAndFollowing);

module.exports = router;
