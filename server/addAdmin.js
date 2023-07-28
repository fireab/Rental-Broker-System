import prisma from "./config/dbConfig.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const addAdmin = async () => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const body = "admin1234";
    const hash = bcrypt.hashSync(body, salt);
    // Create a new admin user in the database
    const admin = await prisma.admin.create({
      data: {
        username: "admin",
        email: "admin@gmail.com",
        password: hash,
        firstName: "Fireab",
        lastName: "Tesfaye",
        image:
          "https://th.bing.com/th/id/OIP.gzkW9K6IKKQVJVCqQB4gmQAAAA?w=185&h=123&c=7&r=0&o=5&pid=1.7",
        phoneNumber: "0922668923",
      },
    });

    console.log("Admin user created:", admin);
  } catch (error) {
    console.error("Error creating admin user:", error);
  } finally {
    await prisma.$disconnect();
  }
};

// Call the function to create the admin user
addAdmin();
