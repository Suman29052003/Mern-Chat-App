const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const generateToken = require('../config/generateToken');

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const pic = req.file ? req.file.path : null;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please provide all fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    pic
  });

  if (user) {
    res.status(201).json({
      success: true,
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("Failed to create a user");
  }
});

module.exports = registerUser;
