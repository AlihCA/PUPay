// ========================================
// FUTURE API
// GET /api/students
// Returns all students with payment progress
// ========================================

export const dummyStudents = [
  {
    id: 1,
    studentNumber: "2023-0001",
    name: "Maria Santos",
    section: "BSIT 3-2",
    totalCollections: 3,
    paidCollections: 2,
    pendingCollections: 1,
    overdueCollections: 0,
    totalPaid: 600,
    paymentHistory: [
      {
        id: 1,
        collectionTitle: "Foundation Day Contribution",
        amount: 500,
        status: "Paid",
        paymentDate: "2026-05-20",
      },
      {
        id: 2,
        collectionTitle: "Class Fund",
        amount: 100,
        status: "Paid",
        paymentDate: "2026-05-22",
      },
      {
        id: 3,
        collectionTitle: "Organization Shirt",
        amount: 350,
        status: "Pending",
        paymentDate: "-",
      },
    ],
  },
  {
    id: 2,
    studentNumber: "2023-0002",
    name: "John Reyes",
    section: "BSIT 3-2",
    totalCollections: 3,
    paidCollections: 1,
    pendingCollections: 1,
    overdueCollections: 1,
    totalPaid: 500,
    paymentHistory: [
      {
        id: 1,
        collectionTitle: "Foundation Day Contribution",
        amount: 500,
        status: "Paid",
        paymentDate: "2026-05-21",
      },
      {
        id: 2,
        collectionTitle: "Class Fund",
        amount: 100,
        status: "Overdue",
        paymentDate: "-",
      },
      {
        id: 3,
        collectionTitle: "Organization Shirt",
        amount: 350,
        status: "Pending",
        paymentDate: "-",
      },
    ],
  },
];