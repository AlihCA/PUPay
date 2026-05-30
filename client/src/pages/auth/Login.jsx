import { SignIn } from "@clerk/clerk-react";

function Login() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#f8fafc",
      }}
    >
      <SignIn
        path="/login"
        routing="path"
        signUpUrl="/register"
        fallbackRedirectUrl="/auth/redirect"
        forceRedirectUrl="/auth/redirect"
      />
    </main>
  );
}

export default Login;