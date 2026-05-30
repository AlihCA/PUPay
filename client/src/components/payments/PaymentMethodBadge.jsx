import "../../styles/components/payments/PaymentMethodBadge.css";

function PaymentMethodBadge({ method }) {
  const badgeClass = method?.toLowerCase().includes("cash")
    ? "cash"
    : method?.toLowerCase().includes("paymongo")
    ? "paymongo"
    : "unpaid";

  return (
    <span className={`payment-method-badge ${badgeClass}`}>
      {method || "Not yet paid"}
    </span>
  );
}

export default PaymentMethodBadge;