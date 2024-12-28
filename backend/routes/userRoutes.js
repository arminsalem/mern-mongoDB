const { Router } = require("express");
const router = Router();
// Require your Mongoose model
const User = require("../models/User");

// GET all users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.find({}); // .find() returns all documents in collection
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// POST a new user
router.post("/", async (req, res, next) => {
  try {
    const email = `armin${Math.floor(Math.random() * 100)}@gmail.com`;
    const name = "armin";
    console.log(email, name);

    // Create new User instance
    const newUser = new User({
      email,
      name,
    });
    // Save to MongoDB
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
