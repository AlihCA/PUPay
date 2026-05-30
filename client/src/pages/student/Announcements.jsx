import { useEffect, useState } from "react";

import AnnouncementCard from "../../components/announcements/AnnouncementCard";

import { dummyAnnouncements } from "../../data/dummyAnnouncements";

import "../../styles/pages/student/Announcements.css";

// FUTURE API:
// GET /api/announcements

function Announcements() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  if (loading) {
    return (
      <main className="announcements-page">
        <h2>Loading announcements...</h2>
      </main>
    );
  }

  if (!dummyAnnouncements || dummyAnnouncements.length === 0) {
    return (
      <main className="announcements-page">
        <section className="announcements-header">
          <h1>Announcements</h1>

          <p>
            View reminders, deadlines, and notices from your treasurer/admin.
          </p>
        </section>

        <div className="announcements-empty-state">
          <h3>No announcements yet</h3>
          <p>Announcements and reminders will appear here.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="announcements-page">
      <section className="announcements-header">
        <h1>Announcements</h1>

        <p>
          View reminders, deadlines, and notices from your treasurer/admin.
        </p>
      </section>

      <section className="announcements-grid">
        {dummyAnnouncements.map((announcement) => (
          <AnnouncementCard
            key={announcement.id}
            announcement={announcement}
          />
        ))}
      </section>
    </main>
  );
}

export default Announcements;