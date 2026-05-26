import { useState } from "react";
import "../../styles/pages/admin/Settings.css";

function Settings() {
  const [systemSettings, setSystemSettings] = useState({
    organizationName: "PUPay",
    schoolName: "PUP Parañaque",
    defaultSection: "BSIT 3-2",
    paymentReminder: true,
    dueDateReminder: true,
    allowCashPayment: true,
    allowOnlinePayment: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSystemSettings({
      ...systemSettings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ========================================
  // FUTURE API
  // PUT /api/settings
  // Updates system settings
  // ========================================
  const handleSaveSettings = (e) => {
    e.preventDefault();

    alert("Settings saved successfully using dummy data.");
  };

  return (
    <section className="admin-settings-page">
      <div className="admin-settings-header">
        <div>
          <h2>Settings</h2>
          <p>Manage general system preferences and payment options.</p>
        </div>
      </div>

      <form className="settings-form" onSubmit={handleSaveSettings}>
        <div className="settings-card">
          <div className="settings-card-header">
            <h3>General Information</h3>
            <p>Basic information shown across the admin system.</p>
          </div>

          <div className="settings-grid">
            <div className="settings-field">
              <label>Organization Name</label>
              <input
                type="text"
                name="organizationName"
                value={systemSettings.organizationName}
                onChange={handleChange}
              />
            </div>

            <div className="settings-field">
              <label>School Name</label>
              <input
                type="text"
                name="schoolName"
                value={systemSettings.schoolName}
                onChange={handleChange}
              />
            </div>

            <div className="settings-field">
              <label>Default Section</label>
              <select
                name="defaultSection"
                value={systemSettings.defaultSection}
                onChange={handleChange}
              >
                <option value="BSIT 3-1">BSIT 3-1</option>
                <option value="BSIT 3-2">BSIT 3-2</option>
                <option value="BSIT 3-3">BSIT 3-3</option>
              </select>
            </div>
          </div>
        </div>

        <div className="settings-card">
          <div className="settings-card-header">
            <h3>Reminder Settings</h3>
            <p>Control reminders for collections and pending payments.</p>
          </div>

          <div className="settings-toggle-list">
            <label className="settings-toggle-item">
              <div>
                <strong>Payment Reminders</strong>
                <span>Allow sending reminders for unpaid collections.</span>
              </div>

              <input
                type="checkbox"
                name="paymentReminder"
                checked={systemSettings.paymentReminder}
                onChange={handleChange}
              />
            </label>

            <label className="settings-toggle-item">
              <div>
                <strong>Due Date Reminders</strong>
                <span>Show reminder alerts near due dates.</span>
              </div>

              <input
                type="checkbox"
                name="dueDateReminder"
                checked={systemSettings.dueDateReminder}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className="settings-card">
          <div className="settings-card-header">
            <h3>Payment Options</h3>
            <p>Choose which payment methods are allowed in the system.</p>
          </div>

          <div className="settings-toggle-list">
            <label className="settings-toggle-item">
              <div>
                <strong>Cash Payment</strong>
                <span>Allow treasurers to record manual cash payments.</span>
              </div>

              <input
                type="checkbox"
                name="allowCashPayment"
                checked={systemSettings.allowCashPayment}
                onChange={handleChange}
              />
            </label>

            <label className="settings-toggle-item">
              <div>
                <strong>Online Payment</strong>
                <span>Allow online payment tracking for PayMongo later.</span>
              </div>

              <input
                type="checkbox"
                name="allowOnlinePayment"
                checked={systemSettings.allowOnlinePayment}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className="settings-actions">
          <button type="submit">Save Settings</button>
        </div>
      </form>
    </section>
  );
}

export default Settings;