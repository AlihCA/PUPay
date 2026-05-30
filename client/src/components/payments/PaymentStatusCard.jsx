import "../../styles/components/payments/PaymentStatusCard.css";

function PaymentStatusCard({ title, value, subtitle }) {
  return (
    <div className="payment-status-card">
      <p className="payment-status-card__title">{title}</p>
      <h3 className="payment-status-card__value">{value}</h3>
      <span className="payment-status-card__subtitle">{subtitle}</span>
    </div>
  );
}

export default PaymentStatusCard;