const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

// ========================================
// FUTURE API
// GET /api/auth/me
// Returns the currently logged-in user's verified role
// ========================================
export const getCurrentUser = async (token) => {
  const response = await fetch(`${API_URL}/api/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch current user");
  }

  return data;
};

// ========================================
// FUTURE API
// POST /api/auth/verify-student
// Verifies a student by student number and links Clerk user ID
// ========================================
export const verifyStudentAccount = async (token, studentNumber) => {
  const response = await fetch(`${API_URL}/api/auth/verify-student`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      student_number: studentNumber,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to verify student account");
  }

  return data;
};