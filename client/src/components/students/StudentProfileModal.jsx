import "../../styles/components/students/StudentProfileModal.css";

function StudentProfileModal({ student, onClose }) {
  const progress = Math.round(
    (student.paidCollections / student.totalCollections) * 100
  );

  return (
    <div className="student-modal-overlay">
      <div className="student-modal">
        <div className="student-modal-header">
          <div>
            <h3>{student.name}</h3>
            <p>
              {student.studentNumber} • {student.section}
            </p>
          </div>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="student-profile-summary">
          <div>
            <span>Total Paid</span>
            <strong>₱{student.totalPaid.toLocaleString()}</strong>
          </div>

          <div>
            <span>Payment Progress</span>
            <strong>{progress}%</strong>
          </div>

          <div>
            <span>Pending</span>
            <strong>{student.pendingCollections}</strong>
          </div>

          <div>
            <span>Overdue</span>
            <strong>{student.overdueCollections}</strong>
          </div>
        </div>

        <div className="student-history-section">
          <h4>Payment History</h4>

          <div className="student-history-list">
            {student.paymentHistory.map((payment) => (
              <div className="student-history-item" key={payment.id}>
                <div>
                  <strong>{payment.collectionTitle}</strong>
                  <p>Payment Date: {payment.paymentDate}</p>
                </div>

                <div className="student-history-right">
                  <span>₱{payment.amount}</span>
                  <span className={`student-status ${payment.status.toLowerCase()}`}>
                    {payment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfileModal;