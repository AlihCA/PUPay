const express = require("express");
const cors = require("cors");

const { clerkMiddleware } = require("./config/clerk");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// ========================================
// PUBLIC TEST ROUTE
// This does NOT require Clerk login
// ========================================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "PUPay API is running",
  });
});

// ========================================
// CLERK MIDDLEWARE
// Clerk starts here, after the public test route
// ========================================
app.use(clerkMiddleware());

// ========================================
// API ROUTES
// ========================================
app.use("/api/auth", authRoutes);

module.exports = app;