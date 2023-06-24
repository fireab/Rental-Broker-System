const prisma = require("../config/dbConfig.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const fs = require("fs");

const updateProfile = async (req, res) => {
  console.log(req.body);
  try {
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
        where: { usersId: req.userInfo.id },
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
            userId: req.userInfo.id,
          },
        });
      }
    }

    // Update the user profile in the database
    const updatedUser = await prisma.users.update({
      where: { id: req.userInfo.id },
      data,
      select: {
        firstName: true,
        username: true,
        lastName: true,
        phoneNumber: true,
        email: true,
        address: true,
      },
    });

    // Return the updated user profile
    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Internal server error");
  }
};

const changePassword = async (req, res) => {
  console.log(req.body);
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.userInfo.id;

    // Retrieve the user from the database
    const user = await prisma.users.findUnique({ where: { id: userId } });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify the current password
    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      user.password
    );

    // if (!isPasswordValid) {
    //   return res.status(400).json({ message: "Invalid current password" });
    // }

    // Hash the new password
    // const hashedPassword = await bcrypt.hash(newPassword, 10);

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(newPassword, salt);
    // data.password = hash;

    // Update the user's password in the database
    await prisma.users.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
      },
    });

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getUserProfile = async (req, res) => {
  try {
    // Retrieve user profile from the database
    const user = await prisma.users.findFirst({
      where: { id: req.userInfo.id },

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
            // street: true,
            city: true,
          },
        },
      },
    });
    // Return the user profile
    return res.status(200).json(user);
  } catch (error) {
    // Return error message for internal server error
    res.status(500).json("Internal server error");
  }
};

const getprofile = async (req, res) => {
  try {
    // Retrieve user profile from the database
    let { username } = req.params;
    console.log(username, "dillllee");
    // if (username == "mine") userId = req.userInfo.id;
    // console.log("profile picture");
    // console.log(username);
    const user = await prisma.users.findFirst({
      where: { username: username },
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
            city: true,
            // region: true,
          },
        },
      },
    });
    // Return the user profile
    if (!user) return res.status(404).json("user is not found!!");

    const isfollowedByMe = await prisma.userFollower.findFirst({
      where: {
        followerId: req.userInfo.id,
        followingId: user.id,
      },
    });
    let isFollowed;
    if (!isfollowedByMe) {
      return res.status(200).json({ user, isFollowed: false });
    }
    return res.status(200).json({ user, isFollowed: true });
  } catch (error) {
    // Return error message for internal server error
    console.log(error);
    res.status(500).json("Internal server error");
  }
};

const deleteAccount = async (req, res) => {
  try {
    // Retrieve user profile from the database
    const userExist = await prisma.users.findFirst({
      where: { id: req.userInfo.id },
    });
    if (userExist) {
      const otp = await prisma.otp.findFirst({
        where: { userid: req.userInfo.id },
      });

      if (!otp) return res.status(404).json("verfied account is not found");
      await prisma.otp.delete({
        where: { id: otp.id },
      });

      await prisma.users.delete({
        where: { id: req.userInfo.id },
      });

      return res.status(200).json("delete successful");
    }
    return res.status(404).json("user doesn't exist");
  } catch (error) {
    return res.status(500).json("internal server error");
  }
};

// Follow a user
// const followUser = async (req, res) => {
//   try {
//     const { followingId } = req.body;
//     // Verify the token

//     const userExists = await prisma.users.findFirst({
//       where: { id: followingId },
//     });

//     if (!userExists) return res.status(404).json({ error: "User not found" });

//     const isFollowing = await prisma.userFollower.findFirst({
//       where: {
//         AND: [{ followingId: followingId }, { followerId: req.userInfo.id }],
//       },
//     });

//     if (isFollowing)
//       return res.status(400).json({ error: "User is already being followed" });

//     const follow = await prisma.UserFollower.create({
//       data: {
//         followingId,
//         followerId: req.userInfo.id,
//       },
//     });

//     return res.status(200).json({ message: "User followed successfully" });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// };

// const unfollowUser = async (req, res) => {
//   try {
//     const { followingId } = req.body;

//     // Verify the token

//     const isFollowing = await prisma.userFollower.findFirst({
//       where: {
//         followerId: req.userInfo.id,
//         followingId,
//       },
//     });
//     if (isFollowing) {
//       const unfollow = await prisma.userFollower.deleteMany({
//         where: {
//           followerId: req.userInfo.id,
//           followingId,
//         },
//       });

//       return res
//         .status(200)
//         .json({ message: "User unfollowed successfully", unfollow });
//     }
//     return res.status(403).json({ message: "You are not following this user" });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// };

const toggleFollowUser = async (req, res) => {
  try {
    console.log(req.body);
    const { followingId } = req.body;
    console.log(followingId, "followe unfollow");
    // Verify the token

    const user = await prisma.users.findUnique({
      where: { id: followingId },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isFollowing = await prisma.userFollower.findFirst({
      where: {
        followingId,
        followerId: req.userInfo.id,
      },
    });

    if (isFollowing) {
      // Unfollow the user
      await prisma.userFollower.deleteMany({
        where: {
          followingId,
          followerId: req.userInfo.id,
        },
      });

      return res.status(200).json({
        message: "User unfollowed successfully",
        follow: false,
        followingId,
      });
    }

    // Follow the user
    await prisma.userFollower.create({
      data: {
        followingId,
        followerId: req.userInfo.id,
      },
    });

    return res.status(200).json({
      message: "User followed successfully",
      follow: true,
      followingId,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// const getFollowersAndFollowing = async (req, res) => {
//   try {
//     // const { userId } = req.params;

//     // Verify the token

//     const followersCount = await prisma.userFollower.count({
//       where: {
//         followingId: req.userInfo.id,
//       },
//     });

//     const followingCount = await prisma.userFollower.count({
//       where: {
//         followerId: req.userInfo.id,
//       },
//     });

//     const followers = await prisma.userFollower.findMany({
//       where: {
//         followingId: req.userInfo.id,
//       },
//       select: {
//         follower: {
//           select: {
//             id: true,
//             username: true,
//             image: true,
//           },
//         },
//       },
//     });

//     const following = await prisma.userFollower.findMany({
//       where: {
//         followerId: req.userInfo.id,
//       },
//       select: {
//         following: {
//           select: {
//             id: true,
//             username: true,
//             image: true,
//           },
//         },
//       },
//     });

//     return res.status(200).json({
//       followersCount,
//       followingCount,
//       followers,
//       following,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// };

// const getOtherFollowers = async (req, res) => {
//   try {
//     const { username } = req.params;

//     const user = await prisma.users.findFirst({
//       where: { username },
//     });

//     if (!user) return res.status(404).json("user not found!!");

//     const followersCount = await prisma.userFollower.count({
//       where: {
//         followingId: user.id,
//       },
//     });

//     const followers = await prisma.userFollower.findMany({
//       where: {
//         followingId: user.id,
//       },
//       select: {
//         follower: {
//           select: {
//             id: true,
//             firstName: true,
//             lastName: true,
//             username: true,
//             email: true,
//             image: true,
//             followers: {
//               select: {
//                 followerId: true,
//                 followingId: true,
//               },
//             },
//             address: {
//               select: {
//                 region: true,
//                 city: true,
//               },
//             },
//           },
//         },
//       },
//     });

//     const followersWithIsFollowed = followers.map((f) => {
//       const followId = f.follower.followers.map((fid) => {
//         // if (fid.followerId===req.userInfo.id)
//         const isFollowed = fid.followerId === req.userInfo.id;

//       });
//       return {
//         ...followId,
//         f,
//       };
//     });

//     return res.status(200).json({
//       followersCount,
//       followers: followersWithIsFollowed,
//     });

//     // return res.status(200).json({
//     //   followersCount,
//     //   followers,
//     // });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// };

const getOtherFollowers = async (req, res) => {
  try {
    const { username } = req.params;
    const loggedInUserId = req.userInfo.id;

    const user = await prisma.users.findFirst({
      where: { username },
    });

    if (!user) return res.status(404).json("User not found!");

    const followers = await prisma.userFollower.findMany({
      where: {
        followingId: user.id,
      },
      select: {
        follower: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            username: true,
            email: true,
            image: true,
            followers: {
              where: {
                followerId: loggedInUserId,
              },
              select: {
                followerId: true,
              },
            },
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

    const followersWithIsFollowed = followers.map((f) => {
      const isFollowed = f.follower.followers.length > 0;
      return {
        ...f.follower,
        isFollowed,
      };
    });

    const followersCount = followersWithIsFollowed.length;

    console.log(followersWithIsFollowed);
    return res.status(200).json({
      followersCount,
      followers: followersWithIsFollowed,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getFollowers = async (req, res) => {
  try {
    const loggedInUserId = req.userInfo.id;

    // const followersCount = await prisma.userFollower.count({
    //   where: {
    //     followingId: req.userInfo.id,
    //   },
    // });

    const followers = await prisma.userFollower.findMany({
      where: {
        followingId: req.userInfo.id,
      },
      select: {
        follower: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            username: true,
            email: true,
            image: true,
            followers: {
              where: {
                followerId: loggedInUserId,
              },
              select: {
                followerId: true,
              },
            },
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
    //
    const followersWithIsFollowed = followers.map((f) => {
      const isFollowed = f.follower.followers.length > 0;
      return {
        ...f.follower,
        isFollowed,
      };
    });

    const followersCount = followersWithIsFollowed.length;

    console.log(followersWithIsFollowed);
    return res.status(200).json({
      followersCount,
      followers: followersWithIsFollowed,
    });

    // const followersWithIsFollowed = followers.map((follower) => {
    //   const isFollowed = follower.follower.id === req.userInfo.id;
    //   // console.log(follower.follower.id, req.userInfo.id);
    //   // console.log(isFollowed);
    //   return {
    //     ...follower,
    //     isFollowed,
    //   };
    // });

    // return res.status(200).json({
    //   followersCount,
    //   followers: followersWithIsFollowed,
    // });
    //

    // return res.status(200).json({
    //   followersCount,
    //   followers,
    // });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// const getOtherFollowing = async (req, res) => {
//   try {
//     const { username } = req.params;
//     const loggedInUserId = req.userInfo.id;

//     const user = await prisma.users.findFirst({
//       where: { username },
//     });

//     if (!user) return res.status(404).json("user not found!!");

//     const followingCount = await prisma.userFollower.count({
//       where: {
//         followerId: user.id,
//       },
//     });

//     const following = await prisma.userFollower.findMany({
//       where: {
//         followerId: user.id,
//       },
//       select: {
//         following: {
//           select: {
//             id: true,
//             firstName: true,
//             lastName: true,
//             username: true,
//             image: true,
//             followers: {
//               where: {
//                 followerId: loggedInUserId,
//               },
//               select: {
//                 followerId: true,
//               },
//             },
//             address: {
//               select: {
//                 region: true,
//                 city: true,
//               },
//             },
//           },
//         },
//       },
//     });

//     const followersWithIsFollowed = following.map((f) => {
//       const isFollowed = f.follower.followers.length > 0;
//       return {
//         ...f.follower,
//         isFollowed,
//       };
//     });

//     const followingCounts = followersWithIsFollowed.length;

//     console.log(followersWithIsFollowed);
//     return res.status(200).json({
//       followingCounts,
//       following: followersWithIsFollowed,
//     });

//     return res.status(200).json({
//       followingCount,
//       following,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// };

const getOtherFollowing = async (req, res) => {
  try {
    const { username } = req.params;
    const loggedInUserId = req.userInfo.id;

    const user = await prisma.users.findFirst({
      where: { username },
    });

    if (!user) return res.status(404).json("User not found!");

    const following = await prisma.userFollower.findMany({
      where: {
        followerId: user.id,
      },
      select: {
        following: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            username: true,
            email: true,
            image: true,
            followers: {
              where: {
                followerId: loggedInUserId,
              },
              select: {
                followerId: true,
              },
            },
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

    const followingWithIsFollowed = following.map((f) => {
      const isFollowed = f.following.followers.length > 0;
      return {
        ...f.following,
        isFollowed,
      };
    });

    const followingCount = followingWithIsFollowed.length;

    return res.status(200).json({
      followingCount,
      following: followingWithIsFollowed,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getFollowing = async (req, res) => {
  try {
    const loggedInUserId = req.userInfo.id;

    // const followingCount = await prisma.userFollower.count({
    //   where: {
    //     followerId: req.userInfo.id,
    //   },
    // });

    const following = await prisma.userFollower.findMany({
      where: {
        followerId: req.userInfo.id,
      },
      select: {
        following: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            username: true,
            followers: {
              where: {
                followerId: loggedInUserId,
              },
              select: {
                followerId: true,
              },
            },
            image: true,
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

    const followingWithIsFollowed = following.map((f) => {
      const isFollowed = f.following.followers.length > 0;
      return {
        ...f.following,
        isFollowed,
      };
    });

    const followingCount = followingWithIsFollowed.length;

    return res.status(200).json({
      followingCount,
      following: followingWithIsFollowed,
    });

    // return res.status(200).json({
    //   followingCount,
    //   following,
    // });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const profilePic = async (req, res) => {
  console.log("profile pic");
  try {
    const files = req.files; // an array of uploaded files
    const filenames = files.map((file) => file.filename);

    await prisma.users.update({
      where: { id: req.userInfo.id },
      data: {
        image: filenames[0],
      },
    });

    res.status(200).json({
      success: true,
      filenames: filenames,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

const sendProfileImg = async (req, res) => {
  try {
    const user = await prisma.users.findUnique({
      where: { id: req.userInfo.id },
      select: { image: true },
    });

    let filePath = `upload/profilePic/${user.image}`;
    if (!fs.existsSync(filePath)) {
      // File not found, return an error response
      filePath = `upload/system/noProfile.jpg`;

      const stream = fs.createReadStream(filePath);
      return stream.pipe(res);
      // return res.status(404).json("image not found");
    }

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
};

// const sendOtherProfileimage = async (req, res) => {
//   const { username } = req.params;
//   console.log(username);
//   try {
//     const user = await prisma.users.findUnique({
//       where: { username },
//       select: { image: true },
//     });
//     // if (!user.image) return res.status(200).json("no image");

//     let filePath = `upload/profilePic/${user.image}`;
//     if (!fs.existsSync(filePath)) {
//       // File not found, return an error response
//       filePath = `upload/system/noProfile.jpg`;

//       const stream = fs.createReadStream(filePath);
//       return stream.pipe(res);
//       // return res.status(404).json("image not found");
//     }

//     const stream = fs.createReadStream(filePath);
//     stream.pipe(res);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json("Internal server error");
//   }
// };

const sendOtherProfileimage = async (req, res) => {
  const { username } = req.params;
  console.log(username);
  try {
    const user = await prisma.users.findUnique({
      where: { username },
      select: { image: true },
    });

    if (!user || !user.image) {
      // User or user.image is null, return a default profile image
      const filePath = `upload/system/noProfile.jpg`;
      const stream = fs.createReadStream(filePath);
      return stream.pipe(res);
    }

    const filePath = `upload/profilePic/${user.image}`;
    if (!fs.existsSync(filePath)) {
      // File not found, return an error response
      const stream = fs.createReadStream(`upload/system/noProfile.jpg`);
      return stream.pipe(res);
    }

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
};

const deleteProfilePic = async (req, res) => {
  try {
    await prisma.users.update({
      where: { id: req.userInfo.id },
      data: {
        image: null,
      },
    });

    return res.status(200).json("delete Profile Picture successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal server error");
  }
};

const searchUser = async (req, res) => {
  try {
    const { search } = req.query;
    console.log(search);

    // Perform the search query using Prisma
    const users = await prisma.users.findMany({
      where: {
        OR: [
          { username: { contains: search } },
          { email: { contains: search } },
          { firstName: { contains: search } },
          { lastName: { contains: search } },
          // Add more search criteria based on your model fields
        ],
      },
      select: {
        id: true,
        username: true,
        email: true,
        firstName: true,
        lastName: true,
        image: true,
        phoneNumber: true,
        address: {
          select: { region: true, city: true },
        },
      },
    });

    if (!users) return res.status(200).json([]);
    return res.status(200).json(users);
    // Return the search results
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getUserProfile,
  updateProfile,
  deleteAccount,
  searchUser,
  // followUser,
  // unfollowUser,
  // getOtherFollowersAndFollowing,
  profilePic,
  sendProfileImg,
  deleteProfilePic,
  getprofile,
  changePassword,
  toggleFollowUser,
  sendOtherProfileimage,
  getOtherFollowers,
  getOtherFollowing,
  getFollowing,
  getFollowers,
};
