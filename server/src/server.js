const collectionRoutes = require("./routes/collectionRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

app.use("/api/collections", collectionRoutes);
app.use("/api/payments", paymentRoutes);