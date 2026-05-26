// ========================================
// FUTURE API
// GET /api/payments
// Returns all payment records
// ========================================

export const dummyPayments = [
  {
    id: 1,
    studentName: "Maria Santos",
    studentNumber: "2023-0001",
    section: "BSIT 3-2",
    collectionTitle: "Foundation Day Contribution",
    amount: 500,
    status: "Paid",
    paymentMethod: "Cash",
    paymentChannel: "Treasurer Recorded",
    paymentDate: "2026-05-20",
    referenceNumber: "CASH-0001",
  },
  {
    id: 2,
    studentName: "John Reyes",
    studentNumber: "2023-0002",
    section: "BSIT 3-2",
    collectionTitle: "Class Fund",
    amount: 100,
    status: "Pending",
    paymentMethod: "PayMongo",
    paymentChannel: "GCash",
    paymentDate: "-",
    referenceNumber: "-",
  },
  {
    id: 3,
    studentName: "Ana Cruz",
    studentNumber: "2023-0003",
    section: "BSIT 3-1",
    collectionTitle: "Organization Shirt",
    amount: 350,
    status: "Overdue",
    paymentMethod: "PayMongo",
    paymentChannel: "Card",
    paymentDate: "-",
    referenceNumber: "-",
  },
];