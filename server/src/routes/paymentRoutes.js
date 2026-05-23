const express = require("express");

const router = express.Router();

const {
  getPayments,
  createPayment,
  createCheckoutSession,
  paymongoWebhook,
  updatePaymentStatus,
} = require("../controllers/paymentController");

// ========================================
// GET ALL PAYMENTS
// ========================================
router.get("/", getPayments);

// ========================================
// CREATE PAYMENT
// ========================================
router.post("/", createPayment);

// ========================================
// UPDATE PAYMENT STATUS
// ========================================
router.put("/:id/status", updatePaymentStatus);

// ========================================
// PAYMONGO CREATE CHECKOUT
// ========================================
router.post(
  "/paymongo/create-checkout",
  createCheckoutSession
);

// ========================================
// PAYMONGO WEBHOOK
// ========================================
router.post(
  "/paymongo/webhook",
  paymongoWebhook
);

module.exports = router;