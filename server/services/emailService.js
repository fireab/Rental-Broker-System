// emailService.js

const nodemailer = require("nodemailer");

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  // Configure your email provider here
  service: "gmail",
  auth: {
    user: "fire123te@gmail.com",
    pass: "vbibzubjxsrzbaal",
  },
});

module.exports = {
  sendVerificationEmail: async (toEmail, verificationCode, name) => {
    try {
      // Define the email content
      const mailOptions = {
        from: "fire123te@gmail.com",
        to: toEmail,
        subject: "Email Verification",
        text: `dear ${name} Your verification code is: ${verificationCode}`,
      };

      // Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log(`Email sent to ${toEmail}: ${info.messageId}`);
    } catch (error) {
      console.error("Error sending verification email:", error);
    }
  },
};
