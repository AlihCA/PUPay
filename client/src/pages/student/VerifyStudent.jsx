import { useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/ui/Button";
import { verifyStudentAccount } from "../../services/authService";

function VerifyStudent() {
  const navigate = useNavigate();
  const { getToken } = useAuth();

  const [studentNumber, setStudentNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVerify = async (event) => {
    event.preventDefault();

    if (!studentNumber.trim()) {
      setMessage("Please enter your student number.");
      return;
    }

    try {
      setIsSubmitting(true);
      setMessage("");

      const token = await getToken();

      if (!token) {
        setMessage("Authentication token not found. Please log in again.");
        return;
      }

      const result = await verifyStudentAccount(token, studentNumber.trim());

      console.log("VERIFY STUDENT RESULT:", result);

      if (result?.user?.role === "student") {
        navigate("/student/dashboard", { replace: true });
        return;
      }

      setMessage("Verification completed, but student role was not returned.");
    } catch (error) {
      console.error("VERIFY STUDENT ERROR:", error);
      setMessage(error.message || "Unable to verify student account.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#f8fafc",
        padding: "24px",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "460px",
          background: "#ffffff",
          borderRadius: "20px",
          padding: "32px",
          boxShadow: "0 14px 40px rgba(15, 23, 42, 0.1)",
        }}
      >
        <h1
          style={{
            marginBottom: "8px",
            color: "#111827",
            fontSize: "28px",
          }}
        >
          Student Verification
        </h1>

        <p
          style={{
            marginBottom: "24px",
            color: "#6b7280",
            lineHeight: "1.6",
          }}
        >
          Enter your student number to link your Clerk account to your official
          student record.
        </p>

        <form onSubmit={handleVerify}>
          <label
            htmlFor="studentNumber"
            style={{
              display: "block",
              marginBottom: "8px",
              color: "#374151",
              fontWeight: "600",
            }}
          >
            Student Number
          </label>

          <input
            id="studentNumber"
            type="text"
            value={studentNumber}
            onChange={(event) => setStudentNumber(event.target.value)}
            placeholder="Example: 2024-00001"
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: "12px",
              border: "1px solid #d1d5db",
              marginBottom: "16px",
              fontSize: "15px",
            }}
          />

          {message && (
            <p
              style={{
                marginBottom: "16px",
                color: message.includes("success") ? "#047857" : "#dc2626",
                fontSize: "14px",
              }}
            >
              {message}
            </p>
          )}

          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={isSubmitting}
            style={{ width: "100%" }}
          >
            {isSubmitting ? "Verifying..." : "Verify Account"}
          </Button>
        </form>
      </section>
    </main>
  );
}

export default VerifyStudent;