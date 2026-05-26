import "../../styles/components/students/StudentTable.css";

function StudentTable({ students, onViewStudent }) {
  return (
    <div className="student-table-wrapper">
      <table className="student-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Section</th>
            <th>Collection Status</th>
            <th>Payment Progress</th>
            <th>Total Paid</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => {
            const progress = Math.round(
              (student.paidCollections / student.totalCollections) * 100
            );

            const status =
              student.overdueCollections > 0
                ? "Overdue"
                : student.pendingCollections > 0
                ? "Pending"
                : "Paid";

            return (
              <tr key={student.id}>
                <td>
                  <strong>{student.name}</strong>
                  <p>{student.studentNumber}</p>
                </td>

                <td>{student.section}</td>

                <td>
                  <span className={`student-status ${status.toLowerCase()}`}>
                    {status}
                  </span>
                </td>

                <td>
                  <div className="student-progress-cell">
                    <div className="student-progress-label">
                      <span>{progress}%</span>
                      <span>
                        {student.paidCollections}/{student.totalCollections}
                      </span>
                    </div>

                    <div className="student-progress-bar">
                      <div style={{ width: `${progress}%` }}></div>
                    </div>
                  </div>
                </td>

                <td>₱{student.totalPaid.toLocaleString()}</td>

                <td>
                  <button
                    className="view-student-btn"
                    type="button"
                    onClick={() => onViewStudent(student)}
                  >
                    View History
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {students.length === 0 && (
        <div className="student-empty-state">
          <h3>No students found</h3>
          <p>Try changing your search, section, or status filter.</p>
        </div>
      )}
    </div>
  );
}

export default StudentTable;