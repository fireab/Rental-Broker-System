const express = require("express");
const {
  addPost,
  deletePost,
  reportPost,
  savePost,
  deleteSavedPosts,
  getSavedPosts,
} = require("../controllers/postController.js");
const authenticateUser = require("../middleware/autorization.js");

const router = express.Router();

router.post("/addpost", authenticateUser, addPost);
router.delete("/deletepost", authenticateUser, deletePost);
router.post("/:postId/report", authenticateUser, reportPost);
router.post("/:postId/savepost", authenticateUser, savePost);
router.delete("/:postId/deletesavedpost", authenticateUser, deleteSavedPosts);
router.get("/getsavedposts", authenticateUser, getSavedPosts);

// router.post("/propost", upload.array("images", 5), postImg);

module.exports = router;
