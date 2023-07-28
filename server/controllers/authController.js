import prisma from "../config/dbConfig.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import emailService from "../services/emailService.js";

const sendOtp = async (req, res) => {
  try {
    // Function to generate a 4-digit verification code
    function generateCode() {
      const buffer = crypto.randomBytes(2); // Generate a random buffer
      const code = buffer.readUInt16BE(0) % 10000; // Convert buffer to an integer within the range [0, 9999]
      return code.toString().padStart(4, "0"); // Convert the integer to a string and pad with leading zeros if necessary
    }

    const verificationCode = generateCode(); // Generate the verification code

    // Check if the user already exists
    const userExists = await prisma.users.findFirst({
      where: {
        OR: [{ email: req.body.email }, { username: req.body.username }],
      },
    });

    const otpExists = await prisma.Otp.findFirst({
      where: {
        OR: [{ email: req.body.email }, { username: req.body.username }],
      },
    });

    // If the user already exists, return an error
    if (userExists) {
      return res.status(409).json("User already exists!");
    }

    if (otpExists) {
      return res.status(409).json("User OTP already sent!");
    }

    // Create a new OTP record in the database
    const otpCode = await prisma.Otp.create({
      data: {
        username: req.body.username,
        email: req.body.email,
        // otp: verificationCode,
        otp: "1111",
      },
    });

    // Send the verification email with the OTP code
    await emailService.sendVerificationEmail(
      req.body.email,
      // otpCode.otp,
      `Dear ${req.body.username},your verification code is: ${1111}`
    );

    return res
      .status(200)
      .json("Please check your email for the verification code.");
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
};

const checkOtp = async (req, res) => {
  try {
    console.log(req.body);
    // Check if the user already exists
    const otpExists = await prisma.Otp.findFirst({
      where: {
        AND: { otp: req.body.otp, email: req.body.email },
      },
    });

    // If the user already exists, return an error
    console.log(otpExists);
    if (otpExists) {
      await prisma.Otp.update({
        where: {
          id: otpExists.id,
        },
        data: { isVerified: true },
      });
      return res.status(200).json("Success");
    }
    return res.status(404).json("not found");
  } catch (error) {
    return res.status(500).json("server error");
  }
};

const register = async (req, res) => {
  try {
    // Check if the user already exists
    const userExists = await prisma.users.findFirst({
      where: {
        OR: [{ email: req.body.email }, { username: req.body.username }],
      },
    });

    // If the user already exists, return an error
    if (userExists) {
      return res.status(409).json("User already exists!");
    }
    const otpExists = await prisma.otp.findFirst({
      where: {
        email: req.body.email,
        isVerified: true,
        username: req.body.username,
      },
    });

    if (!otpExists) {
      return res.status(404).json({ error: "verified user not found" });
    }

    // Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // Create a new user in the database
    const user = await prisma.users.create({
      data: {
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        accountType: req.body.accountType,
        email: req.body.email,
        password: hash,
        phoneNumber: req.body.phoneNumber,
        address: {
          create: {
            region: req.body.region,
            city: req.body.city,
          },
        },
      },
    });
    await prisma.otp.update({
      where: { email: req.body.email },
      data: { userid: user.id },
    });

    const { password, id, ...other } = user;

    // return res.status(200).json({
    //   message: "Registration successful.",
    //   user: other,
    // });

    const token = jwt.sign({ id: user.id }, process.env.MY_KEY);

    // Set the token as an HTTP-only cookie and send the user data in the response
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ message: "Registration successful.", user: other });
  } catch (error) {
    // Handle any internal server errors
    return res.status(500).json("Internal server error");
  }
};

const resendVerificationCode = async (req, res) => {
  try {
    // Generate a new verification code
    const verificationCode = crypto.randomBytes(3).toString("hex");

    // Update the user with the new verification code and expiration time
    const updatedUser = await prisma.users.update({
      where: {
        email: req.body.email,
      },
      data: {
        verificationCode: verificationCode,
        verificationCodeExpiresAt: new Date(Date.now() + 120000), // Expiration time: current time + 2 minutes
      },
    });

    // Send the verification email with the new code
    await emailService.sendVerificationEmail(
      updatedUser.email,
      verificationCode,
      updatedUser.userName
    );

    // Schedule the update of the user's verification code and expiration time
    setTimeout(async () => {
      console.log("up2");
      await prisma.users.update({
        where: {
          id: updatedUser.id,
        },
        data: {
          verificationCode: null,
          verificationCodeExpiresAt: null,
        },
      });
    }, 120000); // 2 minutes

    return res.status(200).json({
      message:
        "Verification code resent. Please check your email for the new verification code in 2 minutes.",
      user: updatedUser.userName,
    });
  } catch (error) {
    return res.status(500).json(error.meta.cause);
  }
};

const login = async (req, res) => {
  const { username } = req.body;
  console.log(req.body);

  try {
    // Find the user based on the provided username
    const user = await prisma.users.findFirst({
      where: {
        OR: [{ email: username }, { username: username }],
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
  }
};

// const logout = (req, res) => {
//   console.log(req.body);
//   res
//     .clearCookie("access_token", {
//       sameSite: "none",
//       secure: true,
//     })
//     .status(200)
//     .json("User has been logged out.");
// };

const logout = (req, res) => {
  res.clearCookie("access_token").status(200).json("User has been logged out.");
};

export { register, login, logout, sendOtp, checkOtp };
