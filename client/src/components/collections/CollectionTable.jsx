import "../../styles/components/collections/CollectionTable.css";

function CollectionTable({ collections, onEdit, onDelete }) {
  return (
    <div className="collection-table-wrapper">
      <table className="collection-table">
        <thead>
          <tr>
            <th>Collection</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Collected</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {collections.map((collection) => (
            <tr key={collection.id}>
              <td>
                <strong>{collection.title}</strong>
                <p>{collection.description}</p>
              </td>

              <td>₱{collection.amount}</td>
              <td>{collection.dueDate}</td>

              <td>
                <span
                  className={`collection-status ${collection.status.toLowerCase()}`}
                >
                  {collection.status}
                </span>
              </td>

              <td>
                ₱{collection.collected.toLocaleString()} / ₱
                {collection.target.toLocaleString()}
              </td>

              <td>
                <div className="collection-table-actions">
                  <button type="button" onClick={() => onEdit(collection)}>
                    Edit
                  </button>

                  <button type="button" onClick={() => onDelete(collection.id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CollectionTable;