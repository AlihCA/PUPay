import "../../styles/components/announcements/AnnouncementFilters.css";

function AnnouncementFilters({
  searchTerm,
  setSearchTerm,
  sectionFilter,
  setSectionFilter,
  typeFilter,
  setTypeFilter,
}) {
  return (
    <div className="announcement-filters">
      <input
        type="text"
        placeholder="Search announcement..."
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

      <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
        <option value="All">All Types</option>
        <option value="Announcement">Announcement</option>
        <option value="Payment Reminder">Payment Reminder</option>
      </select>
    </div>
  );
}

export default AnnouncementFilters;