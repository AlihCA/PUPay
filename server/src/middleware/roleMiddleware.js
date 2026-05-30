const requireRole = (allowedRoles = []) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Please login first.",
      });
    }

    const role = req.user.role || req.user.clerkRole;

    if (!role) {
      return res.status(403).json({
        success: false,
        message: "Forbidden. No role assigned.",
      });
    }

    if (!allowedRoles.includes(role)) {
      return res.status(403).json({
        success: false,
        message: "Forbidden. You do not have permission to access this resource.",
      });
    }

    next();
  };
};

module.exports = requireRole;