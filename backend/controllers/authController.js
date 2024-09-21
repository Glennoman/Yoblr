const bcrypt = require("bcryptjs");
const supabase = require("../config/supabaseClient");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const FormModel = require("../models/FormModel");

exports.registerUser = async (req, res) => {
  console.log("Register route hit", req.body);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please provide all required fields." });
  }
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    user = new User({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err);
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getCurrentUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.submitForm = async (req, res) => {
  try {
    console.log("Form submission started");
    console.log("Request body:", req.body);
    console.log("Request file:", req.file);

    const { regform, regform2, selectField, checkbox1, checkbox2, checkbox3 } =
      req.body;
    let fileUrl = null;

    // Uploading file to Supabase if file is uploaded
    if (req.file) {
      console.log("File detected, starting Supabase upload");
      const file = req.file;
      const fileExt = file.originalname.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;

      try {
        const { data, error } = await supabase.storage
          .from("uploads")
          .upload(`files/${fileName}`, file.buffer, {
            contentType: file.mimetype,
          });

        if (error) {
          console.error("Supabase upload error:", error);
          return res
            .status(403)
            .json({ success: false, message: error.message, error: error });
        } else {
          console.log("File uploaded to Supabase successfully", data);
          fileUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/uploads/${data.path}`;
        }
      } catch (uploadError) {
        console.error("Error during Supabase upload:", uploadError);
        return res.status(uploadError.statusCode || 500).json({
          success: false,
          message: uploadError.message,
          error: uploadError,
        });
      }
    }

    console.log("Creating new FormModel");
    const form = new FormModel({
      regform,
      regform2,
      selectField,
      checkbox1,
      checkbox2,
      checkbox3,
      fileUrl,
    });

    console.log("Saving form to database");
    await form.save();
    console.log("Form saved successfully");

    res
      .status(200)
      .json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error in submitForm:", error);
    res.status(500).json({
      success: false,
      message: "Error submitting form",
      error: error.message,
      stack: error.stack,
    });
  }
};
