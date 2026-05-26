import "../../styles/components/payments/PaymentCard.css";

function PaymentCard({ title, value }) {
  return (
    <article className="payment-summary-card">
      <span>{title}</span>
      <strong>{value}</strong>
    </article>
  );
}

export default PaymentCard;