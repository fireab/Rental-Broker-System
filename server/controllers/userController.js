const prisma = require("../config/dbConfig.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const updateProfile = async (req, res) => {
  try {
    const token = req.cookies.access_token;

    if (!token) {
      return res.status(401).json("Not authenticated!");
    }

    const userInfo = jwt.verify(token, "jwtkey");

    const {
      firstName,
      lastName,
      email,
      password,
      username,
      phoneNumber,
      sex,
      image,
      region,
      state,
      street,
    } = req.body;

    let data = {};

    if (firstName) data.firstName = firstName;
    if (lastName) data.lastName = lastName;
    if (phoneNumber) data.phoneNumber = phoneNumber;
    if (sex) data.sex = sex;
    if (image) data.image = image;

    if (username) {
      const userExists = await prisma.users.findFirst({
        where: { username },
      });

      if (userExists) {
        return res.status(409).json("username already exists!");
      }
      data.username = username;
    }

    if (email) {
      const emailExists = await prisma.users.findFirst({
        where: { email },
      });
      if (emailExists) {
        return res.status(409).json("Email is already taken!");
      }
      data.email = email;
    }

    if (password) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      data.password = hash;
    }

    if (region || state || street) {
      // Find the address for the user
      const userAddress = await prisma.address.findFirst({
        where: { usersId: userInfo.id },
      });

      if (userAddress) {
        // Address exists, update it
        const addressData = {};
        if (region) addressData.region = region;
        if (state) addressData.state = state;
        if (street) addressData.street = street;

        // Update the address
        await prisma.address.update({
          where: { id: userAddress.id },
          data: addressData,
        });
      } else {
        // Address doesn't exist, create a new address
        const newAddress = await prisma.address.create({
          data: {
            region,
            state,
            street,
            userId: userInfo.id,
          },
        });
      }
    }

    // Update the user profile in the database
    const updatedUser = await prisma.users.update({
      where: { id: userInfo.id },
      data,
      select: {
        firstName: true,
        username: true,
        lastName: true,
        email: true,
        address: true,
      },
    });

    // Return the updated user profile
    return res.json(updatedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Internal server error");
  }
};

const getUserProfile = async (req, res) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      // If token is missing, return 401 Unauthorized
      return res.status(401).json("Not authenticated!");
    }

    // Verify the token
    jwt.verify(token, "jwtkey", async (err, userInfo) => {
      if (err) {
        // If token is invalid, return 403 Forbidden
        return res.status(403).json("Token is not valid!");
      }

      // Retrieve user profile from the database
      const user = await prisma.users.findFirst({
        where: { id: userInfo.id },
        select: {
          id: true,
          username: true,
          email: true,
          firstName: true,
          lastName: true,
          phoneNumber: true,
          address: {
            select: {
              region: true,
              street: true,
              region: true,
            },
          },
        },
      });
      // Return the user profile
      return res.status(200).json(user);
    });
  } catch (error) {
    // Return error message for internal server error
    res.status(500).json("Internal server error");
  }
};

const deleteAccount = (req, res) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      // If token is missing, return 401 Unauthorized
      return res.status(401).json("Not authenticated!");
    }

    // Verify the token
    jwt.verify(token, "jwtkey", async (err, userInfo) => {
      if (err) {
        // If token is invalid, return 403 Forbidden
        return res.status(403).json("Token is not valid!");
      }

      // Retrieve user profile from the database
      const userExist = await prisma.users.findFirst({
        where: { id: userInfo.id },
      });
      if (userExist) {
        const otp = await prisma.otp.findFirst({
          where: { userid: userInfo.id },
        });

        if (!otp) return res.status(404).json("verfied account is not found");
        await prisma.otp.delete({
          where: { id: otp.id },
        });

        await prisma.users.delete({
          where: { id: userInfo.id },
        });

        return res.status(200).json("delete successful");
      }
      return res.status(404).json("user doesn't exist");
    });
  } catch (error) {
    return res.status(500).json("internal server error");
  }
};

module.exports = { getUserProfile, updateProfile, deleteAccount };
