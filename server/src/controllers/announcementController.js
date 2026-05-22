let announcements = [];
let currentId = 1;

// CREATE announcement
export const createAnnouncement = (req, res) => {
  try {
    const { title, message, createdBy } = req.body;

    if (!title || !message) {
      return res.status(400).json({
        success: false,
        message: "Title and message are required",
      });
    }

    const newAnnouncement = {
      id: currentId++,
      title,
      message,
      createdBy: createdBy || "admin",
      createdAt: new Date(),
    };

    announcements.push(newAnnouncement);

    return res.status(201).json({
      success: true,
      message: "Announcement created successfully",
      data: newAnnouncement,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// GET all announcements
export const getAllAnnouncements = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Announcements fetched successfully",
    data: announcements,
  });
};

// GET single announcement
export const getAnnouncementById = (req, res) => {
  const { id } = req.params;

  const announcement = announcements.find((a) => a.id == id);

  if (!announcement) {
    return res.status(404).json({
      success: false,
      message: "Announcement not found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Announcement found",
    data: announcement,
  });
};

// UPDATE announcement
export const updateAnnouncement = (req, res) => {
  const { id } = req.params;

  const index = announcements.findIndex((a) => a.id == id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Announcement not found",
    });
  }

  announcements[index] = {
    ...announcements[index],
    ...req.body,
  };

  return res.status(200).json({
    success: true,
    message: "Announcement updated successfully",
    data: announcements[index],
  });
};

// DELETE announcement
export const deleteAnnouncement = (req, res) => {
  const { id } = req.params;

  const index = announcements.findIndex((a) => a.id == id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Announcement not found",
    });
  }

  const deleted = announcements.splice(index, 1);

  return res.status(200).json({
    success: true,
    message: "Announcement deleted successfully",
    data: deleted[0],
  });
};