const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const { GridFSBucket } = require("mongodb");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");

const app = express(); // Fixed typo here
app.use(express.json()); // Enable JSON parsing
app.use(cors()); // Enable CORS

// **MongoDB Connection**
const mongoURI = "mongodb://127.0.0.1:27017/login";
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const conn = mongoose.connection;
let bucket;
conn.once("open", () => {
  bucket = new GridFSBucket(conn.db, { bucketName: "uploads" });
  console.log("✅ GridFS initialized");
});

// **GridFS Storage for PDF Upload**
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => ({
    bucketName: "uploads",
    filename: file.originalname,
  }),
});
const upload = multer({ storage });

// **Upload PDF Route**
app.post("/upload", upload.single("file"), (req, res) => {
  console.log("📂 File uploaded:", req.file);
  res.json({ file: req.file });
});

// **Fetch PDF Route**
app.get("/pdf/:filename", async (req, res) => {
  try {
    const file = await conn.db.collection("uploads.files").findOne({ filename: req.params.filename });
    if (!file) return res.status(404).json({ message: "❌ File not found" });

    const readStream = bucket.openDownloadStreamByName(req.params.filename);
    res.set("Content-Type", "application/pdf");
    readStream.pipe(res);
  } catch (error) {
    console.error("❌ Fetch PDF Error:", error);
    res.status(500).json({ message: error.message });
  }
});

// **User Login Route**
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(`🔍 Login Attempt - Email: ${email}`);

  try {
    const user = await EmployeeModel.findOne({ email });
    if (!user) {
      console.log("❌ No record found");
      return res.status(404).json("No record exists");
    }

    if (user.password !== password) {
      console.log("❌ Incorrect password");
      return res.status(401).json("Incorrect password");
    }

    console.log("✅ Login successful");
    res.json("success");
  } catch (err) {
    console.error("❌ Login Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// **User Register Route**
app.post("/register", async (req, res) => {
  console.log("👤 Registering User:", req.body);

  try {
    const employee = await EmployeeModel.create(req.body);
    console.log("✅ User registered:", employee);
    res.status(201).json(employee);
  } catch (err) {
    console.error("❌ Registration Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// **Start Server**
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
