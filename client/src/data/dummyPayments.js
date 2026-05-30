// ========================================
// FUTURE API
// GET /api/payments
// GET /api/payments/student/:studentId
// ========================================

export const dummyPayments = [
  {
    id: 1,
    collectionTitle: "Foundation Day Contribution",
    amount: 500,
    dueDate: "2026-05-30",
    paymentMethod: "PayMongo",
    status: "Paid",
    paymentDate: "2026-05-20",
  },

  {
    id: 2,
    collectionTitle: "Class Fund",
    amount: 100,
    dueDate: "2026-06-05",
    paymentMethod: "Cash",
    status: "Pending",
    paymentDate: null,
  },

  {
    id: 3,
    collectionTitle: "Project Fee",
    amount: 300,
    dueDate: "2026-05-15",
    paymentMethod: "PayMongo",
    status: "Overdue",
    paymentDate: null,
  },
];
