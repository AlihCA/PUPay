export const isAdmin = (req, res, next) => {
  const role = "admin";

  if (role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Access denied",
    });
  }

  next();
};