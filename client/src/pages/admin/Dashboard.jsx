import SummaryCard from "../../components/ui/SummaryCard";
import CollectionCard from "../../components/collections/CollectionCard";
import "../../styles/pages/admin/Dashboard.css";

// ========================================
// FUTURE API
// GET /api/collections
// ========================================
const collections = [
  {
    id: 1,
    title: "Class Fund",
    description: "Monthly class contribution for student activities.",
    amount: 150,
    dueDate: "2026-06-15",
    status: "Active",

    collected: 4200,
    target: 6000,

    paidStudents: 28,
    pendingPayments: 8,
    overduePayments: 3,

    totalStudents: 39,
  },

  {
    id: 2,
    title: "Graduation Fee",
    description: "Collection for graduation-related expenses.",
    amount: 500,
    dueDate: "2026-07-01",
    status: "Upcoming",

    collected: 2500,
    target: 15000,

    paidStudents: 5,
    pendingPayments: 20,
    overduePayments: 0,

    totalStudents: 25,
  },

  {
    id: 3,
    title: "Organization Shirt",
    description: "Payment for official organization shirt.",
    amount: 350,
    dueDate: "2026-05-30",
    status: "Active",

    collected: 8750,
    target: 10500,

    paidStudents: 25,
    pendingPayments: 3,
    overduePayments: 2,

    totalStudents: 30,
  },
];

function Dashboard() {
  const totalCollections = collections.length;

  const activeCollections = collections.filter(
    (collection) => collection.status === "Active"
  ).length;

  const totalCollected = collections.reduce(
    (sum, collection) => sum + collection.collected,
    0
  );

  const totalTarget = collections.reduce(
    (sum, collection) => sum + collection.target,
    0
  );

  const collectionProgress = Math.round(
    (totalCollected / totalTarget) * 100
  );

  const totalPendingPayments = collections.reduce(
    (sum, collection) => sum + collection.pendingPayments,
    0
  );

  const totalOverduePayments = collections.reduce(
    (sum, collection) => sum + collection.overduePayments,
    0
  );

  const totalPaidStudents = collections.reduce(
    (sum, collection) => sum + collection.paidStudents,
    0
  );

  const totalStudents = collections.reduce(
    (sum, collection) => sum + collection.totalStudents,
    0
  );

  const paymentCompletionRate = Math.round(
    (totalPaidStudents / totalStudents) * 100
  );

  return (
    <section className="admin-dashboard-page">
      <div className="admin-dashboard-header">
        <h2>Admin Dashboard</h2>
        <p>Monitor collection progress and payment activity.</p>
      </div>

      <div className="dashboard-summary-grid">
        <SummaryCard
          title="Total Collections"
          value={totalCollections}
        />

        <SummaryCard
          title="Active Collections"
          value={activeCollections}
        />

        <SummaryCard
          title="Total Collected"
          value={`₱${totalCollected.toLocaleString()}`}
        />

        <SummaryCard
          title="Pending Payments"
          value={totalPendingPayments}
        />

        <SummaryCard
          title="Overdue Payments"
          value={totalOverduePayments}
        />

        <SummaryCard
          title="Payment Completion"
          value={`${paymentCompletionRate}%`}
        />

        <div className="collection-analytics-card">
          <div className="analytics-header">
            <div>
              <h3>Collection Analytics</h3>

              <p>
                Overall collection progress toward the target amount.
              </p>
            </div>

            <strong>{collectionProgress}%</strong>
          </div>

          <div className="analytics-progress-bar">
            <div style={{ width: `${collectionProgress}%` }}></div>
          </div>

          <div className="analytics-values">
            <span>
              ₱{totalCollected.toLocaleString()} collected
            </span>

            <span>
              ₱{totalTarget.toLocaleString()} target
            </span>
          </div>
        </div>
      </div>

      <div className="collection-statistics-section">
        <div className="section-heading">
          <h3>Collection Fund Statistics</h3>

          <p>
            Payment and collection overview for each collection event.
          </p>
        </div>

        <div className="collection-statistics-grid">
          {collections.map((collection) => {
            const progress = Math.round(
              (collection.collected / collection.target) * 100
            );

            return (
              <div
                className="collection-statistics-card"
                key={collection.id}
              >
                <div className="statistics-card-header">
                  <div>
                    <h4>{collection.title}</h4>

                    <p>{collection.description}</p>
                  </div>

                  <span
                    className={`collection-status ${collection.status.toLowerCase()}`}
                  >
                    {collection.status}
                  </span>
                </div>

                <div className="statistics-grid">
                  <div>
                    <span>Total Collected</span>

                    <strong>
                      ₱{collection.collected.toLocaleString()}
                    </strong>
                  </div>

                  <div>
                    <span>Pending Payments</span>

                    <strong>
                      {collection.pendingPayments}
                    </strong>
                  </div>

                  <div>
                    <span>Overdue Payments</span>

                    <strong>
                      {collection.overduePayments}
                    </strong>
                  </div>

                  <div>
                    <span>Paid Students</span>

                    <strong>
                      {collection.paidStudents}/
                      {collection.totalStudents}
                    </strong>
                  </div>
                </div>

                <div className="collection-progress-section">
                  <div className="progress-top">
                    <span>Collection Progress</span>

                    <span>{progress}%</span>
                  </div>

                  <div className="analytics-progress-bar">
                    <div style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="recent-collections-section">
        <div className="section-heading">
          <h3>Recent Collections</h3>

          <p>Latest collection records overview.</p>
        </div>

        <div className="collection-card-grid">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;