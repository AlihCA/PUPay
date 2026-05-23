import "../../styles/components/collections/CollectionCard.css";

function CollectionCard({ collection }) {
  const progress = Math.round((collection.collected / collection.target) * 100);

  return (
    <article className="collection-card">
      <div className="collection-card-header">
        <div>
          <h3>{collection.title}</h3>
          <p>{collection.description}</p>
        </div>

        <span className={`collection-status ${collection.status.toLowerCase()}`}>
          {collection.status}
        </span>
      </div>

      <div className="collection-card-info">
        <div>
          <span>Amount</span>
          <strong>₱{collection.amount}</strong>
        </div>

        <div>
          <span>Due Date</span>
          <strong>{collection.dueDate}</strong>
        </div>
      </div>

      <div className="collection-progress">
        <div className="collection-progress-label">
          <span>Collected</span>
          <span>{progress}%</span>
        </div>

        <div className="collection-progress-bar">
          <div style={{ width: `${progress}%` }}></div>
        </div>

        <p>
          ₱{collection.collected.toLocaleString()} / ₱
          {collection.target.toLocaleString()}
        </p>
      </div>
    </article>
  );
}

export default CollectionCard;