import { SignUp } from "@clerk/clerk-react";

function Register() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#f8fafc",
      }}
    >
      <SignUp
        path="/register"
        routing="path"
        signInUrl="/login"
        fallbackRedirectUrl="/auth/redirect"
        forceRedirectUrl="/auth/redirect"
      />
    </main>
  );
}

export default Register;