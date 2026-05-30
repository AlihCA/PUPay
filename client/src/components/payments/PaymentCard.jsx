import StatusBadge from "../ui/StatusBadge";
import "../../styles/components/payments/PaymentCard.css";

function PaymentCard({ payment }) {
  return (
    <article className="payment-card">
      <div>
        <h3>{payment.collectionName}</h3>
        <p>{payment.description}</p>
      </div>

      <div className="payment-card__info">
        <span>Amount: ₱{payment.amount.toLocaleString()}</span>
        <span>Due: {payment.dueDate}</span>
      </div>

      <StatusBadge status={payment.status} />
    </article>
  );
}

export default PaymentCard;