import "../../styles/components/payments/PaymentDetailsModal.css";

function PaymentDetailsModal({ payment, onClose }) {
  return (
    <div className="payment-details-overlay">
      <div className="payment-details-modal">
        <div className="payment-details-header">
          <div>
            <h3>Payment Details</h3>
            <p>{payment.collectionTitle}</p>
          </div>

          <button
            type="button"
            className="payment-details-close-btn"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="payment-details-grid">
          <div>
            <span>Student Name</span>
            <strong>{payment.studentName}</strong>
          </div>

          <div>
            <span>Student Number</span>
            <strong>{payment.studentNumber}</strong>
          </div>

          <div>
            <span>Section</span>
            <strong>{payment.section}</strong>
          </div>

          <div>
            <span>Amount</span>
            <strong>
              ₱{payment.amount.toLocaleString()}
            </strong>
          </div>

          <div>
            <span>Status</span>
            <strong>{payment.status}</strong>
          </div>

          <div>
            <span>Payment Method</span>
            <strong>{payment.paymentMethod}</strong>
          </div>

          <div>
            <span>Payment Channel</span>
            <strong>{payment.paymentChannel}</strong>
          </div>

          <div>
            <span>Payment Date</span>
            <strong>{payment.paymentDate}</strong>
          </div>

          <div>
            <span>Reference Number</span>
            <strong>{payment.referenceNumber}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetailsModal;