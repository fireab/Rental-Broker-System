import express from "express";
import {
  addPost,
  deletePost,
  reportPost,
  savePost,
  deleteSavedPosts,
  getSavedPosts,
  getPosts,
  getPost,
  sendImg,
  searchAndFilterPosts,
  getMyPosts,
  getOthersPosts,
  editPost,
  getSuggested,
  addrequest,
  suggest,
  getRequests,
  getMyRequests,
  deleteRequest,
  deletePostImage,
} from "../controllers/postController.js";
import authenticateUser from "../middleware/autorization.js";
import upload from "../middleware/uploadFIle.js";

const router = express.Router();

// router.post("/addpost", authenticateUser, upload.array("images"), addPost);
router.post("/addpost", authenticateUser, addPost);
router.post("/request", authenticateUser, addrequest);
router.get("/requests", authenticateUser, getRequests);
router.delete("/request", authenticateUser, deleteRequest);

router.get("/requests/my", authenticateUser, getMyRequests);
router.get("/getsuggested", authenticateUser, getSuggested);
router.get("/getposts", authenticateUser, suggest);
router.get("/getposts", authenticateUser, getPosts);
router.get("/savedposts", authenticateUser, getSavedPosts);
router.get("/userposts", authenticateUser, getMyPosts);
router.get("/search", authenticateUser, searchAndFilterPosts);

router.delete("/userpost", authenticateUser, deletePost);
router.get("/userposts/:username", authenticateUser, getOthersPosts);
router.get("/images/:imagename", sendImg);
router.get("/:postId", authenticateUser, getPost);
router.put("/:postId", authenticateUser, editPost);
router.post("/:postId/report", authenticateUser, reportPost);
router.post("/:postId/savepost", authenticateUser, savePost);
router.delete("/:postId/deletesavedpost", authenticateUser, deleteSavedPosts);

router.delete("/postimage", authenticateUser, deletePostImage);

// router.post("/propost", upload.array("images", 5), postImg);

export default router;
