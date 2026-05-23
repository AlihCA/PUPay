import "../../styles/components/collections/CollectionFilters.css";

function CollectionFilters({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  dueDateFilter,
  setDueDateFilter,
}) {
  return (
    <div className="collection-filters">
      <input
        type="text"
        placeholder="Search collection..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="All">All Status</option>
        <option value="Active">Active</option>
        <option value="Upcoming">Upcoming</option>
        <option value="Closed">Closed</option>
      </select>

      <input
        type="date"
        value={dueDateFilter}
        onChange={(e) => setDueDateFilter(e.target.value)}
      />

      <button
        className="clear-filter-btn"
        type="button"
        onClick={() => {
          setSearchTerm("");
          setStatusFilter("All");
          setDueDateFilter("");
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default CollectionFilters;