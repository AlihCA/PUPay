import { useState } from "react";
import "../../styles/components/collections/CreateCollectionModal.css";

function CreateCollectionModal({ onClose, onCreate }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    amount: "",
    dueDate: "",
    status: "Active",
    target: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onCreate({
      ...formData,
      amount: Number(formData.amount),
      target: Number(formData.target),
    });
  };

  return (
    <div className="collection-modal-overlay">
      <form className="collection-modal" onSubmit={handleSubmit}>
        <div className="collection-modal-header">
          <h3>Create Collection</h3>
          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <input
          name="title"
          placeholder="Collection title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          name="amount"
          type="number"
          placeholder="Amount per student"
          value={formData.amount}
          onChange={handleChange}
          required
        />

        <input
          name="target"
          type="number"
          placeholder="Target amount"
          value={formData.target}
          onChange={handleChange}
          required
        />

        <input
          name="dueDate"
          type="date"
          value={formData.dueDate}
          onChange={handleChange}
          required
        />

        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Closed">Closed</option>
        </select>

        <div className="collection-modal-actions">
          <button type="button" onClick={onClose}>
            Cancel
          </button>

          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateCollectionModal;