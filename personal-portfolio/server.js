require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Validate environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("Missing required environment variables: EMAIL_USER or EMAIL_PASS");
  process.exit(1); // Exit the application
}

// Configure Nodemailer Transporter
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify Nodemailer Configuration
contactEmail.verify((error) => {
  if (error) {
    console.error("Error with Nodemailer configuration:", error.message);
  } else {
    console.log("Nodemailer is configured and ready to send emails.");
  }
});

// Helper Function to Send Email
const sendEmail = async (mailOptions) => {
  try {
    await contactEmail.sendMail(mailOptions);
    return { status: "Success", message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error.message);
    return { status: "Error", message: "Failed to send message." };
  }
};

// API Route for Contact Form
app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ status: "Error", message: "All fields are required." });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact Form Submission from ${firstName} ${lastName}`,
    html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  const emailResponse = await sendEmail(mailOptions);
  if (emailResponse.status === "Success") {
    res.status(200).json(emailResponse);
  } else {
    res.status(500).json(emailResponse);
  }
});

// Health Check Route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "Success", message: "Server is running!" });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
