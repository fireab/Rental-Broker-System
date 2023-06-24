const prisma = require("../config/dbConfig.js");
const jwt = require("jsonwebtoken");
const fs = require("fs");
// const { param } = require("../routes/authRouter.js");

const addPost = async (req, res) => {
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
    // console.log(propertyImages);

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
    console.log(error);
  }
};

const getPosts = async (req, res) => {
  try {
    const { propertyType, region, city } = req.query;
    // console.log(propertyType, region, city);
    // console.log(req.query);

    const filters = {};
    if (region) filters.propertyRegion = region;
    if (city) filters.propertyCity = city;
    if (propertyType) filters.propertyType = { in: propertyType };

    const allposts = await prisma.posts.findMany({
      where: filters,
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
    // const updatedPost = { ...post, isFollowed: false };
    // console.log(updatedPost, "updatted");

    const isfollowedByMe = await prisma.userFollower.findFirst({
      where: {
        followerId: req.userInfo.id,
        followingId: post.authorId,
      },
    });
    if (!isfollowedByMe)
      return res.status(200).json({ post, isFollowed: false });
    if (isfollowedByMe) return res.status(200).json({ post, isFollowed: true });

    // return res.status(200).json({post,isFollowed});
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
};

// const editPost = async (req, res) => {
//   try {
//     // Extract data from request body
//     const {
//       postId,
//       propertyTitle,
//       propertyType,
//       propertyDescription,
//       propertyRegion,
//       propertyCity,
//       propertyAddress,
//       propertyQuantity,
//       maxLeaseLength,
//       minLeaseLength,
//       propertyImages,
//       propertyPrice,
//       propertyContact,
//     } = req.body;

//     // Check if the post exists
//     const existingPost = await prisma.posts.findUnique({
//       where: { id: postId },
//     });

//     if (!existingPost) {
//       return res.status(404).json({ error: "Post not found!" });
//     }

//     // Update the post using Prisma client
//     const updatedPost = await prisma.posts.update({
//       where: { id: postId },
//       data: {
//         propertyTitle,
//         propertyType,
//         propertyDescription,
//         propertyRegion,
//         propertyCity,
//         propertyStreet: propertyAddress,
//         propertyQuantity,
//         maxLeaseLengthValue: maxLeaseLength.value,
//         maxLeaseLengthType: maxLeaseLength.type,
//         minLeaseLengthValue: minLeaseLength.value,
//         minLeaseLengthType: minLeaseLength.type,
//         propertyImages: {
//           deleteMany: { postId },
//           create: propertyImages.map((image) => ({ image })),
//         },
//         propertyPrice: {
//           deleteMany: { postId },
//           create: propertyPrice,
//         },
//         propertyContact: {
//           deleteMany: { postId },
//           create: propertyContact,
//         },
//       },
//     });

//     return res.status(200).json(updatedPost);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// };

const editPost = async (req, res) => {
  try {
    // Extract data from request body
    const { postId } = req.params;
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

    // Check if the post exists
    const existingPost = await prisma.posts.findUnique({
      where: { id: postId },
    });

    if (!existingPost) {
      return res.status(404).json({ error: "Post not found!" });
    }

    // Prepare the update data
    const updateData = {};

    if (propertyTitle !== null) {
      updateData.propertyTitle = propertyTitle;
    }

    if (propertyType !== null) {
      updateData.propertyType = propertyType;
    }

    if (propertyDescription !== null) {
      updateData.propertyDescription = propertyDescription;
    }

    if (propertyRegion !== null) {
      updateData.propertyRegion = propertyRegion;
    }

    if (propertyCity !== null) {
      updateData.propertyCity = propertyCity;
    }

    if (propertyAddress !== null) {
      updateData.propertyStreet = propertyAddress;
    }

    if (propertyQuantity !== null) {
      updateData.propertyQuantity = propertyQuantity;
    }

    if (maxLeaseLength && maxLeaseLength.value !== undefined) {
      updateData.maxLeaseLengthValue = maxLeaseLength.value;
      updateData.maxLeaseLengthType = maxLeaseLength.type;
    }

    if (minLeaseLength && minLeaseLength.value !== undefined) {
      updateData.minLeaseLengthValue = minLeaseLength.value;
      updateData.minLeaseLengthType = minLeaseLength.type;
    }

    if (propertyImages !== null && propertyImages !== undefined) {
      updateData.propertyImages = {
        deleteMany: { postsId: postId },
        create: propertyImages.map((image) => ({ image })),
      };
    }

    if (propertyPrice !== null && propertyPrice !== undefined) {
      updateData.propertyPrice = {
        create: propertyPrice.map((price) => ({
          price: price.value.toString(),
          priceType: price.type,
        })),
      };
    }

    if (propertyContact !== null) {
      updateData.propertyContact = {
        deleteMany: { postsId: postId },
        create: propertyContact,
      };
    }

    // Update the post using Prisma client
    const updatedPost = await prisma.posts.update({
      where: { id: postId },
      data: updateData,
    });

    return res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const deletePost = async (req, res) => {
  console.log(req.body);
  try {
    const Post = await prisma.posts.findFirst({
      where: { AND: [{ id: req.body.postId }, { authorId: req.userInfo.id }] },
    });
    if (!Post) return res.status(404).json("Post is not found");

    await prisma.posts.delete({
      where: { id: req.body.postId },
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
    console.log();
  }
};

//save posts
const savePost = async (req, res) => {
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

      return res
        .status(200)
        .json({ message: "unsave succesful", isSaved: false });
    }
    const save = await prisma.savedPosts.create({
      data: {
        postsId: postId,
        usersId: req.userInfo.id,
      },
    });

    return res.status(200).json({ save, isSaved: true });
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

const getMyPosts = async (req, res) => {
  try {
    const allposts = await prisma.posts.findMany({
      where: { authorId: req.userInfo.id },
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
    if (allposts.length === 0) return res.status(200).json([]);
    // console.log(allposts);
    return res.status(200).json(allposts);
  } catch (error) {
    console.log(error);
    res.json("Internal server error");
  }
};
const getOthersPosts = async (req, res) => {
  try {
    let { username } = req.params;

    const getUser = await prisma.users.findUnique({
      where: { username },
    });
    if (!getUser) return res.status(404).json("user is not found!!");

    const allposts = await prisma.posts.findMany({
      where: { authorId: getUser.id },
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
    if (allposts.length === 0) return res.status(200).json([]);
    // console.log(allposts);
    return res.status(200).json(allposts);
  } catch (error) {
    console.log(error);
    res.json("Internal server error");
  }
};

// const sendImg = async (req, res) => {
//   try {
//     const { imagename } = req.params;

//     const filePath = `upload/${imagename}`; // Replace with the actual file path
//     // const filePath = '/path/to/file'; // Replace with the actual file path
//     const stream = fs.createReadStream(filePath);
//     stream.pipe(res);
//   } catch (error) {
//     res.status(500).json("Internal server error");
//   }
// };

const sendImg = async (req, res) => {
  try {
    const { imagename } = req.params;

    let filePath = `upload/${imagename}`;
    if (!fs.existsSync(filePath)) {
      // File not found, return an error response
      filePath = `upload/noimage.jpg`;
      const stream = fs.createReadStream(filePath);
      return stream.pipe(res);
    }

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

// async function searchAndFilterPosts(req, res) {
//   try {
//     const { searchWord, propertyType, region, city, minPrice, maxPrice } =
//       req.query;
//     console.log(req.query);
//     const allposts = await prisma.posts.findMany({
//       where: {
//         propertyRegion: region,
//         propertyCity: city,
//         // propertyType: propertyType,

//         AND: [
//           searchWord
//             ? {
//                 OR: [
//                   {
//                     propertyTitle: {
//                       contains: searchWord,
//                       // mode: "insensitive",
//                     },
//                   },
//                   {
//                     propertyDescription: {
//                       contains: searchWord,
//                       // mode: "insensitive",
//                     },
//                   },
//                   propertyType ? { propertyType: { in: propertyType } } : {},
//                   // region ? { propertyRegion: { in: region } } : {},
//                   // minPrice
//                   //   ? {
//                   //       propertyPrice: {
//                   //         some: { price: { gte: parseInt(minPrice) } },
//                   //       },
//                   //     }
//                   //   : {},
//                   // maxPrice
//                   //   ? {
//                   //       propertyPrice: {
//                   //         some: { price: { lte: parseInt(maxPrice) } },
//                   //       },
//                   //     }
//                   //   : {},
//                 ],
//               }
//             : {},
//         ],
//       },
//       select: {
//         id: true,
//         propertyTitle: true,
//         propertyDescription: true,
//         propertyType: true,
//         postType: true,
//         propertyRegion: true,
//         propertyCity: true,
//         propertyStreet: true,
//         maxLeaseLengthValue: true,
//         maxLeaseLengthType: true,
//         minLeaseLengthValue: true,
//         minLeaseLengthType: true,
//         propertyLeaseTerm: true,
//         authorId: true,
//         isAvailable: true,
//         propertyQuantity: true,
//         propertyImages: true,
//         propertyContact: true,
//         propertyPrice: true,

//         savedBy: {
//           where: { usersId: req.userInfo.id },
//           select: {
//             usersId: true,
//           },
//         },
//       },
//     });
//     if (allposts.length === 0) return res.status(404).json("No post found");
//     return res.status(200).json(allposts);
//   } catch (error) {
//     res.json("Internal server error");
//     console.log(error);
//   }
// }

async function searchAndFilterPosts(req, res) {
  try {
    console.log("search");
    const { searchWord, propertyType, region, city, minPrice, maxPrice } =
      req.query.queryKey[1];
    const filters = {};
    console.log(searchWord, propertyType, region, city, minPrice, maxPrice);
    console.log(req.query);

    if (region) filters.propertyRegion = region;
    if (city) filters.propertyCity = city;
    if (searchWord) {
      filters.OR = [
        { propertyTitle: { contains: searchWord } },
        { propertyDescription: { contains: searchWord } },
      ];
    }
    if (propertyType) filters.propertyType = { in: propertyType };
    if (minPrice || maxPrice) {
      filters.propertyPrice = {};
      //   if (minPrice) filters.propertyPrice.price = { gte: parseInt(minPrice) };
      //   if (maxPrice) filters.propertyPrice.price = { lte: parseInt(maxPrice) };
      if (minPrice)
        filters.propertyPrice.some = {
          price: { gte: parseIsnt(minPrice, 10) },
        };
      if (maxPrice)
        filters.propertyPrice.some = { price: { lte: parseInt(maxPrice, 10) } };
    }

    const allPosts = await prisma.posts.findMany({
      where: filters,
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
          select: { usersId: true },
        },
      },
    });

    if (allPosts.length === 0) {
      return res.status(200).json([]);
    }
    console.log(allPosts);
    return res.status(200).json(allPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
}

module.exports = {
  addPost,
  deletePost,
  reportPost,
  savePost,
  deleteSavedPosts,
  getSavedPosts,
  getPosts,
  getPost,
  sendImg,
  searchAndFilterPosts,
  getMyPosts,
  getOthersPosts,
  editPost,
};
