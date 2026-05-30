import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

import "../../styles/pages/LandingPage.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="landing-page">
      <nav className="landing-nav">
        <div className="landing-brand">
          <div className="landing-logo">₱</div>
          <span>PUPay</span>
        </div>

        <div className="landing-actions">
          <SignedOut>
            <Button variant="secondary" size="md" onClick={() => navigate("/login")}>
              Login
            </Button>

            <Button variant="primary" size="md" onClick={() => navigate("/register")}>
              Register
            </Button>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/login" />
          </SignedIn>
        </div>
      </nav>

      <section className="landing-hero">
        <div className="landing-copy">
          <p className="landing-badge">
            Student Payment Management System
          </p>

          <h1>
            Fast, organized, and secure student payment tracking.
          </h1>

          <p>
            Manage collections, payment statuses, cash transactions,
            and PayMongo payments in one modern platform.
          </p>

          <div className="landing-buttons">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate("/login")}
            >
              Get Started
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate("/register")}
            >
              Create Account
            </Button>
          </div>
        </div>

        <div className="landing-card">
          <div className="landing-card-top">
            <span>Total Collections</span>
            <strong>₱24,850</strong>
          </div>

          <div className="landing-progress-label">
            <span>Paid Status</span>
            <b>64%</b>
          </div>

          <div className="landing-progress">
            <div />
          </div>

          <div className="landing-stats">
            <div>
              <h3>128</h3>
              <p>Students</p>
            </div>

            <div>
              <h3>36</h3>
              <p>Pending</p>
            </div>

            <div>
              <h3>12</h3>
              <p>Overdue</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}