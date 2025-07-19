import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";

// Directly placing your MongoDB URI here (Not recommended for production)
const MONGO_URI = "mongodb+srv://workpurpose908:mr0m3VdkQkHMoXnR@cluster0.om9xa8k.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3000;

import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS settings for both local and deployed frontend
const corsOptions = {
  origin: ["http://localhost:5173", "https://your-frontend-url.onrender.com"], // Replace with your frontend URL
  credentials: true,
};
app.use(cors(corsOptions));

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};

// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// Health check or root route
app.get("/", (req, res) => {
  res.send("Job Portal Backend API is running");
});

// Start server
app.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Server running at port ${PORT}`);
});
