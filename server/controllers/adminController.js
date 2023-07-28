import prisma from "../config/dbConfig.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  const { email } = req.body;

  try {
    console.log(req.body);
    // Find the user based on the provided username
    const user = await prisma.admin.findFirst({
      where: {
        OR: [{ email: email }, { username: email }],
      },
    });

    // Check if the user exists
    if (!user) {
      return res.status(400).json("Wrong username or password!");
    }

    // Compare the provided password with the stored password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    // If the password is incorrect, return an error
    if (!isPasswordCorrect) {
      return res.status(400).json("Wrong username or password!");
    }

    // Generate a JWT token with the user's ID
    const token = jwt.sign({ id: user.id }, process.env.MY_KEY);

    // Exclude the password field from the response
    const { password, ...userData } = user;

    // Set the token as an HTTP-only cookie and send the user data in the response
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(userData);
  } catch (error) {
    // Handle any internal server errors
    res.status(500).json("Internal server error");
    console.log(error);
  }
};

const logout = (req, res) => {
  res.clearCookie("access_token").status(200).json("User has been logged out.");
};
const getAllUsers = async (req, res) => {
  const users = await prisma.users.findMany({
    select: {
      id: true,
      username: true,
      email: true,
      firstName: true,
      lastName: true,
      image: true,
      phoneNumber: true,
      createdAt: true,
      address: {
        select: {
          region: true,
          city: true,
        },
      },
    },
  });
  if (!users) return res.status(200).json([]);
  return res.status(200).json(users);
};

const getAdminProfile = async (req, res) => {
  try {
    // Retrieve user profile from the database
    const profile = await prisma.admin.findFirst({
      where: { id: req.userInfo.id },
    });
    // Return the user profile
    const { password, ...other } = profile;
    return res.status(200).json(other);
  } catch (error) {
    // Return error message for internal server error
    res.status(500).json("Internal server error");
  }
};

const getallReports = async (req, res) => {
  try {
    const reports = await prisma.report.findMany({
      select: {
        createdAt: true,

        reason: true,
        reportType: true,
        postId: true,
        reporterId: true,
        reporter: true,
        post: true,
      },
      orderBy: { createdAt: "desc" },
    });
    if (!reports) res.status(404).json("no report is found");
    return res.status(200).json(reports);
  } catch (error) {
    // Return error message for internal server error
    console.log(error);
    res.status(500).json("Internal server error");
  }
};
const getReport = async (req, res) => {
  try {
    const reports = await prisma.report.findMany({
      orderBy: { createdAt: "desc" },
    });
    if (!reports) res.status(404).json("no report is found");
    return res.status(200).json(reports);
  } catch (error) {
    // Return error message for internal server error
    console.log(error);
    res.status(500).json("Internal server error");
  }
};

const getUser = async (req, res) => {
  n;
  const { userId } = req.params;
  const users = await prisma.users.findFirst({
    where: { id: userId },
    select: {
      id: true,
      username: true,
      email: true,
      firstName: true,
      lastName: true,
      image: true,
      phoneNumber: true,

      address: {
        select: {
          region: true,
          city: true,
        },
      },
      posts: {
        select: {
          id: true,
          propertyTitle: true,
          propertyDescription: true,
          propertyType: true,
          postType: true,
          propertyRegion: true,
          propertyCity: true,
          propertyStreet: true,
          maxLeaseLengthValue: true,
          maxLeaseLengthType: true,
          minLeaseLengthValue: true,
          minLeaseLengthType: true,
          propertyLeaseTerm: true,
          authorId: true,
          isAvailable: true,
          propertyQuantity: true,
          propertyImages: true,
          propertyContact: true,
          propertyPrice: true,
        },
      },
    },
  });
  if (!users) return res.status(404).json("no users found");
  return res.status(200).json(users);
};

export const getprofile = async (req, res) => {
  try {
    let { userId } = req.params;
    console.log(userId);

    const user = await prisma.users.findFirst({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        email: true,
        firstName: true,
        lastName: true,
        phoneNumber: true,
        createdAt: true,
        posts: true,
        address: {
          select: {
            region: true,
            city: true,
            // region: true,
          },
        },
      },
    });
    // Return the user profile
    if (!user) return res.status(404).json("user is not found!!");
    const postsCount = await prisma.posts.count({
      where: { authorId: user.id },
    });
    const followersCount = await prisma.userFollower.count({
      where: { followingId: user.id },
    });

    const followingCount = await prisma.userFollower.count({
      where: { followerId: user.id },
    });

    const userProfile = { postsCount, followersCount, followingCount, ...user };

    // const userProfile = { postsCount, ...user };

    return res.status(200).json(userProfile);
  } catch (error) {
    // Return error message for internal server error
    console.log(error);
    res.status(500).json("Internal server error");
  }
};

const getPosts = async (req, res) => {
  try {
    const allposts = await prisma.posts.findMany({
      select: {
        id: true,
        propertyTitle: true,
        propertyDescription: true,
        propertyType: true,
        postType: true,
        propertyRegion: true,
        propertyCity: true,
        propertyStreet: true,
        maxLeaseLengthValue: true,
        maxLeaseLengthType: true,
        minLeaseLengthValue: true,
        minLeaseLengthType: true,
        propertyLeaseTerm: true,
        authorId: true,
        isAvailable: true,
        propertyQuantity: true,
        propertyImages: true,
        propertyContact: true,
        propertyPrice: true,
        createdAt: true,
        isBanned: true,
        author: true,
      },
      orderBy: { createdAt: "desc" },
    });
    if (allposts.length === 0) return res.status(200).json([]);
    // console.log(allposts);
    return res.status(200).json(allposts);
  } catch (error) {
    console.log(error);
    res.json("Internal server error");
  }
};

const getBandPosts = async (req, res) => {
  try {
    const allposts = await prisma.posts.findMany({
      where: { isBanned: true },
      select: {
        id: true,
        propertyTitle: true,
        propertyDescription: true,
        propertyType: true,
        postType: true,
        propertyRegion: true,
        propertyCity: true,
        propertyStreet: true,
        maxLeaseLengthValue: true,
        maxLeaseLengthType: true,
        minLeaseLengthValue: true,
        minLeaseLengthType: true,
        propertyLeaseTerm: true,
        authorId: true,
        isAvailable: true,
        propertyQuantity: true,
        propertyImages: true,
        propertyContact: true,
        propertyPrice: true,

        savedBy: {
          where: { usersId: req.userInfo.id },
          select: {
            usersId: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
    if (allposts.length === 0) return res.status(200).json([]);
    // console.log(allposts);
    return res.status(200).json(allposts);
  } catch (error) {
    console.log(error);
    res.json("Internal server error");
  }
};

const getPost = async (req, res) => {
  try {
    const { postId } = req.params;
    console.log(postId);

    const post = await prisma.posts.findUnique({
      where: {
        id: postId,
      },
      select: {
        id: true,
        propertyTitle: true,
        propertyDescription: true,
        propertyType: true,
        postType: true,
        propertyRegion: true,
        propertyCity: true,
        propertyStreet: true,
        maxLeaseLengthValue: true,
        maxLeaseLengthType: true,
        minLeaseLengthValue: true,
        minLeaseLengthType: true,
        propertyLeaseTerm: true,
        authorId: true,
        isAvailable: true,
        propertyQuantity: true,
        propertyImages: true,
        propertyContact: true,
        propertyPrice: true,

        author: {
          select: {
            id: true,
            username: true,
            email: true,
            firstName: true,
            lastName: true,
            image: true,
            phoneNumber: true,

            address: {
              select: {
                region: true,
                city: true,
              },
            },
          },
        },
      },
    });

    if (!post) return res.status(404).json("Post not found");

    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
};

const changeCatagory = async (req, res) => {
  try {
    const { postId } = req.params;
    const { propertyType } = req.body;

    console.log(postId, propertyType);

    const updatedPost = await prisma.posts.update({
      where: { id: postId },
      data: {
        propertyType,
      },
    });
    if (!updatedPost) return res.status(404).json("No post found!!");
    res
      .status(200)
      .json({ message: "Post category updated successfully", updatedPost });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

// Toggle ban status for a user
const toggleUserBan = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log(userId, "ban");

    const user = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: {
        isBanned: !user.isBanned,
      },
    });

    const message = updatedUser.isBanned ? "User banned" : "User unbanned";
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

// Toggle ban status for a post
const togglePostBan = async (req, res) => {
  try {
    const { postId } = req.params;

    const post = await prisma.posts.findFirst({
      where: { id: postId },
    });

    if (!post) {
      console.log("no post");
      return res.status(404).json({ message: "Post not found" });
    }
    console.log("post Found");

    const updatedPost = await prisma.posts.update({
      where: { id: postId },
      data: {
        isBanned: !post.isBanned,
      },
      select: {
        isBanned: true,
      },
    });

    const message = updatedPost.isBanned ? "Post banned" : "Post unbanned";
    console.log({ message });

    res.status(200).json({ message, isBanned: updatedPost.isBanned });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

const registerCustomer = async (req, res) => {
  try {
    // Check if the user already exists
    const userExists = await prisma.customerCare.findFirst({
      where: {
        OR: [{ email: req.body.email }, { username: req.body.username }],
      },
    });

    // If the user already exists, return an error
    if (userExists) {
      return res.status(409).json("User already exists!");
    }

    // Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // Create a new user in the database
    const customerCare = await prisma.customerCare.create({
      data: {
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
        phoneNumber: req.body.phoneNumber,
      },
    });

    const { password, id, ...other } = user;

    res.status(200).json({ message: "Registration successful.", user: other });
  } catch (error) {
    // Handle any internal server errors
    return res.status(500).json("Internal server error");
  }
};

export {
  login,
  logout,
  getAllUsers,
  getUser,
  getAdminProfile,
  getallReports,
  getPosts,
  getBandPosts,
  getPost,
  changeCatagory,
  toggleUserBan,
  togglePostBan,
};
