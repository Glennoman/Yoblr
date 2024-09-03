const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  getCurrentUserProfile,
} = require("../controllers/authController");

// Register new user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

router.get("/me", authMiddleware, getCurrentUserProfile);

module.exports = router;
