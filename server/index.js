const express = require("express");
const cors = require("cors");

const collectionRoutes = require("./src/routes/collectionRoutes");
const paymentRoutes = require("./src/routes/paymentRoutes");


const app = express();



app.use(cors());
app.use(express.json());
require("dotenv").config();
// ========================================
// HEALTH CHECKER
// ========================================
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "PUPay backend is running successfully",
    uptime: process.uptime(),
    timestamp: new Date(),
  });
});
app.use("/api/collections", collectionRoutes);
app.use("/api/payments", paymentRoutes);

app.get("/", (req, res) => {
  res.send("PUPay backend is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});