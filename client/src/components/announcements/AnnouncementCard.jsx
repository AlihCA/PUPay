import "../../styles/components/announcements/AnnouncementCard.css";

function AnnouncementCard({ announcement }) {
  return (
    <div className="announcement-card">
      <h3 className="announcement-card__title">{announcement.title}</h3>
      <p className="announcement-card__message">{announcement.message}</p>

      <div className="announcement-card__footer">
        <span>{announcement.targetSection}</span>
        <span>{announcement.date}</span>
      </div>
    </div>
  );
}

export default AnnouncementCard;