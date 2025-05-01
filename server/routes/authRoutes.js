const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const bcrypt = require("bcrypt");
const EmployeeModel = require("../models/Employee");

const router = express.Router();
const client = new OAuth2Client("YOUR_GOOGLE_CLIENT_ID");

// **Google Login Route**
router.post("/google-login", async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "YOUR_GOOGLE_CLIENT_ID",
    });

    const payload = ticket.getPayload();
    console.log("User Verified:", payload);

    res.json({ message: "Google login successful", user: payload });
  } catch (error) {
    res.status(400).json({ error: "Invalid Token" });
  }
});

// **User Register Route with Password Hashing**
router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const employee = await EmployeeModel.create({ ...req.body, password: hashedPassword });
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// **User Login Route with Password Verification**
router.post("/login", async (req, res) => {
  try {
    const user = await EmployeeModel.findOne({ email: req.body.email });
    if (!user) return res.json("No record exists");

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    res.json(isMatch ? "success" : "Incorrect password");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
