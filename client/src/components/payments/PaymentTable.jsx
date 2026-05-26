import "../../styles/components/payments/PaymentTable.css";

function PaymentTable({ payments, onViewPayment }) {
  return (
    <div className="payment-table-wrapper">
      <table className="payment-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Collection</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Method</th>
            <th>Channel</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>
                <strong>{payment.studentName}</strong>
                <p>{payment.studentNumber} • {payment.section}</p>
              </td>

              <td>{payment.collectionTitle}</td>
              <td>₱{payment.amount.toLocaleString()}</td>

              <td>
                <span className={`payment-status ${payment.status.toLowerCase()}`}>
                  {payment.status}
                </span>
              </td>

              <td>{payment.paymentMethod}</td>
              <td>{payment.paymentChannel}</td>
              <td>{payment.paymentDate}</td>

              <td>
                <button
                  className="view-payment-btn"
                  type="button"
                  onClick={() => onViewPayment(payment)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {payments.length === 0 && (
        <div className="payment-empty-state">
          <h3>No payment records found</h3>
          <p>Try changing your search, status, or payment method filter.</p>
        </div>
      )}
    </div>
  );
}

export default PaymentTable;