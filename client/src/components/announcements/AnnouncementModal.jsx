import { useState } from "react";
import "../../styles/components/announcements/AnnouncementModal.css";

function AnnouncementModal({ announcement, onClose, onCreate, onUpdate }) {
  const isEditing = Boolean(announcement);

  const [formData, setFormData] = useState({
    title: announcement?.title || "",
    message: announcement?.message || "",
    section: announcement?.section || "BSIT 3-2",
    type: announcement?.type || "Announcement",
    status: announcement?.status || "Published",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUseReminderTemplate = () => {
    setFormData({
      ...formData,
      title: "Payment Reminder",
      message:
        "Good day! Please settle your pending payment before the due date. Kindly disregard this message if you have already paid.",
      type: "Payment Reminder",
      status: "Published",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      onUpdate({
        ...announcement,
        ...formData,
      });

      return;
    }

    onCreate(formData);
  };

  return (
    <div className="announcement-modal-overlay">
      <form className="announcement-modal" onSubmit={handleSubmit}>
        <div className="announcement-modal-header">
          <div>
            <h3>{isEditing ? "Edit Announcement" : "Create Announcement"}</h3>
            <p>Write an announcement or send a section-based reminder.</p>
          </div>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <button
          className="reminder-template-btn"
          type="button"
          onClick={handleUseReminderTemplate}
        >
          Use Payment Reminder Template
        </button>

        <input
          name="title"
          placeholder="Announcement title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Announcement message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <select name="section" value={formData.section} onChange={handleChange}>
          <option value="BSIT 3-1">BSIT 3-1</option>
          <option value="BSIT 3-2">BSIT 3-2</option>
          <option value="BSIT 3-3">BSIT 3-3</option>
        </select>

        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Announcement">Announcement</option>
          <option value="Payment Reminder">Payment Reminder</option>
        </select>

        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
        </select>

        <div className="announcement-modal-actions">
          <button type="button" onClick={onClose}>
            Cancel
          </button>

          <button type="submit">
            {isEditing ? "Save Changes" : "Publish"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AnnouncementModal;