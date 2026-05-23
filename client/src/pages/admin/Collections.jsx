import { useState } from "react";

import CollectionCard from "../../components/collections/CollectionCard";
import CollectionTable from "../../components/collections/CollectionTable";
import CollectionFilters from "../../components/collections/CollectionFilters";
import CreateCollectionModal from "../../components/collections/CreateCollectionModal";
import EditCollectionModal from "../../components/collections/EditCollectionModal";
import CollectionCalendar from "../../components/collections/CollectionCalendar";
import "../../styles/pages/admin/Collections.css";
import { dummyCollections } from "../../data/dummyCollections";

// ========================================
// FUTURE API
// GET /api/collections
// ========================================
const initialCollections = [
  {
    id: 1,
    title: "Class Fund",
    description: "Monthly class contribution for student activities.",
    amount: 150,
    dueDate: "2026-06-15",
    status: "Active",
    collected: 4200,
    target: 6000,
  },

  {
    id: 2,
    title: "Graduation Fee",
    description: "Collection for graduation-related expenses.",
    amount: 500,
    dueDate: "2026-07-01",
    status: "Upcoming",
    collected: 2500,
    target: 15000,
  },

  {
    id: 3,
    title: "Organization Shirt",
    description: "Payment for official organization shirt.",
    amount: 350,
    dueDate: "2026-05-30",
    status: "Active",
    collected: 8750,
    target: 10500,
  },
];

function AdminCollections() {
  const [collections, setCollections] = useState(dummyCollections);

  const [searchTerm, setSearchTerm] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  const [dueDateFilter, setDueDateFilter] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedCollection, setSelectedCollection] =
    useState(null);

  const [isEditModalOpen, setIsEditModalOpen] =
    useState(false);

  const filteredCollections = collections
    .filter((collection) => {
      const matchesSearch = collection.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        collection.status === statusFilter;

      const matchesDueDate =
        !dueDateFilter ||
        collection.dueDate === dueDateFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesDueDate
      );
    })

    .sort((a, b) => {
      const statusOrder = {
        Active: 1,
        Upcoming: 2,
        Closed: 3,
      };

      return (
        statusOrder[a.status] -
        statusOrder[b.status]
      );
    });

  // ========================================
  // FUTURE API
  // POST /api/collections
  // ========================================
  const handleCreateCollection = (newCollection) => {
    setCollections([
      ...collections,

      {
        id: Date.now(),

        ...newCollection,

        collected: 0,
      },
    ]);

    setIsModalOpen(false);
  };

  // ========================================
  // FUTURE API
  // PUT /api/collections/:id
  // ========================================
  const handleUpdateCollection = (
    updatedCollection
  ) => {
    setCollections(
      collections.map((collection) =>
        collection.id === updatedCollection.id
          ? updatedCollection
          : collection
      )
    );

    setSelectedCollection(null);

    setIsEditModalOpen(false);
  };

  // ========================================
  // FUTURE API
  // DELETE /api/collections/:id
  // ========================================
  const handleDeleteCollection = (collectionId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this collection?"
    );

    if (!confirmDelete) return;

    setCollections(
      collections.filter(
        (collection) =>
          collection.id !== collectionId
      )
    );
  };

  const handleOpenEditModal = (collection) => {
    setSelectedCollection(collection);

    setIsEditModalOpen(true);
  };

  return (
    <section className="admin-collections-page">
      <div className="admin-page-header">
        <div>
          <h2>Collections Overview</h2>

          <p>
            Create, monitor, and manage collection
            records.
          </p>
        </div>

        <button
          className="collection-primary-btn"
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          + New Collection
        </button>
      </div>

      <div className="collection-card-grid">
        {filteredCollections.map((collection) => (
          <CollectionCard
            key={collection.id}
            collection={collection}
          />
        ))}
      </div>

      <CollectionFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        dueDateFilter={dueDateFilter}
        setDueDateFilter={setDueDateFilter}
      />

      {filteredCollections.length > 0 ? (
        <>
          <CollectionCalendar
            collections={filteredCollections}
          />

          <CollectionTable
            collections={filteredCollections}
            onEdit={handleOpenEditModal}
            onDelete={handleDeleteCollection}
          />
        </>
      ) : (
        <div className="collections-empty-state">
          <h3>No collections found</h3>

          <p>
            Try changing your search, status, or due
            date filter.
          </p>
        </div>
      )}

      {isModalOpen && (
        <CreateCollectionModal
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateCollection}
        />
      )}

      {isEditModalOpen &&
        selectedCollection && (
          <EditCollectionModal
            collection={selectedCollection}
            onClose={() => {
              setSelectedCollection(null);

              setIsEditModalOpen(false);
            }}
            onUpdate={handleUpdateCollection}
          />
        )}
    </section>
  );
}

export default AdminCollections;