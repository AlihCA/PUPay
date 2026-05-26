import { useState } from "react";
import "../../styles/components/payments/PaymentModal.css";

function PaymentModal({ onClose, onRecord }) {
  const [formData, setFormData] = useState({
    studentName: "",
    studentNumber: "",
    section: "BSIT 3-2",
    collectionTitle: "",
    amount: "",
    paymentMethod: "Cash",
    paymentChannel: "Treasurer Recorded",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "paymentMethod") {
      setFormData({
        ...formData,
        paymentMethod: value,
        paymentChannel:
          value === "Cash" ? "Treasurer Recorded" : "GCash",
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onRecord({
      ...formData,
      amount: Number(formData.amount),
    });
  };

  return (
    <div className="payment-modal-overlay">
      <form className="payment-modal" onSubmit={handleSubmit}>
        <div className="payment-modal-header">
          <div>
            <h3>Record Payment</h3>
            <p>Record Cash or PayMongo payment from a student.</p>
          </div>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <input
          name="studentName"
          placeholder="Student name"
          value={formData.studentName}
          onChange={handleChange}
          required
        />

        <input
          name="studentNumber"
          placeholder="Student number"
          value={formData.studentNumber}
          onChange={handleChange}
          required
        />

        <select name="section" value={formData.section} onChange={handleChange}>
          <option value="BSIT 3-1">BSIT 3-1</option>
          <option value="BSIT 3-2">BSIT 3-2</option>
          <option value="BSIT 3-3">BSIT 3-3</option>
        </select>

        <input
          name="collectionTitle"
          placeholder="Collection title"
          value={formData.collectionTitle}
          onChange={handleChange}
          required
        />

        <input
          name="amount"
          type="number"
          placeholder="Amount paid"
          value={formData.amount}
          onChange={handleChange}
          required
        />

        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
        >
          <option value="Cash">Cash</option>
          <option value="PayMongo">PayMongo</option>
        </select>

        {formData.paymentMethod === "PayMongo" && (
          <select
            name="paymentChannel"
            value={formData.paymentChannel}
            onChange={handleChange}
          >
            <option value="GCash">GCash</option>
            <option value="Card">Card</option>
          </select>
        )}

        {formData.paymentMethod === "Cash" && (
          <input
            name="paymentChannel"
            value="Treasurer Recorded"
            disabled
          />
        )}

        <div className="payment-modal-actions">
          <button type="button" onClick={onClose}>
            Cancel
          </button>

          <button type="submit">Record Payment</button>
        </div>
      </form>
    </div>
  );
}

export default PaymentModal;