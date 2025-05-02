const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const favoritesRoutes = require("./routes/favoritesRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin:
      process.env.FRONTEND_URL ||
      "http://localhost:5173https://countries-app-frontend.vercel.app",
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/favorites", favoritesRoutes);

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Backend is running!" });
});

// Export for Vercel
module.exports = app;
