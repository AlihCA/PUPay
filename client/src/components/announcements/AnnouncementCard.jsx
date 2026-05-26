import "../../styles/components/announcements/AnnouncementCard.css";

function AnnouncementCard({ announcement, onEdit, onDelete }) {
  return (
    <article className="announcement-card">
      <div className="announcement-card-content">
        <div className="announcement-card-top">
          <div>
            <h3>{announcement.title}</h3>
            <p>{announcement.message}</p>
          </div>

          <span className={`announcement-status ${announcement.status.toLowerCase()}`}>
            {announcement.status}
          </span>
        </div>

        <div className="announcement-meta">
          <span>{announcement.section}</span>
          <span>{announcement.type}</span>
          <span>{announcement.datePosted}</span>
        </div>
      </div>

      <div className="announcement-actions">
        <button type="button" onClick={() => onEdit(announcement)}>
          Edit
        </button>

        <button type="button" onClick={() => onDelete(announcement.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default AnnouncementCard;