const prisma = require("../config/dbConfig.js");
const jwt = require("jsonwebtoken");

const addPost = async (req, res) => {
  console.log("req.body");
  console.log(req.body);

  try {
    // Extract data from request body
    const {
      propertyTitle,
      propertyType,
      propertyDescription,
      propertyRegion,
      propertyCity,
      propertyAddress,
      propertyQuantity,
      maxLeaseLength,
      minLeaseLength,
      propertyImages,
      propertyPrice,
      propertyContact,
    } = req.body;

    // Create a new post using Prisma client
    // const propertyImages = req.files.map((file) => ({
    //   image: file.filename,
    // }));

    const newPost = await prisma.posts.create({
      data: {
        propertyTitle,
        propertyType,
        propertyDescription,
        propertyRegion,
        propertyCity,
        propertyStreet: propertyAddress,
        propertyQuantity,
        maxLeaseLengthValue: maxLeaseLength.value,
        maxLeaseLengthType: maxLeaseLength.type,
        minLeaseLengthValue: minLeaseLength.value,
        minLeaseLengthType: minLeaseLength.type,
        authorId: req.userInfo.id,
        // propertyImages: {
        //   create: propertyImages,
        // },
        propertyImages: {
          create: propertyImages,
        },
        propertyPrice: {
          create: propertyPrice,
        },
        propertyContact: {
          create: propertyContact,
        },
      },
    });

    return res.status(200).json(newPost);
  } catch (error) {
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

        savedBy: {
          where: { usersId: req.userInfo.id },
          select: {
            usersId: true,
          },
        },
      },
    });
    if (allposts.length === 0) return res.status(404).json("No post found");
    return res.status(200).json(allposts);
  } catch (error) {
    res.json("Internal server error");
  }
};

const getPost = async (req, res) => {
  console.log("fire getpost");
  try {
    const { postId } = req.params;

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
        savedBy: {
          where: { usersId: req.userInfo.id },
          select: {
            usersId: true,
          },
        },
        author: {
          select: {
            id: true,
            username: true,
            email: true,
            firstName: true,
            lastName: true,
            image: true,
            phoneNumber: true,
          },
        },
      },
    });

    if (!post) return res.status(404).json("Post not found");

    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};

const deletePost = async (req, res) => {
  try {
    console.log(req.userInfo.id);
    const Post = await prisma.posts.findFirst({
      where: { AND: [{ id: req.body.id }, { authorId: req.userInfo.id }] },
    });
    if (!Post) return res.status(404).json("Post is not found");

    await prisma.posts.delete({
      where: { id: req.body.id },
    });
    return res.status(200).json("Delete successful");
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

const reportPost = async (req, res) => {
  try {
    const { postId } = req.params;

    const { reason } = req.body;

    // Check if the post exists
    const post = await prisma.posts.findUnique({
      where: { id: postId },
    });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Create a report
    const report = await prisma.report.create({
      data: {
        reason,
        postId: postId,
        reporterId: req.userInfo.id,
      },
    });

    res.status(201).json(report);
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

//save posts
const savePost = async (req, res) => {
  console.log("dile saveposts");
  console.log(req.params.postId);
  try {
    const postId = req.params.postId;
    // Check if the post exists
    const post = await prisma.posts.findUnique({
      where: { id: postId },
    });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const isSave = await prisma.savedPosts.findFirst({
      where: { AND: [{ usersId: req.userInfo.id }, { postsId: postId }] },
    });

    if (isSave) {
      //delete saved posts
      await prisma.savedPosts.delete({
        where: { id: isSave.id },
      });

      return res.status(202).json("unsave succesful");
    }
    const save = await prisma.savedPosts.create({
      data: {
        postsId: postId,
        usersId: req.userInfo.id,
      },
    });

    res.status(200).json(save);
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

// delete saved posts
const deleteSavedPosts = async (req, res) => {
  try {
    const { postId } = req.params;
    // Check if the post exists
    const post = await prisma.posts.findUnique({
      where: { id: postId },
    });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    //check if the post is saved first
    const isSave = await prisma.savedPosts.findFirst({
      where: { usersId: req.userInfo.id, postsId: postId },
    });

    if (!isSave)
      return res.status(404).json({ error: "this post is not saved" });
    //delete saved posts
    await prisma.savedPosts.delete({
      where: { id: isSave.id },
    });

    res.status(200).json("delete successful");
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

const getSavedPosts = async (req, res) => {
  try {
    //get all saved posts
    const savedPosts = await prisma.savedPosts.findMany({
      where: { usersId: req.userInfo.id },
      select: {
        Posts: {
          select: {
            propertyContact: true,
            propertyPrice: true,
            propertyImages: true,
            id: true,
            propertyTitle: true,
            propertyDescription: true,
            propertyType: true,
            propertyRegion: true,
            propertyCity: true,
            propertyStreet: true,
            maxLeaseLengthValue: true,
            maxLeaseLengthType: true,
            minLeaseLengthValue: true,
            minLeaseLengthType: true,
            propertyLeaseTerm: true,
            authorId: true,
            createdAt: true,
            updatedAt: true,
            isAvailable: true,
            propertyQuantity: true,
          },
        },
      },
    });

    if (!savedPosts)
      return res.status(404).json({ error: "Their no saved post is found!!" });

    return res.status(200).json(savedPosts);
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

module.exports = {
  addPost,
  deletePost,
  reportPost,
  savePost,
  deleteSavedPosts,
  getSavedPosts,
  getPosts,
  getPost,
};
