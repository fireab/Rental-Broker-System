const express = require("express");
const {
  login,
  logout,
  getAllUsers,
  getUser,
  getAdminProfile,
  getallReports,
  getPosts,
  getPost,
  changeCatagory,
  togglePostBan,
  toggleUserBan,
} = require("../controllers/adminController.js");
const authenticateUser = require("../middleware/autorization.js");

const router = express.Router();
router.post("/login", login);
router.post("/logout", logout);
router.get("/getUsers", authenticateUser, getAllUsers);
router.get("/profile", authenticateUser, getAdminProfile);
router.get("/reports", authenticateUser, getallReports);
router.get("/userposts/:userId", authenticateUser, getallReports);

router.get("/posts", authenticateUser, getPosts);
router.get("/post/:postId", authenticateUser, getPost);
router.put("/post/:postId/changecatagory", authenticateUser, changeCatagory);
router.get("/user/:userId", authenticateUser, getUser);

router.put("/toggleban/user/:userId", authenticateUser, toggleUserBan);
router.put("/toggleban/post/:postId", authenticateUser, togglePostBan);

module.exports = router;
