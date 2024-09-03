const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json({ extended: false }));

app.use("/api/auth", require("./routes/auth"));
// More routes will go here...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
