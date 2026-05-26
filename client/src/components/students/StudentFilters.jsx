import "../../styles/components/students/StudentFilters.css";

function StudentFilters({
  searchTerm,
  setSearchTerm,
  sectionFilter,
  setSectionFilter,
  statusFilter,
  setStatusFilter,
}) {
  return (
    <div className="student-filters">
      <input
        type="text"
        placeholder="Search student name or number..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={sectionFilter}
        onChange={(e) => setSectionFilter(e.target.value)}
      >
        <option value="All">All Sections</option>
        <option value="BSIT 3-1">BSIT 3-1</option>
        <option value="BSIT 3-2">BSIT 3-2</option>
        <option value="BSIT 3-3">BSIT 3-3</option>
      </select>

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="All">All Status</option>
        <option value="Paid">Paid</option>
        <option value="Pending">Pending</option>
        <option value="Overdue">Overdue</option>
      </select>
    </div>
  );
}

export default StudentFilters;