const express = require("express");
const { addPost, deletePost } = require("../controllers/postController.js");

const router = express.Router();

router.post("/addpost", addPost);
router.delete("/deletepost", deletePost);

// router.post("/propost", upload.array("images", 5), postImg);

module.exports = router;
