import express from "express";
import {
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
  getBandPosts,
  getprofile,
} from "../controllers/adminController.js";
import authenticateUser from "../middleware/autorization.js";

const router = express.Router();
router.post("/login", login);
router.post("/logout", logout);
router.get("/getUsers", getAllUsers); //not auth
router.get("/profile", getAdminProfile);
router.get("/reports", getallReports);

// router.get("/userposts/:userId", authenticateUser, getallReports);

router.get("/posts", getPosts); //getPosts
router.get("/bannedposts", getBandPosts);
router.get("/post/:postId", getPost);
router.put("/post/:postId/changecatagory", changeCatagory);
// router.get("/user/:userId", getUser);
router.get("/user/:userId", getprofile);

router.post("/addCostemerCare", authenticateUser);

// router.put("/ban/:userId", toggleUserBan);
router.put("/ban/:postId", togglePostBan);

export default router;
