import { useState } from "react";
import { dummyAnnouncements } from "../../data/dummyAnnouncements";

import AnnouncementCard from "../../components/announcements/AnnouncementCard";
import AnnouncementFilters from "../../components/announcements/AnnouncementFilters";
import AnnouncementModal from "../../components/announcements/AnnouncementModal";

import "../../styles/pages/admin/Announcements.css";

function Announcements() {
  const [announcements, setAnnouncements] = useState(dummyAnnouncements);
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

  // ========================================
  // FUTURE API
  // POST /api/announcements
  // Creates announcement
  // ========================================
  const handleCreateAnnouncement = (announcementData) => {
    setAnnouncements([
      {
        id: Date.now(),
        ...announcementData,
        datePosted: new Date().toISOString().split("T")[0],
      },
      ...announcements,
    ]);

    setIsModalOpen(false);
  };

  // ========================================
  // FUTURE API
  // PUT /api/announcements/:id
  // Updates announcement
  // ========================================
  const handleUpdateAnnouncement = (updatedAnnouncement) => {
    setAnnouncements(
      announcements.map((announcement) =>
        announcement.id === updatedAnnouncement.id
          ? updatedAnnouncement
          : announcement
      )
    );

    setEditingAnnouncement(null);
    setIsModalOpen(false);
  };

  // ========================================
  // FUTURE API
  // DELETE /api/announcements/:id
  // Deletes announcement
  // ========================================
  const handleDeleteAnnouncement = (announcementId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this announcement?"
    );

    if (!confirmDelete) return;

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