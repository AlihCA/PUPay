import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.code}>403</h1>
        <h2 style={styles.title}>Unauthorized Access</h2>
        <p style={styles.text}>
          You do not have permission to access this page.
        </p>

        <Link to="/" style={styles.button}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f4f6f8",
    padding: "24px",
  },
  card: {
    textAlign: "center",
    background: "#ffffff",
    padding: "40px",
    borderRadius: "18px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
  },
  code: {
    fontSize: "64px",
    margin: 0,
    color: "#dc2626",
  },
  title: {
    color: "#111827",
  },
  text: {
    color: "#6b7280",
    marginBottom: "24px",
  },
  button: {
    display: "inline-block",
    background: "#111827",
    color: "#ffffff",
    textDecoration: "none",
    padding: "12px 20px",
    borderRadius: "10px",
  },
};