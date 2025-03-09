import { User } from "../model/user.model.js";

export const contact = async (req, res) => {
  try {
    const { email, name, phone, message } = req.body;

    if (!email || !name || !phone || !message) {
      return res.status(400).json({ message: "Please fill required fields" });
    }

    const newUser = new User({ email, name, phone, message }); // Initialize new user

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        message: newUser.message,
        createdOn: newUser.createdAt.toLocaleString(), // Formats date properly
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server error" });
  }
};
