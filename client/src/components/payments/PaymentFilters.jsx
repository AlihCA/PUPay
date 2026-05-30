import "../../styles/components/payments/PaymentFilters.css";

function PaymentFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
}) {
  return (
    <div className="payment-filters">
      <input
        type="text"
        placeholder="Search payment..."
        value={search}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
      />

      <select
        value={status}
        onChange={(event) =>
          onStatusChange(event.target.value)
        }
      >
        <option value="all">All Status</option>
        <option value="paid">Paid</option>
        <option value="pending">Pending</option>
        <option value="overdue">Overdue</option>
      </select>
    </div>
  );
}

export default PaymentFilters;