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
} = require("../controllers/postController.js");

const authenticateUser = require("../middleware/autorization.js");
const upload = require("../middleware/uploadFIle.js");

const router = express.Router();

// router.post(
//   "/addpost",
//   authenticateUser,
//   upload.array("propertyImages"),
//   addPost
// );
router.post("/addpost", authenticateUser, addPost);
router.get("/getposts", authenticateUser, getPosts);
router.get("/:postId", authenticateUser, getPost);
router.delete("/deletepost", authenticateUser, deletePost);
router.post("/:postId/report", authenticateUser, reportPost);
router.post("/:postId/savepost", authenticateUser, savePost);
router.delete("/:postId/deletesavedpost", authenticateUser, deleteSavedPosts);
router.get("/getsavedposts", authenticateUser, getSavedPosts);

// router.post("/propost", upload.array("images", 5), postImg);

module.exports = router;
