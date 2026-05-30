import "../../styles/components/payments/PaymentActionModal.css";

// FUTURE API:
// POST /api/payments/paymongo/create-checkout

function PaymentActionModal({ payment, onClose }) {
  if (!payment) return null;

  return (
    <div className="payment-modal-overlay">
      <div className="payment-modal">
        <h2>Pay Now?</h2>

        <p>
          You are about to pay for:
          <strong> {payment.collectionTitle}</strong>
        </p>

        <p>Amount: ₱{payment.amount}</p>

        <div className="payment-modal-actions">
          <button className="payment-modal-pay">
            Proceed to PayMongo
          </button>

          <button className="payment-modal-cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentActionModal;