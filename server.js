import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import moment from "moment/moment.js";

dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1); // Exit process on failure
  }
};
connectDB();

// Routes
app.use("/api/users", userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `[${moment().format(
      "YYYY-MM-DD HH:mm:ss"
    )}] 🚀 Server running on port ${PORT}`
  )
);

// Log request timestamps
app.use((req, res, next) => {
  const time = moment().format("YYYY-MM-DD HH:mm:ss"); // Format: 2025-02-26 14:30:00
  console.log(`[${time}] ${req.method} request to ${req.url}`);
  next();
});

// Home route
app.get("/", (req, res) => {
  res.send(
    `Server is running... Time: ${moment().format("YYYY-MM-DD HH:mm:ss")}`
  );
});
