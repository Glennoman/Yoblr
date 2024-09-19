const express = require("express");
const router = express.Router();
const multer = require("multer");
const authMiddleware = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  getCurrentUserProfile,
  submitForm,
} = require("../controllers/authController");

// Register new user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

router.get("/me", authMiddleware, getCurrentUserProfile);

// multer storage and file handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

router.post("/submit-form", submitForm);

module.exports = router;
