import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

import { getCurrentUser } from "../../services/authService";

function AuthRedirect() {
  const navigate = useNavigate();
  const { isLoaded, isSignedIn, getToken } = useAuth();

  const [message, setMessage] = useState("Checking your account...");

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        if (!isLoaded) return;

        if (!isSignedIn) {
          navigate("/login", { replace: true });
          return;
        }

        const token = await getToken();

        if (!token) {
          setMessage("No authentication token found.");
          return;
        }

        const result = await getCurrentUser(token);

        console.log("AUTH ME RESULT:", result);
        console.log("AUTH USER:", result.user);
        console.log("AUTH ROLE:", result.user?.role || result.user?.clerkRole);

        const role = result?.user?.role || result?.user?.clerkRole;

        if (role === "admin") {
          navigate("/admin/dashboard", { replace: true });
          return;
        }

        if (role === "student") {
          navigate("/student/dashboard", { replace: true });
          return;
        }

        if (role === "unverified_student") {
          navigate("/student/verify", { replace: true });
          return;
        }

        navigate("/unauthorized", { replace: true });
      } catch (error) {
        console.error("AUTH REDIRECT ERROR:", error);
        setMessage("Unable to verify your account. Please try again.");
      }
    };

    checkUserRole();
  }, [isLoaded, isSignedIn, getToken, navigate]);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#f8fafc",
        color: "#111827",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          padding: "28px",
          borderRadius: "18px",
          background: "#ffffff",
          boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "8px" }}>PUPay</h2>
        <p>{message}</p>
      </div>
    </main>
  );
}

export default AuthRedirect;