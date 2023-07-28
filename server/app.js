import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRouter.js";
import postRoutes from "./routes/postRouter.js";
import userRouter from "./routes/userRouter.js";
import adminRouter from "./routes/adminRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import multer from "multer";

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
  console.log("my res:", filenames);
  return res.status(200).json(filenames);
});

app.get("/download", (req, res) => {
  const filePath = "./upload"; // Replace with the actual file path
  res.download(filePath);
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/chat", chatRoutes);

// Start the server and listen on port 3030
app.listen(3032, () => {
  console.log("Server is running on port 3032");
});

export default storage;
