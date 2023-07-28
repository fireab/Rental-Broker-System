import nodemailer from "nodemailer";

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  // Configure your email provider here
  service: "gmail",
  auth: {
    user: "fire123te@gmail.com",
    pass: "vbibzubjxsrzbaal",
  },
});

// Export the sendVerificationEmail function
const sendVerificationEmail = async (toEmail, verificationCode) => {
  try {
    // Define the email content
    const mailOptions = {
      from: "fire123te@gmail.com",
      to: toEmail,
      subject: "Email Verification",
      // text: `Dear ${name}, your verification code is: ${verificationCode}`,
      text: verificationCode,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${toEmail}: ${info.messageId}`);
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};

export default { sendVerificationEmail };
