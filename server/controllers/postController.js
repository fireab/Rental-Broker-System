const prisma = require("../config/dbConfig.js");
const jwt = require("jsonwebtoken");

const addPost = async (req, res) => {
  try {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, process.env.MY_KEY, async (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");

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
          authorId: userInfo.id,
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
    });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};
const deletePost = async (req, res) => {
  try {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, process.env.MY_KEY, async (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");

      const Post = await prisma.posts.findFirst({
        where: { AND: [{ id: req.body.id }, { authorId: userInfo.id }] },
      });
      if (!Post) return res.status(404).json("Post is not found");
      await prisma.posts.delete({
        where: { id: req.body.id },
      });
      return res.status(200).json("delete successful");
    });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

module.exports = { addPost, deletePost };
