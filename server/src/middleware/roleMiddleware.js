export const isAdmin = (req, res, next) => {
  try {
    // NOTE: req.user comes from CIA auth middleware (Clerk integration)
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Please login first.",
      });
    }

    if (!req.user.role) {
      return res.status(403).json({
        success: false,
        message: "User role not found.",
      });
    }

    if (req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admin only.",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};