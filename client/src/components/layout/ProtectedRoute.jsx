import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

import { getCurrentUser } from "../../services/authService";

function ProtectedRoute({ children, allowedRoles = [] }) {
  const { isLoaded, isSignedIn, getToken } = useAuth();

  const [authState, setAuthState] = useState({
    loading: true,
    role: null,
    error: null,
  });

  useEffect(() => {
    const checkAccess = async () => {
      try {
        if (!isLoaded) return;

        if (!isSignedIn) {
          setAuthState({
            loading: false,
            role: null,
            error: "not_signed_in",
          });
          return;
        }

        const token = await getToken();

        if (!token) {
          setAuthState({
            loading: false,
            role: null,
            error: "no_token",
          });
          return;
        }

        const result = await getCurrentUser(token);

        const role = result?.user?.role || result?.user?.clerkRole || "pending";

        setAuthState({
          loading: false,
          role,
          error: null,
        });
      } catch (error) {
        console.error("PROTECTED ROUTE ERROR:", error);

        setAuthState({
          loading: false,
          role: null,
          error: "auth_failed",
        });
      }
    };

    checkAccess();
  }, [isLoaded, isSignedIn, getToken]);

  if (!isLoaded || authState.loading) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#f8fafc",
          color: "#111827",
        }}
      >
        Checking access...
      </main>
    );
  }

  if (!isSignedIn || authState.error === "not_signed_in") {
    return <Navigate to="/login" replace />;
  }

  if (
    allowedRoles.length > 0 &&
    !allowedRoles.includes(authState.role)
  ) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

export default ProtectedRoute;