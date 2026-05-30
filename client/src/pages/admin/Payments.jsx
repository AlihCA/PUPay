import { useState, useEffect} from "react";
import { getPayments } from "../../services/paymentService";

import PaymentCard from "../../components/payments/PaymentCard";
import PaymentFilters from "../../components/payments/PaymentFilters";
import PaymentTable from "../../components/payments/PaymentTable";
import PaymentDetailsModal from "../../components/payments/PaymentDetailsModal";

import "../../styles/pages/admin/Payments.css";

function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
  const loadPayments = async () => {
    const data = await getPayments();

    setPayments(data);
  };

  loadPayments();
}, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [methodFilter, setMethodFilter] = useState("All");

  const [selectedPayment, setSelectedPayment] = useState(null);

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.studentName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      payment.studentNumber
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      payment.collectionTitle
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      payment.status === statusFilter;

    const matchesMethod =
      methodFilter === "All" ||
      payment.paymentMethod === methodFilter;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesMethod
    );
  });

  const totalPayments = payments.length;

  const paidPayments = payments.filter(
    (payment) => payment.status === "Paid"
  ).length;

  const pendingPayments = payments.filter(
    (payment) => payment.status === "Pending"
  ).length;

  const overduePayments = payments.filter(
    (payment) => payment.status === "Overdue"
  ).length;

  const totalCollected = payments
    .filter((payment) => payment.status === "Paid")
    .reduce(
      (sum, payment) => sum + payment.amount,
      0
    );

  return (
    <section className="admin-payments-page">
      <div className="admin-payments-header">
        <div>
          <h2>Payment Management</h2>

          <p>
            Monitor Cash and PayMongo payment
            records across all collections.
          </p>
        </div>
      </div>

      <div className="payment-summary-grid">
        <PaymentCard
          title="Total Records"
          value={totalPayments}
        />

        <PaymentCard
          title="Paid"
          value={paidPayments}
        />

        <PaymentCard
          title="Pending"
          value={pendingPayments}
        />

        <PaymentCard
          title="Overdue"
          value={overduePayments}
        />

        <PaymentCard
          title="Total Collected"
          value={`₱${totalCollected.toLocaleString()}`}
        />
      </div>

      <PaymentFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        methodFilter={methodFilter}
        setMethodFilter={setMethodFilter}
      />

      <PaymentTable
        payments={filteredPayments}
        onViewPayment={setSelectedPayment}
      />

      {selectedPayment && (
        <PaymentDetailsModal
          payment={selectedPayment}
          onClose={() =>
            setSelectedPayment(null)
          }
        />
      )}
    </section>
  );
}

export default Payments;