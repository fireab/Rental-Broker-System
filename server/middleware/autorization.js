import jwt from "jsonwebtoken";

const authenticateUser = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");
  jwt.verify(token, process.env.MY_KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    req.userInfo = userInfo; // Store the user information in the request object
    next();
  });
};

export default authenticateUser;
