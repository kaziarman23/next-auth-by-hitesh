import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Please provide a user name"],
    unique: true,
  },
  email: {
    type: String,
    require: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please provide a password"],
  },
  isVerified: {
    type: Boolean,
    default: true,
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Data,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;