import PaymentMethodBadge from "./PaymentMethodBadge";

import "../../styles/components/payments/PaymentTable.css";

// FUTURE API:
// GET /api/payments
// GET /api/payments/student/:studentId
// POST /api/payments/paymongo/create-checkout

function PaymentTable({ payments, onPayClick }) {
  if (!payments || payments.length === 0) {
    return (
      <div className="payment-empty-state">
        <h3>No payments found</h3>
        <p>Your payment records will appear here.</p>
      </div>
    );
  }

  return (
    <div className="payment-table-wrapper">
      <table className="payment-table">
        <thead>
          <tr>
            <th>Collection</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Due Date</th>
            <th>Payment Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.collectionTitle}</td>

              <td>₱{payment.amount}</td>

              <td>
                <PaymentMethodBadge
                  method={payment.paymentMethod}
                />
              </td>

              <td>{payment.dueDate}</td>

              <td>{payment.paymentDate || "—"}</td>

              <td>
                <span
                  className={`payment-badge ${payment.status.toLowerCase()}`}
                >
                  {payment.status}
                </span>
              </td>

              <td>
                {payment.status !== "Paid" ? (
                  <button
                    className="payment-pay-button"
                    onClick={() =>
                      onPayClick && onPayClick(payment)
                    }
                  >
                    Pay
                  </button>
                ) : (
                  <span className="payment-paid-text">
                    Settled
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentTable;