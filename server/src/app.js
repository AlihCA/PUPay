

import express from "express";
import studentRoutes from "./routes/studentRoutes.js";
import announcementRoutes from "./routes/announcementRoutes.js";

const app = express();

app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/announcements", announcementRoutes);

// 🟢 ROOT ROUTE (ADD THIS)
app.get("/", (req, res) => {
  res.send("API is running");
});

export default app;