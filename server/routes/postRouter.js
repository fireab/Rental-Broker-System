const express = require("express");
const {
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
} = require("../controllers/postController.js");

const authenticateUser = require("../middleware/autorization.js");
const upload = require("../middleware/uploadFIle.js");

const router = express.Router();

// router.post("/addpost", authenticateUser, upload.array("images"), addPost);
router.post("/addpost", authenticateUser, addPost);
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

// router.post("/propost", upload.array("images", 5), postImg);

module.exports = router;
