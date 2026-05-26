const db = require("../database/db");

const {
  createPayMongoCheckout,
} = require("../services/paymongoService");

// ========================================
// GET ALL PAYMENTS
// ========================================
exports.getPayments = async (req, res) => {
  try {
    const [payments] = await db.query(
      "SELECT * FROM payments ORDER BY created_at DESC"
    );

    res.json({
      success: true,
      data: payments,
    });
  } catch (error) {
    console.error("GET PAYMENTS ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch payments",
      error: error.message,
    });
  }
};

// ========================================
// CREATE PAYMENT
// ========================================
exports.createPayment = async (req, res) => {
  try {
    const {
      collection_id,
      student_id,
      amount,
      payment_method,
    } = req.body;

    // VALIDATION
    if (
      !collection_id ||
      !student_id ||
      !amount ||
      !payment_method
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // INSERT PAYMENT
    const [result] = await db.query(
      `
      INSERT INTO payments
      (
        collection_id,
        student_id,
        amount,
        payment_method,
        status
      )
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        collection_id,
        student_id,
        amount,
        payment_method,
        "pending",
      ]
    );

    res.status(201).json({
      success: true,
      message: "Payment recorded",
      id: result.insertId,
    });
  } catch (error) {
    console.error("CREATE PAYMENT ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create payment",
      error: error.message,
    });
  }
};

// ========================================
// UPDATE PAYMENT STATUS
// ========================================
exports.updatePaymentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required",
      });
    }

    await db.query(
      "UPDATE payments SET status = ? WHERE id = ?",
      [status, id]
    );

    res.json({
      success: true,
      message: "Payment status updated",
    });
  } catch (error) {
    console.error("UPDATE PAYMENT STATUS ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update payment status",
      error: error.message,
    });
  }
};

// ========================================
// PAYMONGO CREATE CHECKOUT
// ========================================
exports.createCheckoutSession = async (req, res) => {
  try {
    console.log("==================================");
    console.log("Creating PayMongo checkout...");
    console.log("Request Body:", req.body);

    const {
      collection_id,
      student_id,
      amount,
      title,
      description,
    } = req.body;

    if (!collection_id || !student_id || !amount) {
      return res.status(400).json({
        success: false,
        message:
          "collection_id, student_id, and amount are required",
      });
    }

    // CREATE PAYMONGO CHECKOUT
    const checkout = await createPayMongoCheckout({
      amount,
      title,
      description,
    });

    const checkoutUrl =
      checkout.data.attributes.checkout_url;

    const referenceNumber = checkout.data.id;

    console.log("PayMongo checkout created successfully");
    console.log("Checkout URL:", checkoutUrl);
    console.log("Reference Number:", referenceNumber);

    // SAVE TO DATABASE
    const [result] = await db.query(
      `
      INSERT INTO payments
      (
        collection_id,
        student_id,
        amount,
        payment_method,
        status,
        reference_number,
        checkout_url
      )
      VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      [
        collection_id,
        student_id,
        amount,
        "paymongo",
        "pending",
        referenceNumber,
        checkoutUrl,
      ]
    );

    console.log("Payment saved to database");
    console.log("Payment ID:", result.insertId);
    console.log("==================================");

    res.status(201).json({
      success: true,
      message:
        "PayMongo checkout session created and saved",
      payment_id: result.insertId,
      checkout_url: checkoutUrl,
      reference_number: referenceNumber,
    });
  } catch (error) {
    console.error(
      "PAYMONGO CHECKOUT ERROR:",
      error.response?.data || error.message
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to create PayMongo checkout session",
      error:
        error.response?.data || error.message,
    });
  }
};

// ========================================
// PAYMONGO WEBHOOK
// ========================================
exports.paymongoWebhook = async (req, res) => {
  try {
    console.log("==================================");
    console.log("Webhook received from PayMongo");
    console.log(JSON.stringify(req.body, null, 2));
    console.log("==================================");

    res.json({
      success: true,
      message: "PayMongo webhook route working",
    });
  } catch (error) {
    console.error("PAYMONGO WEBHOOK ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Webhook failed",
      error: error.message,
    });
  }
};