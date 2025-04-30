import mongoose from "mongoose";

const MONGODB_URI = process.env.DATABASE_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the DATABASE_URI environment variable in .env");
}

export async function connectDB() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI as string);
    }
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
}
