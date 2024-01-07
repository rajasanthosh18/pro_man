const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");

const app = express();
const port = "3000";
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");


mongoose
  .connect(
    "mongodb+srv://rajasanthosh:rajasanthosh@cluster0.sngjb57.mongodb.net/"
  )
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log("error in connecting -", error);
  });

app.listen(port, () => {
  console.log("server running in port");
});

const user = require("./models/user");
const todo = require("./models/todo");

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await user.findOne({ email });
    if (existingUser) {
      console.log("Already register with this mail");
    }
    const newUser = new user({
      name,
      email,
      password,
    });
    await newUser.save();

    res.status(202).json({ message: "registered successfully" });
  } catch (e) {
    res.status(500).json({ message: "registration failed" });
  }
});

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");

  return secretKey;
};

const secretKey = generateSecretKey();

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid Email" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalide password" });
    }

    const token = jwt.sign({ userId: user._id }, secretKey);

    res.status(200).json({ token });
  } catch (error) {
    console.log("Login failed", error);
    res.status(500).json({ message: "Login failed" });
  }
});
