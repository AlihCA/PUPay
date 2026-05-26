import "../../styles/components/payments/PaymentFilters.css";

function PaymentFilters({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  methodFilter,
  setMethodFilter,
}) {
  return (
    <div className="payment-filters">
      <input
        type="text"
        placeholder="Search student, number, or collection..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="All">All Status</option>
        <option value="Paid">Paid</option>
        <option value="Pending">Pending</option>
        <option value="Overdue">Overdue</option>
      </select>

      <select
        value={methodFilter}
        onChange={(e) => setMethodFilter(e.target.value)}
      >
        <option value="All">All Methods</option>
        <option value="Cash">Cash</option>
        <option value="PayMongo">PayMongo</option>
      </select>
    </div>
  );
}

export default PaymentFilters;