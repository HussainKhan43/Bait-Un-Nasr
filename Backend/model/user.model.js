import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Please enter a valid email"],
    },
    phone: {
      type: String, 
      required: true,
      minlength: [10, "Phone number must be at least 10 characters long"],
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

export const User = mongoose.model("User", userSchema);
