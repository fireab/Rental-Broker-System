const express = require("express");
const multer = require("multer");
const {
  getUserProfile,
  updateProfile,
  deleteAccount,
  followUser,
  unfollowUser,
  getFollowersAndFollowing,
  profilePic,
  sendProfileImg,
  deleteProfilePic,
  changePassword,
  getprofile,
  toggleFollowUser,
  sendOtherProfileimage,
  searchUser,
} = require("../controllers/userController.js");
const authenticateUser = require("../middleware/autorization.js");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload/profilePic");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage });

router.put("/userprofile", authenticateUser, updateProfile);
router.put("/changePassword", authenticateUser, changePassword);
router.get("/userprofile", authenticateUser, getUserProfile);
router.delete("/deleteaccount", authenticateUser, deleteAccount);
// router.post("/follow", authenticateUser, followUser);
// router.post("/unfollow", authenticateUser, unfollowUser);
router.post("/follow", authenticateUser, toggleFollowUser);
router.get(
  "/getfollowersandfollowing",
  authenticateUser,
  getFollowersAndFollowing
);

router.post(
  "/profileimage",
  authenticateUser,
  upload.array("image"),
  profilePic
);

router.get("/profileimage", authenticateUser, sendProfileImg);
router.get("/searchuser", authenticateUser, searchUser);

router.get("/profileimage/:username", authenticateUser, sendOtherProfileimage);
router.delete("/profileimage", authenticateUser, deleteProfilePic);
router.get("/:username", authenticateUser, getprofile);

module.exports = router;
