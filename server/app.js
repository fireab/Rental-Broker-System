const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRouter.js");
const postRoutes = require("./routes/postRouter.js");
const userRouter = require("./routes/userRouter.js");
const adminRouter = require("./routes/adminRoutes.js");
const multer = require("multer");

const app = express();
// Enable CORS for all routes
app.use(cors());
app.use(cookieParser());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const profile = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload/profilePic");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });
const uploadProfile = multer({ profile });

app.post("/api/upload", upload.array("images"), function (req, res) {
  console.log(req.body);
  const files = req.files; // an array of uploaded files
  // Process the files or perform any required operations
  const filenames = files.map((file) => file.filename);
  res.status(200).json(filenames);
});
// app.post(
//   "/api/user/profileimage",
//   upload.array("image"),
//   function async(req, res) {
//     const files = req.files; // an array of uploaded files
//     // Process the files or perform any required operations
//     const filenames = files.map((file) => file.filename);

//     res.status(200).json(filenames);
//   }
// );

// app.post(
//   "/api/user/profileimage",
//   uploadProfile.single("image"),
//   function (req, res) {
//     console.log("dilamooo");
//     const file = req.file;
//     res.status(200).json(file.filename);
//   }
// );

app.get("/download", (req, res) => {
  const filePath = "./upload"; // Replace with the actual file path
  res.download(filePath);
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);

// Start the server and listen on port 3030
app.listen(3032, () => {
  console.log("Server is running on port 3032");
});

module.exports = storage;
