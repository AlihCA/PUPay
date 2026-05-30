import "../../styles/components/payments/PaymentDetailsModal.css";

function PaymentDetailsModal({ payment, onClose }) {
  if (!payment) return null;

  return (
    <div className="payment-details-backdrop">
      <div className="payment-details-modal">

        <div className="payment-details-modal__header">
          <h2>Payment Details</h2>

          <button
            type="button"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="payment-details-modal__body">
          <p>
            <strong>Collection:</strong>
            {" "}
            {payment.collectionName}
          </p>

          <p>
            <strong>Description:</strong>
            {" "}
            {payment.description}
          </p>

          <p>
            <strong>Amount:</strong>
            {" "}
            ₱{payment.amount.toLocaleString()}
          </p>

          <p>
            <strong>Status:</strong>
            {" "}
            {payment.status}
          </p>

          <p>
            <strong>Due Date:</strong>
            {" "}
            {payment.dueDate}
          </p>

          <p>
            <strong>Payment Method:</strong>
            {" "}
            {payment.method}
          </p>

          <p>
            <strong>Reference No.:</strong>
            {" "}
            {payment.referenceNo || "Not yet available"}
          </p>
        </div>

      </div>
    </div>
  );
}

export default PaymentDetailsModal;