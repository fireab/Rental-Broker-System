const prisma = require("../config/dbConfig.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  //CHECK EXISTING USER
  try {
    const userExists = await prisma.users.findFirst({
      where: {
        OR: [{ email: req.body.email }, { userName: req.body.userName }],
      },
    });
    if (userExists) {
      return res.status(409).json("User already exists!");
    }

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const createUser = await prisma.users.create({
      data: {
        userName: req.body.userName,
        email: req.body.email,
        password: hash,
      },
      select: {
        email: true,
        userName: true,
      },
    });
    return res.status(200).json(createUser);
  } catch (error) {
    return res.status(500).json(" Internal server error");
  }
};

const login = async (req, res) => {
  try {
    // Find the user in the database by their username
    const user = await prisma.users.findMany({
      where: {
        userName: req.body.userName,
      },
    });
    // If user not found, return 404 status with an error message
    if (!user.length) {
      return res.status(404).json("User not found!");
    }

    // Compare the provided password with the user's hashed password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user[0].password
    );

    // If the password is incorrect, return 400 status with an error message
    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    // Generate a JSON Web Token (JWT) for authentication
    const token = jwt.sign({ id: user[0].id }, process.env.MY_KEY);
    // Remove the password from the user object
    const { password, ...other } = user[0];

    // Set the token as an HTTP-only cookie and return the user information
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  } catch (error) {
    res.json(" Internal server error");
  }
};

const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out.");
};

module.exports = { register, login, logout };
