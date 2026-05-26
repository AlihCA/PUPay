import { useState } from "react";
import { dummyStudents } from "../../data/dummyStudents";

import StudentCard from "../../components/students/StudentCard";
import StudentTable from "../../components/students/StudentTable";
import StudentFilters from "../../components/students/StudentFilters";
import StudentProfileModal from "../../components/students/StudentProfileModal";

import "../../styles/pages/admin/Students.css";

function Students() {
  const [students] = useState(dummyStudents);
  const [searchTerm, setSearchTerm] = useState("");
  const [sectionFilter, setSectionFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentNumber.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSection =
      sectionFilter === "All" || student.section === sectionFilter;

    const paymentStatus =
      student.overdueCollections > 0
        ? "Overdue"
        : student.pendingCollections > 0
        ? "Pending"
        : "Paid";

    const matchesStatus =
      statusFilter === "All" || paymentStatus === statusFilter;

    return matchesSearch && matchesSection && matchesStatus;
  });

  const totalStudents = students.length;

  const totalPaidStudents = students.filter(
    (student) => student.pendingCollections === 0 && student.overdueCollections === 0
  ).length;

  const totalPendingStudents = students.filter(
    (student) => student.pendingCollections > 0
  ).length;

  const totalOverdueStudents = students.filter(
    (student) => student.overdueCollections > 0
  ).length;

  return (
    <section className="admin-students-page">
      <div className="admin-students-header">
        <div>
          <h2>Student Management</h2>
          <p>View students, payment history, and collection progress.</p>
        </div>
      </div>

      <div className="student-summary-grid">
        <StudentCard title="Total Students" value={totalStudents} />
        <StudentCard title="Fully Paid" value={totalPaidStudents} />
        <StudentCard title="With Pending" value={totalPendingStudents} />
        <StudentCard title="With Overdue" value={totalOverdueStudents} />
      </div>

      <StudentFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sectionFilter={sectionFilter}
        setSectionFilter={setSectionFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <StudentTable
        students={filteredStudents}
        onViewStudent={setSelectedStudent}
      />

      {selectedStudent && (
        <StudentProfileModal
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </section>
  );
}

export default Students;