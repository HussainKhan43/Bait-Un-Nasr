import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; 
import userRoute from "./routes/user.route.js";

dotenv.config();

const app = express();

const MONGODB_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT || 4002;

// Middleware
app.use(cors());
app.use(express.json());

// Connecting to DB
mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Defining routes
app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
