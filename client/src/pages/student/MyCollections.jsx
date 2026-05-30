import { dummyCollections } from "../../data/dummyCollections";
import "../../styles/pages/student/MyCollections.css";

function MyCollections() {
  return (
    <main className="collections-page">
      <section className="collections-header">
        <h1>My Collections</h1>
        <p>View your assigned collections, due dates, and payment status.</p>
      </section>

      <section className="collections-grid">
        {dummyCollections
  .filter((collection) => collection.status !== "Paid")
  .map((collection) => (
          <div className="collection-card" key={collection.id}>
            <div>
              <h3>{collection.title}</h3>
              <p>{collection.description}</p>
            </div>

            <div className="collection-card__details">
              <span>Amount: ₱{collection.amount}</span>
              <span>Due: {collection.dueDate}</span>
            </div>

            <span className={`collection-status ${collection.status.toLowerCase()}`}>
              {collection.status}
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}

export default MyCollections;