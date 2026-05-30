import { useEffect, useState } from "react";
import { getAnnouncements, createAnnouncement, updateAnnouncement, deleteAnnouncement,} from "../../services/announcementService";

import AnnouncementCard from "../../components/announcements/AnnouncementCard";
import AnnouncementFilters from "../../components/announcements/AnnouncementFilters";
import AnnouncementModal from "../../components/announcements/AnnouncementModal";

import "../../styles/pages/admin/Announcements.css";

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
  const loadAnnouncements = async () => {
    const data = await getAnnouncements();
    setAnnouncements(data);
  };

  loadAnnouncements();
}, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [sectionFilter, setSectionFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);

  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesSearch = announcement.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesSection =
      sectionFilter === "All" || announcement.section === sectionFilter;

    const matchesType =
      typeFilter === "All" || announcement.type === typeFilter;

    return matchesSearch && matchesSection && matchesType;
  });



const handleCreateAnnouncement = async (announcementData) => {
  const createdAnnouncement = await createAnnouncement(announcementData);

  setAnnouncements([createdAnnouncement, ...announcements]);
  setIsModalOpen(false);
};



const handleUpdateAnnouncement = async (updatedAnnouncement) => {
  const savedAnnouncement = await updateAnnouncement(
    updatedAnnouncement.id,
    updatedAnnouncement
  );

  setAnnouncements(
    announcements.map((announcement) =>
      announcement.id === savedAnnouncement.id
        ? savedAnnouncement
        : announcement
    )
  );

  setEditingAnnouncement(null);
  setIsModalOpen(false);
};

const handleDeleteAnnouncement = async (announcementId) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this announcement?"
  );

  if (!confirmDelete) return;

  await deleteAnnouncement(announcementId);

  setAnnouncements(
    announcements.filter((announcement) => announcement.id !== announcementId)
  );
};

  const handleOpenCreateModal = () => {
    setEditingAnnouncement(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (announcement) => {
    setEditingAnnouncement(announcement);
    setIsModalOpen(true);
  };

  const handleSendPaymentReminder = () => {
    setEditingAnnouncement(null);
    setIsModalOpen(true);
  };

  return (
    <section className="admin-announcements-page">
      <div className="admin-page-header">
        <div>
          <h2>Announcement Management</h2>
          <p>Create announcements, send reminders, and target specific sections.</p>
        </div>

        <div className="announcement-header-actions">
          <button
            className="announcement-secondary-btn"
            type="button"
            onClick={handleSendPaymentReminder}
          >
            Send Payment Reminder
          </button>

          <button
            className="announcement-primary-btn"
            type="button"
            onClick={handleOpenCreateModal}
          >
            + New Announcement
          </button>
        </div>
      </div>

      <AnnouncementFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sectionFilter={sectionFilter}
        setSectionFilter={setSectionFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />

      <div className="announcement-list">
        {filteredAnnouncements.length > 0 ? (
          filteredAnnouncements.map((announcement) => (
            <AnnouncementCard
              key={announcement.id}
              announcement={announcement}
              onEdit={handleOpenEditModal}
              onDelete={handleDeleteAnnouncement}
            />
          ))
        ) : (
          <div className="announcement-empty-state">
            <h3>No announcements found</h3>
            <p>Try changing your search, section, or type filter.</p>
          </div>
        )}
      </div>

      {isModalOpen && (
        <AnnouncementModal
          announcement={editingAnnouncement}
          onClose={() => {
            setEditingAnnouncement(null);
            setIsModalOpen(false);
          }}
          onCreate={handleCreateAnnouncement}
          onUpdate={handleUpdateAnnouncement}
        />
      )}
    </section>
  );
}

export default Announcements;