import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://workpurpose908:mr0m3VdkQkHMoXnR@cluster0.om9xa8k.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
