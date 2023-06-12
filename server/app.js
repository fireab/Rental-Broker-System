const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRouter.js");
const postRoutes = require("./routes/postRouter.js");
const userRouter = require("./routes/userRouter.js");

const app = express();
// Enable CORS for all routes
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/user", userRouter);

// Start the server and listen on port 3030
app.listen(3032, () => {
  console.log("Server is running on port 3032");
});