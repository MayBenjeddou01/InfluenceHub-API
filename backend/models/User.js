import mongoose from "mongoose";
import pkg from 'uuid';
import bcrypt from 'bcryptjs';
const { v4: uuidv4 } = pkg;

const userSchema = new mongoose.Schema(
  {
    ID: { type: String, default: uuidv4 },
    Username: { type: String, required: true, unique: true },
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Token: { type: String },
    Type: {
      type: String,
      enum: ["user", "admin", "expert", "influencer"],
      default: "user",
    },
    ProfilePic: { type: String },
    Bio: { type: String },
    resetPasswordToken: { type: String },
    resetPasswordExpire: { type: Date },
    googleId: { type: String, sparse: true, unique: true }
  },
  { timestamps: true }
);

userSchema.methods.comparePassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.Password);
};

export const User = mongoose.model("User", userSchema);
