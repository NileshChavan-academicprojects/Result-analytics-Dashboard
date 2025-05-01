const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // or 'bcrypt' if using the native package

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  password: { type: String, required: true, minlength: 6 },
});

EmployeeSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Skip if the password is not modified
  try {
    const salt = await bcrypt.genSalt(10); // Generate salt
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
    next();
  } catch (err) {
    next(err); // Handle any error during hashing
  }
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema);
module.exports = EmployeeModel;
