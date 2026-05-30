import { useEffect, useState } from "react";

import PaymentStatusCard from "../../components/payments/PaymentStatusCard";
import PaymentTable from "../../components/payments/PaymentTable";
import AnnouncementCard from "../../components/announcements/AnnouncementCard";

import { dummyPayments } from "../../data/dummyPayments";
import { dummyAnnouncements } from "../../data/dummyAnnouncements";

import "../../styles/pages/student/Dashboard.css";

// FUTURE API:
// GET /api/payments/student/:studentId
// GET /api/announcements

function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  const paidCount = dummyPayments.filter(
    (payment) => payment.status === "Paid"
  ).length;

  const pendingCount = dummyPayments.filter(
    (payment) => payment.status === "Pending"
  ).length;

  const overdueCount = dummyPayments.filter(
    (payment) => payment.status === "Overdue"
  ).length;

  if (loading) {
    return (
      <main className="dashboard">
        <h2>Loading dashboard...</h2>
      </main>
    );
  }

  return (
    <main className="dashboard">
      <section className="dashboard-header">
        <div>
          <h1>Student Dashboard</h1>
          <p>Track your payments and announcements.</p>
        </div>
      </section>

      <section className="dashboard-cards">
        <PaymentStatusCard
          title="Paid"
          value={paidCount}
          subtitle="Completed payments"
        />

        <PaymentStatusCard
          title="Pending"
          value={pendingCount}
          subtitle="Payments awaiting action"
        />

        <PaymentStatusCard
          title="Overdue"
          value={overdueCount}
          subtitle="Past due payments"
        />
      </section>

      <section className="dashboard-section">
        <div className="dashboard-section-header">
          <h2>Recent Payments</h2>
          <p>Your latest payment records</p>
        </div>

        <PaymentTable payments={dummyPayments} />
      </section>

      <section className="dashboard-section">
        <div className="dashboard-section-header">
          <h2>Announcements</h2>
          <p>Recent reminders and notices</p>
        </div>

        <div className="dashboard-announcements">
          {dummyAnnouncements.map((announcement) => (
            <AnnouncementCard
              key={announcement.id}
              announcement={announcement}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;