const db = require("../config/db");

// ========================================
// GET CURRENT AUTHENTICATED USER
// GET /api/auth/me
// ========================================
exports.getCurrentUser = async (req, res) => {
  try {
    const { id, email, clerkRole } = req.user;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "No email found from Clerk account.",
      });
    }

    // ========================================
    // ADMIN CHECK
    // Admin role comes from Clerk public metadata
    // ========================================
    if (clerkRole === "admin") {
      return res.json({
        success: true,
        user: {
          id,
          email,
          role: "admin",
        },
      });
    }

    // ========================================
    // LINKED STUDENT CHECK
    // If this Clerk account is already linked,
    // it owns this student dashboard.
    // ========================================
    const [linkedStudents] = await db.query(
      `
      SELECT
        id,
        student_number,
        full_name,
        school_email,
        personal_email,
        course,
        year_level,
        section,
        status,
        clerk_user_id
      FROM students
      WHERE clerk_user_id = ?
      LIMIT 1
      `,
      [id]
    );

    const linkedStudent = linkedStudents[0];

    if (linkedStudent && linkedStudent.status === "active") {
      return res.json({
        success: true,
        user: {
          id,
          email,
          role: "student",
          student: linkedStudent,
        },
      });
    }

    // ========================================
    // UNVERIFIED STUDENT CHECK
    // Email exists in official records,
    // but Clerk account is not linked yet.
    // ========================================
    const [matchingStudents] = await db.query(
      `
      SELECT
        id,
        student_number,
        full_name,
        school_email,
        personal_email,
        course,
        year_level,
        section,
        status,
        clerk_user_id
      FROM students
      WHERE school_email = ?
         OR personal_email = ?
      LIMIT 1
      `,
      [email, email]
    );

    const matchingStudent = matchingStudents[0];

    if (matchingStudent && matchingStudent.status === "active") {
      return res.json({
        success: true,
        user: {
          id,
          email,
          role: "unverified_student",
          student: {
            id: matchingStudent.id,
            full_name: matchingStudent.full_name,
            course: matchingStudent.course,
            year_level: matchingStudent.year_level,
            section: matchingStudent.section,
          },
        },
        message: "Student email found. Please verify using your student number.",
      });
    }

    // ========================================
    // PENDING CHECK
    // Logged in with Clerk but not found
    // in official student records.
    // ========================================
    return res.json({
      success: true,
      user: {
        id,
        email,
        role: "pending",
      },
      message: "User is authenticated but not found in official student records.",
    });
  } catch (error) {
    console.error("GET CURRENT USER ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to get current user.",
      error: error.message,
    });
  }
};

// ========================================
// VERIFY STUDENT ACCOUNT
// POST /api/auth/verify-student
// ========================================
exports.verifyStudent = async (req, res) => {
  try {
    const { id, email } = req.user;
    const { student_number } = req.body;

    if (!student_number) {
      return res.status(400).json({
        success: false,
        message: "Student number is required.",
      });
    }

    const [students] = await db.query(
      `
      SELECT
        id,
        student_number,
        full_name,
        school_email,
        personal_email,
        course,
        year_level,
        section,
        status,
        clerk_user_id
      FROM students
      WHERE student_number = ?
      LIMIT 1
      `,
      [student_number]
    );

    const student = students[0];

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student number was not found in official records.",
      });
    }

    if (student.status !== "active") {
      return res.status(403).json({
        success: false,
        message: "This student account is inactive. Please contact an admin.",
      });
    }

    const emailMatches =
      student.school_email === email || student.personal_email === email;

    if (!emailMatches) {
      return res.status(403).json({
        success: false,
        message:
          "The logged-in email does not match the school or personal email on this student record.",
      });
    }

    if (student.clerk_user_id && student.clerk_user_id !== id) {
      return res.status(409).json({
        success: false,
        message:
          "This student record is already linked to another account. Please contact an admin.",
      });
    }

    await db.query(
      `
      UPDATE students
      SET clerk_user_id = ?
      WHERE id = ?
      `,
      [id, student.id]
    );

    const [updatedStudents] = await db.query(
      `
      SELECT
        id,
        student_number,
        full_name,
        school_email,
        personal_email,
        course,
        year_level,
        section,
        status,
        clerk_user_id
      FROM students
      WHERE id = ?
      LIMIT 1
      `,
      [student.id]
    );

    return res.json({
      success: true,
      message: "Student account verified successfully.",
      user: {
        id,
        email,
        role: "student",
        student: updatedStudents[0],
      },
    });
  } catch (error) {
    console.error("VERIFY STUDENT ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to verify student account.",
      error: error.message,
    });
  }
};