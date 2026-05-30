import { useState } from "react";

import PaymentTable from "../../components/payments/PaymentTable";
import PaymentActionModal from "../../components/payments/PaymentActionModal";

import { dummyPayments } from "../../data/dummyPayments";

import "../../styles/pages/student/MyPayments.css";

// FUTURE API:
// GET /api/payments
// GET /api/payments/student/:studentId
// POST /api/payments/paymongo/create-checkout

function MyPayments() {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredPayments =
    statusFilter === "All"
      ? dummyPayments
      : dummyPayments.filter(
          (payment) => payment.status === statusFilter
        );

  return (
    <main className="my-payments-page">
      <section className="my-payments-header">
        <h1>My Payments</h1>
        <p>View your payment history, payment methods, dates, and statuses.</p>
      </section>

      <div className="payment-filter">
        <button
          className={statusFilter === "All" ? "active-filter" : ""}
          onClick={() => setStatusFilter("All")}
        >
          All
        </button>

        <button
          className={statusFilter === "Paid" ? "active-filter" : ""}
          onClick={() => setStatusFilter("Paid")}
        >
          Paid
        </button>

        <button
          className={statusFilter === "Pending" ? "active-filter" : ""}
          onClick={() => setStatusFilter("Pending")}
        >
          Pending
        </button>

        <button
          className={statusFilter === "Overdue" ? "active-filter" : ""}
          onClick={() => setStatusFilter("Overdue")}
        >
          Overdue
        </button>
      </div>

      <section className="my-payments-table">
        <PaymentTable
          payments={filteredPayments}
          onPayClick={setSelectedPayment}
        />
      </section>

      <PaymentActionModal
        payment={selectedPayment}
        onClose={() => setSelectedPayment(null)}
      />
    </main>
  );
}

export default MyPayments;