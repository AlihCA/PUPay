import "../../styles/components/collections/CollectionCalendar.css";

function CollectionCalendar({ collections }) {
  const sortedEvents = [...collections].sort(
    (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
  );

  return (
    <div className="collection-calendar-card">
      <div className="collection-calendar-header">
        <div>
          <h3>Due Date Calendar</h3>
          <p>Upcoming collection events and deadlines.</p>
        </div>
      </div>

      <div className="collection-calendar-list">
        {sortedEvents.map((collection) => (
          <div className="calendar-event-item" key={collection.id}>
            <div className="calendar-date-box">
              <span>
                {new Date(collection.dueDate).toLocaleDateString("en-US", {
                  month: "short",
                })}
              </span>
              <strong>
                {new Date(collection.dueDate).toLocaleDateString("en-US", {
                  day: "2-digit",
                })}
              </strong>
            </div>

            <div className="calendar-event-info">
              <h4>{collection.title}</h4>
              <p>{collection.description}</p>
            </div>

            <span className={`collection-status ${collection.status.toLowerCase()}`}>
              {collection.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectionCalendar;