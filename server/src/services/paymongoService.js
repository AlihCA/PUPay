const axios = require("axios");

const createPayMongoCheckout = async ({ amount, title, description }) => {
  const secretKey = process.env.PAYMONGO_SECRET_KEY;

  if (!secretKey) {
    throw new Error("PAYMONGO_SECRET_KEY is missing in .env");
  }

  const encodedKey = Buffer.from(`${secretKey}:`).toString("base64");

  const response = await axios.post(
    "https://api.paymongo.com/v1/checkout_sessions",
    {
      data: {
        attributes: {
          line_items: [
            {
              name: title || "PUPay Payment",
              description: description || "Student payment",
              amount: Number(amount) * 100,
              currency: "PHP",
              quantity: 1,
            },
          ],
          payment_method_types: ["gcash", "paymaya", "card"],
          success_url: `${process.env.CLIENT_URL}/payment-success`,
          cancel_url: `${process.env.CLIENT_URL}/payment-cancelled`,
        },
      },
    },
    {
      headers: {
        Authorization: `Basic ${encodedKey}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

module.exports = {
  createPayMongoCheckout,
};