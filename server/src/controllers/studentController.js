// ========================================
// FUTURE API
// GET /api/students
// GET /api/students/:id
// ========================================

// TODO:
// Replace in-memory storage with MySQL queries

import { successResponse, errorResponse } from "../utils/responseHelper.js";

let students = [];
let currentStudentId = 1;

// GET all students
export const getStudents = (req, res) => {
  return successResponse(
    res,
    "Students fetched successfully",
    students
  );
};

// GET student by ID
export const getStudentById = (req, res) => {
  const { id } = req.params;

  const student = students.find((s) => s.id == id);

  if (!student) {
    return errorResponse(res, "Student not found", 404);
  }

  return successResponse(
    res,
    "Student fetched successfully",
    student
  );
};

// CREATE student
export const createStudent = (req, res) => {
  const { name, course } = req.body;

  if (!name?.trim()) {
    return errorResponse(res, "Name is required", 400);
  }

  if (!course?.trim()) {
    return errorResponse(res, "Course is required", 400);
  }

  const newStudent = {
    id: currentStudentId++,
    name,
    course,
    createdAt: new Date(),
  };

  students.push(newStudent);

  return successResponse(
    res,
    "Student created successfully",
    newStudent,
    201
  );
};

// UPDATE student
export const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, course } = req.body;

  const student = students.find((s) => s.id == id);

  if (!student) {
    return errorResponse(res, "Student not found", 404);
  }

  if (!name && !course) {
    return errorResponse(res, "Nothing to update", 400);
  }

  if (name !== undefined && !name.trim()) {
    return errorResponse(res, "Name cannot be empty", 400);
  }

  if (course !== undefined && !course.trim()) {
    return errorResponse(res, "Course cannot be empty", 400);
  }

  student.name = name ?? student.name;
  student.course = course ?? student.course;

  return successResponse(
    res,
    "Student updated successfully",
    student
  );
};

// DELETE student
export const deleteStudent = (req, res) => {
  const { id } = req.params;

  const index = students.findIndex((s) => s.id == id);

  if (index === -1) {
    return errorResponse(res, "Student not found", 404);
  }

  const deleted = students.splice(index, 1);

  return successResponse(
    res,
    "Student deleted successfully",
    deleted[0]
  );
};