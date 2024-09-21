const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  getCurrentUserProfile,
  submitForm,
} = require("../controllers/authController");
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

// Register new user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

router.get("/me", authMiddleware, getCurrentUserProfile);

router.post("/submit-form", upload.single("file"), submitForm);

module.exports = router;
