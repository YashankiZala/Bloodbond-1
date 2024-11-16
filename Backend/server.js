require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const donorRoutes = require("./DonorRoutes");
const jwt = require("jsonwebtoken");
const Donor = require("./Donor");

const app = express();
const PORT = process.env.PORT || 5000;

// Check if MONGO_URI is loaded properly
console.log("Mongo URI:", process.env.MONGO_URI); // Ensure this is not undefined

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Routes for donors
app.use("/api/donors", donorRoutes);

// User schema for login and signup
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema, "login");

// Signup Route
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User created!" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(400).json({ error: "Email already exists!" });
  }
});

// Login Route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ error: "Invalid email or password!" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ error: "Invalid email or password!" });
  }

  res.json({ message: "Login successful!" });
});

// Login Route
app.post("/api/form", async (req, res) => {
  const { name, bloodGroup, location, address, mobile } = req.body;

  try {
  const donors = new Donor({ name, bloodGroup, location, address, mobile });
  await donors.save();
    res.status(201).json({ message: "Entry Added!" });
  } catch (error) {
    console.error("Error during entry:", error);
    return res.status(400).json({ error: "Data already exists!" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
