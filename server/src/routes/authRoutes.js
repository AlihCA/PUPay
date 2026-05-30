const express = require("express");

const {
  getCurrentUser,
  verifyStudent,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");
const requireRole = require("../middleware/roleMiddleware");

const router = express.Router();

// ========================================
// FUTURE API
// GET /api/auth/me
// Returns the currently logged-in user's verified role
// ========================================
router.get("/me", protect, getCurrentUser);

// ========================================
// FUTURE API
// POST /api/auth/verify-student
// Links a Clerk account to an official student record
// after checking student number + logged-in email.
// ========================================
router.post("/verify-student", protect, verifyStudent);

// ========================================
// TEST API
// GET /api/auth/admin-test
// Checks if admin-only backend route protection works
// ========================================
router.get("/admin-test", protect, requireRole(["admin"]), (req, res) => {
  res.json({
    success: true,
    message: "Admin backend access granted.",
    user: req.user,
  });
});

// ========================================
// TEST API
// GET /api/auth/student-test
// Checks if student-only backend route protection works
// ========================================
router.get("/student-test", protect, requireRole(["student"]), (req, res) => {
  res.json({
    success: true,
    message: "Student backend access granted.",
    user: req.user,
  });
});

module.exports = router;