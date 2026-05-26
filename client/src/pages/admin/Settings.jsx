import { useState } from "react";
import "../../styles/pages/admin/Settings.css";

function Settings() {
  const [systemSettings, setSystemSettings] = useState({
    organizationName: "PUPay",
    schoolName: "PUP Parañaque",
    defaultSection: "BSIT 3-2",

    academicYear: "2026-2027",
    semester: "1st Semester",

    paymentReminder: true,
    dueDateReminder: true,
    reminderDaysBeforeDue: 3,

    allowCashPayment: true,
    allowOnlinePayment: true,

    gracePeriodDays: 3,
    autoMarkOverdue: true,

    enableAIReminders: true,
    enableAIAnnouncements: true,
    enableAISummaries: true,
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

          <p>
            Manage general system preferences and
            payment options.
          </p>
        </div>
      </div>

      <form
        className="settings-form"
        onSubmit={handleSaveSettings}
      >
        {/* ======================================== */}
        {/* GENERAL SETTINGS */}
        {/* ======================================== */}

        <div className="settings-card">
          <div className="settings-card-header">
            <h3>General Information</h3>

            <p>
              Basic information shown across the
              admin system.
            </p>
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
                <option value="BSIT 3-1">
                  BSIT 3-1
                </option>

                <option value="BSIT 3-2">
                  BSIT 3-2
                </option>

                <option value="BSIT 3-3">
                  BSIT 3-3
                </option>
              </select>
            </div>

            <div className="settings-field">
              <label>Academic Year</label>

              <input
                type="text"
                name="academicYear"
                value={systemSettings.academicYear}
                onChange={handleChange}
              />
            </div>

            <div className="settings-field">
              <label>Semester</label>

              <select
                name="semester"
                value={systemSettings.semester}
                onChange={handleChange}
              >
                <option value="1st Semester">
                  1st Semester
                </option>

                <option value="2nd Semester">
                  2nd Semester
                </option>

                <option value="Summer">
                  Summer
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* ======================================== */}
        {/* REMINDER SETTINGS */}
        {/* ======================================== */}

        <div className="settings-card">
          <div className="settings-card-header">
            <h3>Reminder Settings</h3>

            <p>
              Control reminders for collections and
              pending payments.
            </p>
          </div>

          <div className="settings-toggle-list">
            <label className="settings-toggle-item">
              <div>
                <strong>Payment Reminders</strong>

                <span>
                  Allow sending reminders for unpaid
                  collections.
                </span>
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

                <span>
                  Show reminder alerts near due dates.
                </span>
              </div>

              <input
                type="checkbox"
                name="dueDateReminder"
                checked={systemSettings.dueDateReminder}
                onChange={handleChange}
              />
            </label>

            <div className="settings-field">
              <label>
                Reminder Days Before Due Date
              </label>

              <input
                type="number"
                name="reminderDaysBeforeDue"
                value={
                  systemSettings.reminderDaysBeforeDue
                }
                onChange={handleChange}
                min="1"
              />
            </div>
          </div>
        </div>

        {/* ======================================== */}
        {/* PAYMENT SETTINGS */}
        {/* ======================================== */}

        <div className="settings-card">
          <div className="settings-card-header">
            <h3>Payment Options</h3>

            <p>
              Choose which payment methods are allowed
              in the system.
            </p>
          </div>

          <div className="settings-toggle-list">
            <label className="settings-toggle-item">
              <div>
                <strong>Cash Payment</strong>

                <span>
                  Allow treasurers to record manual
                  cash payments.
                </span>
              </div>

              <input
                type="checkbox"
                name="allowCashPayment"
                checked={
                  systemSettings.allowCashPayment
                }
                onChange={handleChange}
              />
            </label>

            <label className="settings-toggle-item">
              <div>
                <strong>Online Payment</strong>

                <span>
                  Allow online payment tracking for
                  PayMongo later.
                </span>
              </div>

              <input
                type="checkbox"
                name="allowOnlinePayment"
                checked={
                  systemSettings.allowOnlinePayment
                }
                onChange={handleChange}
              />
            </label>

            <div className="settings-field">
              <label>
                Payment Grace Period Days
              </label>

              <input
                type="number"
                name="gracePeriodDays"
                value={
                  systemSettings.gracePeriodDays
                }
                onChange={handleChange}
                min="0"
              />
            </div>

            <label className="settings-toggle-item">
              <div>
                <strong>Auto Mark Overdue</strong>

                <span>
                  Automatically mark unpaid
                  collections as overdue after the
                  grace period.
                </span>
              </div>

              <input
                type="checkbox"
                name="autoMarkOverdue"
                checked={
                  systemSettings.autoMarkOverdue
                }
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        {/* ======================================== */}
        {/* AI SETTINGS */}
        {/* ======================================== */}

        <div className="settings-card">
          <div className="settings-card-header">
            <h3>AI Settings</h3>

            <p>
              Enable or disable AI tools for
              reminders, announcements, and summaries.
            </p>
          </div>

          <div className="settings-toggle-list">
            <label className="settings-toggle-item">
              <div>
                <strong>
                  AI Reminder Generator
                </strong>

                <span>
                  Allow AI to help generate payment
                  reminder messages.
                </span>
              </div>

              <input
                type="checkbox"
                name="enableAIReminders"
                checked={
                  systemSettings.enableAIReminders
                }
                onChange={handleChange}
              />
            </label>

            <label className="settings-toggle-item">
              <div>
                <strong>
                  AI Announcement Generator
                </strong>

                <span>
                  Allow AI to help write announcement
                  drafts.
                </span>
              </div>

              <input
                type="checkbox"
                name="enableAIAnnouncements"
                checked={
                  systemSettings.enableAIAnnouncements
                }
                onChange={handleChange}
              />
            </label>

            <label className="settings-toggle-item">
              <div>
                <strong>
                  AI Summary Generator
                </strong>

                <span>
                  Allow AI to summarize collection and
                  payment records.
                </span>
              </div>

              <input
                type="checkbox"
                name="enableAISummaries"
                checked={
                  systemSettings.enableAISummaries
                }
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className="settings-actions">
          <button type="submit">
            Save Settings
          </button>
        </div>
      </form>
    </section>
  );
}

export default Settings;