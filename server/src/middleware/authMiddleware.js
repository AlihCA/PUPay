const { getAuth, clerkClient } = require("../config/clerk");

const protect = async (req, res, next) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Please login first.",
      });
    }

    const clerkUser = await clerkClient.users.getUser(userId);

    const primaryEmail =
      clerkUser.emailAddresses.find(
        (emailAddress) => emailAddress.id === clerkUser.primaryEmailAddressId
      )?.emailAddress || clerkUser.emailAddresses[0]?.emailAddress;

    const clerkRole = clerkUser.publicMetadata?.role || null;

    console.log("====================================");
    console.log("CLERK USER ID:", userId);
    console.log("CLERK EMAIL:", primaryEmail);
    console.log("CLERK PUBLIC METADATA:", clerkUser.publicMetadata);
    console.log("CLERK ROLE:", clerkRole);
    console.log("====================================");

    req.user = {
      id: userId,
      email: primaryEmail,
      clerkRole,
    };

    next();
  } catch (error) {
    console.error("AUTH MIDDLEWARE ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Authentication error",
      error: error.message,
    });
  }
};

module.exports = protect;