import express from "express";
import {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

const router = express.Router();

// ========================================
// FUTURE API
// GET /api/students
// GET /api/students/:id
// ========================================

// READ
router.get("/", getStudents);
router.get("/:id", getStudentById);

// CREATE
router.post("/", createStudent);

// UPDATE
router.put("/:id", updateStudent);

// DELETE
router.delete("/:id", deleteStudent);

export default router;