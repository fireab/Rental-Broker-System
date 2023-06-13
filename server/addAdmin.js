const prisma = require("./config/dbConfig.js");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const addAdmin = async () => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const body = "1234";
    const hash = bcrypt.hashSync(body, salt);
    // Create a new admin user in the database
    const admin = await prisma.admin.create({
      data: {
        username: "admin",
        email: "admin@gmail.com",
        password: hash,
        firstName: "abebe",
        lastName: "lema",
        image: "asdfghjk",
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
